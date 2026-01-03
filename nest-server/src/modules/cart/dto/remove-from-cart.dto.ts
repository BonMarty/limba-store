import { IsNotEmpty } from 'class-validator';
import type { Product } from 'src/shared/types';

export class RemoveFromCartDto {
  @IsNotEmpty({ message: 'Product is required' })
  item: Product;
}
