import { Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('prisma')
export class PrismaController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('reset')
  reset() {
    return this.prisma.reset();
  }
}
