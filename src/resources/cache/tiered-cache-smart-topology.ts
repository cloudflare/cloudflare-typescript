// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCacheSmartTopologyAPI from 'cloudflare/resources/cache/tiered-cache-smart-topology';

export class TieredCacheSmartTopology extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    params: TieredCacheSmartTopologyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: TieredCacheSmartTopologyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  edit(
    params: TieredCacheSmartTopologyEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TieredCacheSmartTopologyEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  get(
    params: TieredCacheSmartTopologyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: TieredCacheSmartTopologyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TieredCacheSmartTopologyDeleteResponse = unknown | string | null;

export type TieredCacheSmartTopologyEditResponse = unknown | string | null;

export type TieredCacheSmartTopologyGetResponse = unknown | string | null;

export interface TieredCacheSmartTopologyDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface TieredCacheSmartTopologyEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enables Tiered Cache.
   */
  value: 'on' | 'off';
}

export interface TieredCacheSmartTopologyGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TieredCacheSmartTopology {
  export import TieredCacheSmartTopologyDeleteResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyDeleteResponse;
  export import TieredCacheSmartTopologyEditResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyEditResponse;
  export import TieredCacheSmartTopologyGetResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyGetResponse;
  export import TieredCacheSmartTopologyDeleteParams = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyDeleteParams;
  export import TieredCacheSmartTopologyEditParams = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyEditParams;
  export import TieredCacheSmartTopologyGetParams = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyGetParams;
}
