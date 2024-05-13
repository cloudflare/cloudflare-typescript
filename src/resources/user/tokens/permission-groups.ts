// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as PermissionGroupsAPI from './permission-groups';
import { SinglePage } from '../../../pagination';

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
