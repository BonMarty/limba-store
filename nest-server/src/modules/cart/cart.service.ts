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
    await this.prisma.cart.update({
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

    return this.calculateTotalPrice(userId);
  }

  async removeFromCartByUserId(userId: number, dto: AddToCartDto) {
    await this.prisma.cart.update({
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

    return this.calculateTotalPrice(userId);
  }

  async clearCart(userId: number) {
    return this.prisma.$transaction(async (tx) => {
      const cart = await tx.cart.findUnique({
        where: {
          userId,
        },
        include: {
          items: true,
        },
      });

      if (!cart) throw new NotFoundException('Cart not found');

      await tx.cart.update({
        where: {
          userId,
        },
        data: {
          items: {
            disconnect: cart.items.map((item) => ({ id: item.id })),
          },
          totalPrice: 0,
        },
      });

      return true;
    });
  }

  async calculateTotalPrice(userId: number) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId,
      },
      include: {
        items: true,
      },
    });

    if (!cart) throw new NotFoundException('Cart not found');

    const totalPrice = cart.items.reduce(
      (accum, curr) => (accum += Number(curr.price)),
      0,
    );

    return this.prisma.cart.update({
      where: {
        userId,
      },
      data: {
        totalPrice,
      },
    });
  }
}
