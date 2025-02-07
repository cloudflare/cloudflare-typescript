// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { RolesSinglePage } from '../shared';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(params: RoleListParams, options?: RequestOptions): PagePromise<RolesSinglePage, Shared.Role> {
    const { account_id } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/roles`, SinglePage<Shared.Role>, options);
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
  export { type RoleListParams as RoleListParams, type RoleGetParams as RoleGetParams };
}

export { type RolesSinglePage };
