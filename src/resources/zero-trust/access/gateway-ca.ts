// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class GatewayCA extends APIResource {
  /**
   * Adds a new SSH Certificate Authority (CA).
   */
  create(params: GatewayCACreateParams, options?: RequestOptions): APIPromise<GatewayCACreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/gateway_ca`, options) as APIPromise<{
        result: GatewayCACreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists SSH Certificate Authorities (CA).
   */
  list(
    params: GatewayCAListParams,
    options?: RequestOptions,
  ): PagePromise<GatewayCAListResponsesSinglePage, GatewayCAListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/gateway_ca`,
      SinglePage<GatewayCAListResponse>,
      options,
    );
  }

  /**
   * Deletes an SSH Certificate Authority.
   */
  delete(
    certificateID: string,
    params: GatewayCADeleteParams,
    options?: RequestOptions,
  ): APIPromise<GatewayCADeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/gateway_ca/${certificateID}`,
        options,
      ) as APIPromise<{ result: GatewayCADeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type GatewayCAListResponsesSinglePage = SinglePage<GatewayCAListResponse>;

export interface GatewayCACreateResponse {
  /**
   * The key ID of this certificate.
   */
  id?: string;

  /**
   * The public key of this certificate.
   */
  public_key?: string;
}

export interface GatewayCAListResponse {
  /**
   * The key ID of this certificate.
   */
  id?: string;

  /**
   * The public key of this certificate.
   */
  public_key?: string;
}

export interface GatewayCADeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface GatewayCACreateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface GatewayCAListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface GatewayCADeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace GatewayCA {
  export {
    type GatewayCACreateResponse as GatewayCACreateResponse,
    type GatewayCAListResponse as GatewayCAListResponse,
    type GatewayCADeleteResponse as GatewayCADeleteResponse,
    type GatewayCAListResponsesSinglePage as GatewayCAListResponsesSinglePage,
    type GatewayCACreateParams as GatewayCACreateParams,
    type GatewayCAListParams as GatewayCAListParams,
    type GatewayCADeleteParams as GatewayCADeleteParams,
  };
}
