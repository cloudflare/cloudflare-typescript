// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/certificates';

export class Certificates extends APIResource {
  /**
   * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key
   * when calling this endpoint ([see above](#requests)).
   */
  create(
    body: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    return (
      this._client.post('/certificates', { body, ...options }) as Core.APIPromise<{
        result: CertificateCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all existing Origin CA certificates for a given zone. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CertificateListResponse | null> {
    return (
      this._client.get('/certificates', options) as Core.APIPromise<{
        result: CertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

export type CertificateCreateResponse = unknown | string;

export type CertificateListResponse = Array<CertificateListResponse.CertificateListResponseItem>;

export namespace CertificateListResponse {
  export interface CertificateListResponseItem {
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

export interface CertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type CertificateGetResponse = unknown | string;

export interface CertificateCreateParams {
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
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
}
