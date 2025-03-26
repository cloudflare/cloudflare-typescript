// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TURN extends APIResource {
  /**
   * Creates a new Cloudflare Calls TURN key.
   */
  create(params: TURNCreateParams, options?: RequestOptions): APIPromise<TURNCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/calls/turn_keys`, { body, ...options });
  }

  /**
   * Edit details for a single TURN key.
   */
  update(keyID: string, params: TURNUpdateParams, options?: RequestOptions): APIPromise<TURNUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/calls/turn_keys/${keyID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TURNUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all TURN keys in the Cloudflare account
   */
  list(
    params: TURNListParams,
    options?: RequestOptions,
  ): PagePromise<TURNListResponsesSinglePage, TURNListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/calls/turn_keys`,
      SinglePage<TURNListResponse>,
      options,
    );
  }

  /**
   * Deletes a TURN key from Cloudflare Calls
   */
  delete(keyID: string, params: TURNDeleteParams, options?: RequestOptions): APIPromise<TURNDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/calls/turn_keys/${keyID}`, options) as APIPromise<{
        result: TURNDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single TURN key.
   */
  get(keyID: string, params: TURNGetParams, options?: RequestOptions): APIPromise<TURNGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/calls/turn_keys/${keyID}`, options) as APIPromise<{
        result: TURNGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TURNListResponsesSinglePage = SinglePage<TURNListResponse>;

export interface TURNCreateResponse {
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

export interface TURNUpdateResponse {
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

export interface TURNListResponse {
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

export interface TURNDeleteResponse {
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

export interface TURNGetResponse {
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

export interface TURNCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of a TURN key, not shown to end users.
   */
  name?: string;
}

export interface TURNUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of a TURN key, not shown to end users.
   */
  name?: string;
}

export interface TURNListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface TURNDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface TURNGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export declare namespace TURN {
  export {
    type TURNCreateResponse as TURNCreateResponse,
    type TURNUpdateResponse as TURNUpdateResponse,
    type TURNListResponse as TURNListResponse,
    type TURNDeleteResponse as TURNDeleteResponse,
    type TURNGetResponse as TURNGetResponse,
    type TURNListResponsesSinglePage as TURNListResponsesSinglePage,
    type TURNCreateParams as TURNCreateParams,
    type TURNUpdateParams as TURNUpdateParams,
    type TURNListParams as TURNListParams,
    type TURNDeleteParams as TURNDeleteParams,
    type TURNGetParams as TURNGetParams,
  };
}
