// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QuotasAPI from 'cloudflare/resources/ssls/certificate-packs/quotas';

export class Quotas extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<QuotaGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/ssl/certificate_packs/quota`, options) as Core.APIPromise<{
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

export namespace Quotas {
  export import QuotaGetResponse = QuotasAPI.QuotaGetResponse;
}
