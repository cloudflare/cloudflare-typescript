// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { TokensV4PagePaginationArray } from '../../shared';
import * as PermissionGroupsAPI from './permission-groups';
import {
  PermissionGroupListParams,
  PermissionGroupListResponse,
  PermissionGroupListResponsesSinglePage,
  PermissionGroups,
} from './permission-groups';
import * as ValueAPI from './value';
import { Value, ValueUpdateParams } from './value';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tokens extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  value: ValueAPI.Value = new ValueAPI.Value(this._client);

  /**
   * Create a new access token.
   *
   * @example
   * ```ts
   * const token = await client.user.tokens.create({
   *   name: 'readonly token',
   *   policies: [
   *     {
   *       effect: 'allow',
   *       permission_groups: [
   *         { id: 'c8fed203ed3043cba015a93ad1616f1f' },
   *         { id: '82e64a83756745bbbb1c9c2701bf816b' },
   *       ],
   *       resources: {},
   *     },
   *   ],
   * });
   * ```
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<TokenCreateResponse> {
    return (
      this._client.post('/user/tokens', { body, ...options }) as APIPromise<{ result: TokenCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing token.
   *
   * @example
   * ```ts
   * const token = await client.user.tokens.update(
   *   'ed17574386854bf78a67040be0a770b0',
   *   {
   *     name: 'readonly token',
   *     policies: [
   *       {
   *         effect: 'allow',
   *         permission_groups: [
   *           { id: 'c8fed203ed3043cba015a93ad1616f1f' },
   *           { id: '82e64a83756745bbbb1c9c2701bf816b' },
   *         ],
   *         resources: {},
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  update(tokenID: string, body: TokenUpdateParams, options?: RequestOptions): APIPromise<Shared.Token> {
    return (
      this._client.put(path`/user/tokens/${tokenID}`, { body, ...options }) as APIPromise<{
        result: Shared.Token;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all access tokens you created.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const token of client.user.tokens.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TokensV4PagePaginationArray, Shared.Token> {
    return this._client.getAPIList('/user/tokens', V4PagePaginationArray<Shared.Token>, {
      query,
      ...options,
    });
  }

  /**
   * Destroy a token.
   *
   * @example
   * ```ts
   * const token = await client.user.tokens.delete(
   *   'ed17574386854bf78a67040be0a770b0',
   * );
   * ```
   */
  delete(tokenID: string, options?: RequestOptions): APIPromise<TokenDeleteResponse | null> {
    return (
      this._client.delete(path`/user/tokens/${tokenID}`, options) as APIPromise<{
        result: TokenDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific token.
   *
   * @example
   * ```ts
   * const token = await client.user.tokens.get(
   *   'ed17574386854bf78a67040be0a770b0',
   * );
   * ```
   */
  get(tokenID: string, options?: RequestOptions): APIPromise<Shared.Token> {
    return (
      this._client.get(path`/user/tokens/${tokenID}`, options) as APIPromise<{ result: Shared.Token }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Test whether a token works.
   *
   * @example
   * ```ts
   * const response = await client.user.tokens.verify();
   * ```
   */
  verify(options?: RequestOptions): APIPromise<TokenVerifyResponse> {
    return (
      this._client.get('/user/tokens/verify', options) as APIPromise<{ result: TokenVerifyResponse }>
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

  /**
   * Status of the token.
   */
  status?: 'active' | 'disabled' | 'expired';
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
    type PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
    type PermissionGroupListParams as PermissionGroupListParams,
  };

  export { Value as Value, type ValueUpdateParams as ValueUpdateParams };
}

export { type TokensV4PagePaginationArray };
