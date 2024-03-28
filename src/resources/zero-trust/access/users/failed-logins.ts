// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FailedLoginsAPI from 'cloudflare/resources/zero-trust/access/users/failed-logins';
import { SinglePage } from 'cloudflare/pagination';

export class FailedLogins extends APIResource {
  /**
   * Get all failed login attempts for a single user.
   */
  list(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FailedLoginListResponsesSinglePage, FailedLoginListResponse> {
    return this._client.getAPIList(
      `/accounts/${identifier}/access/users/${id}/failed_logins`,
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

export namespace FailedLogins {
  export import FailedLoginListResponse = FailedLoginsAPI.FailedLoginListResponse;
  export import FailedLoginListResponsesSinglePage = FailedLoginsAPI.FailedLoginListResponsesSinglePage;
}
