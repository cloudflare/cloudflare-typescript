// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountsAPI from 'cloudflare/resources/addresses/address-maps/accounts';

export class Accounts extends APIResource {
  /**
   * Add an account as a member of a particular address map.
   */
  update(
    accountId: string,
    addressMapId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse | null> {
    return (
      this._client.put(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/accounts/:account_id`,
        options,
      ) as Core.APIPromise<{ result: AccountUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove an account as a member of a particular address map.
   */
  delete(
    accountId: string,
    addressMapId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/accounts/:account_id`,
        options,
      ) as Core.APIPromise<{ result: AccountDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AccountUpdateResponse = unknown | Array<unknown> | string;

export type AccountDeleteResponse = unknown | Array<unknown> | string;

export namespace Accounts {
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
}
