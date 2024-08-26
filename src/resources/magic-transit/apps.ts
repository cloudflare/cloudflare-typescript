// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as AppsAPI from './apps';
import { SinglePage } from '../../pagination';

export class Apps extends APIResource {
  /**
   * Creates a new App for an account
   */
  create(params: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<AppCreateResponse | null> {
    const { account_id, body } = params;
    return (this._client.post(`/accounts/${account_id}/magic/apps`, { body: body, ...options }) as Core.APIPromise<{ result: AppCreateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Account App
   */
  update(accountAppId: string, params: AppUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AppUpdateResponse | null> {
    const { account_id, body } = params;
    return (this._client.put(`/accounts/${account_id}/magic/apps/${accountAppId}`, { body: body, ...options }) as Core.APIPromise<{ result: AppUpdateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Apps associated with an account.
   */
  list(params: AppListParams, options?: Core.RequestOptions): Core.PagePromise<AppListResponsesSinglePage, AppListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/magic/apps`, AppListResponsesSinglePage, options);
  }

  /**
   * Deletes specific Account App.
   */
  delete(accountAppId: string, params: AppDeleteParams, options?: Core.RequestOptions): Core.APIPromise<AppDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/magic/apps/${accountAppId}`, options) as Core.APIPromise<{ result: AppDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export class AppListResponsesSinglePage extends SinglePage<AppListResponse> {
}

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
export type AppListResponse = AppListResponse.MagicAccountApp | AppListResponse.MagicManagedApp

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

export type AppCreateParams = AppCreateParams.Hostnames | AppCreateParams.Subnets

export namespace AppCreateParams {
  export interface Hostnames {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }

  export interface Subnets {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }
}

export type AppUpdateParams = AppUpdateParams.UpdateAppName | AppUpdateParams.UpdateAppType | AppUpdateParams.UpdateAppHostnames | AppUpdateParams.UpdateAppSubnets

export namespace AppUpdateParams {
  export interface UpdateAppName {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }

  export interface UpdateAppType {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }

  export interface UpdateAppHostnames {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }

  export interface UpdateAppSubnets {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }
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

export namespace Apps {
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppListResponsesSinglePage = AppsAPI.AppListResponsesSinglePage;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import AppListParams = AppsAPI.AppListParams;
  export import AppDeleteParams = AppsAPI.AppDeleteParams;
}
