// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TokensAPI from './tokens';
import * as Shared from '../../shared';
import * as PermissionGroupsAPI from './permission-groups';
import {
  PermissionGroupListResponse,
  PermissionGroupListResponsesSinglePage,
  PermissionGroups,
} from './permission-groups';
import * as ValueAPI from './value';
import { Value, ValueUpdateParams } from './value';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

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
  update(tokenId: string, body: TokenUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Token> {
    return (
      this._client.put(`/user/tokens/${tokenId}`, { body, ...options }) as Core.APIPromise<{ result: Token }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all access tokens you created.
   */
  list(
    query?: TokenListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokensV4PagePaginationArray, Token>;
  list(options?: Core.RequestOptions): Core.PagePromise<TokensV4PagePaginationArray, Token>;
  list(
    query: TokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokensV4PagePaginationArray, Token> {
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
  get(tokenId: string, options?: Core.RequestOptions): Core.APIPromise<Token> {
    return (
      this._client.get(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{ result: Token }>
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

export class TokensV4PagePaginationArray extends V4PagePaginationArray<Token> {}

/**
 * IPv4/IPv6 CIDR.
 */
export type CIDRList = string;

/**
 * IPv4/IPv6 CIDR.
 */
export type CIDRListParam = string;

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
  resources: Policy.Resources;
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
     * Attributes associated to the permission group.
     */
    meta?: PermissionGroup.Meta;

    /**
     * Name of the group.
     */
    name?: string;
  }

  export namespace PermissionGroup {
    /**
     * Attributes associated to the permission group.
     */
    export interface Meta {
      key?: string;

      value?: string;
    }
  }

  /**
   * A list of resource names that the policy applies to.
   */
  export interface Resources {
    resource?: string;

    scope?: string;
  }
}

export interface PolicyParam {
  /**
   * Allow or deny operations against the resources.
   */
  effect: 'allow' | 'deny';

  /**
   * A set of permission groups that are specified to the policy.
   */
  permission_groups: Array<PolicyParam.PermissionGroup>;

  /**
   * A list of resource names that the policy applies to.
   */
  resources: PolicyParam.Resources;
}

export namespace PolicyParam {
  /**
   * A named group of permissions that map to a group of operations against
   * resources.
   */
  export interface PermissionGroup {
    /**
     * Attributes associated to the permission group.
     */
    meta?: PermissionGroup.Meta;
  }

  export namespace PermissionGroup {
    /**
     * Attributes associated to the permission group.
     */
    export interface Meta {
      key?: string;

      value?: string;
    }
  }

  /**
   * A list of resource names that the policy applies to.
   */
  export interface Resources {
    resource?: string;

    scope?: string;
  }
}

export interface Token {
  /**
   * Token identifier tag.
   */
  id?: string;

  condition?: Token.Condition;

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
  policies?: Array<Policy>;

  /**
   * Status of the token.
   */
  status?: 'active' | 'disabled' | 'expired';
}

export namespace Token {
  export interface Condition {
    /**
     * Client IP restrictions.
     */
    'request.ip'?: Condition.RequestIP;
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
  policies?: Array<Policy>;

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
    'request.ip'?: Condition.RequestIP;
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
  policies: Array<PolicyParam>;

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
    'request.ip'?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<TokensAPI.CIDRListParam>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<TokensAPI.CIDRListParam>;
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
  policies: Array<PolicyParam>;

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
    'request.ip'?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<TokensAPI.CIDRListParam>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<TokensAPI.CIDRListParam>;
    }
  }
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';
}

Tokens.TokensV4PagePaginationArray = TokensV4PagePaginationArray;
Tokens.PermissionGroups = PermissionGroups;
Tokens.PermissionGroupListResponsesSinglePage = PermissionGroupListResponsesSinglePage;
Tokens.Value = Value;

export declare namespace Tokens {
  export {
    type CIDRList as CIDRList,
    type Policy as Policy,
    type Token as Token,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenVerifyResponse as TokenVerifyResponse,
    TokensV4PagePaginationArray as TokensV4PagePaginationArray,
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
