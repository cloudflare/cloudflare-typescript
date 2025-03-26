// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Stats extends APIResource {
  /**
   * Fetch usage statistics details for Cloudflare Images.
   */
  get(params: StatGetParams, options?: RequestOptions): APIPromise<Stat> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/images/v1/stats`, options) as APIPromise<{ result: Stat }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
  account_id: string;
}

export declare namespace Stats {
  export { type Stat as Stat, type StatGetParams as StatGetParams };
}
