// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class DOH extends APIResource {
  /**
   * Updates the DoH settings for your Zero Trust organization.
   */
  update(params: DOHUpdateParams, options?: RequestOptions): APIPromise<DOHUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/organizations/doh`, {
        body,
        ...options,
      }) as APIPromise<{ result: DOHUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the DoH settings for your Zero Trust organization.
   */
  get(params: DOHGetParams, options?: RequestOptions): APIPromise<DOHGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/access/organizations/doh`, options) as APIPromise<{
        result: DOHGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DOHUpdateResponse {
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
   * The duration the DoH JWT is valid for. Must be in the format `300ms` or `2h45m`.
   * Valid time units are: ns, us (or µs), ms, s, m, h. Note that the maximum
   * duration for this setting is the same as the key rotation period on the account.
   * Default expiration is 24h
   */
  doh_jwt_duration?: string;

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

export interface DOHGetResponse {
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
   * The duration the DoH JWT is valid for. Must be in the format `300ms` or `2h45m`.
   * Valid time units are: ns, us (or µs), ms, s, m, h. Note that the maximum
   * duration for this setting is the same as the key rotation period on the account.
   */
  doh_jwt_duration?: string;

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

export interface DOHUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The duration the DoH JWT is valid for. Must be in the format `300ms`
   * or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. Note that the
   * maximum duration for this setting is the same as the key rotation period on the
   * account. Default expiration is 24h
   */
  doh_jwt_duration?: string;

  /**
   * Body param: The uuid of the service token you want to use for DoH authentication
   */
  service_token_id?: string;
}

export interface DOHGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace DOH {
  export {
    type DOHUpdateResponse as DOHUpdateResponse,
    type DOHGetResponse as DOHGetResponse,
    type DOHUpdateParams as DOHUpdateParams,
    type DOHGetParams as DOHGetParams,
  };
}
