// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountsAPI from 'cloudflare/resources/addresses/address-maps/accounts';

export class Accounts extends APIResource {
  /**
   * Add an account as a member of a particular address map.
   */
  update(
    addressMapId: string,
    params: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse | null> {
    const { account_id } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/accounts/:account_id`,
        options,
      ) as Core.APIPromise<{ result: AccountUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove an account as a member of a particular address map.
   */
  delete(
    addressMapId: string,
    params: AccountDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/accounts/:account_id`,
        options,
      ) as Core.APIPromise<{ result: AccountDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AccountUpdateResponse = unknown | Array<unknown> | string;

export type AccountDeleteResponse = unknown | Array<unknown> | string;

export interface AccountUpdateParams {
  /**
   * Identifier
   */
  account_id: string;
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
