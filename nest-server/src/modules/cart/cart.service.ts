import { Injectable, NotFoundException } from '@nestjs/common';
import { NormalizationService } from 'src/common/normalization';
import { PrismaService } from 'src/common/prisma';
import { AddToCartDto } from './dto';

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly normalizationService: NormalizationService,
  ) {}

  async findCartByUserId(userId: number) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId,
      },
      include: {
        items: true,
      },
    });

    if (!cart) throw new NotFoundException('Cart not found');

    return this.normalizationService.normalizeCart(cart);
  }

  async addToCartByUserId(userId: number, dto: AddToCartDto) {
    return await this.prisma.cart.update({
      where: {
        userId,
      },
      data: {
        items: {
          connect: {
            id: dto.item.id,
          },
        },
      },
      include: {
        items: true,
      },
    });
  }

  async removeFromCartByUserId(userId: number, dto: AddToCartDto) {
    return await this.prisma.cart.update({
      where: {
        userId,
      },
      data: {
        items: {
          disconnect: {
            id: dto.item.id,
          },
        },
      },
      include: {
        items: true,
      },
    });
  }
}
