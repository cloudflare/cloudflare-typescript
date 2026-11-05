// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseJitRequests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'logs', 'jitRequests'] = Object.freeze([
    'zeroTrust',
    'access',
    'logs',
    'jitRequests',
  ] as const);

  /**
   * Lists account-wide Access JIT request logs reconstructed from request lifecycle
   * events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const jitRequestListResponse of client.zeroTrust.access.logs.jitRequests.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: JitRequestListParams,
    options?: RequestOptions,
  ): PagePromise<JitRequestListResponsesV4PagePaginationArray, JitRequestListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/logs/jit_requests`,
      V4PagePaginationArray<JitRequestListResponse>,
      { query, ...options },
    );
  }

  /**
   * Gets an account-scoped Access JIT request summary and its lifecycle events in
   * chronological order.
   *
   * @example
   * ```ts
   * const jitRequest =
   *   await client.zeroTrust.access.logs.jitRequests.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    knockRequestID: string,
    params: JitRequestGetParams,
    options?: RequestOptions,
  ): APIPromise<JitRequestGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/logs/jit_requests/${knockRequestID}`,
        options,
      ) as APIPromise<{ result: JitRequestGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class JitRequests extends BaseJitRequests {}

export type JitRequestListResponsesV4PagePaginationArray = V4PagePaginationArray<JitRequestListResponse>;

export interface JitRequestListResponse {
  /**
   * Audience of the Access application.
   */
  app_aud?: string;

  app_hostname?: string;

  /**
   * Number of unique actors who approved the request.
   */
  approvals_received?: number;

  /**
   * Unique actors who approved the request.
   */
  approver_emails?: Array<string>;

  created_at?: string;

  expires_at?: string;

  /**
   * Unique identifier for the JIT request.
   */
  knock_request_id?: string;

  purpose_justification?: string;

  requester_email?: string;

  /**
   * JIT request status. `SPENT` is deprecated and interpreted as `APPROVED`.
   */
  status?: 'PENDING' | 'APPROVED' | 'DENIED' | 'CANCELED' | 'SPENT';
}

export interface JitRequestGetResponse {
  /**
   * Audience of the Access application.
   */
  app_aud?: string;

  app_hostname?: string;

  /**
   * Number of unique actors who approved the request.
   */
  approvals_received?: number;

  /**
   * Unique actors who approved the request.
   */
  approver_emails?: Array<string>;

  created_at?: string;

  events?: Array<JitRequestGetResponse.Event>;

  expires_at?: string;

  /**
   * Unique identifier for the JIT request.
   */
  knock_request_id?: string;

  purpose_justification?: string;

  requester_email?: string;

  /**
   * JIT request status. `SPENT` is deprecated and interpreted as `APPROVED`.
   */
  status?: 'PENDING' | 'APPROVED' | 'DENIED' | 'CANCELED' | 'SPENT';
}

export namespace JitRequestGetResponse {
  export interface Event {
    actor_email?: string;

    actor_idp?: string;

    actor_uuid?: string;

    decision_outcome?: string;

    ray_id?: string;

    session_duration_seconds?: number;

    success?: boolean;

    timestamp?: string;

    type?:
      | 'CREATED'
      | 'APPROVER_DECISION'
      | 'COMMITTED'
      | 'CANCELED'
      | 'LOGIN_SUCCESS'
      | 'REDIRECT_TO_ACTIVE';
  }
}

export interface JitRequestListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Case-insensitive search over request ID, requester email,
   * application audience, and application hostname.
   */
  search?: string;

  /**
   * Query param: The earliest request timestamp to query. Defaults to 366 days
   * before the current time.
   */
  since?: string;

  /**
   * Query param: JIT request status. `SPENT` is deprecated and interpreted as
   * `APPROVED`.
   */
  status?: 'PENDING' | 'APPROVED' | 'DENIED' | 'CANCELED' | 'SPENT';

  /**
   * Query param: The latest request timestamp to query. Defaults to the current
   * time.
   */
  until?: string;
}

export interface JitRequestGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace JitRequests {
  export {
    type JitRequestListResponse as JitRequestListResponse,
    type JitRequestGetResponse as JitRequestGetResponse,
    type JitRequestListResponsesV4PagePaginationArray as JitRequestListResponsesV4PagePaginationArray,
    type JitRequestListParams as JitRequestListParams,
    type JitRequestGetParams as JitRequestGetParams,
  };
}
