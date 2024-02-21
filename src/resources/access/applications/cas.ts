// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CasAPI from 'cloudflare/resources/access/applications/cas';

export class Cas extends APIResource {
  /**
   * Generates a new short-lived certificate CA and public key.
   */
  create(
    uuid: string,
    params: CaCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaCreateResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.post(`/${account_id}/${zone_id}/access/apps/${uuid}/ca`, options) as Core.APIPromise<{
        result: CaCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   */
  list(params: CaListParams, options?: Core.RequestOptions): Core.APIPromise<CaListResponse | null> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(`/${account_id}/${zone_id}/access/apps/ca`, options) as Core.APIPromise<{
        result: CaListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a short-lived certificate CA.
   */
  delete(
    uuid: string,
    params: CaDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaDeleteResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.delete(`/${account_id}/${zone_id}/access/apps/${uuid}/ca`, options) as Core.APIPromise<{
        result: CaDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   */
  get(uuid: string, params: CaGetParams, options?: Core.RequestOptions): Core.APIPromise<CaGetResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(`/${account_id}/${zone_id}/access/apps/${uuid}/ca`, options) as Core.APIPromise<{
        result: CaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CaCreateResponse = unknown | string;

export type CaListResponse = Array<CaListResponse.CaListResponseItem>;

export namespace CaListResponse {
  export interface CaListResponseItem {
    /**
     * The ID of the CA.
     */
    id?: string;

    /**
     * The Application Audience (AUD) tag. Identifies the application associated with
     * the CA.
     */
    aud?: string;

    /**
     * The public key to add to your SSH server configuration.
     */
    public_key?: string;
  }
}

export interface CaDeleteResponse {
  /**
   * The ID of the CA.
   */
  id?: string;
}

export type CaGetResponse = unknown | string;

export interface CaCreateParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CaListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CaDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CaGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export namespace Cas {
  export import CaCreateResponse = CasAPI.CaCreateResponse;
  export import CaListResponse = CasAPI.CaListResponse;
  export import CaDeleteResponse = CasAPI.CaDeleteResponse;
  export import CaGetResponse = CasAPI.CaGetResponse;
  export import CaCreateParams = CasAPI.CaCreateParams;
  export import CaListParams = CasAPI.CaListParams;
  export import CaDeleteParams = CasAPI.CaDeleteParams;
  export import CaGetParams = CasAPI.CaGetParams;
}
