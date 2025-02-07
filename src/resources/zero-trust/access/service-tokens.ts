// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { CloudflareError } from '../../../error';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ServiceTokens extends APIResource {
  /**
   * Generates a new service token. **Note:** This is the only time you can get the
   * Client Secret. If you lose the Client Secret, you will have to rotate the Client
   * Secret or create a new service token.
   */
  create(params: ServiceTokenCreateParams, options?: RequestOptions): APIPromise<ServiceTokenCreateResponse> {
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
      this._client.post(path`/${accountOrZone}/${accountOrZoneId}/access/service_tokens`, {
        body,
        ...options,
      }) as APIPromise<{ result: ServiceTokenCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured service token.
   */
  update(
    serviceTokenID: string,
    params: ServiceTokenUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceToken> {
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
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${serviceTokenID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ServiceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all service tokens.
   */
  list(
    params: ServiceTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServiceTokensSinglePage, ServiceToken> {
    const { account_id, zone_id, ...query } = params ?? {};
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
      path`/${accountOrZone}/${accountOrZoneId}/access/service_tokens`,
      SinglePage<ServiceToken>,
      { query, ...options },
    );
  }

  /**
   * Deletes a service token.
   */
  delete(
    serviceTokenID: string,
    params: ServiceTokenDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServiceToken> {
    const { account_id, zone_id } = params ?? {};
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
        path`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${serviceTokenID}`,
        options,
      ) as APIPromise<{ result: ServiceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single service token.
   */
  get(
    serviceTokenID: string,
    params: ServiceTokenGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServiceToken> {
    const { account_id, zone_id } = params ?? {};
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
      this._client.get(
        path`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${serviceTokenID}`,
        options,
      ) as APIPromise<{ result: ServiceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Refreshes the expiration of a service token.
   */
  refresh(
    serviceTokenID: string,
    params: ServiceTokenRefreshParams,
    options?: RequestOptions,
  ): APIPromise<ServiceToken> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/access/service_tokens/${serviceTokenID}/refresh`,
        options,
      ) as APIPromise<{ result: ServiceToken }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a new Client Secret for a service token and revokes the old one.
   */
  rotate(
    serviceTokenID: string,
    params: ServiceTokenRotateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceTokenRotateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/access/service_tokens/${serviceTokenID}/rotate`,
        options,
      ) as APIPromise<{ result: ServiceTokenRotateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ServiceTokensSinglePage = SinglePage<ServiceToken>;

export interface ServiceToken {
  /**
   * The ID of the service token.
   */
  id?: string;

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

  expires_at?: string;

  last_seen_at?: string;

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
   * Query param: The name of the service token.
   */
  name?: string;

  /**
   * Query param: Search for service tokens by other listed query parameters.
   */
  search?: string;
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

export interface ServiceTokenGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ServiceTokenRefreshParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ServiceTokenRotateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace ServiceTokens {
  export {
    type ServiceToken as ServiceToken,
    type ServiceTokenCreateResponse as ServiceTokenCreateResponse,
    type ServiceTokenRotateResponse as ServiceTokenRotateResponse,
    type ServiceTokensSinglePage as ServiceTokensSinglePage,
    type ServiceTokenCreateParams as ServiceTokenCreateParams,
    type ServiceTokenUpdateParams as ServiceTokenUpdateParams,
    type ServiceTokenListParams as ServiceTokenListParams,
    type ServiceTokenDeleteParams as ServiceTokenDeleteParams,
    type ServiceTokenGetParams as ServiceTokenGetParams,
    type ServiceTokenRefreshParams as ServiceTokenRefreshParams,
    type ServiceTokenRotateParams as ServiceTokenRotateParams,
  };
}
