// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ServiceTokensAPI from 'cloudflare/resources/access/service-tokens/service-tokens';
import * as RefreshesAPI from 'cloudflare/resources/access/service-tokens/refreshes';
import * as RotatesAPI from 'cloudflare/resources/access/service-tokens/rotates';

export class ServiceTokens extends APIResource {
  refreshes: RefreshesAPI.Refreshes = new RefreshesAPI.Refreshes(this._client);
  rotates: RotatesAPI.Rotates = new RotatesAPI.Rotates(this._client);

  /**
   * Updates a configured service token.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    body: ServiceTokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenUpdateResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServiceTokenUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a service token.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenDeleteResponse> {
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: ServiceTokenDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a new service token. **Note:** This is the only time you can get the
   * Client Secret. If you lose the Client Secret, you will have to rotate the Client
   * Secret or create a new service token.
   */
  accessServiceTokensCreateAServiceToken(
    accountOrZone: string,
    accountOrZoneId: string,
    body: ServiceTokenAccessServiceTokensCreateAServiceTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenAccessServiceTokensCreateAServiceTokenResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServiceTokenAccessServiceTokensCreateAServiceTokenResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all service tokens.
   */
  accessServiceTokensListServiceTokens(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenAccessServiceTokensListServiceTokensResponse | null> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/service_tokens`,
        options,
      ) as Core.APIPromise<{ result: ServiceTokenAccessServiceTokensListServiceTokensResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ServiceTokenUpdateResponse {
  /**
   * The ID of the service token.
   */
  id?: unknown;

  /**
   * The Client ID for the service token. Access will check for this value in the
   * `CF-Access-Client-ID` request header.
   */
  client_id?: string;

  created_at?: string;

  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * The name of the service token.
   */
  name?: string;

  updated_at?: string;
}

export interface ServiceTokenDeleteResponse {
  /**
   * The ID of the service token.
   */
  id?: unknown;

  /**
   * The Client ID for the service token. Access will check for this value in the
   * `CF-Access-Client-ID` request header.
   */
  client_id?: string;

  created_at?: string;

  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * The name of the service token.
   */
  name?: string;

  updated_at?: string;
}

export interface ServiceTokenAccessServiceTokensCreateAServiceTokenResponse {
  /**
   * The ID of the service token.
   */
  id?: unknown;

  /**
   * The Client ID for the service token. Access will check for this value in the
   * `CF-Access-Client-ID` request header.
   */
  client_id?: string;

  /**
   * The Client Secret for the service token. Access will check for this value in the
   * `CF-Access-Client-Secret` request header.
   */
  client_secret?: string;

  created_at?: string;

  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * The name of the service token.
   */
  name?: string;

  updated_at?: string;
}

export type ServiceTokenAccessServiceTokensListServiceTokensResponse =
  Array<ServiceTokenAccessServiceTokensListServiceTokensResponse.ServiceTokenAccessServiceTokensListServiceTokensResponseItem>;

export namespace ServiceTokenAccessServiceTokensListServiceTokensResponse {
  export interface ServiceTokenAccessServiceTokensListServiceTokensResponseItem {
    /**
     * The ID of the service token.
     */
    id?: unknown;

    /**
     * The Client ID for the service token. Access will check for this value in the
     * `CF-Access-Client-ID` request header.
     */
    client_id?: string;

    created_at?: string;

    /**
     * The duration for how long the service token will be valid. Must be in the format
     * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
     * default is 1 year in hours (8760h).
     */
    duration?: string;

    /**
     * The name of the service token.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface ServiceTokenUpdateParams {
  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * The name of the service token.
   */
  name?: string;
}

export interface ServiceTokenAccessServiceTokensCreateAServiceTokenParams {
  /**
   * The name of the service token.
   */
  name: string;

  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;
}

export namespace ServiceTokens {
  export import ServiceTokenUpdateResponse = ServiceTokensAPI.ServiceTokenUpdateResponse;
  export import ServiceTokenDeleteResponse = ServiceTokensAPI.ServiceTokenDeleteResponse;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenResponse;
  export import ServiceTokenAccessServiceTokensListServiceTokensResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensListServiceTokensResponse;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenParams = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenParams;
  export import Refreshes = RefreshesAPI.Refreshes;
  export import RefreshAccessServiceTokensRefreshAServiceTokenResponse = RefreshesAPI.RefreshAccessServiceTokensRefreshAServiceTokenResponse;
  export import Rotates = RotatesAPI.Rotates;
  export import RotateAccessServiceTokensRotateAServiceTokenResponse = RotatesAPI.RotateAccessServiceTokensRotateAServiceTokenResponse;
}
