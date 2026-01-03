import { IsNotEmpty } from 'class-validator';
import type { Product } from 'src/shared/types';

export class AddToCartDto {
  @IsNotEmpty({ message: 'Product is required' })
  item: Product;
}
