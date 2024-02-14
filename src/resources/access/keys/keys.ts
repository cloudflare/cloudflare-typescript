// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/access/keys/keys';
import * as RotatesAPI from 'cloudflare/resources/access/keys/rotates';

export class Keys extends APIResource {
  rotates: RotatesAPI.Rotates = new RotatesAPI.Rotates(this._client);

  /**
   * Gets the Access key rotation settings for an account.
   */
  accessKeyConfigurationGetTheAccessKeyConfiguration(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse> {
    return (
      this._client.get(`/accounts/${identifier}/access/keys`, options) as Core.APIPromise<{
        result: KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the Access key rotation settings for an account.
   */
  accessKeyConfigurationUpdateTheAccessKeyConfiguration(
    identifier: string,
    body: KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/keys`, { body, ...options }) as Core.APIPromise<{
        result: KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse = unknown | string;

export type KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse = unknown | string;

export interface KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams {
  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days: number;
}

export namespace Keys {
  export import KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams;
  export import Rotates = RotatesAPI.Rotates;
  export import RotateAccessKeyConfigurationRotateAccessKeysResponse = RotatesAPI.RotateAccessKeyConfigurationRotateAccessKeysResponse;
}
