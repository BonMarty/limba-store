import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  private readonly JWT_ACCESS_TOKEN_TTL: number;
  private readonly JWT_REFRESH_TOKEN_TTL: number;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtSerivce: JwtService,
  ) {
    this.JWT_ACCESS_TOKEN_TTL = this.configService.getOrThrow<number>(
      'JWT_ACCESS_TOKEN_TTL',
    );
    this.JWT_REFRESH_TOKEN_TTL = this.configService.getOrThrow<number>(
      'JWT_REFRESH_TOKEN_TTL',
    );
  }

  async register(dto: RegisterDto) {
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

    return this.generateTokens(user.id);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    const isPasswordEqual = await compare(dto.password, user.password);

    if (!isPasswordEqual) throw new NotFoundException('User not found');

    return this.generateTokens(user.id);
  }

  private generateTokens(id: number) {
    const payload: Pick<User, 'id'> = { id };

    const accessToken = this.jwtSerivce.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtSerivce.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return { accessToken, refreshToken };
  }
}
