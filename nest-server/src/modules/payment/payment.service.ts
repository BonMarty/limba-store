import type { ICreatePayment, YooCheckout } from '@a2seven/yoo-checkout';
import { Injectable } from '@nestjs/common';
import { InjectCheckout } from 'src/common/decorators';

const createPayload: ICreatePayment = {
  amount: {
    value: '2.00',
    currency: 'RUB',
  },
  payment_method_data: {
    type: 'bank_card',
  },
  confirmation: {
    type: 'redirect',
    return_url: 'test',
  },
};

@Injectable()
export class PaymentService {
  constructor(@InjectCheckout() private readonly checkout: YooCheckout) {}

  async createPayment() {
    const payment = await this.checkout.createPayment(createPayload);
    console.log(payment);
    return payment;
  }
}
