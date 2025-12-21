import { User } from 'generated/prisma';

export type JwtPayload = Pick<User, 'id'>;
