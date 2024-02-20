// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/access/keys';

export class Keys extends APIResource {
  /**
   * Gets the Access key rotation settings for an account.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    return (
      this._client.get(`/accounts/${identifier}/access/keys`, options) as Core.APIPromise<{
        result: KeyListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the Access key rotation settings for an account.
   */
  replace(
    identifier: string,
    body: KeyReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyReplaceResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/keys`, { body, ...options }) as Core.APIPromise<{
        result: KeyReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Perfoms a key rotation for an account.
   */
  rotate(identifier: string, options?: Core.RequestOptions): Core.APIPromise<KeyRotateResponse> {
    return (
      this._client.post(`/accounts/${identifier}/access/keys/rotate`, options) as Core.APIPromise<{
        result: KeyRotateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type KeyListResponse = unknown | string;

export type KeyReplaceResponse = unknown | string;

export type KeyRotateResponse = unknown | string;

export interface KeyReplaceParams {
  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days: number;
}

export namespace Keys {
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyReplaceResponse = KeysAPI.KeyReplaceResponse;
  export import KeyRotateResponse = KeysAPI.KeyRotateResponse;
  export import KeyReplaceParams = KeysAPI.KeyReplaceParams;
}
