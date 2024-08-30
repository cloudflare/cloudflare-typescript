// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AppTypesAPI from './app-types';
import { SinglePage } from '../../../pagination';

export class AppTypes extends APIResource {
  /**
   * Fetches all application and application type mappings.
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
     * The identifier for this application. There is only one application per ID.
     */
    id?: number;

    /**
     * The identifier for the type of this application. There can be many applications
     * with the same type. This refers to the `id` of a returned application type.
     */
    application_type_id?: number;

    created_at?: string;

    /**
     * The name of the application or application type.
     */
    name?: string;
  }

  export interface ZeroTrustGatewayApplicationType {
    /**
     * The identifier for the type of this application. There can be many applications
     * with the same type. This refers to the `id` of a returned application type.
     */
    id?: number;

    created_at?: string;

    /**
     * A short summary of applications with this type.
     */
    description?: string;

    /**
     * The name of the application or application type.
     */
    name?: string;
  }
}

export interface AppTypeListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace AppTypes {
  export import AppType = AppTypesAPI.AppType;
  export import AppTypesSinglePage = AppTypesAPI.AppTypesSinglePage;
  export import AppTypeListParams = AppTypesAPI.AppTypeListParams;
}
