import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: FastifyRequest): string {
    console.log(req);
    return this.appService.getHello();
  }
}
