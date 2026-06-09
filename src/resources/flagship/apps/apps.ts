// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as EvaluateAPI from './evaluate';
import { Evaluate, EvaluateGetParams, EvaluateGetResponse } from './evaluate';
import * as FlagsAPI from './flags/flags';
import {
  FlagCreateParams,
  FlagCreateResponse,
  FlagDeleteParams,
  FlagDeleteResponse,
  FlagGetParams,
  FlagGetResponse,
  FlagListParams,
  FlagListResponse,
  FlagListResponsesCursorPaginationAfter,
  FlagUpdateParams,
  FlagUpdateResponse,
  Flags,
} from './flags/flags';
import { SinglePage } from '../../../pagination';

export class Apps extends APIResource {
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);

  /**
   * Creates an app. The returned `id` is used in all subsequent flag, changelog, and
   * evaluation requests.
   */
  create(params: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<AppCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/flagship/apps`, { body, ...options }) as Core.APIPromise<{
        result: AppCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an app. Only `name` is mutable.
   */
  update(
    appId: string,
    params: AppUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/flagship/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AppUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all apps in the account. Returns identity and audit fields only — flag
   * definitions are not included.
   */
  list(
    params: AppListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppListResponsesSinglePage, AppListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/flagship/apps`,
      AppListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes an app and all its flags and changelog history. Returns 409 if any
   * Worker still references this app via a Flagship binding.
   */
  delete(
    appId: string,
    params: AppDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/flagship/apps/${appId}`, options) as Core.APIPromise<{
        result: AppDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns an app's name and audit fields. Flag definitions are not included.
   */
  get(appId: string, params: AppGetParams, options?: Core.RequestOptions): Core.APIPromise<AppGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/flagship/apps/${appId}`, options) as Core.APIPromise<{
        result: AppGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AppListResponsesSinglePage extends SinglePage<AppListResponse> {}

export interface AppCreateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  /**
   * Email of the actor who last modified the app, or `edge-gateway` for
   * gateway-authenticated changes.
   */
  updated_by: string;
}

export interface AppUpdateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  /**
   * Email of the actor who last modified the app, or `edge-gateway` for
   * gateway-authenticated changes.
   */
  updated_by: string;
}

export interface AppListResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  /**
   * Email of the actor who last modified the app, or `edge-gateway` for
   * gateway-authenticated changes.
   */
  updated_by: string;
}

export interface AppDeleteResponse {
  id: string;
}

export interface AppGetResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  /**
   * Email of the actor who last modified the app, or `edge-gateway` for
   * gateway-authenticated changes.
   */
  updated_by: string;
}

export interface AppCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;
}

export interface AppUpdateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  name?: string;
}

export interface AppListParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface AppDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface AppGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

Apps.AppListResponsesSinglePage = AppListResponsesSinglePage;
Apps.Flags = Flags;
Apps.FlagListResponsesCursorPaginationAfter = FlagListResponsesCursorPaginationAfter;
Apps.Evaluate = Evaluate;

export declare namespace Apps {
  export {
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    AppListResponsesSinglePage as AppListResponsesSinglePage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
  };

  export {
    Flags as Flags,
    type FlagCreateResponse as FlagCreateResponse,
    type FlagUpdateResponse as FlagUpdateResponse,
    type FlagListResponse as FlagListResponse,
    type FlagDeleteResponse as FlagDeleteResponse,
    type FlagGetResponse as FlagGetResponse,
    FlagListResponsesCursorPaginationAfter as FlagListResponsesCursorPaginationAfter,
    type FlagCreateParams as FlagCreateParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagListParams as FlagListParams,
    type FlagDeleteParams as FlagDeleteParams,
    type FlagGetParams as FlagGetParams,
  };

  export {
    Evaluate as Evaluate,
    type EvaluateGetResponse as EvaluateGetResponse,
    type EvaluateGetParams as EvaluateGetParams,
  };
}
