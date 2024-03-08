// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HostnameAssociationsAPI from 'cloudflare/resources/certificate-authorities/hostname-associations';

export class HostnameAssociations extends APIResource {
  /**
   * Replace Hostname Associations
   */
  update(
    params: HostnameAssociationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSCertificatesAndHostnamesHostnameAssociation> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/certificate_authorities/hostname_associations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TLSCertificatesAndHostnamesHostnameAssociation }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Hostname Associations
   */
  get(
    params: HostnameAssociationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSCertificatesAndHostnamesHostnameAssociation> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/certificate_authorities/hostname_associations`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TLSCertificatesAndHostnamesHostnameAssociation }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TLSCertificatesAndHostnamesHostnameAssociation {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  hostnames?: Array<string>;

  /**
   * Body param: The UUID for a certificate that was uploaded to the mTLS Certificate
   * Management endpoint. If no mtls_certificate_id is given, the hostnames will be
   * associated to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The UUID to match against for a certificate that was uploaded to
   * the mTLS Certificate Management endpoint. If no mtls_certificate_id is given,
   * the results will be the hostnames associated to your active Cloudflare Managed
   * CA.
   */
  mtls_certificate_id?: string;
}

export namespace HostnameAssociations {
  export import TLSCertificatesAndHostnamesHostnameAssociation = HostnameAssociationsAPI.TLSCertificatesAndHostnamesHostnameAssociation;
  export import HostnameAssociationUpdateParams = HostnameAssociationsAPI.HostnameAssociationUpdateParams;
  export import HostnameAssociationGetParams = HostnameAssociationsAPI.HostnameAssociationGetParams;
}
