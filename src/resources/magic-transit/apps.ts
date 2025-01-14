// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Apps extends APIResource {
  /**
   * Creates a new App for an account
   */
  create(params: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<AppCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/apps`, { body, ...options }) as Core.APIPromise<{
        result: AppCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Account App
   */
  update(
    accountAppId: string,
    params: AppUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/apps/${accountAppId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AppUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Apps associated with an account.
   */
  list(
    params: AppListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppListResponsesSinglePage, AppListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/magic/apps`, AppListResponsesSinglePage, options);
  }

  /**
   * Deletes specific Account App.
   */
  delete(
    accountAppId: string,
    params: AppDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/apps/${accountAppId}`, options) as Core.APIPromise<{
        result: AppDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AppListResponsesSinglePage extends SinglePage<AppListResponse> {}

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

Apps.AppListResponsesSinglePage = AppListResponsesSinglePage;

export declare namespace Apps {
  export {
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    AppListResponsesSinglePage as AppListResponsesSinglePage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
  };
}
