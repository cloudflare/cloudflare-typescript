// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CAsAPI from 'cloudflare/resources/access/applications/cas';

export class CAs extends APIResource {
  /**
   * Generates a new short-lived certificate CA and public key.
   */
  create(
    uuid: string,
    params: CACreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CACreateResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.post(`/${account_id}/${zone_id}/access/apps/${uuid}/ca`, options) as Core.APIPromise<{
        result: CACreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   */
  list(params: CAListParams, options?: Core.RequestOptions): Core.APIPromise<CAListResponse | null> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(`/${account_id}/${zone_id}/access/apps/ca`, options) as Core.APIPromise<{
        result: CAListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a short-lived certificate CA.
   */
  delete(
    uuid: string,
    params: CADeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CADeleteResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.delete(`/${account_id}/${zone_id}/access/apps/${uuid}/ca`, options) as Core.APIPromise<{
        result: CADeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   */
  get(uuid: string, params: CAGetParams, options?: Core.RequestOptions): Core.APIPromise<CAGetResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(`/${account_id}/${zone_id}/access/apps/${uuid}/ca`, options) as Core.APIPromise<{
        result: CAGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CACreateResponse = unknown | string;

export type CAListResponse = Array<CAListResponse.CAListResponseItem>;

export namespace CAListResponse {
  export interface CAListResponseItem {
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

export interface CADeleteResponse {
  /**
   * The ID of the CA.
   */
  id?: string;
}

export type CAGetResponse = unknown | string;

export interface CACreateParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CAListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CADeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CAGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export namespace CAs {
  export import CACreateResponse = CAsAPI.CACreateResponse;
  export import CAListResponse = CAsAPI.CAListResponse;
  export import CADeleteResponse = CAsAPI.CADeleteResponse;
  export import CAGetResponse = CAsAPI.CAGetResponse;
  export import CACreateParams = CAsAPI.CACreateParams;
  export import CAListParams = CAsAPI.CAListParams;
  export import CADeleteParams = CAsAPI.CADeleteParams;
  export import CAGetParams = CAsAPI.CAGetParams;
}
