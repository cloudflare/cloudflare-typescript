// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseHostnameAssociations extends APIResource {
  static override readonly _key: readonly ['certificateAuthorities', 'hostnameAssociations'] = Object.freeze([
    'certificateAuthorities',
    'hostnameAssociations',
  ] as const);

  /**
   * Replace Hostname Associations.
   */
  update(
    params: HostnameAssociationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<HostnameAssociationUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/certificate_authorities/hostname_associations`, {
        body,
        ...options,
      }) as APIPromise<{ result: HostnameAssociationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Hostname Associations.
   */
  get(
    params: HostnameAssociationGetParams,
    options?: RequestOptions,
  ): APIPromise<HostnameAssociationGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/certificate_authorities/hostname_associations`, {
        query,
        ...options,
      }) as APIPromise<{ result: HostnameAssociationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class HostnameAssociations extends BaseHostnameAssociations {}

export interface TLSHostnameAssociation {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationUpdateResponse {
  hostnames?: Array<string>;
}

export interface HostnameAssociationGetResponse {
  hostnames?: Array<string>;
}

export interface HostnameAssociationUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
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
   * Path param: Identifier.
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

export declare namespace HostnameAssociations {
  export {
    type TLSHostnameAssociation as TLSHostnameAssociation,
    type HostnameAssociationUpdateResponse as HostnameAssociationUpdateResponse,
    type HostnameAssociationGetResponse as HostnameAssociationGetResponse,
    type HostnameAssociationUpdateParams as HostnameAssociationUpdateParams,
    type HostnameAssociationGetParams as HostnameAssociationGetParams,
  };
}
