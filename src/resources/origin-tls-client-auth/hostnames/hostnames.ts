// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HostnamesAPI from './hostnames';
import * as CertificatesAPI from './certificates';
import {
  Certificate,
  CertificateCreateParams,
  CertificateCreateResponse,
  CertificateDeleteParams,
  CertificateDeleteResponse,
  CertificateGetParams,
  CertificateGetResponse,
  CertificateListParams,
  CertificateListResponse,
  CertificateListResponsesSinglePage,
  Certificates,
} from './certificates';

export class Hostnames extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

  /**
   * Associate a hostname to a certificate and enable, disable or invalidate the
   * association. If disabled, client certificate will not be sent to the hostname
   * even if activated at the zone level. 100 maximum associations on a single
   * certificate are allowed. Note: Use a null value for parameter _enabled_ to
   * invalidate the association.
   */
  update(
    params: HostnameUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/origin_tls_client_auth/hostnames`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Hostname Status for Client Authentication
   */
  get(
    hostname: string,
    params: HostnameGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthenticatedOriginPull> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/origin_tls_client_auth/hostnames/${hostname}`,
        options,
      ) as Core.APIPromise<{ result: AuthenticatedOriginPull }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AuthenticatedOriginPull {
  /**
   * Identifier
   */
  cert_id?: string;

  /**
   * Status of the certificate or the association.
   */
  cert_status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deleted'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * The time when the certificate was updated.
   */
  cert_updated_at?: string;

  /**
   * The time when the certificate was uploaded.
   */
  cert_uploaded_on?: string;

  /**
   * The hostname certificate.
   */
  certificate?: string;

  /**
   * The time when the certificate was created.
   */
  created_at?: string;

  /**
   * Indicates whether hostname-level authenticated origin pulls is enabled. A null
   * value voids the association.
   */
  enabled?: boolean | null;

  /**
   * The date when the certificate expires.
   */
  expires_on?: string;

  /**
   * The hostname on the origin for which the client certificate uploaded will be
   * used.
   */
  hostname?: string;

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
   * The time when the certificate was updated.
   */
  updated_at?: string;
}

export type HostnameUpdateResponse = Array<HostnameUpdateResponse.HostnameUpdateResponseItem>;

export namespace HostnameUpdateResponse {
  export interface HostnameUpdateResponseItem extends HostnamesAPI.AuthenticatedOriginPull {
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

export interface HostnameUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  config: Array<HostnameUpdateParams.Config>;
}

export namespace HostnameUpdateParams {
  export interface Config {
    /**
     * Certificate identifier tag.
     */
    cert_id?: string;

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
  }
}

export interface HostnameGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

Hostnames.Certificates = Certificates;
Hostnames.CertificateListResponsesSinglePage = CertificateListResponsesSinglePage;

export declare namespace Hostnames {
  export {
    type AuthenticatedOriginPull as AuthenticatedOriginPull,
    type HostnameUpdateResponse as HostnameUpdateResponse,
    type HostnameUpdateParams as HostnameUpdateParams,
    type HostnameGetParams as HostnameGetParams,
  };

  export {
    Certificates as Certificates,
    type Certificate as Certificate,
    type CertificateCreateResponse as CertificateCreateResponse,
    type CertificateListResponse as CertificateListResponse,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificateGetResponse as CertificateGetResponse,
    CertificateListResponsesSinglePage as CertificateListResponsesSinglePage,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateGetParams as CertificateGetParams,
  };
}
