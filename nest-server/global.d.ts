import type { User } from 'generated/prisma';

declare module 'fastify' {
  interface FastifyRequest {
    user?: User;
  }
}
