import { YooCheckout } from '@a2seven/yoo-checkout';
import { ConfigService } from '@nestjs/config';

export function getPaymentConfig(configService: ConfigService): YooCheckout {
  const checkout = new YooCheckout({
    secretKey: configService.getOrThrow<string>('YOOKASSA_API_KEY'),
    shopId: configService.getOrThrow<string>('YOOKASSA_SHOP_ID'),
  });

  return checkout;
}
