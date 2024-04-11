// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import { SinglePage } from 'cloudflare/pagination';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(
    params: RoleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoleListResponsesSinglePage, RoleListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/roles`, RoleListResponsesSinglePage, options);
  }

  /**
   * Get information about a specific role for an account.
   */
  get(
    roleId: unknown,
    params: RoleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/roles/${roleId}`, options) as Core.APIPromise<{
        result: RoleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RoleListResponsesSinglePage extends SinglePage<RoleListResponse> {}

export interface PermissionGrant {
  read?: boolean;

  write?: boolean;
}

export interface RoleListResponse {
  /**
   * Role identifier tag.
   */
  id: string;

  /**
   * Description of role's permissions.
   */
  description: string;

  /**
   * Role Name.
   */
  name: string;

  /**
   * Access permissions for this User.
   */
  permissions: Array<PermissionGroupsAPI.Permission>;
}

export type RoleGetResponse = unknown | string | null;

export interface RoleListParams {
  account_id: unknown;
}

export interface RoleGetParams {
  account_id: unknown;
}

export namespace Roles {
  export import PermissionGrant = RolesAPI.PermissionGrant;
  export import RoleListResponse = RolesAPI.RoleListResponse;
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
  export import RoleListResponsesSinglePage = RolesAPI.RoleListResponsesSinglePage;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleGetParams = RolesAPI.RoleGetParams;
}
