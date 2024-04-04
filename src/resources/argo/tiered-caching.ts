// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';
import * as Shared from 'cloudflare/resources/shared';

export class TieredCaching extends APIResource {
  /**
   * Updates enablement of Tiered Caching
   */
  edit(
    params: TieredCachingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/argo/tiered_caching`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Tiered Caching setting
   */
  get(
    params: TieredCachingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/argo/tiered_caching`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
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
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
  export import TieredCachingGetParams = TieredCachingAPI.TieredCachingGetParams;
}
