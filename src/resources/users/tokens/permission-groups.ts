// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionGroupsAPI from 'cloudflare/resources/users/tokens/permission-groups';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<PermissionGroupListResponse | null> {
    return (
      this._client.get('/user/tokens/permission_groups', options) as Core.APIPromise<{
        result: PermissionGroupListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PermissionGroupListResponse = Array<unknown>;

export namespace PermissionGroups {
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
}
