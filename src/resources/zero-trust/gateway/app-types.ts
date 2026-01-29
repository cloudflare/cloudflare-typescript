// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  list(params: AppTypeListParams, options?: RequestOptions): PagePromise<AppTypesSinglePage, AppType> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/app_types`,
      SinglePage<AppType>,
      options,
    );
  }
}

export type AppTypesSinglePage = SinglePage<AppType>;

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

export declare namespace AppTypes {
  export {
    type AppType as AppType,
    type AppTypesSinglePage as AppTypesSinglePage,
    type AppTypeListParams as AppTypeListParams,
  };
}
