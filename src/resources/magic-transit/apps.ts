// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Creates a new App for an account
   */
  create(params: AppCreateParams, options?: RequestOptions): APIPromise<AppCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/magic/apps`, { body, ...options }) as APIPromise<{
        result: AppCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Account App
   */
  update(
    accountAppID: string,
    params: AppUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/apps/${accountAppID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: AppUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Apps associated with an account.
   */
  list(
    params: AppListParams,
    options?: RequestOptions,
  ): PagePromise<AppListResponsesSinglePage, AppListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/apps`,
      SinglePage<AppListResponse>,
      options,
    );
  }

  /**
   * Deletes specific Account App.
   */
  delete(
    accountAppID: string,
    params: AppDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/magic/apps/${accountAppID}`, options) as APIPromise<{
        result: AppDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AppListResponsesSinglePage = SinglePage<AppListResponse>;

/**
 * Custom app defined for an account.
 */
export interface AppCreateResponse {
  /**
   * Magic account app ID.
   */
  account_app_id: string;

  /**
   * FQDNs to associate with traffic decisions.
   */
  hostnames?: Array<string>;

  /**
   * CIDRs to associate with traffic decisions.
   */
  ip_subnets?: Array<string>;

  /**
   * Display name for the app.
   */
  name?: string;

  /**
   * Category of the app.
   */
  type?: string;
}

/**
 * Custom app defined for an account.
 */
export interface AppUpdateResponse {
  /**
   * Magic account app ID.
   */
  account_app_id: string;

  /**
   * FQDNs to associate with traffic decisions.
   */
  hostnames?: Array<string>;

  /**
   * CIDRs to associate with traffic decisions.
   */
  ip_subnets?: Array<string>;

  /**
   * Display name for the app.
   */
  name?: string;

  /**
   * Category of the app.
   */
  type?: string;
}

/**
 * Collection of Hostnames and/or IP Subnets to associate with traffic decisions.
 */
export type AppListResponse = AppListResponse.MagicAccountApp | AppListResponse.MagicManagedApp;

export namespace AppListResponse {
  /**
   * Custom app defined for an account.
   */
  export interface MagicAccountApp {
    /**
     * Magic account app ID.
     */
    account_app_id: string;

    /**
     * FQDNs to associate with traffic decisions.
     */
    hostnames?: Array<string>;

    /**
     * CIDRs to associate with traffic decisions.
     */
    ip_subnets?: Array<string>;

    /**
     * Display name for the app.
     */
    name?: string;

    /**
     * Category of the app.
     */
    type?: string;
  }

  /**
   * Managed app defined by Cloudflare.
   */
  export interface MagicManagedApp {
    /**
     * Managed app ID.
     */
    managed_app_id: string;

    /**
     * FQDNs to associate with traffic decisions.
     */
    hostnames?: Array<string>;

    /**
     * CIDRs to associate with traffic decisions.
     */
    ip_subnets?: Array<string>;

    /**
     * Display name for the app.
     */
    name?: string;

    /**
     * Category of the app.
     */
    type?: string;
  }
}

/**
 * Custom app defined for an account.
 */
export interface AppDeleteResponse {
  /**
   * Magic account app ID.
   */
  account_app_id: string;

  /**
   * FQDNs to associate with traffic decisions.
   */
  hostnames?: Array<string>;

  /**
   * CIDRs to associate with traffic decisions.
   */
  ip_subnets?: Array<string>;

  /**
   * Display name for the app.
   */
  name?: string;

  /**
   * Category of the app.
   */
  type?: string;
}

export interface AppCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Display name for the app.
   */
  name: string;

  /**
   * Body param: Category of the app.
   */
  type: string;

  /**
   * Body param: FQDNs to associate with traffic decisions.
   */
  hostnames?: Array<string>;

  /**
   * Body param: CIDRs to associate with traffic decisions.
   */
  ip_subnets?: Array<string>;
}

export interface AppUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: FQDNs to associate with traffic decisions.
   */
  hostnames?: Array<string>;

  /**
   * Body param: CIDRs to associate with traffic decisions.
   */
  ip_subnets?: Array<string>;

  /**
   * Body param: Display name for the app.
   */
  name?: string;

  /**
   * Body param: Category of the app.
   */
  type?: string;
}

export interface AppListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface AppDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Apps {
  export {
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppListResponsesSinglePage as AppListResponsesSinglePage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
  };
}
