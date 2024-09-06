// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as FailedLoginsAPI from './failed-logins';
import { SinglePage } from '../../../../pagination';

export class FailedLogins extends APIResource {
  /**
   * Get all failed login attempts for a single user.
   */
  list(
    userId: string,
    params: FailedLoginListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FailedLoginListResponsesSinglePage, FailedLoginListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/users/${userId}/failed_logins`,
      FailedLoginListResponsesSinglePage,
      options,
    );
  }
}

export class FailedLoginListResponsesSinglePage extends SinglePage<FailedLoginListResponse> {}

export interface FailedLoginListResponse {
  expiration?: number;

  metadata?: unknown;
}

export interface FailedLoginListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace FailedLogins {
  export import FailedLoginListResponse = FailedLoginsAPI.FailedLoginListResponse;
  export import FailedLoginListResponsesSinglePage = FailedLoginsAPI.FailedLoginListResponsesSinglePage;
  export import FailedLoginListParams = FailedLoginsAPI.FailedLoginListParams;
}
