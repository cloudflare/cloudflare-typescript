// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEmails extends APIResource {
  static override readonly _key: readonly ['abuseReports', 'submitted', 'emails'] = Object.freeze([
    'abuseReports',
    'submitted',
    'emails',
  ] as const);

  /**
   * List successful emails sent to the submitter of a report submitted by the
   * account. Does not include emails sent to customers or hosts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const emailListResponse of client.abuseReports.submitted.emails.list(
   *   'report_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    reportID: string,
    params: EmailListParams,
    options?: RequestOptions,
  ): PagePromise<EmailListResponsesV4PagePagination, EmailListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/abuse-reports/submitted/${reportID}/emails`,
      V4PagePagination<EmailListResponse>,
      { query, ...options },
    );
  }
}
export class Emails extends BaseEmails {}

export type EmailListResponsesV4PagePagination = V4PagePagination<EmailListResponse>;

export interface EmailListResponse {
  emails: Array<EmailListResponse.Email>;
}

export namespace EmailListResponse {
  /**
   * An email sent to the customer for an abuse report.
   */
  export interface Email {
    /**
     * Unique identifier of the email.
     */
    id: string;

    /**
     * Body content of the email.
     */
    body: string;

    /**
     * Email address of the recipient.
     */
    recipient: string;

    /**
     * When the email was sent. Time in RFC 3339 format
     * (https://www.rfc-editor.org/rfc/rfc3339.html)
     */
    sent_at: string;

    /**
     * Subject line of the email.
     */
    subject: string;
  }
}

export interface EmailListParams extends V4PagePaginationParams {
  /**
   * Path param: Cloudflare Account ID
   */
  account_id: string;
}

export declare namespace Emails {
  export {
    type EmailListResponse as EmailListResponse,
    type EmailListResponsesV4PagePagination as EmailListResponsesV4PagePagination,
    type EmailListParams as EmailListParams,
  };
}
