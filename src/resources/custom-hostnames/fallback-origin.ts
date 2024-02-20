// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackOriginAPI from 'cloudflare/resources/custom-hostnames/fallback-origin';

export class FallbackOrigin extends APIResource {
  /**
   * Update Fallback Origin for Custom Hostnames
   */
  update(
    zoneId: string,
    body: FallbackOriginUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/custom_hostnames/fallback_origin`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FallbackOriginUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Fallback Origin for Custom Hostnames
   */
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<FallbackOriginDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/custom_hostnames/fallback_origin`, options) as Core.APIPromise<{
        result: FallbackOriginDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Fallback Origin for Custom Hostnames
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<FallbackOriginGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/custom_hostnames/fallback_origin`, options) as Core.APIPromise<{
        result: FallbackOriginGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FallbackOriginUpdateResponse = unknown | string;

export type FallbackOriginDeleteResponse = unknown | string;

export type FallbackOriginGetResponse = unknown | string;

export interface FallbackOriginUpdateParams {
  /**
   * Your origin hostname that requests to your custom hostnames will be sent to.
   */
  origin: string;
}

export namespace FallbackOrigin {
  export import FallbackOriginUpdateResponse = FallbackOriginAPI.FallbackOriginUpdateResponse;
  export import FallbackOriginDeleteResponse = FallbackOriginAPI.FallbackOriginDeleteResponse;
  export import FallbackOriginGetResponse = FallbackOriginAPI.FallbackOriginGetResponse;
  export import FallbackOriginUpdateParams = FallbackOriginAPI.FallbackOriginUpdateParams;
}
