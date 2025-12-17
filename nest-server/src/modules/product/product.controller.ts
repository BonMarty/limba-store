import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.productService.findAll();
  }

  @Post('reset')
  reset() {
    return this.productService.reset();
  }

  @Post('create-many')
  createMany() {
    return this.productService.createMany();
  }
}
