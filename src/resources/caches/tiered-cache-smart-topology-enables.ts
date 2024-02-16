// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCacheSmartTopologyEnablesAPI from 'cloudflare/resources/caches/tiered-cache-smart-topology-enables';

export class TieredCacheSmartTopologyEnables extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEnableDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: TieredCacheSmartTopologyEnableDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  smartTieredCacheGetSmartTieredCacheSetting(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{
        result: TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  smartTieredCachePatchSmartTieredCacheSetting(
    zoneId: string,
    body: TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/tiered_cache_smart_topology_enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TieredCacheSmartTopologyEnableDeleteResponse = unknown | string | null;

export type TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse =
  | unknown
  | string
  | null;

export type TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse =
  | unknown
  | string
  | null;

export interface TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams {
  /**
   * Enables Tiered Cache.
   */
  value: 'on' | 'off';
}

export namespace TieredCacheSmartTopologyEnables {
  export import TieredCacheSmartTopologyEnableDeleteResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableDeleteResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams;
}
