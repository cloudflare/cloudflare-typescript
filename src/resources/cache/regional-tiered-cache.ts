// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as RegionalTieredCacheAPI from './regional-tiered-cache';

export class RegionalTieredCacheResource extends APIResource {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  edit(params: RegionalTieredCacheEditParams, options?: Core.RequestOptions): Core.APIPromise<RegionalTieredCacheEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/cache/regional_tiered_cache`, { body, ...options }) as Core.APIPromise<{ result: RegionalTieredCacheEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  get(params: RegionalTieredCacheGetParams, options?: Core.RequestOptions): Core.APIPromise<RegionalTieredCacheGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/cache/regional_tiered_cache`, options) as Core.APIPromise<{ result: RegionalTieredCacheGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * ID of the zone setting.
 */
export type RegionalTieredCache = 'tc_regional'

/**
 * Instructs Cloudflare to check a regional hub data center on the way to your
 * upper tier. This can help improve performance for smart and custom tiered cache
 * topologies.
 */
export interface RegionalTieredCacheEditResponse {
  /**
   * ID of the zone setting.
   */
  id: RegionalTieredCache;

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  value: RegionalTieredCacheEditResponse.Value;
}

export namespace RegionalTieredCacheEditResponse {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: RegionalTieredCacheAPI.RegionalTieredCache;

    /**
     * last time this setting was modified.
     */
    modified_on: string | null;
  }
}

/**
 * Instructs Cloudflare to check a regional hub data center on the way to your
 * upper tier. This can help improve performance for smart and custom tiered cache
 * topologies.
 */
export interface RegionalTieredCacheGetResponse {
  /**
   * ID of the zone setting.
   */
  id: RegionalTieredCache;

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  value: RegionalTieredCacheGetResponse.Value;
}

export namespace RegionalTieredCacheGetResponse {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: RegionalTieredCacheAPI.RegionalTieredCache;

    /**
     * last time this setting was modified.
     */
    modified_on: string | null;
  }
}

export interface RegionalTieredCacheEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the Regional Tiered Cache zone setting.
   */
  value: 'on' | 'off';
}

export interface RegionalTieredCacheGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace RegionalTieredCacheResource {
  export import RegionalTieredCache = RegionalTieredCacheAPI.RegionalTieredCache;
  export import RegionalTieredCacheEditResponse = RegionalTieredCacheAPI.RegionalTieredCacheEditResponse;
  export import RegionalTieredCacheGetResponse = RegionalTieredCacheAPI.RegionalTieredCacheGetResponse;
  export import RegionalTieredCacheEditParams = RegionalTieredCacheAPI.RegionalTieredCacheEditParams;
  export import RegionalTieredCacheGetParams = RegionalTieredCacheAPI.RegionalTieredCacheGetParams;
}
