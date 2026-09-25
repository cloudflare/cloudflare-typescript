// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePaymentMethod extends APIResource {
  static override readonly _key: readonly ['billing', 'profiles', 'paymentMethod'] = Object.freeze([
    'billing',
    'profiles',
    'paymentMethod',
  ] as const);

  /**
   * Creates a Stripe payment intent for adding or updating a payment method on the
   * account's billing profile. Returns a client secret for frontend payment method
   * collection.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.billing.profiles.paymentMethod.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(
    params: PaymentMethodCreateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/billing/profile/payment-method`, options) as APIPromise<{
        result: PaymentMethodCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class PaymentMethod extends BasePaymentMethod {}

export interface PaymentMethodCreateResponse {
  /**
   * The Stripe client secret for frontend payment method collection.
   */
  client_secret?: string;

  /**
   * The type of Stripe intent created.
   */
  intent_type?: string;
}

export interface PaymentMethodCreateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace PaymentMethod {
  export {
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
  };
}
