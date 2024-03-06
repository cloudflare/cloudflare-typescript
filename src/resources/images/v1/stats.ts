// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatsAPI from 'cloudflare/resources/images/v1/stats';

export class Stats extends APIResource {
  /**
   * Fetch usage statistics details for Cloudflare Images.
   */
  get(params: StatGetParams, options?: Core.RequestOptions): Core.APIPromise<StatGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/stats`, options) as Core.APIPromise<{
        result: StatGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatGetResponse {
  count?: StatGetResponse.Count;
}

export namespace StatGetResponse {
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
  export import StatGetResponse = StatsAPI.StatGetResponse;
  export import StatGetParams = StatsAPI.StatGetParams;
}
