// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Reports extends APIResource {
  /**
   * Retrieves PhishGuard security alert reports for a specified date range. Reports
   * include detected threats, dispositions, and contextual information. Use for
   * security monitoring and threat analysis.
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

  created_at?: string | null;

  tags?: Array<ReportListResponse.Tag> | null;

  /**
   * @deprecated Deprecated, use `created_at` instead
   */
  ts?: string;

  updated_at?: string | null;
}

export namespace ReportListResponse {
  export interface Fields {
    to: Array<string>;

    from?: string | null;

    occurred_at?: string;

    postfix_id?: string | null;

    /**
     * @deprecated Deprecated, use `occurred_at` instead
     */
    ts?: string;
  }

  export interface Tag {
    category: string;

    value: string;
  }
}

export interface ReportListParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: End of the time range (RFC3339). Takes precedence over to_date.
   */
  end?: string;

  /**
   * Query param: Deprecated, use `start` instead. Start date in YYYY-MM-DD format.
   */
  from_date?: string;

  /**
   * Query param: Start of the time range (RFC3339). Takes precedence over from_date.
   */
  start?: string;

  /**
   * Query param: Deprecated, use `end` instead. End date in YYYY-MM-DD format.
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
