import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { FastifyReply, FastifyRequest } from 'fastify';
import type { User } from 'generated/prisma';
import { Authorization, Authorized } from 'src/common/decorators';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Res({ passthrough: true }) res: FastifyReply,
    @Body() dto: RegisterDto,
  ) {
    return this.authService.register(res, dto);
  }

  @Post('login')
  login(@Res({ passthrough: true }) res: FastifyReply, @Body() dto: LoginDto) {
    return this.authService.login(res, dto);
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: FastifyReply) {
    return this.authService.logout(res);
  }

  @Post('refresh')
  refresh(
    @Req() req: FastifyRequest,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.authService.refresh(req, res);
  }

  @Authorization()
  @Get('@me')
  me(@Authorized() user: User) {
    return user;
  }
}
