// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/origin-tls-client-auth/hostnames/certificates';
import * as HostnamesAPI from 'cloudflare/resources/origin-tls-client-auth/hostnames/hostnames';
import { OriginTLSClientCertificateIDsSinglePage } from 'cloudflare/resources/origin-tls-client-auth/hostnames/hostnames';

export class Certificates extends APIResource {
  /**
   * Upload a certificate to be used for client authentication on a hostname. 10
   * hostname certificates per zone are allowed.
   */
  create(
    params: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientCertificate> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginTLSClientCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   */
  list(
    params: CertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginTLSClientCertificateIDsSinglePage, HostnamesAPI.OriginTLSClientCertificateID> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates`,
      OriginTLSClientCertificateIDsSinglePage,
      options,
    );
  }

  /**
   * Delete Hostname Client Certificate
   */
  delete(
    certificateId: string,
    params: CertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientCertificate> {
    const { zone_id, body } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates/${certificateId}`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: OriginTLSClientCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the certificate by ID to be used for client authentication on a hostname.
   */
  get(
    certificateId: string,
    params: CertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientCertificate> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/origin_tls_client_auth/hostnames/certificates/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: OriginTLSClientCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OriginTLSClientCertificate {
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface CertificateGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Certificates {
  export import OriginTLSClientCertificate = CertificatesAPI.OriginTLSClientCertificate;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
}

export { OriginTLSClientCertificateIDsSinglePage };
