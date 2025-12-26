import { Body, Controller, Get, Post } from '@nestjs/common';
import { Authorization } from 'src/common/decorators';
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
  @Post('create')
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }
}
