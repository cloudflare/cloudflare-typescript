// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseReports extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'phishguard', 'reports'] = Object.freeze([
    'emailSecurity',
    'phishguard',
    'reports',
  ] as const);

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
    options?: RequestOptions,
  ): PagePromise<ReportListResponsesSinglePage, ReportListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/phishguard/reports`,
      SinglePage<ReportListResponse>,
      { query, ...options },
    );
  }
}
export class Reports extends BaseReports {}

export type ReportListResponsesSinglePage = SinglePage<ReportListResponse>;

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
   * @deprecated Use `created_at` instead.
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
     * @deprecated Use `occurred_at` instead.
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

export declare namespace Reports {
  export {
    type ReportListResponse as ReportListResponse,
    type ReportListResponsesSinglePage as ReportListResponsesSinglePage,
    type ReportListParams as ReportListParams,
  };
}
