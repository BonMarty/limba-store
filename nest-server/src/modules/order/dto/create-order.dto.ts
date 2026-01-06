import { IsArray, IsNotEmpty } from 'class-validator';
import { Product } from 'src/shared/types';

export class CreateOrderDto {
  @IsArray({ message: 'Order items should be array' })
  @IsNotEmpty({ message: 'Order items are required' })
  items: Product[];
}
