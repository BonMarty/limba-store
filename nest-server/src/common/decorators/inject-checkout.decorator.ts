import { Inject } from '@nestjs/common';
import { PAYMENT_INSTANCE } from 'src/modules/payment/constants';

export const InjectCheckout = () => Inject(PAYMENT_INSTANCE);
