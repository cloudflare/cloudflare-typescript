// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SmartTieredCacheAPI from 'cloudflare/resources/cache/smart-tiered-cache';
import * as Shared from 'cloudflare/resources/shared';

export class SmartTieredCache extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    params: SmartTieredCacheDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  edit(
    params: SmartTieredCacheEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  get(
    params: SmartTieredCacheGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
  export import SmartTieredCacheDeleteParams = SmartTieredCacheAPI.SmartTieredCacheDeleteParams;
  export import SmartTieredCacheEditParams = SmartTieredCacheAPI.SmartTieredCacheEditParams;
  export import SmartTieredCacheGetParams = SmartTieredCacheAPI.SmartTieredCacheGetParams;
}
