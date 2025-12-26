import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });

    return user;
  }
}
