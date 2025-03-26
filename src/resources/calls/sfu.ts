// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SFU extends APIResource {
  /**
   * Creates a new Cloudflare calls app. An app is an unique enviroment where each
   * Session can access all Tracks within the app.
   */
  create(params: SFUCreateParams, options?: RequestOptions): APIPromise<SFUCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/calls/apps`, { body, ...options }) as APIPromise<{
        result: SFUCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit details for a single app.
   */
  update(appID: string, params: SFUUpdateParams, options?: RequestOptions): APIPromise<SFUUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/calls/apps/${appID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SFUUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all apps in the Cloudflare account
   */
  list(
    params: SFUListParams,
    options?: RequestOptions,
  ): PagePromise<SFUListResponsesSinglePage, SFUListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/calls/apps`,
      SinglePage<SFUListResponse>,
      options,
    );
  }

  /**
   * Deletes an app from Cloudflare Calls
   */
  delete(appID: string, params: SFUDeleteParams, options?: RequestOptions): APIPromise<SFUDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/calls/apps/${appID}`, options) as APIPromise<{
        result: SFUDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single Calls app.
   */
  get(appID: string, params: SFUGetParams, options?: RequestOptions): APIPromise<SFUGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/calls/apps/${appID}`, options) as APIPromise<{
        result: SFUGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SFUListResponsesSinglePage = SinglePage<SFUListResponse>;

export interface SFUCreateResponse {
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
   * Bearer token
   */
  secret?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

export interface SFUUpdateResponse {
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

export interface SFUListResponse {
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

export interface SFUDeleteResponse {
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

export interface SFUGetResponse {
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

export interface SFUCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface SFUUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface SFUListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SFUDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SFUGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export declare namespace SFU {
  export {
    type SFUCreateResponse as SFUCreateResponse,
    type SFUUpdateResponse as SFUUpdateResponse,
    type SFUListResponse as SFUListResponse,
    type SFUDeleteResponse as SFUDeleteResponse,
    type SFUGetResponse as SFUGetResponse,
    type SFUListResponsesSinglePage as SFUListResponsesSinglePage,
    type SFUCreateParams as SFUCreateParams,
    type SFUUpdateParams as SFUUpdateParams,
    type SFUListParams as SFUListParams,
    type SFUDeleteParams as SFUDeleteParams,
    type SFUGetParams as SFUGetParams,
  };
}
