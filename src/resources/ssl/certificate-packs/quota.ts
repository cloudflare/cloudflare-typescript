// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QuotaAPI from 'cloudflare/resources/ssl/certificate-packs/quota';

export class Quota extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  list(params: QuotaListParams, options?: Core.RequestOptions): Core.APIPromise<QuotaListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/ssl/certificate_packs/quota`, options) as Core.APIPromise<{
        result: QuotaListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface QuotaListResponse {
  advanced?: QuotaListResponse.Advanced;
}

export namespace QuotaListResponse {
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

export interface QuotaListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Quota {
  export import QuotaListResponse = QuotaAPI.QuotaListResponse;
  export import QuotaListParams = QuotaAPI.QuotaListParams;
}
