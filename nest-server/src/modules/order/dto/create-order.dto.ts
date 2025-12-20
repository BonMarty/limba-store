import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { Product } from 'src/shared/types';

export class CreateOrderDto {
  @IsNumber(undefined, { message: 'User id must be number' })
  @IsNotEmpty({ message: 'User id is required' })
  userId: number;

  @IsArray({ message: 'Order items should be array' })
  @IsNotEmpty({ message: 'Order items are required' })
  items: Product[];
}
