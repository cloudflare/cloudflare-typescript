// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';
import * as CertificatePacksAPI from './ssl/certificate-packs/certificate-packs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../pagination';

export class OriginCACertificates extends APIResource {
  /**
   * Create an Origin CA certificate. You can use an Origin CA Key as your User
   * Service Key or an API token when calling this endpoint ([see above](#requests)).
   *
   * @example
   * ```ts
   * const originCACertificate =
   *   await client.originCACertificates.create({
   *     csr: '-----BEGIN CERTIFICATE REQUEST-----\nMIICxzCCAa8CAQAwSDELMAkGA1UEBhMCVVMxFjAUBgNVBAgTDVNhbiBGcmFuY2lz\nY28xCzAJBgNVBAcTAkNBMRQwEgYDVQQDEwtleGFtcGxlLm5ldDCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBALxejtu4b+jPdFeFi6OUsye8TYJQBm3WfCvL\nHu5EvijMO/4Z2TImwASbwUF7Ir8OLgH+mGlQZeqyNvGoSOMEaZVXcYfpR1hlVak8\n4GGVr+04IGfOCqaBokaBFIwzclGZbzKmLGwIQioNxGfqFm6RGYGA3be2Je2iseBc\nN8GV1wYmvYE0RR+yWweJCTJ157exyRzu7sVxaEW9F87zBQLyOnwXc64rflXslRqi\ng7F7w5IaQYOl8yvmk/jEPCAha7fkiUfEpj4N12+oPRiMvleJF98chxjD4MH39c5I\nuOslULhrWunfh7GB1jwWNA9y44H0snrf+xvoy2TcHmxvma9Eln8CAwEAAaA6MDgG\nCSqGSIb3DQEJDjErMCkwJwYDVR0RBCAwHoILZXhhbXBsZS5uZXSCD3d3dy5leGFt\ncGxlLm5ldDANBgkqhkiG9w0BAQsFAAOCAQEAcBaX6dOnI8ncARrI9ZSF2AJX+8mx\npTHY2+Y2C0VvrVDGMtbBRH8R9yMbqWtlxeeNGf//LeMkSKSFa4kbpdx226lfui8/\nauRDBTJGx2R1ccUxmLZXx4my0W5iIMxunu+kez+BDlu7bTT2io0uXMRHue4i6quH\nyc5ibxvbJMjR7dqbcanVE10/34oprzXQsJ/VmSuZNXtjbtSKDlmcpw6To/eeAJ+J\nhXykcUihvHyG4A1m2R6qpANBjnA0pHexfwM/SgfzvpbvUg0T1ubmer8BgTwCKIWs\ndcWYTthM51JIqRBfNqy4QcBnX+GY05yltEEswQI55wdiS3CjTTA67sdbcQ==\n-----END CERTIFICATE REQUEST-----',
   *     hostnames: ['example.com', '*.example.com'],
   *     request_type: 'origin-rsa',
   *   });
   * ```
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
   * List all existing Origin CA certificates for a given zone. You can use an Origin
   * CA Key as your User Service Key or an API token when calling this endpoint
   * ([see above](#requests)).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const originCACertificate of client.originCACertificates.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OriginCACertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginCACertificatesV4PagePaginationArray, OriginCACertificate> {
    return this._client.getAPIList('/certificates', OriginCACertificatesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Revoke an existing Origin CA certificate by its serial number. You can use an
   * Origin CA Key as your User Service Key or an API token when calling this
   * endpoint ([see above](#requests)).
   *
   * @example
   * ```ts
   * const originCACertificate =
   *   await client.originCACertificates.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *   );
   * ```
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
   * Get an existing Origin CA certificate by its serial number. You can use an
   * Origin CA Key as your User Service Key or an API token when calling this
   * endpoint ([see above](#requests)).
   *
   * @example
   * ```ts
   * const originCACertificate =
   *   await client.originCACertificates.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *   );
   * ```
   */
  get(certificateId: string, options?: Core.RequestOptions): Core.APIPromise<OriginCACertificate> {
    return (
      this._client.get(`/certificates/${certificateId}`, options) as Core.APIPromise<{
        result: OriginCACertificate;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OriginCACertificatesV4PagePaginationArray extends V4PagePaginationArray<OriginCACertificate> {}

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
   * Identifier.
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
   * Identifier.
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
  request_type: Shared.CertificateRequestTypeParam;

  /**
   * The number of days for which the certificate should be valid.
   */
  requested_validity?: CertificatePacksAPI.RequestValidityParam;
}

export interface OriginCACertificateListParams extends V4PagePaginationArrayParams {
  /**
   * Identifier.
   */
  zone_id: string;

  /**
   * Limit to the number of records returned.
   */
  limit?: number;

  /**
   * Offset the results
   */
  offset?: number;
}

OriginCACertificates.OriginCACertificatesV4PagePaginationArray = OriginCACertificatesV4PagePaginationArray;

export declare namespace OriginCACertificates {
  export {
    type OriginCACertificate as OriginCACertificate,
    type OriginCACertificateDeleteResponse as OriginCACertificateDeleteResponse,
    OriginCACertificatesV4PagePaginationArray as OriginCACertificatesV4PagePaginationArray,
    type OriginCACertificateCreateParams as OriginCACertificateCreateParams,
    type OriginCACertificateListParams as OriginCACertificateListParams,
  };
}
