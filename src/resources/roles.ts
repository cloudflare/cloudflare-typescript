// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RolesAPI from 'cloudflare/resources/roles';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(params: RoleListParams, options?: Core.RequestOptions): Core.APIPromise<RoleListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/roles`, options) as Core.APIPromise<{
        result: RoleListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export type RoleListResponse = Array<RoleListResponse.RoleListResponseItem>;

export namespace RoleListResponse {
  export interface RoleListResponseItem {
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

export interface RoleListParams {
  account_id: unknown;
}

export interface RoleGetParams {
  account_id: unknown;
}

export namespace Roles {
  export import RoleListResponse = RolesAPI.RoleListResponse;
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleGetParams = RolesAPI.RoleGetParams;
}
