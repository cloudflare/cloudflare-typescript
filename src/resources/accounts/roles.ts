// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { RolesV4PagePaginationArray } from '../shared';
import { type V4PagePaginationArrayParams } from '../../pagination';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const role of client.accounts.roles.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: RoleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesV4PagePaginationArray, Shared.Role>;
  list(options?: Core.RequestOptions): Core.PagePromise<RolesV4PagePaginationArray, Shared.Role>;
  list(
    params: RoleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RolesV4PagePaginationArray, Shared.Role> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/roles`, RolesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Get information about a specific role for an account.
   *
   * @example
   * ```ts
   * const role = await client.accounts.roles.get(
   *   '3536bcfad5faccb999b47003c79917fb',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(roleId: string, params?: RoleGetParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Role>;
  get(roleId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Role>;
  get(
    roleId: string,
    params: RoleGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Role> {
    if (isRequestOptions(params)) {
      return this.get(roleId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
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
  account_id?: string;
}

export interface RoleGetParams {
  /**
   * Account identifier tag.
   */
  account_id?: string;
}

export declare namespace Roles {
  export { type RoleListParams as RoleListParams, type RoleGetParams as RoleGetParams };
}

export { RolesV4PagePaginationArray };
