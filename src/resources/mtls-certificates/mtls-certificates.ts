// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MTLSCertificatesAPI from 'cloudflare/resources/mtls-certificates/mtls-certificates';
import * as AssociationsAPI from 'cloudflare/resources/mtls-certificates/associations';

export class MTLSCertificates extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);

  /**
   * Upload a certificate that you want to use with mTLS-enabled Cloudflare services.
   */
  create(
    accountId: string,
    body: MTLSCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/mtls_certificates`, { body, ...options }) as Core.APIPromise<{
        result: MTLSCertificateCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS certificates.
   */
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/mtls_certificates`, options) as Core.APIPromise<{
        result: MTLSCertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the mTLS certificate unless the certificate is in use by one or more
   * Cloudflare services.
   */
  delete(
    accountId: string,
    mtlsCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MTLSCertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate.
   */
  get(
    accountId: string,
    mtlsCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MTLSCertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MTLSCertificateCreateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca?: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates?: string;

  /**
   * When the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The certificate serial number.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * This is the time the certificate was updated.
   */
  updated_at?: string;

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
}

export type MTLSCertificateListResponse = Array<MTLSCertificateListResponse.MTLSCertificateListResponseItem>;

export namespace MTLSCertificateListResponse {
  export interface MTLSCertificateListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Indicates whether the certificate is a CA or leaf certificate.
     */
    ca?: boolean;

    /**
     * The uploaded root CA certificate.
     */
    certificates?: string;

    /**
     * When the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * Optional unique name for the certificate. Only used for human readability.
     */
    name?: string;

    /**
     * The certificate serial number.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * This is the time the certificate was uploaded.
     */
    uploaded_on?: string;
  }
}

export interface MTLSCertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca?: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates?: string;

  /**
   * When the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The certificate serial number.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface MTLSCertificateGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca?: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates?: string;

  /**
   * When the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The certificate serial number.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface MTLSCertificateCreateParams {
  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The private key for the certificate
   */
  private_key?: string;
}

export namespace MTLSCertificates {
  export import MTLSCertificateCreateResponse = MTLSCertificatesAPI.MTLSCertificateCreateResponse;
  export import MTLSCertificateListResponse = MTLSCertificatesAPI.MTLSCertificateListResponse;
  export import MTLSCertificateDeleteResponse = MTLSCertificatesAPI.MTLSCertificateDeleteResponse;
  export import MTLSCertificateGetResponse = MTLSCertificatesAPI.MTLSCertificateGetResponse;
  export import MTLSCertificateCreateParams = MTLSCertificatesAPI.MTLSCertificateCreateParams;
  export import Associations = AssociationsAPI.Associations;
  export import AssociationListResponse = AssociationsAPI.AssociationListResponse;
}
