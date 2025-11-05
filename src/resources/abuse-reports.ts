// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { V4PagePagination, type V4PagePaginationParams } from '../pagination';

export class AbuseReports extends APIResource {
  /**
   * Submit the Abuse Report of a particular type
   */
  create(
    reportParam: string,
    params: AbuseReportCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AbuseReportCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/abuse-reports/${reportParam}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AbuseReportCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the abuse reports for a given account.
   */
  list(
    params: AbuseReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AbuseReportListResponsesV4PagePagination, AbuseReportListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/abuse-reports`,
      AbuseReportListResponsesV4PagePagination,
      { query, ...options },
    );
  }

  /**
   * Retrieve an abuse report.
   */
  get(
    reportParam: string,
    params: AbuseReportGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AbuseReportGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/abuse-reports/${reportParam}`, options) as Core.APIPromise<{
        result: AbuseReportGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AbuseReportListResponsesV4PagePagination extends V4PagePagination<AbuseReportListResponse> {}

/**
 * The result should be 'success' for successful response
 */
export type AbuseReportCreateResponse = string;

export interface AbuseReportListResponse {
  reports: Array<AbuseReportListResponse.Report>;
}

export namespace AbuseReportListResponse {
  export interface Report {
    /**
     * Public facing ID of abuse report, aka abuse_rand.
     */
    id: string;

    /**
     * Creation date of report. Time in RFC 3339 format
     * (https://www.rfc-editor.org/rfc/rfc3339.html)
     */
    cdate: string;

    /**
     * Domain that relates to the report.
     */
    domain: string;

    /**
     * A summary of the mitigations related to this report.
     */
    mitigation_summary: Report.MitigationSummary;

    /**
     * An enum value that represents the status of an abuse record
     */
    status: 'accepted' | 'in_review';

    /**
     * The abuse report type
     */
    type: 'PHISH' | 'GEN' | 'THREAT' | 'DMCA' | 'EMER' | 'TM' | 'REG_WHO' | 'NCSEI' | 'NETWORK';
  }

  export namespace Report {
    /**
     * A summary of the mitigations related to this report.
     */
    export interface MitigationSummary {
      /**
       * How many of the reported URLs were confirmed as abusive.
       */
      accepted_url_count: number;

      /**
       * How many mitigations are active.
       */
      active_count: number;

      /**
       * Whether the report has been forwarded to an external hosting provider.
       */
      external_host_notified: boolean;

      /**
       * How many mitigations are under review.
       */
      in_review_count: number;

      /**
       * How many mitigations are pending their effective date.
       */
      pending_count: number;
    }
  }
}

export interface AbuseReportGetResponse {
  /**
   * Public facing ID of abuse report, aka abuse_rand.
   */
  id: string;

  /**
   * Creation date of report. Time in RFC 3339 format
   * (https://www.rfc-editor.org/rfc/rfc3339.html)
   */
  cdate: string;

  /**
   * Domain that relates to the report.
   */
  domain: string;

  /**
   * A summary of the mitigations related to this report.
   */
  mitigation_summary: AbuseReportGetResponse.MitigationSummary;

  /**
   * An enum value that represents the status of an abuse record
   */
  status: 'accepted' | 'in_review';

  /**
   * The abuse report type
   */
  type: 'PHISH' | 'GEN' | 'THREAT' | 'DMCA' | 'EMER' | 'TM' | 'REG_WHO' | 'NCSEI' | 'NETWORK';
}

export namespace AbuseReportGetResponse {
  /**
   * A summary of the mitigations related to this report.
   */
  export interface MitigationSummary {
    /**
     * How many of the reported URLs were confirmed as abusive.
     */
    accepted_url_count: number;

    /**
     * How many mitigations are active.
     */
    active_count: number;

    /**
     * Whether the report has been forwarded to an external hosting provider.
     */
    external_host_notified: boolean;

    /**
     * How many mitigations are under review.
     */
    in_review_count: number;

    /**
     * How many mitigations are pending their effective date.
     */
    pending_count: number;
  }
}

export type AbuseReportCreateParams =
  | AbuseReportCreateParams.AbuseReportsDmcaReport
  | AbuseReportCreateParams.AbuseReportsTrademarkReport
  | AbuseReportCreateParams.AbuseReportsGeneralReport
  | AbuseReportCreateParams.AbuseReportsPhishingReport
  | AbuseReportCreateParams.AbuseReportsCsamReport
  | AbuseReportCreateParams.AbuseReportsThreatReport
  | AbuseReportCreateParams.AbuseReportsRegistrarWhoisReport
  | AbuseReportCreateParams.AbuseReportsNcseiReport;

export declare namespace AbuseReportCreateParams {
  export interface AbuseReportsDmcaReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_dmca';

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    address1: string;

    /**
     * Body param: The name of the copyright holder. Text not exceeding 60 characters.
     * This field may be released by Cloudflare to third parties such as the Lumen
     * Database (https://lumendatabase.org/).
     */
    agent_name: string;

    /**
     * Body param: Can be `0` for false or `1` for true. Must be value: 1 for DMCA
     * reports
     */
    agree: 1;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    city: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    country: string;

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send';

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    original_work: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send';

    /**
     * Body param: Required for DMCA reports, should be same as Name. An affirmation
     * that all information in the report is true and accurate while agreeing to the
     * policies of Cloudflare's abuse reports
     */
    signature: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    state: string;

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsTrademarkReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_trademark';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send';

    /**
     * Body param: A detailed description of the infringement, including any necessary
     * access details and the exact steps needed to view the content, not exceeding
     * 5000 characters.
     */
    justification: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send';

    /**
     * Body param: Text not exceeding 1000 characters
     */
    trademark_number: string;

    /**
     * Body param: Text not exceeding 1000 characters
     */
    trademark_office: string;

    /**
     * Body param: Text not exceeding 1000 characters
     */
    trademark_symbol: string;

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsGeneralReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_general';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send' | 'send-anon';

    /**
     * Body param: A detailed description of the infringement, including any necessary
     * access details and the exact steps needed to view the content, not exceeding
     * 5000 characters.
     */
    justification: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send' | 'send-anon' | 'none';

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: A list of IP addresses separated by ‘\n’ (new line character). The
     * list of destination IPs should not exceed 30 IP addresses. Each one of the IP
     * addresses ought to be unique.
     */
    destination_ips?: string;

    /**
     * Body param: A comma separated list of ports and protocols e.g. 80/TCP, 22/UDP.
     * The total size of the field should not exceed 2000 characters. Each individual
     * port/protocol should not exceed 100 characters. The list should not have more
     * than 30 unique ports and protocols.
     */
    ports_protocols?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: A list of IP addresses separated by ‘\n’ (new line character). The
     * list of source IPs should not exceed 30 IP addresses. Each one of the IP
     * addresses ought to be unique.
     */
    source_ips?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsPhishingReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_phishing';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send' | 'send-anon';

    /**
     * Body param: A detailed description of the infringement, including any necessary
     * access details and the exact steps needed to view the content, not exceeding
     * 5000 characters.
     */
    justification: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send' | 'send-anon';

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    original_work?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsCsamReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_children';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send' | 'send-anon';

    /**
     * Body param: A detailed description of the infringement, including any necessary
     * access details and the exact steps needed to view the content, not exceeding
     * 5000 characters.
     */
    justification: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    ncmec_notification: 'send' | 'send-anon';

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send' | 'send-anon' | 'none';

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    country?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsThreatReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_threat';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send' | 'send-anon';

    /**
     * Body param: A detailed description of the infringement, including any necessary
     * access details and the exact steps needed to view the content, not exceeding
     * 5000 characters.
     */
    justification: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send' | 'send-anon';

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsRegistrarWhoisReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_registrar_whois';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send' | 'send-anon' | 'none';

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }

  export interface AbuseReportsNcseiReport {
    /**
     * Path param: Cloudflare Account ID
     */
    account_id: string;

    /**
     * Body param: The report type for submitted reports.
     */
    act: 'abuse_ncsei';

    /**
     * Body param: A valid email of the abuse reporter. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    email: string;

    /**
     * Body param: Should match the value provided in `email`
     */
    email2: string;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    host_notification: 'send' | 'send-anon';

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    name: string;

    /**
     * Body param: If the submitter is the target of NCSEI in the URLs of the abuse
     * report.
     */
    ncsei_subject_representation: boolean;

    /**
     * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
     * and Trademark reports cannot be anonymous.
     */
    owner_notification: 'send' | 'send-anon' | 'none';

    /**
     * Body param: A list of valid URLs separated by ‘\n’ (new line character). The
     * list of the URLs should not exceed 250 URLs. All URLs should have the same
     * hostname. Each URL should be unique. This field may be released by Cloudflare to
     * third parties such as the Lumen Database (https://lumendatabase.org/).
     */
    urls: string;

    /**
     * Body param: Any additional comments about the infringement not exceeding 2000
     * characters
     */
    comments?: string;

    /**
     * Body param: Text not exceeding 100 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    company?: string;

    /**
     * Body param: Text not exceeding 255 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    country?: string;

    /**
     * Body param: Text containing 2 characters
     */
    reported_country?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    reported_user_agent?: string;

    /**
     * Body param: Text not exceeding 20 characters. This field may be released by
     * Cloudflare to third parties such as the Lumen Database
     * (https://lumendatabase.org/).
     */
    tele?: string;

    /**
     * Body param: Text not exceeding 255 characters
     */
    title?: string;
  }
}

export interface AbuseReportListParams extends V4PagePaginationParams {
  /**
   * Path param: Cloudflare Account ID
   */
  account_id: string;

  /**
   * Query param: Returns reports created after the specified date
   */
  created_after?: string;

  /**
   * Query param: Returns reports created before the specified date
   */
  created_before?: string;

  /**
   * Query param: Filter by domain name related to the abuse report
   */
  domain?: string;

  /**
   * Query param: Filter reports that have any mitigations in the given status.
   */
  mitigation_status?: 'pending' | 'active' | 'in_review' | 'cancelled' | 'removed';

  /**
   * Query param: A property to sort by, followed by the order (id, cdate, domain,
   * type, status)
   */
  sort?: string;

  /**
   * Query param: Filter by the status of the report.
   */
  status?: 'accepted' | 'in_review';

  /**
   * Query param: Filter by the type of the report.
   */
  type?: 'PHISH' | 'GEN' | 'THREAT' | 'DMCA' | 'EMER' | 'TM' | 'REG_WHO' | 'NCSEI' | 'NETWORK';
}

export interface AbuseReportGetParams {
  /**
   * Cloudflare Account ID
   */
  account_id: string;
}

AbuseReports.AbuseReportListResponsesV4PagePagination = AbuseReportListResponsesV4PagePagination;

export declare namespace AbuseReports {
  export {
    type AbuseReportCreateResponse as AbuseReportCreateResponse,
    type AbuseReportListResponse as AbuseReportListResponse,
    type AbuseReportGetResponse as AbuseReportGetResponse,
    AbuseReportListResponsesV4PagePagination as AbuseReportListResponsesV4PagePagination,
    type AbuseReportCreateParams as AbuseReportCreateParams,
    type AbuseReportListParams as AbuseReportListParams,
    type AbuseReportGetParams as AbuseReportGetParams,
  };
}
