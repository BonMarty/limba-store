import { Body, Controller, Get, Post } from '@nestjs/common';
import { Authorization, Authorized } from 'src/common/decorators';
import { CreateOrderDto } from './dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Authorization()
  @Get('my')
  findAllByUserId(@Authorized('id') userId: number) {
    return this.orderService.findAllByUserId(userId);
  }

  @Authorization()
  @Post('create')
  create(@Authorized('id') userId: number, @Body() dto: CreateOrderDto) {
    return this.orderService.create(userId, dto);
  }
}
