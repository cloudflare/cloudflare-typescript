// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as SCIMAPI from './scim/scim';

export class AccessRequests extends APIResource {
  /**
   * Gets a list of Access authentication audit logs for an account.
   *
   * @example
   * ```ts
   * const accessRequests =
   *   await client.zeroTrust.access.logs.accessRequests.list({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
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

export type AccessRequestListResponse = Array<SCIMAPI.AccessRequest>;

export interface AccessRequestListParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The chronological sorting order for the logs.
   */
  direction?: 'desc' | 'asc';

  /**
   * Query param: Filter by user email. Defaults to substring matching. To force
   * exact matching, set `email_exact=true`. Example (default): `email=@example.com`
   * returns all events with that domain. Example (exact):
   * `email=user@example.com&email_exact=true` returns only that user.
   */
  email?: string;

  /**
   * Query param: When true, `email` is matched exactly instead of substring
   * matching.
   */
  email_exact?: boolean;

  /**
   * Query param: The maximum number of log entries to retrieve.
   */
  limit?: number;

  /**
   * Query param: Page number of results.
   */
  page?: number;

  /**
   * Query param: Number of results per page.
   */
  per_page?: number;

  /**
   * Query param: The earliest event timestamp to query.
   */
  since?: string;

  /**
   * Query param: The latest event timestamp to query.
   */
  until?: string;

  /**
   * Query param: Filter by user UUID.
   */
  user_id?: string;
}

export declare namespace AccessRequests {
  export {
    type AccessRequestListResponse as AccessRequestListResponse,
    type AccessRequestListParams as AccessRequestListParams,
  };
}
