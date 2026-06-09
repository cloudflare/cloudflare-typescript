// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EvaluateAPI from './evaluate';
import { BaseEvaluate, Evaluate, EvaluateGetParams, EvaluateGetResponse } from './evaluate';
import * as FlagsAPI from './flags/flags';
import {
  BaseFlags,
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
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseApps extends APIResource {
  static override readonly _key: readonly ['flagship', 'apps'] = Object.freeze(['flagship', 'apps'] as const);

  /**
   * Creates an app. The returned `id` is used in all subsequent flag, changelog, and
   * evaluation requests.
   */
  create(params: AppCreateParams, options?: RequestOptions): APIPromise<AppCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/flagship/apps`, { body, ...options }) as APIPromise<{
        result: AppCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an app. Only `name` is mutable.
   */
  update(appID: string, params: AppUpdateParams, options?: RequestOptions): APIPromise<AppUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/flagship/apps/${appID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: AppUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all apps in the account. Returns identity and audit fields only — flag
   * definitions are not included.
   */
  list(
    params: AppListParams,
    options?: RequestOptions,
  ): PagePromise<AppListResponsesSinglePage, AppListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/flagship/apps`,
      SinglePage<AppListResponse>,
      options,
    );
  }

  /**
   * Deletes an app and all its flags and changelog history. Returns 409 if any
   * Worker still references this app via a Flagship binding.
   */
  delete(appID: string, params: AppDeleteParams, options?: RequestOptions): APIPromise<AppDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/flagship/apps/${appID}`, options) as APIPromise<{
        result: AppDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns an app's name and audit fields. Flag definitions are not included.
   */
  get(appID: string, params: AppGetParams, options?: RequestOptions): APIPromise<AppGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/flagship/apps/${appID}`, options) as APIPromise<{
        result: AppGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Apps extends BaseApps {
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);
}

export type AppListResponsesSinglePage = SinglePage<AppListResponse>;

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

Apps.Flags = Flags;
Apps.BaseFlags = BaseFlags;
Apps.Evaluate = Evaluate;
Apps.BaseEvaluate = BaseEvaluate;

export declare namespace Apps {
  export {
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    type AppListResponsesSinglePage as AppListResponsesSinglePage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
  };

  export {
    Flags as Flags,
    BaseFlags as BaseFlags,
    type FlagCreateResponse as FlagCreateResponse,
    type FlagUpdateResponse as FlagUpdateResponse,
    type FlagListResponse as FlagListResponse,
    type FlagDeleteResponse as FlagDeleteResponse,
    type FlagGetResponse as FlagGetResponse,
    type FlagListResponsesCursorPaginationAfter as FlagListResponsesCursorPaginationAfter,
    type FlagCreateParams as FlagCreateParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagListParams as FlagListParams,
    type FlagDeleteParams as FlagDeleteParams,
    type FlagGetParams as FlagGetParams,
  };

  export {
    Evaluate as Evaluate,
    BaseEvaluate as BaseEvaluate,
    type EvaluateGetResponse as EvaluateGetResponse,
    type EvaluateGetParams as EvaluateGetParams,
  };
}
