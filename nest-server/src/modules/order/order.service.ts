import { Injectable } from '@nestjs/common';
import { NormalizationService } from 'src/common/normalization';
import { PrismaService } from 'src/common/prisma';
import { CartService } from '../cart/cart.service';
import { CreateOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly normalizationService: NormalizationService,
    private readonly cartService: CartService,
  ) {}

  async findAll() {
    const orders = await this.prisma.order.findMany({
      include: {
        items: true,
      },
    });

    return orders.map((order) =>
      this.normalizationService.normalizeOrder(order),
    );
  }

  async findAllByUserId(userId: number) {
    const orders = await this.prisma.order.findMany({
      where: { userId },
      include: {
        items: true,
      },
    });

    return orders.map((order) =>
      this.normalizationService.normalizeOrder(order),
    );
  }

  async create(userId: number, dto: CreateOrderDto) {
    const items = dto.items.map((item) => ({ id: item.id }));

    const order = await this.prisma.order.create({
      data: {
        userId,
        items: {
          connect: items,
        },
      },
      include: {
        items: true,
      },
    });

    await this.cartService.clearCart(userId);

    return order;
  }
}
