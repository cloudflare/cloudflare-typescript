// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAccount extends APIResource {
  static override readonly _key: readonly ['dns', 'usage', 'account'] = Object.freeze([
    'dns',
    'usage',
    'account',
  ] as const);

  /**
   * Get the current DNS record usage and quota for an account. May include internal
   * DNS usage and quota.
   *
   * @example
   * ```ts
   * const account = await client.dns.usage.account.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: AccountGetParams, options?: RequestOptions): APIPromise<AccountGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dns_records/usage`, options) as APIPromise<{
        result: AccountGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Account extends BaseAccount {}

export interface AccountGetResponse {
  /**
   * Maximum number of DNS records allowed across all public zones in the account.
   * Null if using zone-level quota.
   */
  record_quota: number | null;

  /**
   * Current number of DNS records across all public zones in the account.
   */
  record_usage: number;

  /**
   * Maximum number of DNS records allowed across all internal zones in the account.
   * Only present if internal DNS is enabled.
   */
  internal_record_quota?: number;

  /**
   * Current number of DNS records across all internal zones in the account. Only
   * present if internal DNS is enabled.
   */
  internal_record_usage?: number;
}

export interface AccountGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Account {
  export { type AccountGetResponse as AccountGetResponse, type AccountGetParams as AccountGetParams };
}
