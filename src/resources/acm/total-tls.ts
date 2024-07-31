// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TotalTLSAPI from './total-tls';

export class TotalTLS extends APIResource {
  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   */
  create(
    params: TotalTLSCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalTLSCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/acm/total_tls`, { body, ...options }) as Core.APIPromise<{
        result: TotalTLSCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Total TLS Settings for a Zone.
   */
  get(params: TotalTLSGetParams, options?: Core.RequestOptions): Core.APIPromise<TotalTLSGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/acm/total_tls`, options) as Core.APIPromise<{
        result: TotalTLSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The Certificate Authority that Total TLS certificates will be issued through.
 */
export type CertificateAuthority = 'google' | 'lets_encrypt' | 'ssl_com';

/**
 * The Certificate Authority that Total TLS certificates will be issued through.
 */
export type CertificateAuthorityParam = 'google' | 'lets_encrypt' | 'ssl_com';

export interface TotalTLSCreateResponse {
  /**
   * The Certificate Authority that Total TLS certificates will be issued through.
   */
  certificate_authority?: CertificateAuthority;

  /**
   * If enabled, Total TLS will order a hostname specific TLS certificate for any
   * proxied A, AAAA, or CNAME record in your zone.
   */
  enabled?: boolean;

  /**
   * The validity period in days for the certificates ordered via Total TLS.
   */
  validity_period?: 90;
}

export interface TotalTLSGetResponse {
  /**
   * The Certificate Authority that Total TLS certificates will be issued through.
   */
  certificate_authority?: CertificateAuthority;

  /**
   * If enabled, Total TLS will order a hostname specific TLS certificate for any
   * proxied A, AAAA, or CNAME record in your zone.
   */
  enabled?: boolean;

  /**
   * The validity period in days for the certificates ordered via Total TLS.
   */
  validity_period?: 90;
}

export interface TotalTLSCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: If enabled, Total TLS will order a hostname specific TLS certificate
   * for any proxied A, AAAA, or CNAME record in your zone.
   */
  enabled: boolean;

  /**
   * Body param: The Certificate Authority that Total TLS certificates will be issued
   * through.
   */
  certificate_authority?: CertificateAuthorityParam;
}

export interface TotalTLSGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TotalTLS {
  export import CertificateAuthority = TotalTLSAPI.CertificateAuthority;
  export import TotalTLSCreateResponse = TotalTLSAPI.TotalTLSCreateResponse;
  export import TotalTLSGetResponse = TotalTLSAPI.TotalTLSGetResponse;
  export import TotalTLSCreateParams = TotalTLSAPI.TotalTLSCreateParams;
  export import TotalTLSGetParams = TotalTLSAPI.TotalTLSGetParams;
}
