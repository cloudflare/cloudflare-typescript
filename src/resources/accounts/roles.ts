// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
import * as UserAPI from 'cloudflare/resources/user/user';
import { RolesSinglePage } from 'cloudflare/resources/user/user';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(
    params: RoleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesSinglePage, UserAPI.Role> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/roles`, RolesSinglePage, options);
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

export interface PermissionGrant {
  read?: boolean;

  write?: boolean;
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
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleGetParams = RolesAPI.RoleGetParams;
}

export { RolesSinglePage };
