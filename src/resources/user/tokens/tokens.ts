// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { TokensV4PagePaginationArray } from '../../shared';
import * as PermissionGroupsAPI from './permission-groups';
import {
  PermissionGroupListResponse,
  PermissionGroupListResponsesSinglePage,
  PermissionGroups,
} from './permission-groups';
import * as ValueAPI from './value';
import { Value, ValueUpdateParams } from './value';
import { type V4PagePaginationArrayParams } from '../../../pagination';

export class Tokens extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  value: ValueAPI.Value = new ValueAPI.Value(this._client);

  /**
   * Create a new access token.
   */
  create(body: TokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<TokenCreateResponse> {
    return (
      this._client.post('/user/tokens', { body, ...options }) as Core.APIPromise<{
        result: TokenCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing token.
   */
  update(
    tokenId: string,
    body: TokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Token> {
    return (
      this._client.put(`/user/tokens/${tokenId}`, { body, ...options }) as Core.APIPromise<{
        result: Shared.Token;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all access tokens you created.
   */
  list(
    query?: TokenListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokensV4PagePaginationArray, Shared.Token>;
  list(options?: Core.RequestOptions): Core.PagePromise<TokensV4PagePaginationArray, Shared.Token>;
  list(
    query: TokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokensV4PagePaginationArray, Shared.Token> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/tokens', TokensV4PagePaginationArray, { query, ...options });
  }

  /**
   * Destroy a token.
   */
  delete(tokenId: string, options?: Core.RequestOptions): Core.APIPromise<TokenDeleteResponse | null> {
    return (
      this._client.delete(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{
        result: TokenDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific token.
   */
  get(tokenId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Token> {
    return (
      this._client.get(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{ result: Shared.Token }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Test whether a token works.
   */
  verify(options?: Core.RequestOptions): Core.APIPromise<TokenVerifyResponse> {
    return (
      this._client.get('/user/tokens/verify', options) as Core.APIPromise<{ result: TokenVerifyResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TokenCreateResponse {
  /**
   * Token identifier tag.
   */
  id?: string;

  condition?: TokenCreateResponse.Condition;

  /**
   * The expiration time on or after which the JWT MUST NOT be accepted for
   * processing.
   */
  expires_on?: string;

  /**
   * The time on which the token was created.
   */
  issued_on?: string;

  /**
   * Last time the token was used.
   */
  last_used_on?: string;

  /**
   * Last time the token was modified.
   */
  modified_on?: string;

  /**
   * Token name.
   */
  name?: string;

  /**
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;

  /**
   * List of access policies assigned to the token.
   */
  policies?: Array<Shared.TokenPolicy>;

  /**
   * Status of the token.
   */
  status?: 'active' | 'disabled' | 'expired';

  /**
   * The token value.
   */
  value?: Shared.TokenValue;
}

export namespace TokenCreateResponse {
  export interface Condition {
    /**
     * Client IP restrictions.
     */
    request_ip?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<Shared.TokenConditionCIDRList>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<Shared.TokenConditionCIDRList>;
    }
  }
}

export interface TokenDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface TokenVerifyResponse {
  /**
   * Token identifier tag.
   */
  id: string;

  /**
   * Status of the token.
   */
  status: 'active' | 'disabled' | 'expired';

  /**
   * The expiration time on or after which the JWT MUST NOT be accepted for
   * processing.
   */
  expires_on?: string;

  /**
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;
}

export interface TokenCreateParams {
  /**
   * Token name.
   */
  name: string;

  /**
   * List of access policies assigned to the token.
   */
  policies: Array<Shared.TokenPolicyParam>;

  condition?: TokenCreateParams.Condition;

  /**
   * The expiration time on or after which the JWT MUST NOT be accepted for
   * processing.
   */
  expires_on?: string;

  /**
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;
}

export namespace TokenCreateParams {
  export interface Condition {
    /**
     * Client IP restrictions.
     */
    request_ip?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<Shared.TokenConditionCIDRListParam>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<Shared.TokenConditionCIDRListParam>;
    }
  }
}

export interface TokenUpdateParams {
  /**
   * Token name.
   */
  name: string;

  /**
   * List of access policies assigned to the token.
   */
  policies: Array<Shared.TokenPolicyParam>;

  /**
   * Status of the token.
   */
  status: 'active' | 'disabled' | 'expired';

  condition?: TokenUpdateParams.Condition;

  /**
   * The expiration time on or after which the JWT MUST NOT be accepted for
   * processing.
   */
  expires_on?: string;

  /**
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;
}

export namespace TokenUpdateParams {
  export interface Condition {
    /**
     * Client IP restrictions.
     */
    request_ip?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<Shared.TokenConditionCIDRListParam>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<Shared.TokenConditionCIDRListParam>;
    }
  }
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';
}

Tokens.PermissionGroups = PermissionGroups;
Tokens.PermissionGroupListResponsesSinglePage = PermissionGroupListResponsesSinglePage;
Tokens.Value = Value;

export declare namespace Tokens {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenVerifyResponse as TokenVerifyResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
  };

  export {
    PermissionGroups as PermissionGroups,
    type PermissionGroupListResponse as PermissionGroupListResponse,
    PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
  };

  export { Value as Value, type ValueUpdateParams as ValueUpdateParams };
}

export { TokensV4PagePaginationArray };
