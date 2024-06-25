// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CacheLevelAPI from './cache-level';

export class CacheLevelResource extends APIResource {
  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  edit(params: CacheLevelEditParams, options?: Core.RequestOptions): Core.APIPromise<CacheLevel> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/cache_level`, { body, ...options }) as Core.APIPromise<{
        result: CacheLevel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  get(params: CacheLevelGetParams, options?: Core.RequestOptions): Core.APIPromise<CacheLevel> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/cache_level`, options) as Core.APIPromise<{
        result: CacheLevel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cache Level functions based off the setting level. The basic setting will cache
 * most static resources (i.e., css, images, and JavaScript). The simplified
 * setting will ignore the query string when delivering a cached resource. The
 * aggressive setting will cache all static resources, including ones with a query
 * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
 */
export interface CacheLevel {
  /**
   * ID of the zone setting.
   */
  id: 'cache_level';

  /**
   * Current value of the zone setting.
   */
  value: 'aggressive' | 'basic' | 'simplified';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface CacheLevelEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'aggressive' | 'basic' | 'simplified';
}

export interface CacheLevelGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CacheLevelResource {
  export import CacheLevel = CacheLevelAPI.CacheLevel;
  export import CacheLevelEditParams = CacheLevelAPI.CacheLevelEditParams;
  export import CacheLevelGetParams = CacheLevelAPI.CacheLevelGetParams;
}
