// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCacheSmartTopologyAPI from 'cloudflare/resources/cache/tiered-cache-smart-topology';

export class TieredCacheSmartTopology extends APIResource {
  /**
   * Updates enablement of Tiered Cache
   */
  update(
    zoneId: string,
    body: TieredCacheSmartTopologyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TieredCacheSmartTopologyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: TieredCacheSmartTopologyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<TieredCacheSmartTopologyGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: TieredCacheSmartTopologyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TieredCacheSmartTopologyUpdateResponse = unknown | string | null;

export type TieredCacheSmartTopologyDeleteResponse = unknown | string | null;

export type TieredCacheSmartTopologyGetResponse = unknown | string | null;

export interface TieredCacheSmartTopologyUpdateParams {
  /**
   * Enables Tiered Cache.
   */
  value: 'on' | 'off';
}

export namespace TieredCacheSmartTopology {
  export import TieredCacheSmartTopologyUpdateResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyUpdateResponse;
  export import TieredCacheSmartTopologyDeleteResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyDeleteResponse;
  export import TieredCacheSmartTopologyGetResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyGetResponse;
  export import TieredCacheSmartTopologyUpdateParams = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyUpdateParams;
}
