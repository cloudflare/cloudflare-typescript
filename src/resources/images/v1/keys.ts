// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/images/v1/keys';

export class Keys extends APIResource {
  /**
   * Create a new signing key with specified name. Returns all keys available.
   */
  update(
    signingKeyName: string,
    params: KeyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Key> {
    const { account_id } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/images/v1/keys/${signingKeyName}`,
        options,
      ) as Core.APIPromise<{ result: Key }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists your signing keys. These can be found on your Cloudflare Images dashboard.
   */
  list(params: KeyListParams, options?: Core.RequestOptions): Core.APIPromise<Key> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/keys`, options) as Core.APIPromise<{ result: Key }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete signing key with specified name. Returns all keys available. When last
   * key is removed, a new default signing key will be generated.
   */
  delete(
    signingKeyName: string,
    params: KeyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Key> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/images/v1/keys/${signingKeyName}`,
        options,
      ) as Core.APIPromise<{ result: Key }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Key {
  keys?: Array<Key.Key>;
}

export namespace Key {
  export interface Key {
    /**
     * Key name.
     */
    name?: string;

    /**
     * Key value.
     */
    value?: string;
  }
}

export interface KeyUpdateParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface KeyListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface KeyDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace Keys {
  export import Key = KeysAPI.Key;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
}
