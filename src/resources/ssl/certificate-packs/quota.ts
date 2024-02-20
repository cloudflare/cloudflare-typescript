// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QuotaAPI from 'cloudflare/resources/ssl/certificate-packs/quota';

export class Quota extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<QuotaListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/ssl/certificate_packs/quota`, options) as Core.APIPromise<{
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

export namespace Quota {
  export import QuotaListResponse = QuotaAPI.QuotaListResponse;
}
