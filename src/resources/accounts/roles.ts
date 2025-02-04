// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

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
  get(roleId: string, params: RoleGetParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Role> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/roles/${roleId}`, options) as Core.APIPromise<{
        result: Shared.Role;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RoleListResponse = Array<Shared.Role>;

export interface RoleListParams {
  /**
   * Account identifier tag.
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
  export {
    type RoleListResponse as RoleListResponse,
    type RoleListParams as RoleListParams,
    type RoleGetParams as RoleGetParams,
  };
}
