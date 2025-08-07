// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Authorities extends APIResource {
  /**
   * Retrieves a list of certificate authorities.
   *
   * @example
   * ```ts
   * const authorities =
   *   await client.radar.ct.authorities.list();
   * ```
   */
  list(query?: AuthorityListParams, options?: Core.RequestOptions): Core.APIPromise<AuthorityListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AuthorityListResponse>;
  list(
    query: AuthorityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthorityListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/ct/authorities', { query, ...options }) as Core.APIPromise<{
        result: AuthorityListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the requested CA information.
   *
   * @example
   * ```ts
   * const authority = await client.radar.ct.authorities.get(
   *   '24EDD4E503A8D3FDB5FFB4AF66C887359901CBE687A5A0760D10A08EED99A7C3',
   * );
   * ```
   */
  get(
    caSlug: string,
    query?: AuthorityGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthorityGetResponse>;
  get(caSlug: string, options?: Core.RequestOptions): Core.APIPromise<AuthorityGetResponse>;
  get(
    caSlug: string,
    query: AuthorityGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthorityGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(caSlug, {}, query);
    }
    return (
      this._client.get(`/radar/ct/authorities/${caSlug}`, { query, ...options }) as Core.APIPromise<{
        result: AuthorityGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AuthorityListResponse {
  certificateAuthorities: Array<AuthorityListResponse.CertificateAuthority>;
}

export namespace AuthorityListResponse {
  export interface CertificateAuthority {
    /**
     * Specifies the type of certificate in the trust chain.
     */
    certificateRecordType: 'ROOT_CERTIFICATE' | 'INTERMEDIATE_CERTIFICATE';

    /**
     * The two-letter ISO country code where the CA organization is based.
     */
    country: string;

    /**
     * The full country name corresponding to the country code.
     */
    countryName: string;

    /**
     * The full name of the certificate authority (CA).
     */
    name: string;

    /**
     * The organization that owns and operates the CA.
     */
    owner: string;

    /**
     * The name of the parent/root certificate authority that issued this intermediate
     * certificate.
     */
    parentName: string;

    /**
     * The SHA-256 fingerprint of the parent certificate.
     */
    parentSha256Fingerprint: string;

    /**
     * The current revocation status of a Certificate Authority (CA) certificate.
     */
    revocationStatus: 'NOT_REVOKED' | 'REVOKED' | 'PARENT_CERT_REVOKED';

    /**
     * The SHA-256 fingerprint of the intermediate certificate.
     */
    sha256Fingerprint: string;
  }
}

export interface AuthorityGetResponse {
  certificateAuthority: AuthorityGetResponse.CertificateAuthority;
}

export namespace AuthorityGetResponse {
  export interface CertificateAuthority {
    /**
     * The inclusion status of a Certificate Authority (CA) in the trust store.
     */
    appleStatus:
      | 'INCLUDED'
      | 'NOT_YET_INCLUDED'
      | 'NOT_INCLUDED'
      | 'NOT_BEFORE'
      | 'REMOVED'
      | 'DISABLED'
      | 'BLOCKED';

    /**
     * The authorityKeyIdentifier value extracted from the certificate PEM.
     */
    authorityKeyIdentifier: string;

    /**
     * Specifies the type of certificate in the trust chain.
     */
    certificateRecordType: 'ROOT_CERTIFICATE' | 'INTERMEDIATE_CERTIFICATE';

    /**
     * The inclusion status of a Certificate Authority (CA) in the trust store.
     */
    chromeStatus:
      | 'INCLUDED'
      | 'NOT_YET_INCLUDED'
      | 'NOT_INCLUDED'
      | 'NOT_BEFORE'
      | 'REMOVED'
      | 'DISABLED'
      | 'BLOCKED';

    /**
     * The two-letter ISO country code where the CA organization is based.
     */
    country: string;

    /**
     * The full country name corresponding to the country code.
     */
    countryName: string;

    /**
     * The inclusion status of a Certificate Authority (CA) in the trust store.
     */
    microsoftStatus:
      | 'INCLUDED'
      | 'NOT_YET_INCLUDED'
      | 'NOT_INCLUDED'
      | 'NOT_BEFORE'
      | 'REMOVED'
      | 'DISABLED'
      | 'BLOCKED';

    /**
     * The inclusion status of a Certificate Authority (CA) in the trust store.
     */
    mozillaStatus:
      | 'INCLUDED'
      | 'NOT_YET_INCLUDED'
      | 'NOT_INCLUDED'
      | 'NOT_BEFORE'
      | 'REMOVED'
      | 'DISABLED'
      | 'BLOCKED';

    /**
     * The full name of the certificate authority (CA).
     */
    name: string;

    /**
     * The organization that owns and operates the CA.
     */
    owner: string;

    /**
     * The name of the parent/root certificate authority that issued this intermediate
     * certificate.
     */
    parentName: string;

    /**
     * The SHA-256 fingerprint of the parent certificate.
     */
    parentSha256Fingerprint: string;

    /**
     * CAs from the same owner.
     */
    related: Array<CertificateAuthority.Related>;

    /**
     * The current revocation status of a Certificate Authority (CA) certificate.
     */
    revocationStatus: 'NOT_REVOKED' | 'REVOKED' | 'PARENT_CERT_REVOKED';

    /**
     * The SHA-256 fingerprint of the intermediate certificate.
     */
    sha256Fingerprint: string;

    /**
     * The subjectKeyIdentifier value extracted from the certificate PEM.
     */
    subjectKeyIdentifier: string;

    /**
     * The start date of the certificate’s validity period (ISO format).
     */
    validFrom: string;

    /**
     * The end date of the certificate’s validity period (ISO format).
     */
    validTo: string;
  }

  export namespace CertificateAuthority {
    export interface Related {
      /**
       * Specifies the type of certificate in the trust chain.
       */
      certificateRecordType: 'ROOT_CERTIFICATE' | 'INTERMEDIATE_CERTIFICATE';

      /**
       * The full name of the certificate authority (CA).
       */
      name: string;

      /**
       * The current revocation status of a Certificate Authority (CA) certificate.
       */
      revocationStatus: 'NOT_REVOKED' | 'REVOKED' | 'PARENT_CERT_REVOKED';

      /**
       * The SHA-256 fingerprint of the intermediate certificate.
       */
      sha256Fingerprint: string;
    }
  }
}

export interface AuthorityListParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;
}

export interface AuthorityGetParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export declare namespace Authorities {
  export {
    type AuthorityListResponse as AuthorityListResponse,
    type AuthorityGetResponse as AuthorityGetResponse,
    type AuthorityListParams as AuthorityListParams,
    type AuthorityGetParams as AuthorityGetParams,
  };
}
