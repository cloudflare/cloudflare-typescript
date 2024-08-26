// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SmartTieredCacheAPI from './smart-tiered-cache';

export class SmartTieredCache extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(params: SmartTieredCacheDeleteParams, options?: Core.RequestOptions): Core.APIPromise<SmartTieredCacheDeleteResponse> {
    const { zone_id } = params;
    return (this._client.delete(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, options) as Core.APIPromise<{ result: SmartTieredCacheDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  edit(params: SmartTieredCacheEditParams, options?: Core.RequestOptions): Core.APIPromise<SmartTieredCacheEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, { body, ...options }) as Core.APIPromise<{ result: SmartTieredCacheEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  get(params: SmartTieredCacheGetParams, options?: Core.RequestOptions): Core.APIPromise<SmartTieredCacheGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/cache/tiered_cache_smart_topology_enable`, options) as Core.APIPromise<{ result: SmartTieredCacheGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SmartTieredCacheDeleteResponse {
  /**
   * The identifier of the caching setting
   */
  id: string;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The time when the setting was last modified
   */
  modified_on: string;

  /**
   * The status of the feature being on / off
   */
  value: 'on' | 'off';
}

export interface SmartTieredCacheEditResponse {
  /**
   * The identifier of the caching setting
   */
  id: string;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The time when the setting was last modified
   */
  modified_on: string;

  /**
   * The status of the feature being on / off
   */
  value: 'on' | 'off';
}

export interface SmartTieredCacheGetResponse {
  /**
   * The identifier of the caching setting
   */
  id: string;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The time when the setting was last modified
   */
  modified_on: string;

  /**
   * The status of the feature being on / off
   */
  value: 'on' | 'off';
}

export interface SmartTieredCacheDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface SmartTieredCacheEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enable or disable the Smart Tiered Cache
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
