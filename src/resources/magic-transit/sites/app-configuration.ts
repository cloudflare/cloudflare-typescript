// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as AppConfigurationAPI from './app-configuration';
import { SinglePage } from '../../../pagination';

export class AppConfiguration extends APIResource {
  /**
   * Creates a new App Config for a site
   */
  create(
    siteId: string,
    params: AppConfigurationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppConfigurationCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/app_configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AppConfigurationCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an App Config for a site
   */
  update(
    siteId: string,
    appConfigId: string,
    params: AppConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppConfigurationUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/app_configs/${appConfigId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: AppConfigurationUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists App Configs associated with a site.
   */
  list(
    siteId: string,
    params: AppConfigurationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppConfigurationListResponsesSinglePage, AppConfigurationListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/sites/${siteId}/app_configs`,
      AppConfigurationListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes specific App Config associated with a site.
   */
  delete(
    siteId: string,
    appConfigId: string,
    params: AppConfigurationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppConfigurationDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/app_configs/${appConfigId}`,
        options,
      ) as Core.APIPromise<{ result: AppConfigurationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AppConfigurationListResponsesSinglePage extends SinglePage<AppConfigurationListResponse> {}

/**
 * Traffic decision configuration for an app.
 */
export interface AppConfigurationCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Identifier
   */
  site_id: string;

  /**
   * Whether to breakout traffic to the app's endpoints directly. Null preserves
   * default behavior.
   */
  breakout?: boolean;

  /**
   * Priority of traffic. 0 is default, anything greater is prioritized. (Currently
   * only 0 and 1 are supported)
   */
  priority?: number;
}

/**
 * Traffic decision configuration for an app.
 */
export interface AppConfigurationUpdateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Identifier
   */
  site_id: string;

  /**
   * Whether to breakout traffic to the app's endpoints directly. Null preserves
   * default behavior.
   */
  breakout?: boolean;

  /**
   * Priority of traffic. 0 is default, anything greater is prioritized. (Currently
   * only 0 and 1 are supported)
   */
  priority?: number;
}

/**
 * Traffic decision configuration for an app.
 */
export interface AppConfigurationListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Identifier
   */
  site_id: string;

  /**
   * Whether to breakout traffic to the app's endpoints directly. Null preserves
   * default behavior.
   */
  breakout?: boolean;

  /**
   * Priority of traffic. 0 is default, anything greater is prioritized. (Currently
   * only 0 and 1 are supported)
   */
  priority?: number;
}

/**
 * Traffic decision configuration for an app.
 */
export interface AppConfigurationDeleteResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Identifier
   */
  site_id: string;

  /**
   * Whether to breakout traffic to the app's endpoints directly. Null preserves
   * default behavior.
   */
  breakout?: boolean;

  /**
   * Priority of traffic. 0 is default, anything greater is prioritized. (Currently
   * only 0 and 1 are supported)
   */
  priority?: number;
}

export type AppConfigurationCreateParams =
  | AppConfigurationCreateParams.AccountApp
  | AppConfigurationCreateParams.ManagedApp;

export namespace AppConfigurationCreateParams {
  export interface AccountApp {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Magic account app ID.
     */
    account_app_id: string;
  }

  export interface ManagedApp {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Managed app ID.
     */
    managed_app_id: string;
  }
}

export type AppConfigurationUpdateParams =
  | AppConfigurationUpdateParams.ChangeBreakoutBehavior
  | AppConfigurationUpdateParams.ChangePriority
  | AppConfigurationUpdateParams.UpdateAccountAppID
  | AppConfigurationUpdateParams.UpdateManagedAppID
  | AppConfigurationUpdateParams.AccountAppManagedApp
  | AppConfigurationUpdateParams.ManagedAppAccountApp;

export namespace AppConfigurationUpdateParams {
  export interface ChangeBreakoutBehavior {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }

  export interface ChangePriority {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param:
     */
    body: unknown;
  }

  export interface UpdateAccountAppID {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Magic account app ID.
     */
    account_app_id: string;
  }

  export interface UpdateManagedAppID {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Managed app ID.
     */
    managed_app_id: string;
  }

  export interface AccountAppManagedApp {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Magic account app ID.
     */
    account_app_id: string;

    /**
     * Body param: **Must be set to null**
     */
    managed_app_id: string | null;
  }

  export interface ManagedAppAccountApp {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: **Must be set to null**
     */
    account_app_id: string | null;

    /**
     * Body param: Managed app ID.
     */
    managed_app_id: string;
  }
}

export interface AppConfigurationListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface AppConfigurationDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace AppConfiguration {
  export import AppConfigurationCreateResponse = AppConfigurationAPI.AppConfigurationCreateResponse;
  export import AppConfigurationUpdateResponse = AppConfigurationAPI.AppConfigurationUpdateResponse;
  export import AppConfigurationListResponse = AppConfigurationAPI.AppConfigurationListResponse;
  export import AppConfigurationDeleteResponse = AppConfigurationAPI.AppConfigurationDeleteResponse;
  export import AppConfigurationListResponsesSinglePage = AppConfigurationAPI.AppConfigurationListResponsesSinglePage;
  export import AppConfigurationCreateParams = AppConfigurationAPI.AppConfigurationCreateParams;
  export import AppConfigurationUpdateParams = AppConfigurationAPI.AppConfigurationUpdateParams;
  export import AppConfigurationListParams = AppConfigurationAPI.AppConfigurationListParams;
  export import AppConfigurationDeleteParams = AppConfigurationAPI.AppConfigurationDeleteParams;
}
