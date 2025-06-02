// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PermissionGroups extends APIResource {
  /**
   * List all the permissions groups for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const permissionGroupListResponse of client.iam.permissionGroups.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PermissionGroupListParams,
    options?: RequestOptions,
  ): PagePromise<PermissionGroupListResponsesV4PagePaginationArray, PermissionGroupListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/iam/permission_groups`,
      V4PagePaginationArray<PermissionGroupListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get information about a specific permission group in an account.
   *
   * @example
   * ```ts
   * const permissionGroup =
   *   await client.iam.permissionGroups.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    permissionGroupID: string,
    params: PermissionGroupGetParams,
    options?: RequestOptions,
  ): APIPromise<PermissionGroupGetResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/iam/permission_groups/${permissionGroupID}`,
      options,
    );
  }
}

export type PermissionGroupListResponsesV4PagePaginationArray =
  V4PagePaginationArray<PermissionGroupListResponse>;

/**
 * A named group of permissions that map to a group of operations against
 * resources.
 */
export interface PermissionGroupListResponse {
  /**
   * Identifier of the permission group.
   */
  id: string;

  /**
   * Attributes associated to the permission group.
   */
  meta?: PermissionGroupListResponse.Meta;

  /**
   * Name of the permission group.
   */
  name?: string;
}

export namespace PermissionGroupListResponse {
  /**
   * Attributes associated to the permission group.
   */
  export interface Meta {
    key?: string;

    value?: string;
  }
}

/**
 * A named group of permissions that map to a group of operations against
 * resources.
 */
export interface PermissionGroupGetResponse {
  /**
   * Identifier of the permission group.
   */
  id: string;

  /**
   * Attributes associated to the permission group.
   */
  meta?: PermissionGroupGetResponse.Meta;

  /**
   * Name of the permission group.
   */
  name?: string;
}

export namespace PermissionGroupGetResponse {
  /**
   * Attributes associated to the permission group.
   */
  export interface Meta {
    key?: string;

    value?: string;
  }
}

export interface PermissionGroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: ID of the permission group to be fetched.
   */
  id?: string;

  /**
   * Query param: Label of the permission group to be fetched.
   */
  label?: string;

  /**
   * Query param: Name of the permission group to be fetched.
   */
  name?: string;
}

export interface PermissionGroupGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    type PermissionGroupListResponsesV4PagePaginationArray as PermissionGroupListResponsesV4PagePaginationArray,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };
}
