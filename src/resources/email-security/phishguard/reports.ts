// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Reports extends APIResource {
  /**
   * Retrieves `PhishGuard` reports showing phishing attempts and suspicious email
   * patterns detected.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const reportListResponse of client.emailSecurity.phishguard.reports.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReportListResponsesSinglePage, ReportListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/phishguard/reports`,
      ReportListResponsesSinglePage,
      { query, ...options },
    );
  }
}

export class ReportListResponsesSinglePage extends SinglePage<ReportListResponse> {}

export interface ReportListResponse {
  id: number;

  content: string;

  created_at: string;

  disposition:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE';

  fields: ReportListResponse.Fields;

  priority: string;

  title: string;

  ts: string;

  updated_at: string;

  tags?: Array<ReportListResponse.Tag> | null;
}

export namespace ReportListResponse {
  export interface Fields {
    to: Array<string>;

    ts: string;

    from?: string | null;

    postfix_id?: string | null;
  }

  export interface Tag {
    category: string;

    value: string;
  }
}

export interface ReportListParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: The end of the search date range (RFC3339 format).
   */
  end?: string;

  /**
   * Query param
   */
  from_date?: string;

  /**
   * Query param: The beginning of the search date range (RFC3339 format).
   */
  start?: string;

  /**
   * Query param
   */
  to_date?: string;
}

Reports.ReportListResponsesSinglePage = ReportListResponsesSinglePage;

export declare namespace Reports {
  export {
    type ReportListResponse as ReportListResponse,
    ReportListResponsesSinglePage as ReportListResponsesSinglePage,
    type ReportListParams as ReportListParams,
  };
}
