// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';

export class TieredCaching extends APIResource {
  /**
   * Updates enablement of Tiered Caching
   */
  edit(
    params: TieredCachingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/argo/tiered_caching`, { body, ...options }) as Core.APIPromise<{
        result: TieredCachingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Tiered Caching setting
   */
  get(
    params: TieredCachingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/argo/tiered_caching`, options) as Core.APIPromise<{
        result: TieredCachingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TieredCachingEditResponse = unknown | string | null;

export type TieredCachingGetResponse = unknown | string | null;

export interface TieredCachingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enables Tiered Caching.
   */
  value: 'on' | 'off';
}

export interface TieredCachingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TieredCaching {
  export import TieredCachingEditResponse = TieredCachingAPI.TieredCachingEditResponse;
  export import TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
  export import TieredCachingGetParams = TieredCachingAPI.TieredCachingGetParams;
}
