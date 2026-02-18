import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class RatingDto {
  @ApiProperty({ example: 3.4, description: 'Rate of product' })
  rate: number;

  @ApiProperty({ example: 100, description: 'Amount of product' })
  count: number;
}

export class ProductResponseDto {
  @ApiProperty({ example: 1, description: 'Id of product' })
  id: number;

  @ApiProperty({
    example: "Men's cotton jacket",
    description: 'Title of product',
  })
  title: string;

  @ApiProperty({
    example: 999.99,
    description: 'Price of product',
  })
  price: number;

  @ApiProperty({
    example: 'Some fancy product description here',
    description: 'Description of product',
  })
  description: string;

  @ApiProperty({
    example: 'jewelery',
    description: 'Product category',
  })
  category: string;

  @ApiProperty({
    example: 'https://limbastore.com/image/10',
    description: 'Product image url',
  })
  image: string;

  @Type(() => RatingDto)
  @ApiProperty({ type: () => RatingDto })
  rating: RatingDto;

  @ApiProperty({
    example: '12.12.12T12:12:12Z',
    description: 'Product created at date',
  })
  createdAt: Date;

  @ApiProperty({
    example: '12.12.12T12:12:12Z',
    description: 'Product updated at date',
  })
  updatedAt: Date;
}
