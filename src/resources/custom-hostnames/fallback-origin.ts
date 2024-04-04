// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackOriginAPI from 'cloudflare/resources/custom-hostnames/fallback-origin';
import * as Shared from 'cloudflare/resources/shared';

export class FallbackOrigin extends APIResource {
  /**
   * Update Fallback Origin for Custom Hostnames
   */
  update(
    params: FallbackOriginUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/custom_hostnames/fallback_origin`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Fallback Origin for Custom Hostnames
   */
  delete(
    params: FallbackOriginDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/custom_hostnames/fallback_origin`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Fallback Origin for Custom Hostnames
   */
  get(
    params: FallbackOriginGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/custom_hostnames/fallback_origin`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface FallbackOriginGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace FallbackOrigin {
  export import FallbackOriginUpdateParams = FallbackOriginAPI.FallbackOriginUpdateParams;
  export import FallbackOriginDeleteParams = FallbackOriginAPI.FallbackOriginDeleteParams;
  export import FallbackOriginGetParams = FallbackOriginAPI.FallbackOriginGetParams;
}
