// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CallsAPI from 'cloudflare/resources/calls';
import { SinglePage } from 'cloudflare/pagination';

export class Calls extends APIResource {
  /**
   * Creates a new Cloudflare calls app. An app is an unique enviroment where each
   * Session can access all Tracks within the app.
   */
  create(params: CallCreateParams, options?: Core.RequestOptions): Core.APIPromise<CallsAppWithSecret> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/calls/apps`, { body, ...options }) as Core.APIPromise<{
        result: CallsAppWithSecret;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit details for a single app.
   */
  update(appId: string, params: CallUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CallsApp> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/calls/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CallsApp }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all apps in the Cloudflare account
   */
  list(
    params: CallListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CallsAppsSinglePage, CallsApp> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/calls/apps`, CallsAppsSinglePage, options);
  }

  /**
   * Deletes an app from Cloudflare Calls
   */
  delete(appId: string, params: CallDeleteParams, options?: Core.RequestOptions): Core.APIPromise<CallsApp> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/calls/apps/${appId}`, options) as Core.APIPromise<{
        result: CallsApp;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single Calls app.
   */
  get(appId: string, params: CallGetParams, options?: Core.RequestOptions): Core.APIPromise<CallsApp> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/calls/apps/${appId}`, options) as Core.APIPromise<{
        result: CallsApp;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CallsAppsSinglePage extends SinglePage<CallsApp> {}

export interface CallsApp {
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

export interface CallsAppWithSecret {
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

export interface CallCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface CallUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A short description of Calls app, not shown to end users.
   */
  name?: string;
}

export interface CallListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface CallDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface CallGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Calls {
  export import CallsApp = CallsAPI.CallsApp;
  export import CallsAppWithSecret = CallsAPI.CallsAppWithSecret;
  export import CallsAppsSinglePage = CallsAPI.CallsAppsSinglePage;
  export import CallCreateParams = CallsAPI.CallCreateParams;
  export import CallUpdateParams = CallsAPI.CallUpdateParams;
  export import CallListParams = CallsAPI.CallListParams;
  export import CallDeleteParams = CallsAPI.CallDeleteParams;
  export import CallGetParams = CallsAPI.CallGetParams;
}
