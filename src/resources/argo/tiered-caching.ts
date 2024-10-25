// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TieredCachingAPI from './tiered-caching';

export class TieredCaching extends APIResource {
  /**
   * Updates enablement of Tiered Caching
   */
  edit(
    params: TieredCachingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/argo/tiered_caching`, { body, ...options }) as Core.APIPromise<{
        result: TieredCachingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Tiered Caching setting
   */
  get(
    params: TieredCachingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/argo/tiered_caching`, options) as Core.APIPromise<{
        result: TieredCachingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TieredCachingEditResponse {
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

export interface TieredCachingGetResponse {
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

export interface TieredCachingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enables Tiered Caching.
   */
  value: 'on' | 'off';
}

export interface TieredCachingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TieredCaching {
  export import TieredCachingEditResponse = TieredCachingAPI.TieredCachingEditResponse;
  export import TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
  export import TieredCachingGetParams = TieredCachingAPI.TieredCachingGetParams;
}
