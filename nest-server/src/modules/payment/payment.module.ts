import { type IYooCheckoutOptions } from '@a2seven/yoo-checkout';
import { DynamicModule, Module } from '@nestjs/common';
import { PAYMENT_INSTANCE } from './constants';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

export interface PaymentModuleOptions {
  imports?: any[];
  useFactory: (
    ...args: any[]
  ) => Promise<IYooCheckoutOptions> | IYooCheckoutOptions;
  inject?: any[];
}

@Module({})
export class PaymentModule {
  static forRootAsync(options: PaymentModuleOptions): DynamicModule {
    return {
      module: PaymentModule,
      imports: options.imports ?? [],
      controllers: [PaymentController],
      providers: [
        {
          provide: PAYMENT_INSTANCE,
          useFactory: options.useFactory,
          inject: options.inject ?? [],
        },
        PaymentService,
      ],
      exports: [
        {
          provide: PAYMENT_INSTANCE,
          useExisting: PAYMENT_INSTANCE,
        },
        PaymentService,
      ],
    };
  }
}
