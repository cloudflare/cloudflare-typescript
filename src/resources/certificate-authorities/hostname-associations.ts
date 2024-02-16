// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HostnameAssociationsAPI from 'cloudflare/resources/certificate-authorities/hostname-associations';

export class HostnameAssociations extends APIResource {
  /**
   * List Hostname Associations
   */
  clientCertificateForAZoneListHostnameAssociations(
    zoneId: string,
    query?: HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse>;
  clientCertificateForAZoneListHostnameAssociations(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse>;
  clientCertificateForAZoneListHostnameAssociations(
    zoneId: string,
    query:
      | HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams
      | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse> {
    if (isRequestOptions(query)) {
      return this.clientCertificateForAZoneListHostnameAssociations(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
        query,
        ...options,
      }) as Core.APIPromise<{
        result: HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replace Hostname Associations
   */
  clientCertificateForAZonePutHostnameAssociations(
    zoneId: string,
    body: HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse> {
    return (
      this._client.put(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams {
  /**
   * The UUID to match against for a certificate that was uploaded to the mTLS
   * Certificate Management endpoint. If no mtls_certificate_id is given, the results
   * will be the hostnames associated to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export namespace HostnameAssociations {
  export import HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse;
  export import HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse;
  export import HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams;
  export import HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams;
}
