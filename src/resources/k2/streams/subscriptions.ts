// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSubscriptions extends APIResource {
  static override readonly _key: readonly ['k2', 'streams', 'subscriptions'] = Object.freeze([
    'k2',
    'streams',
    'subscriptions',
  ] as const);

  /**
   * Lists every subscription on one stream, oldest first. Lag uses committed
   * positions, not reserved read positions. A failed tail observation preserves
   * subscription metadata and returns unavailable lag.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subscriptionListResponse of client.k2.streams.subscriptions.list(
   *   '053e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    streamID: string,
    params: SubscriptionListParams,
    options?: RequestOptions,
  ): PagePromise<SubscriptionListResponsesSinglePage, SubscriptionListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/k2/streams/${streamID}/subscriptions`,
      SinglePage<SubscriptionListResponse>,
      options,
    );
  }
}
export class Subscriptions extends BaseSubscriptions {}

export type SubscriptionListResponsesSinglePage = SinglePage<SubscriptionListResponse>;

export interface SubscriptionListResponse {
  id: string;

  created_at: string;

  lag: SubscriptionListResponse.Lag;

  modified_at: string;

  name: string;

  start_at: SubscriptionListResponse.StartAt;
}

export namespace SubscriptionListResponse {
  export interface Lag {
    /**
     * Decimal-string distance from the subscription's committed position to the
     * observed exclusive stream tail, in records. Includes in-flight records and may
     * include expired records or records acknowledged beyond an earlier gap. Null
     * unless status is available.
     */
    records: string | null;

    /**
     * Unsupported means the subscription or stream topology cannot be measured;
     * unavailable means a required observation failed or was inconsistent.
     */
    status: 'available' | 'unsupported' | 'unavailable';
  }

  export interface StartAt {
    type: 'earliest' | 'latest';
  }
}

export interface SubscriptionListParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionListResponsesSinglePage as SubscriptionListResponsesSinglePage,
    type SubscriptionListParams as SubscriptionListParams,
  };
}
