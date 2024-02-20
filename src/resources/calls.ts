// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CallsAPI from 'cloudflare/resources/calls';

export class Calls extends APIResource {
  /**
   * Creates a new Cloudflare calls app. An app is an unique enviroment where each
   * Session can access all Tracks within the app.
   */
  create(
    accountId: string,
    body: CallCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/calls/apps`, { body, ...options }) as Core.APIPromise<{
        result: CallCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit details for a single app.
   */
  update(
    accountId: string,
    appId: string,
    body: CallUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/calls/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CallUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all apps in the Cloudflare account
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<CallListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/calls/apps`, options) as Core.APIPromise<{
        result: CallListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an app from Cloudflare Calls
   */
  delete(
    accountId: string,
    appId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/calls/apps/${appId}`, options) as Core.APIPromise<{
        result: CallDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single Calls app.
   */
  get(accountId: string, appId: string, options?: Core.RequestOptions): Core.APIPromise<CallGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/calls/apps/${appId}`, options) as Core.APIPromise<{
        result: CallGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CallCreateResponse {
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
   * Bearer token to use the Calls API.
   */
  secret?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

export interface CallUpdateResponse {
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

export type CallListResponse = Array<CallListResponse.CallListResponseItem>;

export namespace CallListResponse {
  export interface CallListResponseItem {
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
}

export interface CallDeleteResponse {
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

export interface CallGetResponse {
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

export interface CallCreateParams {
  /**
   * A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface CallUpdateParams {
  /**
   * A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export namespace Calls {
  export import CallCreateResponse = CallsAPI.CallCreateResponse;
  export import CallUpdateResponse = CallsAPI.CallUpdateResponse;
  export import CallListResponse = CallsAPI.CallListResponse;
  export import CallDeleteResponse = CallsAPI.CallDeleteResponse;
  export import CallGetResponse = CallsAPI.CallGetResponse;
  export import CallCreateParams = CallsAPI.CallCreateParams;
  export import CallUpdateParams = CallsAPI.CallUpdateParams;
}
