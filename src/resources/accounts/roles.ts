// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as RolesAPI from './roles';
import * as Shared from '../shared';
import { RolesSinglePage } from '../shared';
import { SinglePage } from '../../pagination';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(params: RoleListParams, options?: Core.RequestOptions): Core.PagePromise<RolesSinglePage, Shared.Role> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/roles`, RolesSinglePage, options);
  }

  /**
   * Get information about a specific role for an account.
   */
  get(roleId: string, params: RoleGetParams, options?: Core.RequestOptions): Core.APIPromise<RoleGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/roles/${roleId}`, options) as Core.APIPromise<{ result: RoleGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type RoleGetResponse = unknown

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

export namespace Roles {
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleGetParams = RolesAPI.RoleGetParams;
}

export { RolesSinglePage }
