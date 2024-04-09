// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TokensAPI from 'cloudflare/resources/user/tokens/tokens';
import * as Shared from 'cloudflare/resources/shared';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import * as ValueAPI from 'cloudflare/resources/user/tokens/value';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Tokens extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  value: ValueAPI.ValueResource = new ValueAPI.ValueResource(this._client);

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
    tokenId: unknown,
    body: TokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.put(`/user/tokens/${tokenId}`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
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
  delete(
    tokenId: unknown,
    body: TokenDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenDeleteResponse | null> {
    return (
      this._client.delete(`/user/tokens/${tokenId}`, { body, ...options }) as Core.APIPromise<{
        result: TokenDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific token.
   */
  get(
    tokenId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
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

/**
 * IPv4/IPv6 CIDR.
 */
export type CIDRList = string;

export interface Policy {
  /**
   * Policy identifier.
   */
  id: string;

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
  export interface PermissionGroup {
    /**
     * Identifier of the group.
     */
    id: string;

    /**
     * Name of the group.
     */
    name?: string;
  }
}

export interface TokenCreateResponse {
  /**
   * The token value.
   */
  value?: ValueAPI.Value;
}

export type TokenListResponse = unknown;

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
  policies: Array<Policy>;

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
      in?: Array<TokensAPI.CIDRList>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<TokensAPI.CIDRList>;
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
  policies: Array<Policy>;

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
      in?: Array<TokensAPI.CIDRList>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<TokensAPI.CIDRList>;
    }
  }
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';
}

export type TokenDeleteParams = unknown;

export namespace Tokens {
  export import CIDRList = TokensAPI.CIDRList;
  export import Policy = TokensAPI.Policy;
  export import TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export import TokenListResponse = TokensAPI.TokenListResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenVerifyResponse = TokensAPI.TokenVerifyResponse;
  export import TokenListResponsesV4PagePaginationArray = TokensAPI.TokenListResponsesV4PagePaginationArray;
  export import TokenCreateParams = TokensAPI.TokenCreateParams;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenListParams = TokensAPI.TokenListParams;
  export import TokenDeleteParams = TokensAPI.TokenDeleteParams;
  export import PermissionGroups = PermissionGroupsAPI.PermissionGroups;
  export import Permission = PermissionGroupsAPI.Permission;
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import PermissionGroupListResponsesSinglePage = PermissionGroupsAPI.PermissionGroupListResponsesSinglePage;
  export import ValueResource = ValueAPI.ValueResource;
  export import Value = ValueAPI.Value;
  export import ValueUpdateParams = ValueAPI.ValueUpdateParams;
}
