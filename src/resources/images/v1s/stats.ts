// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatsAPI from 'cloudflare/resources/images/v1s/stats';

export class Stats extends APIResource {
  /**
   * Fetch usage statistics details for Cloudflare Images.
   */
  cloudflareImagesImagesUsageStatistics(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatCloudflareImagesImagesUsageStatisticsResponse> {
    return (
      this._client.get(`/accounts/${accountId}/images/v1/stats`, options) as Core.APIPromise<{
        result: StatCloudflareImagesImagesUsageStatisticsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatCloudflareImagesImagesUsageStatisticsResponse {
  count?: StatCloudflareImagesImagesUsageStatisticsResponse.Count;
}

export namespace StatCloudflareImagesImagesUsageStatisticsResponse {
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

export namespace Stats {
  export import StatCloudflareImagesImagesUsageStatisticsResponse = StatsAPI.StatCloudflareImagesImagesUsageStatisticsResponse;
}
