// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/certificates';

export class Certificates extends APIResource {
  /**
   * Revoke an existing Origin CA certificate by its serial number. Use your Origin
   * CA Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  delete(certificateId: string, options?: Core.RequestOptions): Core.APIPromise<CertificateDeleteResponse> {
    return (
      this._client.delete(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: CertificateDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an existing Origin CA certificate by its serial number. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  get(certificateId: string, options?: Core.RequestOptions): Core.APIPromise<CertificateGetResponse> {
    return (
      this._client.get(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: CertificateGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key
   * when calling this endpoint ([see above](#requests)).
   */
  originCaCreateCertificate(
    body: CertificateOriginCaCreateCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateOriginCaCreateCertificateResponse> {
    return (
      this._client.post('/certificates', { body, ...options }) as Core.APIPromise<{
        result: CertificateOriginCaCreateCertificateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all existing Origin CA certificates for a given zone. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  originCaListCertificates(
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateOriginCaListCertificatesResponse | null> {
    return (
      this._client.get('/certificates', options) as Core.APIPromise<{
        result: CertificateOriginCaListCertificatesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type CertificateGetResponse = unknown | string;

export type CertificateOriginCaCreateCertificateResponse = unknown | string;

export type CertificateOriginCaListCertificatesResponse =
  Array<CertificateOriginCaListCertificatesResponse.CertificateOriginCaListCertificatesResponseItem>;

export namespace CertificateOriginCaListCertificatesResponse {
  export interface CertificateOriginCaListCertificatesResponseItem {
    /**
     * The Certificate Signing Request (CSR). Must be newline-encoded.
     */
    csr: string;

    /**
     * Array of hostnames or wildcard names (e.g., \*.example.com) bound to the
     * certificate.
     */
    hostnames: Array<unknown>;

    /**
     * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
     * or "keyless-certificate" (for Keyless SSL servers).
     */
    request_type: 'origin-rsa' | 'origin-ecc' | 'keyless-certificate';

    /**
     * The number of days for which the certificate should be valid.
     */
    requested_validity: 7 | 30 | 90 | 365 | 730 | 1095 | 5475;

    /**
     * Identifier
     */
    id?: string;

    /**
     * The Origin CA certificate. Will be newline-encoded.
     */
    certificate?: string;

    /**
     * When the certificate will expire.
     */
    expires_on?: string;
  }
}

export interface CertificateOriginCaCreateCertificateParams {
  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr?: string;

  /**
   * Array of hostnames or wildcard names (e.g., \*.example.com) bound to the
   * certificate.
   */
  hostnames?: Array<unknown>;

  /**
   * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
   * or "keyless-certificate" (for Keyless SSL servers).
   */
  request_type?: 'origin-rsa' | 'origin-ecc' | 'keyless-certificate';

  /**
   * The number of days for which the certificate should be valid.
   */
  requested_validity?: 7 | 30 | 90 | 365 | 730 | 1095 | 5475;
}

export namespace Certificates {
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateOriginCaCreateCertificateResponse = CertificatesAPI.CertificateOriginCaCreateCertificateResponse;
  export import CertificateOriginCaListCertificatesResponse = CertificatesAPI.CertificateOriginCaListCertificatesResponse;
  export import CertificateOriginCaCreateCertificateParams = CertificatesAPI.CertificateOriginCaCreateCertificateParams;
}
