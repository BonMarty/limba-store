import type { ICreatePayment, IPaymentMethodType } from '@a2seven/yoo-checkout';
import { IsIn, IsNotEmpty, IsString, Matches } from 'class-validator';
import { paymentMethodTypeMap } from 'src/shared/constants';

type BasePayment = ICreatePayment['amount'] &
  ICreatePayment['payment_method_data'];

export class CreatePaymentDto implements Partial<BasePayment> {
  @IsString({ message: 'Value should be string' })
  @Matches(/^\d+(\.\d{2})?$/, {
    message: 'Value must have 2 decimal places',
  })
  @IsNotEmpty({ message: 'Value is required' })
  value: string;

  @IsString({ message: 'Type should be string' })
  @IsIn(Object.keys(paymentMethodTypeMap), {
    message: 'Type should be one of allowed payment method types',
  })
  @IsNotEmpty({ message: 'Type is required' })
  type: IPaymentMethodType;
}
