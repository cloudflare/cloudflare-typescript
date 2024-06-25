// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as KeysAPI from './keys';
import { SinglePage } from '../../../pagination';

export class Keys extends APIResource {
  /**
   * Creates a new Cloudflare Calls TURN key.
   */
  create(params: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<KeyCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/calls/turn_keys`, { body, ...options });
  }

  /**
   * Edit details for a single TURN key.
   */
  update(
    keyId: string,
    params: KeyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/calls/turn_keys/${keyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: KeyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all TURN keys in the Cloudflare account
   */
  list(
    params: KeyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<KeyListResponsesSinglePage, KeyListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/calls/turn_keys`,
      KeyListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes a TURN key from Cloudflare Calls
   */
  delete(
    keyId: string,
    params: KeyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/calls/turn_keys/${keyId}`, options) as Core.APIPromise<{
        result: KeyDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single TURN key.
   */
  get(keyId: string, params: KeyGetParams, options?: Core.RequestOptions): Core.APIPromise<KeyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/calls/turn_keys/${keyId}`, options) as Core.APIPromise<{
        result: KeyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class KeyListResponsesSinglePage extends SinglePage<KeyListResponse> {}

export interface KeyCreateResponse {
  /**
   * The date and time the item was created.
   */
  created?: string;

  /**
   * Bearer token
   */
  key?: string;

  /**
   * The date and time the item was last modified.
   */
  modified?: string;

  /**
   * A short description of a TURN key, not shown to end users.
   */
  name?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

/**
 * Bearer token
 */
export type KeyUpdateResponse = string;

/**
 * Bearer token
 */
export type KeyListResponse = string;

/**
 * Bearer token
 */
export type KeyDeleteResponse = string;

/**
 * Bearer token
 */
export type KeyGetResponse = string;

export interface KeyCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of a TURN key, not shown to end users.
   */
  name?: string;
}

export interface KeyUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of a TURN key, not shown to end users.
   */
  name?: string;
}

export interface KeyListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface KeyDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface KeyGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Keys {
  export import KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyListResponsesSinglePage = KeysAPI.KeyListResponsesSinglePage;
  export import KeyCreateParams = KeysAPI.KeyCreateParams;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export import KeyGetParams = KeysAPI.KeyGetParams;
}
