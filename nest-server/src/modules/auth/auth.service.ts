import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma';
import { RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const existedUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existedUser) {
      throw new ConflictException('User with this email is already exists');
    }

    const user = await this.prisma.user.create({
      data: dto,
    });

    return user;
  }
}
