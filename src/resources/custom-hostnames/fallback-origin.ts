// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as FallbackOriginAPI from './fallback-origin';

export class FallbackOrigin extends APIResource {
  /**
   * Update Fallback Origin for Custom Hostnames
   */
  update(
    params: FallbackOriginUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/custom_hostnames/fallback_origin`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FallbackOriginUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Fallback Origin for Custom Hostnames
   */
  delete(
    params: FallbackOriginDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/custom_hostnames/fallback_origin`, options) as Core.APIPromise<{
        result: FallbackOriginDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Fallback Origin for Custom Hostnames
   */
  get(
    params: FallbackOriginGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/custom_hostnames/fallback_origin`, options) as Core.APIPromise<{
        result: FallbackOriginGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FallbackOriginUpdateResponse = unknown | string | null;

export type FallbackOriginDeleteResponse = unknown | string | null;

export type FallbackOriginGetResponse = unknown | string | null;

export interface FallbackOriginUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Your origin hostname that requests to your custom hostnames will be
   * sent to.
   */
  origin: string;
}

export interface FallbackOriginDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface FallbackOriginGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace FallbackOrigin {
  export import FallbackOriginUpdateResponse = FallbackOriginAPI.FallbackOriginUpdateResponse;
  export import FallbackOriginDeleteResponse = FallbackOriginAPI.FallbackOriginDeleteResponse;
  export import FallbackOriginGetResponse = FallbackOriginAPI.FallbackOriginGetResponse;
  export import FallbackOriginUpdateParams = FallbackOriginAPI.FallbackOriginUpdateParams;
  export import FallbackOriginDeleteParams = FallbackOriginAPI.FallbackOriginDeleteParams;
  export import FallbackOriginGetParams = FallbackOriginAPI.FallbackOriginGetParams;
}
