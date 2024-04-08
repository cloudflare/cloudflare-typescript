// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
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

export interface Permission {
  analytics?: RolesAPI.PermissionGrant;

  billing?: RolesAPI.PermissionGrant;

  cache_purge?: RolesAPI.PermissionGrant;

  dns?: RolesAPI.PermissionGrant;

  dns_records?: RolesAPI.PermissionGrant;

  lb?: RolesAPI.PermissionGrant;

  logs?: RolesAPI.PermissionGrant;

  organization?: RolesAPI.PermissionGrant;

  ssl?: RolesAPI.PermissionGrant;

  waf?: RolesAPI.PermissionGrant;

  zone_settings?: RolesAPI.PermissionGrant;

  zones?: RolesAPI.PermissionGrant;
}

export type PermissionItem = string;

export type PermissionGroupListResponse = unknown;

export namespace PermissionGroups {
  export import Permission = PermissionGroupsAPI.Permission;
  export import PermissionItem = PermissionGroupsAPI.PermissionItem;
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import PermissionGroupListResponsesSinglePage = PermissionGroupsAPI.PermissionGroupListResponsesSinglePage;
}
