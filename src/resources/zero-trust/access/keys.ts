// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Updates the Access key rotation settings for an account.
   */
  update(params: KeyUpdateParams, options?: RequestOptions): APIPromise<KeyUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/keys`, { body, ...options }) as APIPromise<{
        result: KeyUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Access key rotation settings for an account.
   */
  get(params: KeyGetParams, options?: RequestOptions): APIPromise<KeyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/access/keys`, options) as APIPromise<{
        result: KeyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Perfoms a key rotation for an account.
   */
  rotate(params: KeyRotateParams, options?: RequestOptions): APIPromise<KeyRotateResponse> {
    const { account_id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/keys/rotate`, options) as APIPromise<{
        result: KeyRotateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface KeyUpdateResponse {
  /**
   * The number of days until the next key rotation.
   */
  days_until_next_rotation?: number;

  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days?: number;

  /**
   * The timestamp of the previous key rotation.
   */
  last_key_rotation_at?: string;
}

export interface KeyGetResponse {
  /**
   * The number of days until the next key rotation.
   */
  days_until_next_rotation?: number;

  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days?: number;

  /**
   * The timestamp of the previous key rotation.
   */
  last_key_rotation_at?: string;
}

export interface KeyRotateResponse {
  /**
   * The number of days until the next key rotation.
   */
  days_until_next_rotation?: number;

  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days?: number;

  /**
   * The timestamp of the previous key rotation.
   */
  last_key_rotation_at?: string;
}

export interface KeyUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The number of days between key rotations.
   */
  key_rotation_interval_days: number;
}

export interface KeyGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface KeyRotateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Keys {
  export {
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyGetResponse as KeyGetResponse,
    type KeyRotateResponse as KeyRotateResponse,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyGetParams as KeyGetParams,
    type KeyRotateParams as KeyRotateParams,
  };
}
