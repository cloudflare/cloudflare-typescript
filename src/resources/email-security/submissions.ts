// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Submissions extends APIResource {
  /**
   * Returns information for submissions made to reclassify emails. Shows the status,
   * outcome, and disposition changes for reclassification requests made by users or
   * the security team. Useful for tracking false positive/negative reports.
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
   * When the submission was requested (UTC).
   */
  requested_at: string;

  submission_id: string;

  customer_status?: 'escalated' | 'reviewed' | 'unreviewed' | null;

  escalated_as?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE' | null;

  escalated_at?: string | null;

  escalated_by?: string | null;

  escalated_submission_id?: string | null;

  original_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE' | null;

  original_edf_hash?: string | null;

  /**
   * The postfix ID of the original message that was submitted
   */
  original_postfix_id?: string | null;

  outcome?: string | null;

  outcome_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE' | null;

  requested_by?: string | null;

  requested_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE' | null;

  /**
   * @deprecated Deprecated, use `requested_at` instead
   */
  requested_ts?: string;

  status?: string | null;

  subject?: string | null;

  /**
   * Whether the submission was created by a team member or an end user.
   */
  type?: 'Team' | 'User' | null;
}

export interface SubmissionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The end of the search date range. Defaults to `now`.
   */
  end?: string;

  /**
   * Query param: When true, return only submissions that were escalated by an end
   * user (vs. by the security team). When false, return only submissions that were
   * not escalated by an end user. When omitted, no filter is applied.
   */
  escalated_from_user?: boolean;

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
   * Query param: The beginning of the search date range. Defaults to
   * `now - 30 days`.
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
