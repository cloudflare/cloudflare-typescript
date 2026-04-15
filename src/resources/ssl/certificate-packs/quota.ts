// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Quota extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   *
   * @example
   * ```ts
   * const quota = await client.ssl.certificatePacks.quota.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params?: QuotaGetParams, options?: Core.RequestOptions): Core.APIPromise<QuotaGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<QuotaGetResponse>;
  get(
    params: QuotaGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuotaGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { zone_id = this._client.zoneId } = params;
    return (
      this._client.get(`/zones/${zone_id}/ssl/certificate_packs/quota`, options) as Core.APIPromise<{
        result: QuotaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface QuotaGetResponse {
  advanced?: QuotaGetResponse.Advanced;
}

export namespace QuotaGetResponse {
  export interface Advanced {
    /**
     * Quantity Allocated.
     */
    allocated?: number;

    /**
     * Quantity Used.
     */
    used?: number;
  }
}

export interface QuotaGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace Quota {
  export { type QuotaGetResponse as QuotaGetResponse, type QuotaGetParams as QuotaGetParams };
}
