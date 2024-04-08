// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccessRequestsAPI from 'cloudflare/resources/zero-trust/access/logs/access-requests';

export class AccessRequests extends APIResource {
  /**
   * Gets a list of Access authentication audit logs for an account.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<AccessRequestListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/access/logs/access_requests`, options) as Core.APIPromise<{
        result: AccessRequestListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccessRequests {
  /**
   * The event that occurred, such as a login attempt.
   */
  action?: string;

  /**
   * The result of the authentication event.
   */
  allowed?: boolean;

  /**
   * The URL of the Access application.
   */
  app_domain?: string;

  /**
   * The unique identifier for the Access application.
   */
  app_uid?: string;

  /**
   * The IdP used to authenticate.
   */
  connection?: string;

  created_at?: string;

  /**
   * The IP address of the authenticating user.
   */
  ip_address?: string;

  /**
   * The unique identifier for the request to Cloudflare.
   */
  ray_id?: string;

  /**
   * The email address of the authenticating user.
   */
  user_email?: string;
}

export type AccessRequestListResponse = Array<AccessRequests>;

export namespace AccessRequests {
  export import AccessRequests = AccessRequestsAPI.AccessRequests;
  export import AccessRequestListResponse = AccessRequestsAPI.AccessRequestListResponse;
}
