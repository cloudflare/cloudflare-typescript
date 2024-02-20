// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';

export class TieredCaching extends APIResource {
  /**
   * Updates enablement of Tiered Caching
   */
  update(
    zoneId: string,
    body: TieredCachingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/argo/tiered_caching`, { body, ...options }) as Core.APIPromise<{
        result: TieredCachingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Tiered Caching setting
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<TieredCachingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/argo/tiered_caching`, options) as Core.APIPromise<{
        result: TieredCachingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TieredCachingUpdateResponse = unknown | string | null;

export type TieredCachingGetResponse = unknown | string | null;

export interface TieredCachingUpdateParams {
  /**
   * Enables Tiered Caching.
   */
  value: 'on' | 'off';
}

export namespace TieredCaching {
  export import TieredCachingUpdateResponse = TieredCachingAPI.TieredCachingUpdateResponse;
  export import TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export import TieredCachingUpdateParams = TieredCachingAPI.TieredCachingUpdateParams;
}
