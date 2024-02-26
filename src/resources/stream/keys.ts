// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/stream/keys';

export class Keys extends APIResource {
  /**
   * Creates an RSA private key in PEM and JWK formats. Key files are only displayed
   * once after creation. Keys are created, used, and deleted independently of
   * videos, and every key can sign any video.
   */
  create(params: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<KeyCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/keys`, options) as Core.APIPromise<{
        result: KeyCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   */
  list(params: KeyListParams, options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/keys`, options) as Core.APIPromise<{
        result: KeyListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes signing keys and revokes all signed URLs generated with the key.
   */
  delete(
    identifier: string,
    params: KeyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/stream/keys/${identifier}`, options) as Core.APIPromise<{
        result: KeyDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface KeyCreateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The date and time a signing key was created.
   */
  created?: string;

  /**
   * The signing key in JWK format.
   */
  jwk?: string;

  /**
   * The signing key in PEM format.
   */
  pem?: string;
}

export type KeyListResponse = Array<KeyListResponse.KeyListResponseItem>;

export namespace KeyListResponse {
  export interface KeyListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The date and time a signing key was created.
     */
    created?: string;
  }
}

export type KeyDeleteResponse = unknown | string;

export interface KeyCreateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface KeyListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface KeyDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Keys {
  export import KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyCreateParams = KeysAPI.KeyCreateParams;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
}
