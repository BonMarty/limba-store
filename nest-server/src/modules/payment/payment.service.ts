import type { YooCheckout } from '@a2seven/yoo-checkout';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { InjectCheckout } from 'src/common/decorators';
import type { CreatePaymentDto } from './dto';

@Injectable()
export class PaymentService {
  constructor(@InjectCheckout() private readonly checkout: YooCheckout) {}

  async createPayment(dto: CreatePaymentDto) {
    try {
      const payment = await this.checkout.createPayment(
        {
          amount: {
            value: dto.value,
            currency: 'RUB',
          },
          payment_method_data: {
            type: dto.type,
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'https://test.ru',
          },
          description: 'Тестовая оплата',
        },
        randomUUID(),
      );
      console.log(payment);
      return payment;
    } catch (error: unknown) {
      console.error(error);
    }
  }
}
