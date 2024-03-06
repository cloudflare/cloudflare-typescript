// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AppTypesAPI from 'cloudflare/resources/zero-trust/gateway/app-types';

export class AppTypes extends APIResource {
  /**
   * Fetches all application and application type mappings.
   */
  list(
    params: AppTypeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppTypeListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/app_types`, options) as Core.APIPromise<{
        result: AppTypeListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AppTypeListResponse = Array<
  AppTypeListResponse.ZeroTrustGatewayApplication | AppTypeListResponse.ZeroTrustGatewayApplicationType
>;

export namespace AppTypeListResponse {
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
  export import AppTypeListResponse = AppTypesAPI.AppTypeListResponse;
  export import AppTypeListParams = AppTypesAPI.AppTypeListParams;
}
