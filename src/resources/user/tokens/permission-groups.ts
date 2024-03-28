// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import { SinglePage } from 'cloudflare/pagination';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups.
   */
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionGroupListResponsesSinglePage, PermissionGroupListResponse> {
    return this._client.getAPIList(
      '/user/tokens/permission_groups',
      PermissionGroupListResponsesSinglePage,
      options,
    );
  }
}

export class PermissionGroupListResponsesSinglePage extends SinglePage<PermissionGroupListResponse> {}

export type PermissionGroupListResponse = unknown;

export namespace PermissionGroups {
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import PermissionGroupListResponsesSinglePage = PermissionGroupsAPI.PermissionGroupListResponsesSinglePage;
}
