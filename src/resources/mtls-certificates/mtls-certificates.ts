// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    params: MTLSCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateUpdate> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/mtls_certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MTLSCertificateUpdate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS certificates.
   */
  list(
    params: MTLSCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mtls_certificates`, options) as Core.APIPromise<{
        result: MTLSCertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the mTLS certificate unless the certificate is in use by one or more
   * Cloudflare services.
   */
  delete(
    mtlsCertificateId: string,
    params: MTLSCertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificate> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MTLSCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate.
   */
  get(
    mtlsCertificateId: string,
    params: MTLSCertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificate> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MTLSCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MTLSCertificate {
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

export interface MTLSCertificateUpdate {
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

export type MTLSCertificateListResponse = Array<MTLSCertificate>;

export interface MTLSCertificateCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Indicates whether the certificate is a CA or leaf certificate.
   */
  ca: boolean;

  /**
   * Body param: The uploaded root CA certificate.
   */
  certificates: string;

  /**
   * Body param: Optional unique name for the certificate. Only used for human
   * readability.
   */
  name?: string;

  /**
   * Body param: The private key for the certificate
   */
  private_key?: string;
}

export interface MTLSCertificateListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface MTLSCertificateDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface MTLSCertificateGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace MTLSCertificates {
  export import MTLSCertificate = MTLSCertificatesAPI.MTLSCertificate;
  export import MTLSCertificateUpdate = MTLSCertificatesAPI.MTLSCertificateUpdate;
  export import MTLSCertificateListResponse = MTLSCertificatesAPI.MTLSCertificateListResponse;
  export import MTLSCertificateCreateParams = MTLSCertificatesAPI.MTLSCertificateCreateParams;
  export import MTLSCertificateListParams = MTLSCertificatesAPI.MTLSCertificateListParams;
  export import MTLSCertificateDeleteParams = MTLSCertificatesAPI.MTLSCertificateDeleteParams;
  export import MTLSCertificateGetParams = MTLSCertificatesAPI.MTLSCertificateGetParams;
  export import Associations = AssociationsAPI.Associations;
  export import MTLSCertificateAsssociation = AssociationsAPI.MTLSCertificateAsssociation;
  export import AssociationGetResponse = AssociationsAPI.AssociationGetResponse;
  export import AssociationGetParams = AssociationsAPI.AssociationGetParams;
}
