// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Submissions extends APIResource {
  /**
   * This endpoint returns information for submissions to made to reclassify emails.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const submissionListResponse of client.emailSecurity.submissions.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SubmissionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubmissionListResponsesV4PagePaginationArray, SubmissionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/submissions`,
      SubmissionListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class SubmissionListResponsesV4PagePaginationArray extends V4PagePaginationArray<SubmissionListResponse> {}

export interface SubmissionListResponse {
  /**
   * @deprecated deprecated as of 2026-04-01, use `requested_at` instead.
   */
  requested_ts: string;

  submission_id: string;

  customer_status?: 'escalated' | 'reviewed' | 'unreviewed' | null;

  escalated_as?:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
    | null;

  escalated_at?: string | null;

  escalated_by?: string | null;

  escalated_submission_id?: string | null;

  original_disposition?:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
    | null;

  original_edf_hash?: string | null;

  original_postfix_id?: string | null;

  outcome?: string | null;

  outcome_disposition?:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
    | null;

  requested_at?: string | null;

  requested_by?: string | null;

  requested_disposition?:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE'
    | null;

  status?: string | null;

  subject?: string | null;

  type?: string | null;
}

export interface SubmissionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param
   */
  customer_status?: 'escalated' | 'reviewed' | 'unreviewed';

  /**
   * Query param: The end of the search date range. Defaults to `now` if not
   * provided.
   */
  end?: string;

  /**
   * Query param
   */
  original_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE';

  /**
   * Query param
   */
  outcome_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE';

  /**
   * Query param
   */
  query?: string | null;

  /**
   * Query param
   */
  requested_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE';

  /**
   * Query param: The beginning of the search date range. Defaults to `now - 30 days`
   * if not provided.
   */
  start?: string;

  /**
   * Query param
   */
  status?: string;

  /**
   * Query param
   */
  submission_id?: string;

  /**
   * Query param
   */
  type?: 'TEAM' | 'USER';
}

Submissions.SubmissionListResponsesV4PagePaginationArray = SubmissionListResponsesV4PagePaginationArray;

export declare namespace Submissions {
  export {
    type SubmissionListResponse as SubmissionListResponse,
    SubmissionListResponsesV4PagePaginationArray as SubmissionListResponsesV4PagePaginationArray,
    type SubmissionListParams as SubmissionListParams,
  };
}
