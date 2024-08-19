// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TokensAPI from './tokens';
import * as PermissionGroupsAPI from './permission-groups';
import * as ValueAPI from './value';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

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
    tokenId: string,
    body: TokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenUpdateResponse> {
    return (
      this._client.put(`/user/tokens/${tokenId}`, { body, ...options }) as Core.APIPromise<{
        result: TokenUpdateResponse;
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
  get(tokenId: string, options?: Core.RequestOptions): Core.APIPromise<TokenGetResponse> {
    return (
      this._client.get(`/user/tokens/${tokenId}`, options) as Core.APIPromise<{ result: TokenGetResponse }>
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
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;
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
  value?: ValueAPI.Value;
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

export interface TokenUpdateResponse {
  /**
   * Token identifier tag.
   */
  id?: string;

  condition?: TokenUpdateResponse.Condition;

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

export namespace TokenUpdateResponse {
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

export interface TokenListResponse {
  /**
   * Token identifier tag.
   */
  id?: string;

  condition?: TokenListResponse.Condition;

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

export namespace TokenListResponse {
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

export interface TokenGetResponse {
  /**
   * Token identifier tag.
   */
  id?: string;

  condition?: TokenGetResponse.Condition;

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

export namespace TokenGetResponse {
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

export namespace Tokens {
  export import CIDRList = TokensAPI.CIDRList;
  export import Policy = TokensAPI.Policy;
  export import Token = TokensAPI.Token;
  export import TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export import TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export import TokenListResponse = TokensAPI.TokenListResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenGetResponse = TokensAPI.TokenGetResponse;
  export import TokenVerifyResponse = TokensAPI.TokenVerifyResponse;
  export import TokenListResponsesV4PagePaginationArray = TokensAPI.TokenListResponsesV4PagePaginationArray;
  export import TokenCreateParams = TokensAPI.TokenCreateParams;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenListParams = TokensAPI.TokenListParams;
  export import PermissionGroups = PermissionGroupsAPI.PermissionGroups;
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import PermissionGroupListResponsesSinglePage = PermissionGroupsAPI.PermissionGroupListResponsesSinglePage;
  export import ValueResource = ValueAPI.ValueResource;
  export import Value = ValueAPI.Value;
  export import ValueUpdateParams = ValueAPI.ValueUpdateParams;
}
