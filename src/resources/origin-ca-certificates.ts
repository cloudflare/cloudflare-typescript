// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginCACertificatesAPI from 'cloudflare/resources/origin-ca-certificates';

export class OriginCACertificates extends APIResource {
  /**
   * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key
   * when calling this endpoint ([see above](#requests)).
   */
  create(
    body: OriginCACertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCACertificateCreateResponse> {
    return (
      this._client.post('/certificates', { body, ...options }) as Core.APIPromise<{
        result: OriginCACertificateCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all existing Origin CA certificates for a given zone. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OriginCACertificateListResponse | null> {
    return (
      this._client.get('/certificates', options) as Core.APIPromise<{
        result: OriginCACertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revoke an existing Origin CA certificate by its serial number. Use your Origin
   * CA Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  delete(
    certificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCACertificateDeleteResponse> {
    return (
      this._client.delete(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: OriginCACertificateDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an existing Origin CA certificate by its serial number. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  get(certificateId: string, options?: Core.RequestOptions): Core.APIPromise<OriginCACertificateGetResponse> {
    return (
      this._client.get(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: OriginCACertificateGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OriginCACertificate {
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

export type OriginCACertificateCreateResponse = unknown | string;

export type OriginCACertificateListResponse = Array<OriginCACertificate>;

export interface OriginCACertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type OriginCACertificateGetResponse = unknown | string;

export interface OriginCACertificateCreateParams {
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

export namespace OriginCACertificates {
  export import OriginCACertificate = OriginCACertificatesAPI.OriginCACertificate;
  export import OriginCACertificateCreateResponse = OriginCACertificatesAPI.OriginCACertificateCreateResponse;
  export import OriginCACertificateListResponse = OriginCACertificatesAPI.OriginCACertificateListResponse;
  export import OriginCACertificateDeleteResponse = OriginCACertificatesAPI.OriginCACertificateDeleteResponse;
  export import OriginCACertificateGetResponse = OriginCACertificatesAPI.OriginCACertificateGetResponse;
  export import OriginCACertificateCreateParams = OriginCACertificatesAPI.OriginCACertificateCreateParams;
}
