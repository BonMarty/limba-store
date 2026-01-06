import { Body, Controller, Get, Post } from '@nestjs/common';
import { Authorization, Authorized } from 'src/common/decorators';
import { CartService } from './cart.service';
import { AddToCartDto, RemoveFromCartDto } from './dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Authorization()
  @Get('my')
  findCartByUserId(@Authorized('id') userId: number) {
    return this.cartService.findCartByUserId(userId);
  }

  @Authorization()
  @Post('add-to-cart')
  addToCartByUserId(
    @Authorized('id') userId: number,
    @Body() dto: AddToCartDto,
  ) {
    return this.cartService.addToCartByUserId(userId, dto);
  }

  @Authorization()
  @Post('remove-from-cart')
  removeFromCartByUserId(
    @Authorized('id') userId: number,
    @Body() dto: RemoveFromCartDto,
  ) {
    return this.cartService.removeFromCartByUserId(userId, dto);
  }

  @Authorization()
  @Post('clear-cart')
  clearCartByUserId(@Authorized('id') userId: number) {
    return this.cartService.clearCart(userId);
  }
}
