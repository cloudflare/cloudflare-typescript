// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';
import { type Response } from '../../../_shims/index';

export class SAMLCertificates extends APIResource {
  /**
   * Returns a paginated list of the organization's SAML encryption certificate sets.
   * Each certificate set includes the current and (if present) previous
   * certificates.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const samlCertificateListResponse of client.zeroTrust.access.samlCertificates.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SAMLCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SAMLCertificateListResponsesV4PagePaginationArray, SAMLCertificateListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/saml_certificates`,
      SAMLCertificateListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Retrieves a specific SAML encryption certificate set by its UID, including both
   * current and previous certificates if available.
   *
   * @example
   * ```ts
   * const samlCertificate =
   *   await client.zeroTrust.access.samlCertificates.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    samlCERTSetId: string,
    params: SAMLCertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SAMLCertificateGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/access/saml_certificates/${samlCERTSetId}`,
        options,
      ) as Core.APIPromise<{ result: SAMLCertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Downloads the current SAML encryption certificate's public key in PEM format for
   * the specified certificate set. This endpoint is useful for providing the
   * certificate to Identity Providers for SAML assertion encryption configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.samlCertificates.getPem(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getPem(
    samlCERTSetId: string,
    params: SAMLCertificateGetPemParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/access/saml_certificates/${samlCERTSetId}/pem`, {
      ...options,
      headers: { Accept: 'application/x-pem-file', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Rotates the SAML encryption certificates within the specified certificate set.
   * This generates a new certificate and moves the current certificate to the
   * previous slot. If a previous certificate exists, it will be deactivated and
   * removed.
   *
   * This endpoint ensures zero-downtime rotation by maintaining both current and
   * previous certificates during the transition period, allowing IdPs time to update
   * their configurations. Automated rotation happens 30 days before a current
   * certificate's expiration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.samlCertificates.rotate(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  rotate(
    samlCERTSetId: string,
    params: SAMLCertificateRotateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SAMLCertificateRotateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/access/saml_certificates/${samlCERTSetId}/rotate`,
        options,
      ) as Core.APIPromise<{ result: SAMLCertificateRotateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SAMLCertificateListResponsesV4PagePaginationArray extends V4PagePaginationArray<SAMLCertificateListResponse> {}

export interface SAMLCertificateListResponse {
  /**
   * When the certificate set was created
   */
  created_at: string;

  /**
   * Unique identifier for the certificate set
   */
  uid: string;

  /**
   * When the certificate set was last updated
   */
  updated_at: string;

  /**
   * The current active certificate
   */
  current_certificate?: SAMLCertificateListResponse.CurrentCertificate;

  /**
   * The previous certificate (maintained during rotation period). May be null when
   * no rotation has occurred. Mirrors the structure of `saml_certificate`.
   */
  previous_certificate?: unknown | null;
}

export namespace SAMLCertificateListResponse {
  /**
   * The current active certificate
   */
  export interface CurrentCertificate {
    /**
     * Indicates whether the certificate can be used for IdP configuration.
     */
    is_current: boolean;

    /**
     * Certificate expiration date
     */
    not_after: string;

    /**
     * The public certificate in PEM format
     */
    public_certificate: string;

    /**
     * Unique identifier for the certificate
     */
    uid: string;
  }
}

export interface SAMLCertificateGetResponse {
  /**
   * When the certificate set was created
   */
  created_at: string;

  /**
   * Unique identifier for the certificate set
   */
  uid: string;

  /**
   * When the certificate set was last updated
   */
  updated_at: string;

  /**
   * The current active certificate
   */
  current_certificate?: SAMLCertificateGetResponse.CurrentCertificate;

  /**
   * The previous certificate (maintained during rotation period). May be null when
   * no rotation has occurred. Mirrors the structure of `saml_certificate`.
   */
  previous_certificate?: unknown | null;
}

export namespace SAMLCertificateGetResponse {
  /**
   * The current active certificate
   */
  export interface CurrentCertificate {
    /**
     * Indicates whether the certificate can be used for IdP configuration.
     */
    is_current: boolean;

    /**
     * Certificate expiration date
     */
    not_after: string;

    /**
     * The public certificate in PEM format
     */
    public_certificate: string;

    /**
     * Unique identifier for the certificate
     */
    uid: string;
  }
}

export interface SAMLCertificateRotateResponse {
  /**
   * When the certificate set was created
   */
  created_at: string;

  /**
   * Unique identifier for the certificate set
   */
  uid: string;

  /**
   * When the certificate set was last updated
   */
  updated_at: string;

  /**
   * The current active certificate
   */
  current_certificate?: SAMLCertificateRotateResponse.CurrentCertificate;

  /**
   * The previous certificate (maintained during rotation period). May be null when
   * no rotation has occurred. Mirrors the structure of `saml_certificate`.
   */
  previous_certificate?: unknown | null;
}

export namespace SAMLCertificateRotateResponse {
  /**
   * The current active certificate
   */
  export interface CurrentCertificate {
    /**
     * Indicates whether the certificate can be used for IdP configuration.
     */
    is_current: boolean;

    /**
     * Certificate expiration date
     */
    not_after: string;

    /**
     * The public certificate in PEM format
     */
    public_certificate: string;

    /**
     * Unique identifier for the certificate
     */
    uid: string;
  }
}

export interface SAMLCertificateListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Filter by SAML certificate set UID. Accepts a comma-separated list
   * of UIDs.
   */
  id?: string;
}

export interface SAMLCertificateGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SAMLCertificateGetPemParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SAMLCertificateRotateParams {
  /**
   * Identifier.
   */
  account_id: string;
}

SAMLCertificates.SAMLCertificateListResponsesV4PagePaginationArray =
  SAMLCertificateListResponsesV4PagePaginationArray;

export declare namespace SAMLCertificates {
  export {
    type SAMLCertificateListResponse as SAMLCertificateListResponse,
    type SAMLCertificateGetResponse as SAMLCertificateGetResponse,
    type SAMLCertificateRotateResponse as SAMLCertificateRotateResponse,
    SAMLCertificateListResponsesV4PagePaginationArray as SAMLCertificateListResponsesV4PagePaginationArray,
    type SAMLCertificateListParams as SAMLCertificateListParams,
    type SAMLCertificateGetParams as SAMLCertificateGetParams,
    type SAMLCertificateGetPemParams as SAMLCertificateGetPemParams,
    type SAMLCertificateRotateParams as SAMLCertificateRotateParams,
  };
}
