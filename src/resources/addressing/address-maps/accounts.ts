// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountsAPI from 'cloudflare/resources/addressing/address-maps/accounts';
import * as Shared from 'cloudflare/resources/shared';

export class Accounts extends APIResource {
  /**
   * Add an account as a member of a particular address map.
   */
  update(
    addressMapId: string,
    params: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { account_id, body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/accounts/${account_id}`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove an account as a member of a particular address map.
   */
  delete(
    addressMapId: string,
    params: AccountDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/accounts/${account_id}`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Accounts {
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
  export import AccountDeleteParams = AccountsAPI.AccountDeleteParams;
}
