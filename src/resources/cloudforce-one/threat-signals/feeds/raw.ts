// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRaw extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'feeds', 'raw'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'feeds',
    'raw',
  ] as const);

  /**
   * Retrieves the feed document fetched by the most recent poll.
   *
   * @example
   * ```ts
   * const raw =
   *   await client.cloudforceOne.threatSignals.feeds.raw.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(feedID: string, params: RawGetParams, options?: RequestOptions): APIPromise<string> {
    const { account_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds/${feedID}/raw`,
      { query, ...options, headers: buildHeaders([{ Accept: 'application/xml' }, options?.headers]) },
    );
  }
}
export class Raw extends BaseRaw {}

export type RawGetResponse = string;

export interface RawGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  format?: 'xml';
}

export declare namespace Raw {
  export { type RawGetResponse as RawGetResponse, type RawGetParams as RawGetParams };
}
