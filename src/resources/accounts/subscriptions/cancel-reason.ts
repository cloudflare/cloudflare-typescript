// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCancelReason extends APIResource {
  static override readonly _key: readonly ['accounts', 'subscriptions', 'cancelReason'] = Object.freeze([
    'accounts',
    'subscriptions',
    'cancelReason',
  ] as const);

  /**
   * Records a cancellation reason for an account subscription.
   *
   * @example
   * ```ts
   * const cancelReason =
   *   await client.accounts.subscriptions.cancelReason.create(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    subscriptionIdentifier: string,
    params: CancelReasonCreateParams,
    options?: RequestOptions,
  ): APIPromise<CancelReasonCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}/cancel-reason`, {
        body,
        ...options,
      }) as APIPromise<{ result: CancelReasonCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the cancellation reason for an account subscription.
   *
   * @example
   * ```ts
   * const cancelReason =
   *   await client.accounts.subscriptions.cancelReason.get(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    subscriptionIdentifier: string,
    params: CancelReasonGetParams,
    options?: RequestOptions,
  ): APIPromise<CancelReasonGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}/cancel-reason`,
        options,
      ) as APIPromise<{ result: CancelReasonGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class CancelReason extends BaseCancelReason {}

export interface CancelReasonCreateResponse {
  /**
   * The cancel reason identifier.
   */
  id?: string;

  /**
   * Additional cancellation details.
   */
  other?: string;

  /**
   * The cancellation reason codes.
   */
  reason_code?: Array<string>;

  /**
   * When the cancel reason was submitted.
   */
  submitted?: string;

  /**
   * The subscription identifier.
   */
  subscription_id?: string;
}

export interface CancelReasonGetResponse {
  /**
   * The cancel reason identifier.
   */
  id?: string;

  /**
   * Additional cancellation details.
   */
  other?: string;

  /**
   * The cancellation reason codes.
   */
  reason_code?: Array<string>;

  /**
   * When the cancel reason was submitted.
   */
  submitted?: string;

  /**
   * The subscription identifier.
   */
  subscription_id?: string;
}

export interface CancelReasonCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Additional cancellation details.
   */
  other?: string;

  /**
   * Body param: The cancellation reason codes.
   */
  reason_code?: Array<string>;
}

export interface CancelReasonGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace CancelReason {
  export {
    type CancelReasonCreateResponse as CancelReasonCreateResponse,
    type CancelReasonGetResponse as CancelReasonGetResponse,
    type CancelReasonCreateParams as CancelReasonCreateParams,
    type CancelReasonGetParams as CancelReasonGetParams,
  };
}
