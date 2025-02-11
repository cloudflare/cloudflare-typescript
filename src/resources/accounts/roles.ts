// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { RolesV4PagePaginationArray } from '../shared';
import { type V4PagePaginationArrayParams } from '../../pagination';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(
    params: RoleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesV4PagePaginationArray, Shared.Role> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/roles`, RolesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Get information about a specific role for an account.
   */
  get(roleId: string, params: RoleGetParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Role> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/roles/${roleId}`, options) as Core.APIPromise<{
        result: Shared.Role;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RoleListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;
}

export interface RoleGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace Roles {
  export { type RoleListParams as RoleListParams, type RoleGetParams as RoleGetParams };
}

export { RolesV4PagePaginationArray };
