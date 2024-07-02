// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as StatsAPI from './stats';

export class Stats extends APIResource {
  /**
   * Fetch usage statistics details for Cloudflare Images.
   */
  get(params: StatGetParams, options?: Core.RequestOptions): Core.APIPromise<Stat> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/stats`, options) as Core.APIPromise<{
        result: Stat;
      }>
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

export namespace Stats {
  export import Stat = StatsAPI.Stat;
  export import StatGetParams = StatsAPI.StatGetParams;
}
