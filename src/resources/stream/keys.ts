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
  create(accountId: string, options?: Core.RequestOptions): Core.APIPromise<KeyCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/keys`, options) as Core.APIPromise<{
        result: KeyCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/keys`, options) as Core.APIPromise<{
        result: KeyListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes signing keys and revokes all signed URLs generated with the key.
   */
  delete(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/stream/keys/${identifier}`, options) as Core.APIPromise<{
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

export namespace Keys {
  export import KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
}
