// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/access/keys';

export class Keys extends APIResource {
  /**
   * Updates the Access key rotation settings for an account.
   */
  update(
    identifier: string,
    body: KeyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyUpdateResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/keys`, { body, ...options }) as Core.APIPromise<{
        result: KeyUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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

export type KeyUpdateResponse = unknown | string;

export type KeyListResponse = unknown | string;

export type KeyRotateResponse = unknown | string;

export interface KeyUpdateParams {
  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days: number;
}

export namespace Keys {
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyRotateResponse = KeysAPI.KeyRotateResponse;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
}
