// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/stream/keys';
import * as Shared from 'cloudflare/resources/shared';

export class Keys extends APIResource {
  /**
   * Creates an RSA private key in PEM and JWK formats. Key files are only displayed
   * once after creation. Keys are created, used, and deleted independently of
   * videos, and every key can sign any video.
   */
  create(params: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<Keys> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/keys`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Keys }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes signing keys and revokes all signed URLs generated with the key.
   */
  delete(
    identifier: string,
    params: KeyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/stream/keys/${identifier}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   */
  get(params: KeyGetParams, options?: Core.RequestOptions): Core.APIPromise<KeyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/keys`, options) as Core.APIPromise<{
        result: KeyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Keys {
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

export type KeyGetResponse = Array<KeyGetResponse.KeyGetResponseItem>;

export namespace KeyGetResponse {
  export interface KeyGetResponseItem {
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

export interface KeyCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface KeyDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface KeyGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Keys {
  export import Keys = KeysAPI.Keys;
  export import KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyCreateParams = KeysAPI.KeyCreateParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export import KeyGetParams = KeysAPI.KeyGetParams;
}
