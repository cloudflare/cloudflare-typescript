// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Sfu extends APIResource {
  /**
   * Creates a new Cloudflare calls app. An app is an unique enviroment where each
   * Session can access all Tracks within the app.
   */
  create(params: SfuCreateParams, options?: Core.RequestOptions): Core.APIPromise<SfuCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/calls/apps`, { body, ...options }) as Core.APIPromise<{
        result: SfuCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit details for a single app.
   */
  update(
    appId: string,
    params: SfuUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SfuUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/calls/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SfuUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all apps in the Cloudflare account
   */
  list(
    params: SfuListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SfuListResponsesSinglePage, SfuListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/calls/apps`, SfuListResponsesSinglePage, options);
  }

  /**
   * Deletes an app from Cloudflare Calls
   */
  delete(
    appId: string,
    params: SfuDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SfuDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/calls/apps/${appId}`, options) as Core.APIPromise<{
        result: SfuDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single Calls app.
   */
  get(appId: string, params: SfuGetParams, options?: Core.RequestOptions): Core.APIPromise<SfuGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/calls/apps/${appId}`, options) as Core.APIPromise<{
        result: SfuGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SfuListResponsesSinglePage extends SinglePage<SfuListResponse> {}

export interface SfuCreateResponse {
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

export interface SfuUpdateResponse {
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

export interface SfuListResponse {
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

export interface SfuDeleteResponse {
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

export interface SfuGetResponse {
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

export interface SfuCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface SfuUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface SfuListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SfuDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SfuGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

Sfu.SfuListResponsesSinglePage = SfuListResponsesSinglePage;

export declare namespace Sfu {
  export {
    type SfuCreateResponse as SfuCreateResponse,
    type SfuUpdateResponse as SfuUpdateResponse,
    type SfuListResponse as SfuListResponse,
    type SfuDeleteResponse as SfuDeleteResponse,
    type SfuGetResponse as SfuGetResponse,
    SfuListResponsesSinglePage as SfuListResponsesSinglePage,
    type SfuCreateParams as SfuCreateParams,
    type SfuUpdateParams as SfuUpdateParams,
    type SfuListParams as SfuListParams,
    type SfuDeleteParams as SfuDeleteParams,
    type SfuGetParams as SfuGetParams,
  };
}
