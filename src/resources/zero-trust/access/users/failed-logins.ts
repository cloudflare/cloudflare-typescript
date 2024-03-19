// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FailedLoginsAPI from 'cloudflare/resources/zero-trust/access/users/failed-logins';

export class FailedLogins extends APIResource {
  /**
   * Get all failed login attempts for a single user.
   */
  list(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FailedLoginListResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/failed_logins`,
        options,
      ) as Core.APIPromise<{ result: FailedLoginListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FailedLoginListResponse = Array<FailedLoginListResponse.FailedLoginListResponseItem>;

export namespace FailedLoginListResponse {
  export interface FailedLoginListResponseItem {
    expiration?: number;

    metadata?: unknown;
  }
}

export namespace FailedLogins {
  export import FailedLoginListResponse = FailedLoginsAPI.FailedLoginListResponse;
}
