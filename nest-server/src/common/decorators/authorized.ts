import {
  createParamDecorator,
  UnauthorizedException,
  type ExecutionContext,
} from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import type { User } from 'generated/prisma';

export const Authorized = createParamDecorator(
  (data: keyof User, context: ExecutionContext) => {
    const request: FastifyRequest = context.switchToHttp().getRequest();

    const user = request.user;

    if (!user) throw new UnauthorizedException('User not found');

    return data ? user[data] : user;
  },
);
