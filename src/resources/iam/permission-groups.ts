// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class PermissionGroups extends APIResource {
  /**
   * List all the permissions groups for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const permissionGroupListResponse of client.iam.permissionGroups.list(
   *   { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PermissionGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionGroupListResponsesV4PagePaginationArray, PermissionGroupListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/iam/permission_groups`,
      PermissionGroupListResponsesV4PagePaginationArray,
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
   *     '6d7f2f5f5b1d4a0e9081fdc98d432fd1',
   *     { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' },
   *   );
   * ```
   */
  get(
    permissionGroupId: string,
    params: PermissionGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionGroupGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/iam/permission_groups/${permissionGroupId}`, options);
  }
}

export class PermissionGroupListResponsesV4PagePaginationArray extends V4PagePaginationArray<PermissionGroupListResponse> {}

/**
 * A named group of permissions that map to a group of operations against
 * resources.
 */
export interface PermissionGroupListResponse {
  /**
   * Identifier of the group.
   */
  id: string;

  /**
   * Attributes associated to the permission group.
   */
  meta?: PermissionGroupListResponse.Meta;

  /**
   * Name of the group.
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
   * Identifier of the group.
   */
  id: string;

  /**
   * Attributes associated to the permission group.
   */
  meta?: PermissionGroupGetResponse.Meta;

  /**
   * Name of the group.
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

PermissionGroups.PermissionGroupListResponsesV4PagePaginationArray =
  PermissionGroupListResponsesV4PagePaginationArray;

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    PermissionGroupListResponsesV4PagePaginationArray as PermissionGroupListResponsesV4PagePaginationArray,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };
}
