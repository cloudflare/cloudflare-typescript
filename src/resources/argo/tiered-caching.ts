// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

export declare namespace TieredCaching {
  export {
    type TieredCachingEditResponse as TieredCachingEditResponse,
    type TieredCachingGetResponse as TieredCachingGetResponse,
    type TieredCachingEditParams as TieredCachingEditParams,
    type TieredCachingGetParams as TieredCachingGetParams,
  };
}
