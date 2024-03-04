// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SmartTieredCachedAPI from 'cloudflare/resources/cache/smart-tiered-cached';

export class SmartTieredCached extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    params: SmartTieredCachedDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartTieredCachedDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: SmartTieredCachedDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  edit(
    params: SmartTieredCachedEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartTieredCachedEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SmartTieredCachedEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  get(
    params: SmartTieredCachedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartTieredCachedGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: SmartTieredCachedGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SmartTieredCachedDeleteResponse = unknown | string | null;

export type SmartTieredCachedEditResponse = unknown | string | null;

export type SmartTieredCachedGetResponse = unknown | string | null;

export interface SmartTieredCachedDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface SmartTieredCachedEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enables Tiered Cache.
   */
  value: 'on' | 'off';
}

export interface SmartTieredCachedGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SmartTieredCached {
  export import SmartTieredCachedDeleteResponse = SmartTieredCachedAPI.SmartTieredCachedDeleteResponse;
  export import SmartTieredCachedEditResponse = SmartTieredCachedAPI.SmartTieredCachedEditResponse;
  export import SmartTieredCachedGetResponse = SmartTieredCachedAPI.SmartTieredCachedGetResponse;
  export import SmartTieredCachedDeleteParams = SmartTieredCachedAPI.SmartTieredCachedDeleteParams;
  export import SmartTieredCachedEditParams = SmartTieredCachedAPI.SmartTieredCachedEditParams;
  export import SmartTieredCachedGetParams = SmartTieredCachedAPI.SmartTieredCachedGetParams;
}
