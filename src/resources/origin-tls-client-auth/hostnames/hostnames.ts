// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/origin-tls-client-auth/hostnames/hostnames';
import * as CertificatesAPI from 'cloudflare/resources/origin-tls-client-auth/hostnames/certificates';

export class Hostnames extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

  /**
   * Get the Hostname Status for Client Authentication
   */
  get(zoneId: string, hostname: string, options?: Core.RequestOptions): Core.APIPromise<HostnameGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/origin_tls_client_auth/hostnames/${hostname}`,
        options,
      ) as Core.APIPromise<{ result: HostnameGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Associate a hostname to a certificate and enable, disable or invalidate the
   * association. If disabled, client certificate will not be sent to the hostname
   * even if activated at the zone level. 100 maximum associations on a single
   * certificate are allowed. Note: Use a null value for parameter _enabled_ to
   * invalidate the association.
   */
  replace(
    zoneId: string,
    body: HostnameReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameReplaceResponse | null> {
    return (
      this._client.put(`/zones/${zoneId}/origin_tls_client_auth/hostnames`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HostnameGetResponse {
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

export type HostnameReplaceResponse = Array<HostnameReplaceResponse.HostnameReplaceResponseItem>;

export namespace HostnameReplaceResponse {
  export interface HostnameReplaceResponseItem {
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

export interface HostnameReplaceParams {
  config: Array<HostnameReplaceParams.Config>;
}

export namespace HostnameReplaceParams {
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

export namespace Hostnames {
  export import HostnameGetResponse = HostnamesAPI.HostnameGetResponse;
  export import HostnameReplaceResponse = HostnamesAPI.HostnameReplaceResponse;
  export import HostnameReplaceParams = HostnamesAPI.HostnameReplaceParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
}
