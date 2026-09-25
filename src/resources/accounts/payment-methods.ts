// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePaymentMethods extends APIResource {
  static override readonly _key: readonly ['accounts', 'paymentMethods'] = Object.freeze([
    'accounts',
    'paymentMethods',
  ] as const);

  /**
   * Creates a new payment method for an account.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.accounts.paymentMethods.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(
    params: PaymentMethodCreateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/payment-methods`, { body, ...options }) as APIPromise<{
        result: PaymentMethodCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a payment method for an account.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.accounts.paymentMethods.update(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    paymentMethodID: string,
    params: PaymentMethodUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/payment-methods/${paymentMethodID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PaymentMethodUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all payment methods for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const paymentMethodListResponse of client.accounts.paymentMethods.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PaymentMethodListParams,
    options?: RequestOptions,
  ): PagePromise<PaymentMethodListResponsesV4PagePaginationArray, PaymentMethodListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/payment-methods`,
      V4PagePaginationArray<PaymentMethodListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a payment method from an account.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.accounts.paymentMethods.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    paymentMethodID: string,
    params: PaymentMethodDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/payment-methods/${paymentMethodID}`,
        options,
      ) as APIPromise<{ result: PaymentMethodDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a specific payment method for an account.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.accounts.paymentMethods.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    paymentMethodID: string,
    params: PaymentMethodGetParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/payment-methods/${paymentMethodID}`,
        options,
      ) as APIPromise<{ result: PaymentMethodGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets a payment method as the default for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.paymentMethods.setAsDefault(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  setAsDefault(
    paymentMethodID: string,
    params: PaymentMethodSetAsDefaultParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodSetAsDefaultResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/payment-methods/${paymentMethodID}/set-as-default`,
        options,
      ) as APIPromise<{ result: PaymentMethodSetAsDefaultResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class PaymentMethods extends BasePaymentMethods {}

export type PaymentMethodListResponsesV4PagePaginationArray =
  V4PagePaginationArray<PaymentMethodListResponse>;

export interface PaymentMethodCreateResponse {
  /**
   * Payment method identifier.
   */
  id?: string;

  /**
   * Billing address line 1.
   */
  address?: string;

  /**
   * Billing address line 2.
   */
  address2?: string;

  /**
   * Bank account type.
   */
  bank_account_type?: string;

  /**
   * Bank code.
   */
  bank_code?: string;

  /**
   * Bank country.
   */
  bank_country?: string;

  /**
   * Bank name for bank-based payment methods.
   */
  bank_name?: string;

  /**
   * Bank routing number.
   */
  bank_routing_number?: string;

  /**
   * Cash App cash tag.
   */
  cashapp_cash_tag?: string;

  /**
   * Billing city.
   */
  city?: string;

  /**
   * Billing country.
   */
  country?: string;

  /**
   * Whether this is the default payment method.
   */
  default?: boolean;

  /**
   * Card expiration date.
   */
  expiration_date?: string;

  /**
   * Billing first name.
   */
  first_name?: string;

  /**
   * Last four digits of the card number.
   */
  last_four?: string;

  /**
   * Billing last name.
   */
  last_name?: string;

  /**
   * A nickname for the payment method.
   */
  nick_name?: string;

  /**
   * Email associated with the payment account.
   */
  payment_account_email?: string;

  /**
   * Payment email address.
   */
  payment_email?: string;

  /**
   * Billing state.
   */
  state?: string;

  /**
   * The payment method type.
   */
  type?: 'CREDIT_CARD' | 'PAYPAL' | 'CASHAPP' | 'SEPA_DEBIT' | 'LINK' | 'ACH_DIRECT_DEBIT';

  /**
   * Billing zip code.
   */
  zipcode?: string;
}

export interface PaymentMethodUpdateResponse {
  /**
   * Payment method identifier.
   */
  id?: string;

  /**
   * Billing address line 1.
   */
  address?: string;

  /**
   * Billing address line 2.
   */
  address2?: string;

  /**
   * Bank account type.
   */
  bank_account_type?: string;

  /**
   * Bank code.
   */
  bank_code?: string;

  /**
   * Bank country.
   */
  bank_country?: string;

  /**
   * Bank name for bank-based payment methods.
   */
  bank_name?: string;

  /**
   * Bank routing number.
   */
  bank_routing_number?: string;

  /**
   * Cash App cash tag.
   */
  cashapp_cash_tag?: string;

  /**
   * Billing city.
   */
  city?: string;

  /**
   * Billing country.
   */
  country?: string;

  /**
   * Whether this is the default payment method.
   */
  default?: boolean;

