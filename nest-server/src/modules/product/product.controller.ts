import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ProductResponseDto } from './dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll() {
    const products = (await this.productService.findAll()).map((product) => ({
      ...product,
      price: Number(product.price),
      rate: Number(product.rate),
    }));

    return products.map((product) =>
      plainToInstance(ProductResponseDto, product),
    );
  }

  @Post('create-many')
  createMany() {
    return this.productService.createMany();
  }
}
