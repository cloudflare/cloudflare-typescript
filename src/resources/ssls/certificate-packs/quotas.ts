// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QuotasAPI from 'cloudflare/resources/ssls/certificate-packs/quotas';

export class Quotas extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  certificatePacksGetCertificatePackQuotas(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuotaCertificatePacksGetCertificatePackQuotasResponse> {
    return (
      this._client.get(`/zones/${zoneId}/ssl/certificate_packs/quota`, options) as Core.APIPromise<{
        result: QuotaCertificatePacksGetCertificatePackQuotasResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface QuotaCertificatePacksGetCertificatePackQuotasResponse {
  advanced?: QuotaCertificatePacksGetCertificatePackQuotasResponse.Advanced;
}

export namespace QuotaCertificatePacksGetCertificatePackQuotasResponse {
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
  export import QuotaCertificatePacksGetCertificatePackQuotasResponse = QuotasAPI.QuotaCertificatePacksGetCertificatePackQuotasResponse;
}
