// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SmartTieredCacheAPI from 'cloudflare/resources/cache/smart-tiered-cache';

export class SmartTieredCache extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    params: SmartTieredCacheDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartTieredCacheDeleteResponse> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SmartTieredCacheDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  edit(
    params: SmartTieredCacheEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartTieredCacheEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SmartTieredCacheEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  get(
    params: SmartTieredCacheGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartTieredCacheGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: SmartTieredCacheGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SmartTieredCacheDeleteResponse = unknown | string | null;

export type SmartTieredCacheEditResponse = unknown | string | null;

export type SmartTieredCacheGetResponse = unknown | string | null;

export interface SmartTieredCacheDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface SmartTieredCacheEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enables Tiered Cache.
   */
  value: 'on' | 'off';
}

export interface SmartTieredCacheGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SmartTieredCache {
  export import SmartTieredCacheDeleteResponse = SmartTieredCacheAPI.SmartTieredCacheDeleteResponse;
  export import SmartTieredCacheEditResponse = SmartTieredCacheAPI.SmartTieredCacheEditResponse;
  export import SmartTieredCacheGetResponse = SmartTieredCacheAPI.SmartTieredCacheGetResponse;
  export import SmartTieredCacheDeleteParams = SmartTieredCacheAPI.SmartTieredCacheDeleteParams;
  export import SmartTieredCacheEditParams = SmartTieredCacheAPI.SmartTieredCacheEditParams;
  export import SmartTieredCacheGetParams = SmartTieredCacheAPI.SmartTieredCacheGetParams;
}
