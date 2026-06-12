// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAccountTypes extends APIResource {
  static override readonly _key: readonly ['tenants', 'accountTypes'] = Object.freeze([
    'tenants',
    'accountTypes',
  ] as const);

  /**
   * List of account types available for the Tenant to provision accounts.
   */
  list(
    tenantID: string,
    options?: RequestOptions,
  ): PagePromise<AccountTypeListResponsesSinglePage, AccountTypeListResponse> {
    return this._client.getAPIList(
      path`/tenants/${tenantID}/account_types`,
      SinglePage<AccountTypeListResponse>,
      options,
    );
  }
}
export class AccountTypes extends BaseAccountTypes {}

export type AccountTypeListResponsesSinglePage = SinglePage<AccountTypeListResponse>;

export type AccountTypeListResponse = string;

export declare namespace AccountTypes {
  export {
    type AccountTypeListResponse as AccountTypeListResponse,
    type AccountTypeListResponsesSinglePage as AccountTypeListResponsesSinglePage,
  };
}
