// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TURNAPI from './turn/turn';
import { SinglePage } from '../../pagination';

export class Calls extends APIResource {
  turn: TURNAPI.TURN = new TURNAPI.TURN(this._client);

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
  ): Core.PagePromise<CallListResponsesSinglePage, CallListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/calls/apps`,
      CallListResponsesSinglePage,
      options,
    );
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

export class CallListResponsesSinglePage extends SinglePage<CallListResponse> {}

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
   * Bearer token
   */
  secret?: string;

  /**
   * A Cloudflare-generated unique identifier for a item.
   */
  uid?: string;
}

/**
 * Bearer token
 */
export type CallListResponse = string;

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
  export import TURN = TURNAPI.TURN;
}
