// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error'
import * as ServiceTokensAPI from './service-tokens';
import { SinglePage } from '../../../pagination';

export class ServiceTokens extends APIResource {
  /**
   * Generates a new service token. **Note:** This is the only time you can get the
   * Client Secret. If you lose the Client Secret, you will have to rotate the Client
   * Secret or create a new service token.
   */
  create(params: ServiceTokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<ServiceTokenCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens`, { body, ...options }) as Core.APIPromise<{ result: ServiceTokenCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured service token.
   */
  update(serviceTokenId: string, params: ServiceTokenUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ServiceToken> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${serviceTokenId}`, { body, ...options }) as Core.APIPromise<{ result: ServiceToken }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all service tokens.
   */
  list(params?: ServiceTokenListParams, options?: Core.RequestOptions): Core.PagePromise<ServiceTokensSinglePage, ServiceToken>
  list(options?: Core.RequestOptions): Core.PagePromise<ServiceTokensSinglePage, ServiceToken>
  list(params: ServiceTokenListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<ServiceTokensSinglePage, ServiceToken> {
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
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return this._client.getAPIList(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens`, ServiceTokensSinglePage, options);
  }

  /**
   * Deletes a service token.
   */
  delete(serviceTokenId: string, params?: ServiceTokenDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ServiceToken>
  delete(serviceTokenId: string, options?: Core.RequestOptions): Core.APIPromise<ServiceToken>
  delete(serviceTokenId: string, params: ServiceTokenDeleteParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<ServiceToken> {
    if (isRequestOptions(params)) {
      return this.delete(serviceTokenId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.delete(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${serviceTokenId}`, options) as Core.APIPromise<{ result: ServiceToken }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single service token.
   */
  get(serviceTokenId: string, params?: ServiceTokenGetParams, options?: Core.RequestOptions): Core.APIPromise<ServiceToken>
  get(serviceTokenId: string, options?: Core.RequestOptions): Core.APIPromise<ServiceToken>
  get(serviceTokenId: string, params: ServiceTokenGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<ServiceToken> {
    if (isRequestOptions(params)) {
      return this.get(serviceTokenId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.get(`/${accountOrZone}/${accountOrZoneId}/access/service_tokens/${serviceTokenId}`, options) as Core.APIPromise<{ result: ServiceToken }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Refreshes the expiration of a service token.
   */
  refresh(serviceTokenId: string, params: ServiceTokenRefreshParams, options?: Core.RequestOptions): Core.APIPromise<ServiceToken> {
    const { account_id } = params;
    return (this._client.post(`/accounts/${account_id}/access/service_tokens/${serviceTokenId}/refresh`, options) as Core.APIPromise<{ result: ServiceToken }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a new Client Secret for a service token and revokes the old one.
   */
  rotate(serviceTokenId: string, params: ServiceTokenRotateParams, options?: Core.RequestOptions): Core.APIPromise<ServiceTokenRotateResponse> {
    const { account_id } = params;
    return (this._client.post(`/accounts/${account_id}/access/service_tokens/${serviceTokenId}/rotate`, options) as Core.APIPromise<{ result: ServiceTokenRotateResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ServiceTokensSinglePage extends SinglePage<ServiceToken> {
}

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

export namespace ServiceTokens {
  export import ServiceToken = ServiceTokensAPI.ServiceToken;
  export import ServiceTokenCreateResponse = ServiceTokensAPI.ServiceTokenCreateResponse;
  export import ServiceTokenRotateResponse = ServiceTokensAPI.ServiceTokenRotateResponse;
  export import ServiceTokensSinglePage = ServiceTokensAPI.ServiceTokensSinglePage;
  export import ServiceTokenCreateParams = ServiceTokensAPI.ServiceTokenCreateParams;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenListParams = ServiceTokensAPI.ServiceTokenListParams;
  export import ServiceTokenDeleteParams = ServiceTokensAPI.ServiceTokenDeleteParams;
  export import ServiceTokenGetParams = ServiceTokensAPI.ServiceTokenGetParams;
  export import ServiceTokenRefreshParams = ServiceTokensAPI.ServiceTokenRefreshParams;
  export import ServiceTokenRotateParams = ServiceTokensAPI.ServiceTokenRotateParams;
}
