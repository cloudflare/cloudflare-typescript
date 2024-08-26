// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Certificates } from './certificates';
import * as HostnamesAPI from './hostnames';
import * as CertificatesAPI from './certificates';
import { SinglePage } from '../../../pagination';

export class Hostnames extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

  /**
   * Associate a hostname to a certificate and enable, disable or invalidate the
   * association. If disabled, client certificate will not be sent to the hostname
   * even if activated at the zone level. 100 maximum associations on a single
   * certificate are allowed. Note: Use a null value for parameter _enabled_ to
   * invalidate the association.
   */
  update(params: HostnameUpdateParams, options?: Core.RequestOptions): Core.APIPromise<HostnameUpdateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.put(`/zones/${zone_id}/origin_tls_client_auth/hostnames`, { body, ...options }) as Core.APIPromise<{ result: HostnameUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Hostname Status for Client Authentication
   */
  get(hostname: string, params: HostnameGetParams, options?: Core.RequestOptions): Core.APIPromise<AuthenticatedOriginPull> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/origin_tls_client_auth/hostnames/${hostname}`, options) as Core.APIPromise<{ result: AuthenticatedOriginPull }>)._thenUnwrap((obj) => obj.result);
  }
}

export class AuthenticatedOriginPullsSinglePage extends SinglePage<AuthenticatedOriginPull> {
}

export interface AuthenticatedOriginPull {
  /**
   * Identifier
   */
  cert_id?: string;

  /**
   * Status of the certificate or the association.
   */
  cert_status?: 'initializing' | 'pending_deployment' | 'pending_deletion' | 'active' | 'deleted' | 'deployment_timed_out' | 'deletion_timed_out';

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
  status?: 'initializing' | 'pending_deployment' | 'pending_deletion' | 'active' | 'deleted' | 'deployment_timed_out' | 'deletion_timed_out';

  /**
   * The time when the certificate was updated.
   */
  updated_at?: string;
}

export type HostnameUpdateResponse = Array<AuthenticatedOriginPull>

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

export namespace Hostnames {
  export import AuthenticatedOriginPull = HostnamesAPI.AuthenticatedOriginPull;
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import HostnameGetParams = HostnamesAPI.HostnameGetParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import Certificate = CertificatesAPI.Certificate;
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
}
