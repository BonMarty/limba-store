import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaService } from 'src/common/prisma';
import type { JwtPayload } from 'src/shared/types';
import { isDev } from 'src/shared/utils';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  private readonly JWT_ACCESS_TOKEN_TTL: number;
  private readonly JWT_REFRESH_TOKEN_TTL: number;
  private readonly COOKIE_DOMAIN: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtSerivce: JwtService,
  ) {
    this.JWT_ACCESS_TOKEN_TTL = Number(
      this.configService.getOrThrow<string>('JWT_ACCESS_TOKEN_TTL'),
    );
    this.JWT_REFRESH_TOKEN_TTL = Number(
      this.configService.getOrThrow<string>('JWT_REFRESH_TOKEN_TTL'),
    );
    this.COOKIE_DOMAIN = this.configService.getOrThrow<string>('COOKIE_DOMAIN');
  }

  async register(res: FastifyReply, dto: RegisterDto) {
    const existedUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existedUser)
      throw new ConflictException('User with this email is already exists');

    const user = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    return this.auth(res, user.id);
  }

  async login(res: FastifyReply, dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    const isPasswordEqual = await compare(dto.password, user.password);

    if (!isPasswordEqual) throw new NotFoundException('User not found');

    return this.auth(res, user.id);
  }

  logout(res: FastifyReply) {
    this.setCookie(res, 'refreshToken', new Date(0));

    return true;
  }

  async validate(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async refresh(req: FastifyRequest, res: FastifyReply) {
    const refreshToken: string | null = req.cookies['refreshToken'] ?? null;

    if (!refreshToken) throw new UnauthorizedException('Invalid refresh token');

    const payload: JwtPayload = await this.jwtSerivce.verifyAsync(refreshToken);

    if (!payload)
      throw new UnauthorizedException('Invalid or expired refresh token');

    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return this.auth(res, user.id);
  }

  private auth(res: FastifyReply, id: number) {
    const { accessToken, refreshToken } = this.generateTokens(id);

    const expires = new Date(Date.now() + this.JWT_REFRESH_TOKEN_TTL * 1000);

    this.setCookie(res, refreshToken, expires);

    return { accessToken };
  }

  private generateTokens(id: number) {
    const payload: JwtPayload = { id };

    const accessToken = this.jwtSerivce.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtSerivce.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return { accessToken, refreshToken };
  }

  private setCookie(res: FastifyReply, value: string, expires: Date) {
    res.cookie('refreshToken', value, {
      httpOnly: true,
      expires,
      secure: true,
      sameSite: isDev(this.configService) ? 'none' : 'lax',
      partitioned: true,
    });
  }
}
