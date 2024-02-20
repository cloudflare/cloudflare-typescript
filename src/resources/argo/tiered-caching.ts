// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';

export class TieredCaching extends APIResource {
  /**
   * Updates enablement of Tiered Caching
   */
  edit(
    zoneId: string,
    body: TieredCachingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/argo/tiered_caching`, { body, ...options }) as Core.APIPromise<{
        result: TieredCachingEditResponse;
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

export type TieredCachingEditResponse = unknown | string | null;

export type TieredCachingGetResponse = unknown | string | null;

export interface TieredCachingEditParams {
  /**
   * Enables Tiered Caching.
   */
  value: 'on' | 'off';
}

export namespace TieredCaching {
  export import TieredCachingEditResponse = TieredCachingAPI.TieredCachingEditResponse;
  export import TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
}
