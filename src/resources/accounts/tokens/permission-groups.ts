// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups for Account Owned API Tokens
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const permissionGroupListResponse of client.accounts.tokens.permissionGroups.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PermissionGroupListParams,
    options?: RequestOptions,
  ): PagePromise<PermissionGroupListResponsesSinglePage, PermissionGroupListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/tokens/permission_groups`,
      SinglePage<PermissionGroupListResponse>,
      { query, ...options },
    );
  }

  /**
   * Find all available permission groups for Account Owned API Tokens
   *
   * @example
   * ```ts
   * const permissionGroups =
   *   await client.accounts.tokens.permissionGroups.get({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: PermissionGroupGetParams, options?: RequestOptions): APIPromise<PermissionGroupGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/tokens/permission_groups`, {
        query,
        ...options,
      }) as APIPromise<{ result: PermissionGroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PermissionGroupListResponsesSinglePage = SinglePage<PermissionGroupListResponse>;

export interface PermissionGroupListResponse {
  /**
   * Public ID.
   */
  id?: string;

  /**
   * Permission Group Name
   */
  name?: string;

  /**
   * Resources to which the Permission Group is scoped
   */
  scopes?: Array<
    | 'com.cloudflare.api.account'
    | 'com.cloudflare.api.account.zone'
    | 'com.cloudflare.api.user'
    | 'com.cloudflare.edge.r2.bucket'
  >;
}

export type PermissionGroupGetResponse = Array<PermissionGroupGetResponse.PermissionGroupGetResponseItem>;

export namespace PermissionGroupGetResponse {
  export interface PermissionGroupGetResponseItem {
    /**
     * Public ID.
     */
    id?: string;

    /**
     * Permission Group Name
     */
    name?: string;

    /**
     * Resources to which the Permission Group is scoped
     */
    scopes?: Array<
      | 'com.cloudflare.api.account'
      | 'com.cloudflare.api.account.zone'
      | 'com.cloudflare.api.user'
      | 'com.cloudflare.edge.r2.bucket'
    >;
  }
}

export interface PermissionGroupListParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Filter by the name of the permission group. The value must be
   * URL-encoded.
   */
  name?: string;

  /**
   * Query param: Filter by the scope of the permission group. The value must be
   * URL-encoded.
   */
  scope?: string;
}

export interface PermissionGroupGetParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Filter by the name of the permission group. The value must be
   * URL-encoded.
   */
  name?: string;

  /**
   * Query param: Filter by the scope of the permission group. The value must be
   * URL-encoded.
   */
  scope?: string;
}

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    type PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };
}
