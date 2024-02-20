// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HostnameAssociationsAPI from 'cloudflare/resources/certificate-authorities/hostname-associations';

export class HostnameAssociations extends APIResource {
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

  /**
   * Replace Hostname Associations
   */
  replace(
    zoneId: string,
    body: HostnameAssociationReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/certificate_authorities/hostname_associations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameAssociationReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export interface HostnameAssociationReplaceResponse {
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

export interface HostnameAssociationReplaceParams {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export namespace HostnameAssociations {
  export import HostnameAssociationListResponse = HostnameAssociationsAPI.HostnameAssociationListResponse;
  export import HostnameAssociationReplaceResponse = HostnameAssociationsAPI.HostnameAssociationReplaceResponse;
  export import HostnameAssociationListParams = HostnameAssociationsAPI.HostnameAssociationListParams;
  export import HostnameAssociationReplaceParams = HostnameAssociationsAPI.HostnameAssociationReplaceParams;
}
