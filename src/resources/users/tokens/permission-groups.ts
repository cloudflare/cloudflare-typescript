// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionGroupsAPI from 'cloudflare/resources/users/tokens/permission-groups';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups.
   */
  permissionGroupsListPermissionGroups(
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionGroupPermissionGroupsListPermissionGroupsResponse | null> {
    return (
      this._client.get('/user/tokens/permission_groups', options) as Core.APIPromise<{
        result: PermissionGroupPermissionGroupsListPermissionGroupsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PermissionGroupPermissionGroupsListPermissionGroupsResponse = Array<unknown>;

export namespace PermissionGroups {
  export import PermissionGroupPermissionGroupsListPermissionGroupsResponse = PermissionGroupsAPI.PermissionGroupPermissionGroupsListPermissionGroupsResponse;
}