  /**
   * Card expiration date.
   */
  expiration_date?: string;

  /**
   * Billing first name.
   */
  first_name?: string;

  /**
   * Last four digits of the card number.
   */
  last_four?: string;

  /**
   * Billing last name.
   */
  last_name?: string;

  /**
   * A nickname for the payment method.
   */
  nick_name?: string;

  /**
   * Email associated with the payment account.
   */
  payment_account_email?: string;

  /**
   * Payment email address.
   */
  payment_email?: string;

  /**
   * Billing state.
   */
  state?: string;

  /**
   * The payment method type.
   */
  type?: 'CREDIT_CARD' | 'PAYPAL' | 'CASHAPP' | 'SEPA_DEBIT' | 'LINK' | 'ACH_DIRECT_DEBIT';

  /**
   * Billing zip code.
   */
  zipcode?: string;
}

export interface PaymentMethodListResponse {
  /**
   * Payment method identifier.
   */
  id?: string;

  /**
   * Billing address line 1.
   */
  address?: string;

  /**
   * Billing address line 2.
   */
  address2?: string;

  /**
   * Bank account type.
   */
  bank_account_type?: string;

  /**
   * Bank code.
   */
  bank_code?: string;

  /**
   * Bank country.
   */
  bank_country?: string;

  /**
   * Bank name for bank-based payment methods.
   */
  bank_name?: string;

  /**
   * Bank routing number.
   */
  bank_routing_number?: string;

  /**
   * Cash App cash tag.
   */
  cashapp_cash_tag?: string;

  /**
   * Billing city.
   */
  city?: string;

  /**
   * Billing country.
   */
  country?: string;

  /**
   * Whether this is the default payment method.
   */
  default?: boolean;

  /**
   * Card expiration date.
   */
  expiration_date?: string;

  /**
   * Billing first name.
   */
  first_name?: string;

  /**
   * Last four digits of the card number.
   */
  last_four?: string;

  /**
   * Billing last name.
   */
  last_name?: string;

  /**
   * A nickname for the payment method.
   */
  nick_name?: string;

  /**
   * Email associated with the payment account.
   */
  payment_account_email?: string;

  /**
   * Payment email address.
   */
  payment_email?: string;

  /**
   * Billing state.
   */
  state?: string;

  /**
   * The payment method type.
   */
  type?: 'CREDIT_CARD' | 'PAYPAL' | 'CASHAPP' | 'SEPA_DEBIT' | 'LINK' | 'ACH_DIRECT_DEBIT';

  /**
   * Billing zip code.
   */
  zipcode?: string;
}

export type PaymentMethodDeleteResponse = unknown | string | null;

export interface PaymentMethodGetResponse {
  /**
   * Payment method identifier.
   */
  id?: string;

  /**
   * Billing address line 1.
   */
  address?: string;

  /**
   * Billing address line 2.
   */
  address2?: string;

  /**
   * Bank account type.
   */
  bank_account_type?: string;

  /**
   * Bank code.
   */
  bank_code?: string;

  /**
   * Bank country.
   */
  bank_country?: string;

  /**
   * Bank name for bank-based payment methods.
   */
  bank_name?: string;

  /**
   * Bank routing number.
   */
  bank_routing_number?: string;

  /**
   * Cash App cash tag.
   */
  cashapp_cash_tag?: string;

  /**
   * Billing city.
   */
  city?: string;

  /**
   * Billing country.
   */
  country?: string;

  /**
   * Whether this is the default payment method.
   */
  default?: boolean;

  /**
   * Card expiration date.
   */
  expiration_date?: string;

  /**
   * Billing first name.
   */
  first_name?: string;

  /**
   * Last four digits of the card number.
   */
  last_four?: string;

  /**
   * Billing last name.
   */
  last_name?: string;

  /**
   * A nickname for the payment method.
   */
  nick_name?: string;

  /**
   * Email associated with the payment account.
   */
  payment_account_email?: string;

  /**
   * Payment email address.
   */
  payment_email?: string;

  /**
   * Billing state.
   */
  state?: string;

  /**
   * The payment method type.
   */
  type?: 'CREDIT_CARD' | 'PAYPAL' | 'CASHAPP' | 'SEPA_DEBIT' | 'LINK' | 'ACH_DIRECT_DEBIT';

  /**
   * Billing zip code.
   */
  zipcode?: string;
}

export type PaymentMethodSetAsDefaultResponse = unknown | string | null;

