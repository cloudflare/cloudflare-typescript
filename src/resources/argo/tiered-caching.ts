// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';

export class TieredCaching extends APIResource {
  /**
   * Get Tiered Caching setting
   */
  tieredCachingGetTieredCachingSetting(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingTieredCachingGetTieredCachingSettingResponse> {
    return (
      this._client.get(`/zones/${zoneId}/argo/tiered_caching`, options) as Core.APIPromise<{
        result: TieredCachingTieredCachingGetTieredCachingSettingResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates enablement of Tiered Caching
   */
  tieredCachingPatchTieredCachingSetting(
    zoneId: string,
    body: TieredCachingTieredCachingPatchTieredCachingSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingTieredCachingPatchTieredCachingSettingResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/argo/tiered_caching`, { body, ...options }) as Core.APIPromise<{
        result: TieredCachingTieredCachingPatchTieredCachingSettingResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TieredCachingTieredCachingGetTieredCachingSettingResponse = unknown | string | null;

export type TieredCachingTieredCachingPatchTieredCachingSettingResponse = unknown | string | null;

export interface TieredCachingTieredCachingPatchTieredCachingSettingParams {
  /**
   * Enables Tiered Caching.
   */
  value: 'on' | 'off';
}

export namespace TieredCaching {
  export import TieredCachingTieredCachingGetTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingGetTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingParams = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingParams;
}
