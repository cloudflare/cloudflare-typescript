// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseBulk extends APIResource {
  static override readonly _key: readonly ['accounts', 'subscriptions', 'bulk'] = Object.freeze([
    'accounts',
    'subscriptions',
    'bulk',
  ] as const);

  /**
   * Creates multiple subscriptions for an account in a single request.
   *
   * @example
   * ```ts
   * const bulks =
   *   await client.accounts.subscriptions.bulk.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(params: BulkCreateParams, options?: RequestOptions): APIPromise<BulkCreateResponse | null> {
    const { account_id, idemp_key, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/bulk/subscriptions`, {
        query: { idemp_key },
        body,
        ...options,
      }) as APIPromise<{ result: BulkCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Bulk extends BaseBulk {}

export type BulkCreateResponse = Array<unknown>;

export interface BulkCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param
   */
  idemp_key?: string;

  /**
   * Body param
   */
  coupon_code?: string;

  /**
   * Body param
   */
  payment_hold_id?: number;

  /**
   * Body param
   */
  subscriptions?: Array<Shared.SubscriptionParam>;

  /**
   * Body param
   */
  user_is_on_session?: boolean;
}

export declare namespace Bulk {
  export { type BulkCreateResponse as BulkCreateResponse, type BulkCreateParams as BulkCreateParams };
}
