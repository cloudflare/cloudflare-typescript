// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatsAPI from 'cloudflare/resources/images/v1/stats';

export class Stats extends APIResource {
  /**
   * Fetch usage statistics details for Cloudflare Images.
   */
  get(params: StatGetParams, options?: Core.RequestOptions): Core.APIPromise<ImagesImagesStats> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/stats`, options) as Core.APIPromise<{
        result: ImagesImagesStats;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ImagesImagesStats {
  count?: ImagesImagesStats.Count;
}

export namespace ImagesImagesStats {
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
  export import ImagesImagesStats = StatsAPI.ImagesImagesStats;
  export import StatGetParams = StatsAPI.StatGetParams;
}
