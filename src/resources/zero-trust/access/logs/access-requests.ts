// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class AccessRequests extends APIResource {
  /**
   * Gets a list of Access authentication audit logs for an account.
   */
  list(
    params: AccessRequestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRequestListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/access/logs/access_requests`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: AccessRequestListResponse }>
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

export interface AccessRequestListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The chronological sorting order for the logs.
   */
  direction?: 'desc' | 'asc';

  /**
   * Query param: The maximum number of log entries to retrieve.
   */
  limit?: number;

  /**
   * Query param: The earliest event timestamp to query.
   */
  since?: string;

  /**
   * Query param: The latest event timestamp to query.
   */
  until?: string;
}

export declare namespace AccessRequests {
  export {
    type AccessRequests as AccessRequests,
    type AccessRequestListResponse as AccessRequestListResponse,
    type AccessRequestListParams as AccessRequestListParams,
  };
}
