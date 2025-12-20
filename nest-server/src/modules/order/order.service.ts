import { Injectable } from '@nestjs/common';
import { NormalizationService } from 'src/common/normalization';
import { PrismaService } from 'src/common/prisma';
import { CreateOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly normalizationService: NormalizationService,
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

  async create(dto: CreateOrderDto) {
    const items = dto.items.map((item) => ({ id: item.id }));

    const order = await this.prisma.order.create({
      data: {
        userId: dto.userId,
        items: {
          connect: items,
        },
      },
      include: {
        items: true,
      },
    });

    return order;
  }
}
