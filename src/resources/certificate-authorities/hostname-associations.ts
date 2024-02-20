// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HostnameAssociationsAPI from 'cloudflare/resources/certificate-authorities/hostname-associations';

export class HostnameAssociations extends APIResource {
  /**
   * Replace Hostname Associations
   */
  update(
    zoneId: string,
    body: HostnameAssociationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameAssociationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Hostname Associations
   */
  list(
    zoneId: string,
    query?: HostnameAssociationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationListResponse>;
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HostnameAssociationListResponse>;
  list(
    zoneId: string,
    query: HostnameAssociationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HostnameAssociationListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HostnameAssociationUpdateResponse {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationListResponse {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationUpdateParams {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationListParams {
  /**
   * The UUID to match against for a certificate that was uploaded to the mTLS
   * Certificate Management endpoint. If no mtls_certificate_id is given, the results
   * will be the hostnames associated to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export namespace HostnameAssociations {
  export import HostnameAssociationUpdateResponse = HostnameAssociationsAPI.HostnameAssociationUpdateResponse;
  export import HostnameAssociationListResponse = HostnameAssociationsAPI.HostnameAssociationListResponse;
  export import HostnameAssociationUpdateParams = HostnameAssociationsAPI.HostnameAssociationUpdateParams;
  export import HostnameAssociationListParams = HostnameAssociationsAPI.HostnameAssociationListParams;
}
