import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { FindAllQueryDto, ProductResponseDto } from './dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @ApiOperation({ summary: 'Get list of products' })
  @ApiOkResponse({
    description: 'Return list of products',
    type: ProductResponseDto,
    isArray: true,
  })
  async findAll(@Query() query: FindAllQueryDto) {
    return await this.productService.findAll(query);
  }

  @Post('create-many')
  createMany() {
    return this.productService.createMany();
  }
}
