// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountsAPI from 'cloudflare/resources/addresses/address-maps/accounts';

export class Accounts extends APIResource {
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

  /**
   * Add an account as a member of a particular address map.
   */
  replace(
    accountId: string,
    addressMapId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountReplaceResponse | null> {
    return (
      this._client.put(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/accounts/:account_id`,
        options,
      ) as Core.APIPromise<{ result: AccountReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AccountDeleteResponse = unknown | Array<unknown> | string;

export type AccountReplaceResponse = unknown | Array<unknown> | string;

export namespace Accounts {
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
  export import AccountReplaceResponse = AccountsAPI.AccountReplaceResponse;
}
