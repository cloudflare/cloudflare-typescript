// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/stream/keys';

export class Keys extends APIResource {
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

  /**
   * Creates an RSA private key in PEM and JWK formats. Key files are only displayed
   * once after creation. Keys are created, used, and deleted independently of
   * videos, and every key can sign any video.
   */
  streamSigningKeysCreateSigningKeys(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyStreamSigningKeysCreateSigningKeysResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/keys`, options) as Core.APIPromise<{
        result: KeyStreamSigningKeysCreateSigningKeysResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   */
  streamSigningKeysListSigningKeys(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyStreamSigningKeysListSigningKeysResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/keys`, options) as Core.APIPromise<{
        result: KeyStreamSigningKeysListSigningKeysResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type KeyDeleteResponse = unknown | string;

export interface KeyStreamSigningKeysCreateSigningKeysResponse {
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

export type KeyStreamSigningKeysListSigningKeysResponse =
  Array<KeyStreamSigningKeysListSigningKeysResponse.KeyStreamSigningKeysListSigningKeysResponseItem>;

export namespace KeyStreamSigningKeysListSigningKeysResponse {
  export interface KeyStreamSigningKeysListSigningKeysResponseItem {
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

export namespace Keys {
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyStreamSigningKeysCreateSigningKeysResponse = KeysAPI.KeyStreamSigningKeysCreateSigningKeysResponse;
  export import KeyStreamSigningKeysListSigningKeysResponse = KeysAPI.KeyStreamSigningKeysListSigningKeysResponse;
}
