// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Submissions extends APIResource {
  /**
   * This endpoint returns information for submissions to made to reclassify emails.
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
  requested_ts: string;

  submission_id: string;

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
   * Query param: The end of the search date range. Defaults to `now`.
   */
  end?: string;

  /**
   * Query param: The beginning of the search date range. Defaults to
   * `now - 30 days`.
   */
  start?: string;

  /**
   * Query param:
   */
  submission_id?: string;

  /**
   * Query param:
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
