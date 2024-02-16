// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TotalTLSAPI from 'cloudflare/resources/acms/total-tls';

export class TotalTLS extends APIResource {
  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   */
  update(
    zoneId: string,
    body: TotalTLSUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalTLSUpdateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/acm/total_tls`, { body, ...options }) as Core.APIPromise<{
        result: TotalTLSUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Total TLS Settings for a Zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<TotalTLSGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/acm/total_tls`, options) as Core.APIPromise<{
        result: TotalTLSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TotalTLSUpdateResponse {
  /**
   * The Certificate Authority that Total TLS certificates will be issued through.
   */
  certificate_authority?: 'google' | 'lets_encrypt';

  /**
   * If enabled, Total TLS will order a hostname specific TLS certificate for any
   * proxied A, AAAA, or CNAME record in your zone.
   */
  enabled?: boolean;

  /**
   * The validity period in days for the certificates ordered via Total TLS.
   */
  validity_days?: 90;
}

export interface TotalTLSGetResponse {
  /**
   * The Certificate Authority that Total TLS certificates will be issued through.
   */
  certificate_authority?: 'google' | 'lets_encrypt';

  /**
   * If enabled, Total TLS will order a hostname specific TLS certificate for any
   * proxied A, AAAA, or CNAME record in your zone.
   */
  enabled?: boolean;

  /**
   * The validity period in days for the certificates ordered via Total TLS.
   */
  validity_days?: 90;
}

export interface TotalTLSUpdateParams {
  /**
   * If enabled, Total TLS will order a hostname specific TLS certificate for any
   * proxied A, AAAA, or CNAME record in your zone.
   */
  enabled: boolean;

  /**
   * The Certificate Authority that Total TLS certificates will be issued through.
   */
  certificate_authority?: 'google' | 'lets_encrypt';
}

export namespace TotalTLS {
  export import TotalTLSUpdateResponse = TotalTLSAPI.TotalTLSUpdateResponse;
  export import TotalTLSGetResponse = TotalTLSAPI.TotalTLSGetResponse;
  export import TotalTLSUpdateParams = TotalTLSAPI.TotalTLSUpdateParams;
}
