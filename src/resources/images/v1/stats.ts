// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseStats extends APIResource {
  static override readonly _key: readonly ['images', 'v1', 'stats'] = Object.freeze([
    'images',
    'v1',
    'stats',
  ] as const);

  /**
   * Fetch image statistics details for Cloudflare Images. The returned statistics
   * detail storage usage, including the current image count vs this account's
   * allowance.
   *
   * @example
   * ```ts
   * const stat = await client.images.v1.stats.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: StatGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Stat> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/images/v1/stats`, options) as APIPromise<{ result: Stat }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Stats extends BaseStats {}

export interface Stat {
  count?: Stat.Count;
}

export namespace Stat {
  export interface Count {
    /**
     * Cloudflare Images allowed usage.
     */
    allowed?: number;

    /**
     * Cloudflare Images current usage.
     */
    current?: number;
  }
}

export interface StatGetParams {
  /**
   * Account identifier tag.
   */
  account_id?: string;
}

export declare namespace Stats {
  export { type Stat as Stat, type StatGetParams as StatGetParams };
}
