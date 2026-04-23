// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class TotalTLS extends APIResource {
  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   *
   * @example
   * ```ts
   * const totalTLS = await client.acm.totalTLS.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   enabled: true,
   * });
   * ```
   */
  update(
    params: TotalTLSUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalTLSUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/acm/total_tls`, { body, ...options }) as Core.APIPromise<{
        result: TotalTLSUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   *
   * @example
   * ```ts
   * const response = await client.acm.totalTLS.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   enabled: true,
   * });
   * ```
   */
  edit(params: TotalTLSEditParams, options?: Core.RequestOptions): Core.APIPromise<TotalTLSEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/acm/total_tls`, { body, ...options }) as Core.APIPromise<{
        result: TotalTLSEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Total TLS Settings for a Zone.
   *
   * @example
   * ```ts
   * const totalTLS = await client.acm.totalTLS.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
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

export interface TotalTLSUpdateResponse {
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

export interface TotalTLSEditResponse {
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

export interface TotalTLSUpdateParams {
  /**
   * Path param: Identifier.
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

export interface TotalTLSEditParams {
  /**
   * Path param: Identifier.
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
   * Identifier.
   */
  zone_id: string;
}

export declare namespace TotalTLS {
  export {
    type CertificateAuthority as CertificateAuthority,
    type TotalTLSUpdateResponse as TotalTLSUpdateResponse,
    type TotalTLSEditResponse as TotalTLSEditResponse,
    type TotalTLSGetResponse as TotalTLSGetResponse,
    type TotalTLSUpdateParams as TotalTLSUpdateParams,
    type TotalTLSEditParams as TotalTLSEditParams,
    type TotalTLSGetParams as TotalTLSGetParams,
  };
}
