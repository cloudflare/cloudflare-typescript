// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/zero-trust/access/keys';
import * as Shared from 'cloudflare/resources/shared';

export class Keys extends APIResource {
  /**
   * Updates the Access key rotation settings for an account.
   */
  update(
    identifier: string,
    body: KeyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f> {
    return (
      this._client.put(`/accounts/${identifier}/access/keys`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Access key rotation settings for an account.
   */
  get(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f> {
    return (
      this._client.get(`/accounts/${identifier}/access/keys`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Perfoms a key rotation for an account.
   */
  rotate(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f> {
    return (
      this._client.post(`/accounts/${identifier}/access/keys/rotate`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface KeyUpdateParams {
  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days: number;
}

export namespace Keys {
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
}
