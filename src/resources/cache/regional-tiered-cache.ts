// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RegionalTieredCacheAPI from 'cloudflare/resources/cache/regional-tiered-cache';

export class RegionalTieredCache extends APIResource {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  edit(
    zoneId: string,
    body: RegionalTieredCacheEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionalTieredCacheEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/regional_tiered_cache`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RegionalTieredCacheEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<RegionalTieredCacheGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/regional_tiered_cache`, options) as Core.APIPromise<{
        result: RegionalTieredCacheGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Instructs Cloudflare to check a regional hub data center on the way to your
 * upper tier. This can help improve performance for smart and custom tiered cache
 * topologies.
 */
export interface RegionalTieredCacheEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'tc_regional';

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
    id: 'tc_regional';

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
  id: 'tc_regional';

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
    id: 'tc_regional';

    /**
     * last time this setting was modified.
     */
    modified_on: string | null;
  }
}

export interface RegionalTieredCacheEditParams {
  /**
   * Value of the Regional Tiered Cache zone setting.
   */
  value: 'on' | 'off';
}

export namespace RegionalTieredCache {
  export import RegionalTieredCacheEditResponse = RegionalTieredCacheAPI.RegionalTieredCacheEditResponse;
  export import RegionalTieredCacheGetResponse = RegionalTieredCacheAPI.RegionalTieredCacheGetResponse;
  export import RegionalTieredCacheEditParams = RegionalTieredCacheAPI.RegionalTieredCacheEditParams;
}
