// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import * as CertificatePacksAPI from './ssl/certificate-packs/certificate-packs';
import { APIPromise } from '../api-promise';
import { PagePromise, SinglePage } from '../pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OriginCACertificates extends APIResource {
  /**
   * Create an Origin CA certificate. You can use an Origin CA Key as your User
   * Service Key or an API token when calling this endpoint ([see above](#requests)).
   */
  create(body: OriginCACertificateCreateParams, options?: RequestOptions): APIPromise<OriginCACertificate> {
    return (
      this._client.post('/certificates', { body, ...options }) as APIPromise<{ result: OriginCACertificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all existing Origin CA certificates for a given zone. You can use an Origin
   * CA Key as your User Service Key or an API token when calling this endpoint
   * ([see above](#requests)).
   */
  list(
    query: OriginCACertificateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OriginCACertificatesSinglePage, OriginCACertificate> {
    return this._client.getAPIList('/certificates', SinglePage<OriginCACertificate>, { query, ...options });
  }

  /**
   * Revoke an existing Origin CA certificate by its serial number. You can use an
   * Origin CA Key as your User Service Key or an API token when calling this
   * endpoint ([see above](#requests)).
   */
  delete(certificateID: string, options?: RequestOptions): APIPromise<OriginCACertificateDeleteResponse> {
    return (
      this._client.delete(path`/certificates/${certificateID}`, options) as APIPromise<{
        result: OriginCACertificateDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an existing Origin CA certificate by its serial number. You can use an
   * Origin CA Key as your User Service Key or an API token when calling this
   * endpoint ([see above](#requests)).
   */
  get(certificateID: string, options?: RequestOptions): APIPromise<OriginCACertificate> {
    return (
      this._client.get(path`/certificates/${certificateID}`, options) as APIPromise<{
        result: OriginCACertificate;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OriginCACertificatesSinglePage = SinglePage<OriginCACertificate>;

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
