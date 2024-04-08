// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as ServiceTokensAPI from 'cloudflare/resources/zero-trust/access/service-tokens';
import { SinglePage } from 'cloudflare/pagination';

export class ServiceTokens extends APIResource {
  /**
   * Generates a new service token. **Note:** This is the only time you can get the
   * Client Secret. If you lose the Client Secret, you will have to rotate the Client
   * Secret or create a new service token.
   */
  create(
    params: ServiceTokenCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServiceTokenCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured service token.
   */
  update(
    uuid: string,
    params: ServiceTokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ErviceToken> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ErviceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all service tokens.
   */
  list(
    params?: ServiceTokenListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ErviceTokensSinglePage, ErviceToken>;
  list(options?: Core.RequestOptions): Core.PagePromise<ErviceTokensSinglePage, ErviceToken>;
  list(
    params: ServiceTokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ErviceTokensSinglePage, ErviceToken> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/service_tokens`,
      ErviceTokensSinglePage,
      options,
    );
  }

  /**
   * Deletes a service token.
   */
  delete(
    uuid: string,
    params?: ServiceTokenDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ErviceToken>;
  delete(uuid: string, options?: Core.RequestOptions): Core.APIPromise<ErviceToken>;
  delete(
    uuid: string,
    params: ServiceTokenDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ErviceToken> {
    if (isRequestOptions(params)) {
      return this.delete(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: ErviceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Refreshes the expiration of a service token.
   */
  refresh(identifier: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<ErviceToken> {
    return (
      this._client.post(
        `/accounts/${identifier}/access/service_tokens/${uuid}/refresh`,
        options,
      ) as Core.APIPromise<{ result: ErviceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a new Client Secret for a service token and revokes the old one.
   */
  rotate(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenRotateResponse> {
    return (
      this._client.post(
        `/accounts/${identifier}/access/service_tokens/${uuid}/rotate`,
        options,
      ) as Core.APIPromise<{ result: ServiceTokenRotateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ErviceTokensSinglePage extends SinglePage<ErviceToken> {}

export interface ErviceToken {
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

export interface ServiceTokenCreateResponse {
  /**
   * The ID of the service token.
   */
  id?: string;

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

export interface ServiceTokenRotateResponse {
  /**
   * The ID of the service token.
   */
  id?: string;

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

export interface ServiceTokenCreateParams {
  /**
   * Body param: The name of the service token.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: The duration for how long the service token will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h. The default is 1 year in hours (8760h).
   */
  duration?: string;
}

export interface ServiceTokenUpdateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: The duration for how long the service token will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h. The default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * Body param: The name of the service token.
   */
  name?: string;
}

export interface ServiceTokenListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ServiceTokenDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace ServiceTokens {
  export import ErviceToken = ServiceTokensAPI.ErviceToken;
  export import ServiceTokenCreateResponse = ServiceTokensAPI.ServiceTokenCreateResponse;
  export import ServiceTokenRotateResponse = ServiceTokensAPI.ServiceTokenRotateResponse;
  export import ErviceTokensSinglePage = ServiceTokensAPI.ErviceTokensSinglePage;
  export import ServiceTokenCreateParams = ServiceTokensAPI.ServiceTokenCreateParams;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenListParams = ServiceTokensAPI.ServiceTokenListParams;
  export import ServiceTokenDeleteParams = ServiceTokensAPI.ServiceTokenDeleteParams;
}
