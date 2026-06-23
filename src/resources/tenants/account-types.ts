// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class AccountTypes extends APIResource {
  /**
   * List of account types available for the Tenant to provision accounts.
   */
  list(
    tenantId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountTypeListResponsesSinglePage, AccountTypeListResponse> {
    return this._client.getAPIList(
      `/tenants/${tenantId}/account_types`,
      AccountTypeListResponsesSinglePage,
      options,
    );
  }
}

export class AccountTypeListResponsesSinglePage extends SinglePage<AccountTypeListResponse> {}

export type AccountTypeListResponse = string;

AccountTypes.AccountTypeListResponsesSinglePage = AccountTypeListResponsesSinglePage;

export declare namespace AccountTypes {
  export {
    type AccountTypeListResponse as AccountTypeListResponse,
    AccountTypeListResponsesSinglePage as AccountTypeListResponsesSinglePage,
  };
}
