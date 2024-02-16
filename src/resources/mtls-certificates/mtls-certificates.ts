// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MtlsCertificatesAPI from 'cloudflare/resources/mtls-certificates/mtls-certificates';
import * as AssociationsAPI from 'cloudflare/resources/mtls-certificates/associations';

export class MtlsCertificates extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);

  /**
   * Upload a certificate that you want to use with mTLS-enabled Cloudflare services.
   */
  update(
    accountId: string,
    body: MtlsCertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateUpdateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/mtls_certificates`, { body, ...options }) as Core.APIPromise<{
        result: MtlsCertificateUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS certificates.
   */
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/mtls_certificates`, options) as Core.APIPromise<{
        result: MtlsCertificateListResponse | null;
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
  ): Core.APIPromise<MtlsCertificateDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MtlsCertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate.
   */
  get(
    accountId: string,
    mtlsCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MtlsCertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MtlsCertificateUpdateResponse {
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

export type MtlsCertificateListResponse = Array<MtlsCertificateListResponse.MtlsCertificateListResponseItem>;

export namespace MtlsCertificateListResponse {
  export interface MtlsCertificateListResponseItem {
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

export interface MtlsCertificateDeleteResponse {
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

export interface MtlsCertificateGetResponse {
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

export interface MtlsCertificateUpdateParams {
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

export namespace MtlsCertificates {
  export import MtlsCertificateUpdateResponse = MtlsCertificatesAPI.MtlsCertificateUpdateResponse;
  export import MtlsCertificateListResponse = MtlsCertificatesAPI.MtlsCertificateListResponse;
  export import MtlsCertificateDeleteResponse = MtlsCertificatesAPI.MtlsCertificateDeleteResponse;
  export import MtlsCertificateGetResponse = MtlsCertificatesAPI.MtlsCertificateGetResponse;
  export import MtlsCertificateUpdateParams = MtlsCertificatesAPI.MtlsCertificateUpdateParams;
  export import Associations = AssociationsAPI.Associations;
  export import AssociationListResponse = AssociationsAPI.AssociationListResponse;
}
