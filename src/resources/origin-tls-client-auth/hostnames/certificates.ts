// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/origin-tls-client-auth/hostnames/certificates';

export class Certificates extends APIResource {
  /**
   * Upload a certificate to be used for client authentication on a hostname. 10
   * hostname certificates per zone are allowed.
   */
  create(
    params: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   */
  list(
    params: CertificateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateListResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates`,
        options,
      ) as Core.APIPromise<{ result: CertificateListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Hostname Client Certificate
   */
  delete(
    certificateId: string,
    params: CertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the certificate by ID to be used for client authentication on a hostname.
   */
  get(
    certificateId: string,
    params: CertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: CertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificateCreateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The hostname certificate.
   */
  certificate?: string;

  /**
   * The date when the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * The serial number on the uploaded certificate.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * Status of the certificate or the association.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deleted'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * The time when the certificate was uploaded.
   */
  uploaded_on?: string;
}

export type CertificateListResponse = Array<CertificateListResponse.CertificateListResponseItem>;

export namespace CertificateListResponse {
  export interface CertificateListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Identifier
     */
    cert_id?: string;

    /**
     * The hostname certificate.
     */
    certificate?: string;

    /**
     * Indicates whether hostname-level authenticated origin pulls is enabled. A null
     * value voids the association.
     */
    enabled?: boolean | null;

    /**
     * The hostname on the origin for which the client certificate uploaded will be
     * used.
     */
    hostname?: string;

    /**
     * The hostname certificate's private key.
     */
    private_key?: string;
  }
}

export interface CertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The hostname certificate.
   */
  certificate?: string;

  /**
   * The date when the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * The serial number on the uploaded certificate.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * Status of the certificate or the association.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deleted'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * The time when the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface CertificateGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The hostname certificate.
   */
  certificate?: string;

  /**
   * The date when the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * The serial number on the uploaded certificate.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * Status of the certificate or the association.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deleted'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * The time when the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface CertificateCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The hostname certificate.
   */
  certificate: string;

  /**
   * Body param: The hostname certificate's private key.
   */
  private_key: string;
}

export interface CertificateListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface CertificateDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface CertificateGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Certificates {
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
}
