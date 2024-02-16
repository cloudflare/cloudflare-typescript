// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RolesAPI from 'cloudflare/resources/roles';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  accountRolesListRoles(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleAccountRolesListRolesResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/roles`, options) as Core.APIPromise<{
        result: RoleAccountRolesListRolesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific role for an account.
   */
  get(accountId: unknown, roleId: unknown, options?: Core.RequestOptions): Core.APIPromise<RoleGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/roles/${roleId}`, options) as Core.APIPromise<{
        result: RoleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RoleAccountRolesListRolesResponse =
  Array<RoleAccountRolesListRolesResponse.RoleAccountRolesListRolesResponseItem>;

export namespace RoleAccountRolesListRolesResponse {
  export interface RoleAccountRolesListRolesResponseItem {
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
    permissions: Array<string>;
  }
}

export type RoleGetResponse = unknown | string | null;

export namespace Roles {
  export import RoleAccountRolesListRolesResponse = RolesAPI.RoleAccountRolesListRolesResponse;
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
}
