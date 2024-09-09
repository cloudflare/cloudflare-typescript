// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as CertificatePacksAPI from './ssl/certificate-packs/certificate-packs';
import { SinglePage } from '../pagination';

export class OriginCACertificates extends APIResource {
  /**
   * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key
   * when calling this endpoint ([see above](#requests)).
   */
  create(
    body: OriginCACertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCACertificate> {
    return (
      this._client.post('/certificates', { body, ...options }) as Core.APIPromise<{
        result: OriginCACertificate;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all existing Origin CA certificates for a given zone. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  list(
    query?: OriginCACertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginCACertificatesSinglePage, OriginCACertificate>;
  list(options?: Core.RequestOptions): Core.PagePromise<OriginCACertificatesSinglePage, OriginCACertificate>;
  list(
    query: OriginCACertificateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginCACertificatesSinglePage, OriginCACertificate> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/certificates', OriginCACertificatesSinglePage, { query, ...options });
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
  get(certificateId: string, options?: Core.RequestOptions): Core.APIPromise<OriginCACertificate> {
    return (
      this._client.get(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: OriginCACertificate;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OriginCACertificatesSinglePage extends SinglePage<OriginCACertificate> {}

export interface OriginCACertificate {
  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr: string;

  /**
   * Array of hostnames or wildcard names (e.g., \*.example.com) bound to the
   * certificate.
   */
  hostnames: Array<string>;

  /**
   * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
   * or "keyless-certificate" (for Keyless SSL servers).
   */
  request_type: Shared.CertificateRequestType;

  /**
   * The number of days for which the certificate should be valid.
   */
  requested_validity: CertificatePacksAPI.RequestValidity;

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

export interface OriginCACertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * When the certificate was revoked.
   */
  revoked_at?: string;
}

export interface OriginCACertificateCreateParams {
  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr?: string;

  /**
   * Array of hostnames or wildcard names (e.g., \*.example.com) bound to the
   * certificate.
   */
  hostnames?: Array<string>;

  /**
   * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
   * or "keyless-certificate" (for Keyless SSL servers).
   */
  request_type?: Shared.CertificateRequestTypeParam;

  /**
   * The number of days for which the certificate should be valid.
   */
  requested_validity?: CertificatePacksAPI.RequestValidityParam;
}

export interface OriginCACertificateListParams {
  /**
   * Identifier
   */
  zone_id?: string;
}
