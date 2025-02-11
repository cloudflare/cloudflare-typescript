// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { RolesV4PagePaginationArray } from '../shared';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(
    params: RoleListParams,
    options?: RequestOptions,
  ): PagePromise<RolesV4PagePaginationArray, Shared.Role> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/roles`, V4PagePaginationArray<Shared.Role>, {
      query,
      ...options,
    });
  }

  /**
   * Get information about a specific role for an account.
   */
  get(roleID: string, params: RoleGetParams, options?: RequestOptions): APIPromise<Shared.Role> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/roles/${roleID}`, options) as APIPromise<{
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

export { type RolesV4PagePaginationArray };
