// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AppTypesAPI from 'cloudflare/resources/gateways/app-types';

export class AppTypes extends APIResource {
  /**
   * Fetches all application and application type mappings.
   */
  zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/app_types`, options) as Core.APIPromise<{
        result: AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse =
  Array<
    | AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.ZeroTrustGatewayApplication
    | AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.ZeroTrustGatewayApplicationType
  >;

export namespace AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse {
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

export namespace AppTypes {
  export import AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse = AppTypesAPI.AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse;
}
