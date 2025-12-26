import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards';

export const Authorization = () => applyDecorators(UseGuards(JwtGuard));