export interface PaymentMethodCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Billing address line 1.
   */
  address?: string;

  /**
   * Body param: Billing address line 2.
   */
  address2?: string;

  /**
   * Body param: Bank account type.
   */
  bank_account_type?: string;

  /**
   * Body param: Bank code.
   */
  bank_code?: string;

  /**
   * Body param: Bank country.
   */
  bank_country?: string;

  /**
   * Body param: Bank name for bank-based payment methods.
   */
  bank_name?: string;

  /**
   * Body param: Bank routing number.
   */
  bank_routing_number?: string;

  /**
   * Body param: Cash App cash tag.
   */
  cashapp_cash_tag?: string;

  /**
   * Body param: Billing city.
   */
  city?: string;

  /**
   * Body param: Billing country.
   */
  country?: string;

  /**
   * Body param: Whether this is the default payment method.
   */
  default?: boolean;

  /**
   * Body param: Device data for fraud prevention.
   */
  device_data?: string;

  /**
   * Body param: Billing first name.
   */
  first_name?: string;

  /**
   * Body param: Billing last name.
   */
  last_name?: string;

  /**
   * Body param: A nickname for the payment method.
   */
  nick_name?: string;

  /**
   * Body param: Email associated with the payment account.
   */
  payment_account_email?: string;

  /**
   * Body param: Payment email address.
   */
  payment_email?: string;

  /**
   * Body param: The payment gateway used.
   */
  payment_gateway?: string;

  /**
   * Body param: Payment nonce for tokenized payments.
   */
  payment_nonce?: string;

  /**
   * Body param: Billing state.
   */
  state?: string;

  /**
   * Body param: The payment method type.
   */
  type?: 'CREDIT_CARD' | 'PAYPAL' | 'CASHAPP' | 'SEPA_DEBIT' | 'LINK' | 'ACH_DIRECT_DEBIT';

  /**
   * Body param: Billing zip code.
   */
  zipcode?: string;
}

export interface PaymentMethodUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Billing address line 1.
   */
  address?: string;

  /**
   * Body param: Billing address line 2.
   */
  address2?: string;

  /**
   * Body param: Bank account type.
   */
  bank_account_type?: string;

  /**
   * Body param: Bank code.
   */
  bank_code?: string;

  /**
   * Body param: Bank country.
   */
  bank_country?: string;

  /**
   * Body param: Bank name for bank-based payment methods.
   */
  bank_name?: string;

  /**
   * Body param: Bank routing number.
   */
  bank_routing_number?: string;

  /**
   * Body param: Cash App cash tag.
   */
  cashapp_cash_tag?: string;

  /**
   * Body param: Billing city.
   */
  city?: string;

  /**
   * Body param: Billing country.
   */
  country?: string;

  /**
   * Body param: Whether this is the default payment method.
   */
  default?: boolean;

  /**
   * Body param: Device data for fraud prevention.
   */
  device_data?: string;

  /**
   * Body param: Billing first name.
   */
  first_name?: string;

  /**
   * Body param: Billing last name.
   */
  last_name?: string;

  /**
   * Body param: A nickname for the payment method.
   */
  nick_name?: string;

  /**
   * Body param: Email associated with the payment account.
   */
  payment_account_email?: string;

  /**
   * Body param: Payment email address.
   */
  payment_email?: string;

  /**
   * Body param: The payment gateway used.
   */
  payment_gateway?: string;

  /**
   * Body param: Payment nonce for tokenized payments.
   */
  payment_nonce?: string;

  /**
   * Body param: Billing state.
   */
  state?: string;

  /**
   * Body param: The payment method type.
   */
  type?: 'CREDIT_CARD' | 'PAYPAL' | 'CASHAPP' | 'SEPA_DEBIT' | 'LINK' | 'ACH_DIRECT_DEBIT';

  /**
   * Body param: Billing zip code.
   */
  zipcode?: string;
}

export interface PaymentMethodListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;
}

export interface PaymentMethodDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PaymentMethodGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PaymentMethodSetAsDefaultParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodUpdateResponse as PaymentMethodUpdateResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodDeleteResponse as PaymentMethodDeleteResponse,
    type PaymentMethodGetResponse as PaymentMethodGetResponse,
    type PaymentMethodSetAsDefaultResponse as PaymentMethodSetAsDefaultResponse,
    type PaymentMethodListResponsesV4PagePaginationArray as PaymentMethodListResponsesV4PagePaginationArray,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
    type PaymentMethodListParams as PaymentMethodListParams,
    type PaymentMethodDeleteParams as PaymentMethodDeleteParams,
    type PaymentMethodGetParams as PaymentMethodGetParams,
    type PaymentMethodSetAsDefaultParams as PaymentMethodSetAsDefaultParams,
  };
}
