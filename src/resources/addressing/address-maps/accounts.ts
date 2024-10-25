// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AccountsAPI from './accounts';
import * as Shared from '../../shared';

export class Accounts extends APIResource {
  /**
   * Add an account as a member of a particular address map.
   */
  update(
    addressMapId: string,
    params: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse> {
    const { account_id, body } = params;
    return this._client.put(
      `/accounts/${account_id}/addressing/address_maps/${addressMapId}/accounts/${account_id}`,
      { body: body, ...options },
    );
  }

  /**
   * Remove an account as a member of a particular address map.
   */
  delete(
    addressMapId: string,
    params: AccountDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/addressing/address_maps/${addressMapId}/accounts/${account_id}`,
      options,
    );
  }
}

export interface AccountUpdateResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: AccountUpdateResponse.ResultInfo;
}

export namespace AccountUpdateResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface AccountDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: AccountDeleteResponse.ResultInfo;
}

export namespace AccountDeleteResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface AccountUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface AccountDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Accounts {
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
  export import AccountDeleteParams = AccountsAPI.AccountDeleteParams;
}
