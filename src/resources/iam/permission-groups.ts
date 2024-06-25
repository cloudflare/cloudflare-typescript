// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PermissionGroupsAPI from './permission-groups';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class PermissionGroups extends APIResource {
  /**
   * List all the permissions groups for an account.
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

export type PermissionGroupListResponse = unknown;

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
  meta?: unknown;

  /**
   * Name of the group.
   */
  name?: string;
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

export namespace PermissionGroups {
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import PermissionGroupGetResponse = PermissionGroupsAPI.PermissionGroupGetResponse;
  export import PermissionGroupListResponsesV4PagePaginationArray = PermissionGroupsAPI.PermissionGroupListResponsesV4PagePaginationArray;
  export import PermissionGroupListParams = PermissionGroupsAPI.PermissionGroupListParams;
  export import PermissionGroupGetParams = PermissionGroupsAPI.PermissionGroupGetParams;
}
