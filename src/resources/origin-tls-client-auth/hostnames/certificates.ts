// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HostnamesAPI from './hostnames';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Certificates extends APIResource {
  /**
   * Upload a certificate to be used for client authentication on a hostname. 10
   * hostname certificates per zone are allowed.
   */
  create(params: CertificateCreateParams, options?: RequestOptions): APIPromise<CertificateCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates`, {
        body,
        ...options,
      }) as APIPromise<{ result: CertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   */
  list(
    params: CertificateListParams,
    options?: RequestOptions,
  ): PagePromise<CertificateListResponsesSinglePage, CertificateListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates`,
      SinglePage<CertificateListResponse>,
      options,
    );
  }

  /**
   * Delete Hostname Client Certificate
   */
  delete(
    certificateID: string,
    params: CertificateDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CertificateDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates/${certificateID}`,
        options,
      ) as APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the certificate by ID to be used for client authentication on a hostname.
   */
  get(
    certificateID: string,
    params: CertificateGetParams,
    options?: RequestOptions,
  ): APIPromise<CertificateGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates/${certificateID}`,
        options,
      ) as APIPromise<{ result: CertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CertificateListResponsesSinglePage = SinglePage<CertificateListResponse>;

export interface Certificate {
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

export interface CertificateListResponse extends HostnamesAPI.AuthenticatedOriginPull {
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

export declare namespace Certificates {
  export {
    type Certificate as Certificate,
    type CertificateCreateResponse as CertificateCreateResponse,
    type CertificateListResponse as CertificateListResponse,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificateGetResponse as CertificateGetResponse,
    type CertificateListResponsesSinglePage as CertificateListResponsesSinglePage,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateGetParams as CertificateGetParams,
  };
}
