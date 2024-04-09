// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class OriginCACertificates extends APIResource {
  /**
   * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key
   * when calling this endpoint ([see above](#requests)).
   */
  create(
    body: OriginCACertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.post('/certificates', { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
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
    body: OriginCACertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCACertificateDeleteResponse> {
    return (
      this._client.delete(`/certificates/${certificateId}`, { body, ...options }) as Core.APIPromise<{
        result: OriginCACertificateDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an existing Origin CA certificate by its serial number. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  get(
    certificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
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

export interface OriginCACertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
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

export interface OriginCACertificateListParams {
  /**
   * Identifier
   */
  identifier?: string;
}

export type OriginCACertificateDeleteParams = unknown;
