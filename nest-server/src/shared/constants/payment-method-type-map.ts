import type { IPaymentMethodType } from '@a2seven/yoo-checkout';

export const paymentMethodTypeMap: { [T in IPaymentMethodType]: T } = {
  alfabank: 'alfabank',
  apple_pay: 'apple_pay',
  b2b_sberbank: 'b2b_sberbank',
  bank_card: 'bank_card',
  cash: 'cash',
  google_pay: 'google_pay',
  installments: 'installments',
  mobile_balance: 'mobile_balance',
  qiwi: 'qiwi',
  sberbank: 'sberbank',
  sbp: 'sbp',
  tinkoff_bank: 'tinkoff_bank',
  webmoney: 'webmoney',
  yoo_money: 'yoo_money',
};
