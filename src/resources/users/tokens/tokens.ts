// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TokensAPI from 'cloudflare/resources/users/tokens/tokens';
import * as PermissionGroupsAPI from 'cloudflare/resources/users/tokens/permission-groups';
import * as ValuesAPI from 'cloudflare/resources/users/tokens/values';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Tokens extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

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
   * List all access tokens you created.
   */
  list(
    query?: TokenListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenListResponsesV4PagePaginationArray, TokenListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenListResponsesV4PagePaginationArray, TokenListResponse>;
  list(
    query: TokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenListResponsesV4PagePaginationArray, TokenListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/tokens', TokenListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Destroy a token.
   */
  delete(tokenId: unknown, options?: Core.RequestOptions): Core.APIPromise<TokenDeleteResponse | null> {
    return (
      this._client.delete(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{
        result: TokenDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific token.
   */
  get(tokenId: unknown, options?: Core.RequestOptions): Core.APIPromise<TokenGetResponse> {
    return (
      this._client.get(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{ result: TokenGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing token.
   */
  replace(
    tokenId: unknown,
    body: TokenReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenReplaceResponse> {
    return (
      this._client.put(`/user/tokens/${tokenId}`, { body, ...options }) as Core.APIPromise<{
        result: TokenReplaceResponse;
      }>
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

export class TokenListResponsesV4PagePaginationArray extends V4PagePaginationArray<TokenListResponse> {}

export interface TokenCreateResponse {
  /**
   * The token value.
   */
  value?: string;
}

export type TokenListResponse = unknown;

export interface TokenDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type TokenGetResponse = unknown | string | null;

export type TokenReplaceResponse = unknown | string | null;

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
  policies: Array<TokenCreateParams.Policy>;

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
  export interface Policy {
    /**
     * Allow or deny operations against the resources.
     */
    effect: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups: Array<Policy.PermissionGroup>;

    /**
     * A list of resource names that the policy applies to.
     */
    resources: unknown;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {}
  }

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
      in?: Array<string>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<string>;
    }
  }
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';
}

export interface TokenReplaceParams {
  /**
   * Token name.
   */
  name: string;

  /**
   * List of access policies assigned to the token.
   */
  policies: Array<TokenReplaceParams.Policy>;

  /**
   * Status of the token.
   */
  status: 'active' | 'disabled' | 'expired';

  condition?: TokenReplaceParams.Condition;

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

export namespace TokenReplaceParams {
  export interface Policy {
    /**
     * Allow or deny operations against the resources.
     */
    effect: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups: Array<Policy.PermissionGroup>;

    /**
     * A list of resource names that the policy applies to.
     */
    resources: unknown;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {}
  }

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
      in?: Array<string>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<string>;
    }
  }
}

export namespace Tokens {
  export import TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export import TokenListResponse = TokensAPI.TokenListResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenGetResponse = TokensAPI.TokenGetResponse;
  export import TokenReplaceResponse = TokensAPI.TokenReplaceResponse;
  export import TokenVerifyResponse = TokensAPI.TokenVerifyResponse;
  export import TokenListResponsesV4PagePaginationArray = TokensAPI.TokenListResponsesV4PagePaginationArray;
  export import TokenCreateParams = TokensAPI.TokenCreateParams;
  export import TokenListParams = TokensAPI.TokenListParams;
  export import TokenReplaceParams = TokensAPI.TokenReplaceParams;
  export import PermissionGroups = PermissionGroupsAPI.PermissionGroups;
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import Values = ValuesAPI.Values;
  export import ValueReplaceResponse = ValuesAPI.ValueReplaceResponse;
  export import ValueReplaceParams = ValuesAPI.ValueReplaceParams;
}
