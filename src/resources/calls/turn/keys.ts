// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
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

export interface KeyUpdateResponse {
  /**
   * The date and time the item was created.
   */
  created?: string;

  /**
   * The date and time the item was last modified.
   */
  modified?: string;

  /**
   * A short description of Calls app, not shown to end users.
   */
  name?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

export interface KeyListResponse {
  /**
   * The date and time the item was created.
   */
  created?: string;

  /**
   * The date and time the item was last modified.
   */
  modified?: string;

  /**
   * A short description of Calls app, not shown to end users.
   */
  name?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

export interface KeyDeleteResponse {
  /**
   * The date and time the item was created.
   */
  created?: string;

  /**
   * The date and time the item was last modified.
   */
  modified?: string;

  /**
   * A short description of Calls app, not shown to end users.
   */
  name?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

export interface KeyGetResponse {
  /**
   * The date and time the item was created.
   */
  created?: string;

  /**
   * The date and time the item was last modified.
   */
  modified?: string;

  /**
   * A short description of Calls app, not shown to end users.
   */
  name?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

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

Keys.KeyListResponsesSinglePage = KeyListResponsesSinglePage;

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyGetResponse as KeyGetResponse,
    KeyListResponsesSinglePage as KeyListResponsesSinglePage,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyGetParams as KeyGetParams,
  };
}
