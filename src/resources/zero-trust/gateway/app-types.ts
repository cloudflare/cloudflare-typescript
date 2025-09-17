// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class AppTypes extends APIResource {
  /**
   * List all application and application type mappings.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const appType of client.zeroTrust.gateway.appTypes.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AppTypeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppTypesSinglePage, AppType> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/gateway/app_types`, AppTypesSinglePage, options);
  }
}

export class AppTypesSinglePage extends SinglePage<AppType> {}

export type AppType = AppType.ZeroTrustGatewayApplication | AppType.ZeroTrustGatewayApplicationType;

export namespace AppType {
  export interface ZeroTrustGatewayApplication {
    /**
     * Identify this application. Only one application per ID.
     */
    id?: number;

    /**
     * Identify the type of this application. Multiple applications can share the same
     * type. Refers to the `id` of a returned application type.
     */
    application_type_id?: number;

    created_at?: string;

    /**
     * Specify the name of the application or application type.
     */
    name?: string;
  }

  export interface ZeroTrustGatewayApplicationType {
    /**
     * Identify the type of this application. Multiple applications can share the same
     * type. Refers to the `id` of a returned application type.
     */
    id?: number;

    created_at?: string;

    /**
     * Provide a short summary of applications with this type.
     */
    description?: string;

    /**
     * Specify the name of the application or application type.
     */
    name?: string;
  }
}

export interface AppTypeListParams {
  /**
   * Provide the identifier string.
   */
  account_id: string;
}

AppTypes.AppTypesSinglePage = AppTypesSinglePage;

export declare namespace AppTypes {
  export {
    type AppType as AppType,
    AppTypesSinglePage as AppTypesSinglePage,
    type AppTypeListParams as AppTypeListParams,
  };
}
