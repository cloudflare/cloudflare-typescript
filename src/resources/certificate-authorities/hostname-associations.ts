// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class HostnameAssociations extends APIResource {
  /**
   * Replace Hostname Associations
   */
  update(
    params?: HostnameAssociationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<HostnameAssociationUpdateResponse>;
  update(
    params: HostnameAssociationUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationUpdateResponse> {
    if (isRequestOptions(params)) {
      return this.update({}, params);
    }
    const { zone_id = this._client.zoneId, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/certificate_authorities/hostname_associations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameAssociationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Hostname Associations
   */
  get(
    params?: HostnameAssociationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<HostnameAssociationGetResponse>;
  get(
    params: HostnameAssociationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { zone_id = this._client.zoneId, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/certificate_authorities/hostname_associations`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HostnameAssociationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type HostnameAssociation = string;

export type HostnameAssociationParam = string;

export interface TLSHostnameAssociation {
  hostnames?: Array<HostnameAssociation>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationUpdateResponse {
  hostnames?: Array<HostnameAssociation>;
}

export interface HostnameAssociationGetResponse {
  hostnames?: Array<HostnameAssociation>;
}

export interface HostnameAssociationUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param
   */
  hostnames?: Array<HostnameAssociationParam>;

  /**
   * Body param: The UUID for a certificate that was uploaded to the mTLS Certificate
   * Management endpoint. If no mtls_certificate_id is given, the hostnames will be
   * associated to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Query param: The UUID to match against for a certificate that was uploaded to
   * the mTLS Certificate Management endpoint. If no mtls_certificate_id is given,
   * the results will be the hostnames associated to your active Cloudflare Managed
   * CA.
   */
  mtls_certificate_id?: string;
}

export declare namespace HostnameAssociations {
  export {
    type HostnameAssociation as HostnameAssociation,
    type TLSHostnameAssociation as TLSHostnameAssociation,
    type HostnameAssociationUpdateResponse as HostnameAssociationUpdateResponse,
    type HostnameAssociationGetResponse as HostnameAssociationGetResponse,
    type HostnameAssociationUpdateParams as HostnameAssociationUpdateParams,
    type HostnameAssociationGetParams as HostnameAssociationGetParams,
  };
}
