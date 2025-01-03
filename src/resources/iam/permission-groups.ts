// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SettingsAPI from '../zones/settings';
import { OriginMaxHTTPVersionsV4PagePaginationArray } from '../zones/settings';
import { type V4PagePaginationArrayParams } from '../../pagination';

export class PermissionGroups extends APIResource {
  /**
   * List all the permissions groups for an account.
   */
  list(
    params: PermissionGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginMaxHTTPVersionsV4PagePaginationArray, SettingsAPI.OriginMaxHTTPVersion> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/iam/permission_groups`,
      OriginMaxHTTPVersionsV4PagePaginationArray,
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

export declare namespace PermissionGroups {
  export {
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };
}

export { OriginMaxHTTPVersionsV4PagePaginationArray };
