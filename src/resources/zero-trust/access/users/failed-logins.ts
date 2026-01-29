// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class FailedLogins extends APIResource {
  /**
   * Get all failed login attempts for a single user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const failedLoginListResponse of client.zeroTrust.access.users.failedLogins.list(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    userID: string,
    params: FailedLoginListParams,
    options?: RequestOptions,
  ): PagePromise<FailedLoginListResponsesSinglePage, FailedLoginListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/users/${userID}/failed_logins`,
      SinglePage<FailedLoginListResponse>,
      options,
    );
  }
}

export type FailedLoginListResponsesSinglePage = SinglePage<FailedLoginListResponse>;

export interface FailedLoginListResponse {
  expiration?: number;

  metadata?: unknown;
}

export interface FailedLoginListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace FailedLogins {
  export {
    type FailedLoginListResponse as FailedLoginListResponse,
    type FailedLoginListResponsesSinglePage as FailedLoginListResponsesSinglePage,
    type FailedLoginListParams as FailedLoginListParams,
  };
}
