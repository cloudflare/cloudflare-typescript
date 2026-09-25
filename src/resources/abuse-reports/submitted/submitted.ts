// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EmailsAPI from './emails';
import {
  BaseEmails,
  EmailListParams,
  EmailListResponse,
  EmailListResponsesV4PagePagination,
  Emails,
} from './emails';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSubmitted extends APIResource {
  static override readonly _key: readonly ['abuseReports', 'submitted'] = Object.freeze([
    'abuseReports',
    'submitted',
  ] as const);

  /**
   * List abuse reports submitted by the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const submittedListResponse of client.abuseReports.submitted.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SubmittedListParams,
    options?: RequestOptions,
  ): PagePromise<SubmittedListResponsesV4PagePagination, SubmittedListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/abuse-reports/submitted`,
      V4PagePagination<SubmittedListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieve a report submitted by the account.
   *
   * @example
   * ```ts
   * const submitted = await client.abuseReports.submitted.get(
   *   'report_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    reportID: string,
    params: SubmittedGetParams,
    options?: RequestOptions,
  ): APIPromise<SubmittedGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/abuse-reports/submitted/${reportID}`,
        options,
      ) as APIPromise<{ result: SubmittedGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Submitted extends BaseSubmitted {
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
}

export type SubmittedListResponsesV4PagePagination = V4PagePagination<SubmittedListResponse>;

export interface SubmittedListResponse {
  reports: Array<SubmittedListResponse.Report>;
}

export namespace SubmittedListResponse {
  export interface Report {
    /**
     * Public report code.
     */
    id: string;

    /**
     * Time the report was submitted.
     */
    cdate: string;

    /**
     * Submitter-safe reason for a denied report. Null when unavailable.
     */
    denial_reason:
      | 'unable_to_confirm'
      | 'incomplete_report'
      | 'not_on_cloudflare'
      | 'duplicate_report'
      | 'content_removed'
      | 'report_details_mismatch'
      | 'no_abuse_found'
      | 'missing_original_work'
      | 'direct_url_required'
      | 'wrong_report_category'
      | 'content_unavailable'
      | 'law_enforcement_referral_required'
      | 'domain_dispute_process_required'
      | null;

    /**
     * Domain identified in the report.
     */
    domain: string;

    /**
     * Status visible to the account that submitted the report.
     */
    status: 'submitted' | 'accepted' | 'denied';

    /**
     * The abuse report type
     */
    type: 'PHISH' | 'GEN' | 'THREAT' | 'DMCA' | 'EMER' | 'TM' | 'REG_WHO' | 'NCSEI' | 'NETWORK';

    /**
     * Information about the submitter of the report.
     */
    submitter?: Report.Submitter;
  }

  export namespace Report {
    /**
     * Information about the submitter of the report.
     */
    export interface Submitter {
      company?: string;

      email?: string;

      name?: string;

      telephone?: string;
    }
  }
}

export interface SubmittedGetResponse {
  /**
   * Public report code.
   */
  id: string;

  /**
   * Time the report was submitted.
   */
  cdate: string;

  /**
   * Submitter-safe reason for a denied report. Null when unavailable.
   */
  denial_reason:
    | 'unable_to_confirm'
    | 'incomplete_report'
    | 'not_on_cloudflare'
    | 'duplicate_report'
    | 'content_removed'
    | 'report_details_mismatch'
    | 'no_abuse_found'
    | 'missing_original_work'
    | 'direct_url_required'
    | 'wrong_report_category'
    | 'content_unavailable'
    | 'law_enforcement_referral_required'
    | 'domain_dispute_process_required'
    | null;

  /**
   * Domain identified in the report.
   */
  domain: string;

  /**
   * Whether the submitter provided the Digital Services Act attestation.
   */
  dsa_attestation: boolean;

  /**
   * Status visible to the account that submitted the report.
   */
  status: 'submitted' | 'accepted' | 'denied';

  /**
   * The abuse report type
   */
  type: 'PHISH' | 'GEN' | 'THREAT' | 'DMCA' | 'EMER' | 'TM' | 'REG_WHO' | 'NCSEI' | 'NETWORK';

  /**
   * URLs supplied with the report.
   */
  urls: Array<string>;

  /**
   * Authorized agent name supplied with the report.
   */
  agent_name?: string;

  /**
   * Additional comments supplied with the report.
   */
  comments?: string;

  /**
   * The string "on" when a court proceeding applies to the report; otherwise
   * omitted.
   */
  court?: string;

  /**
   * Destination IP addresses supplied with a network abuse report.
   */
  destination_ips?: Array<string>;

  /**
   * Submitter preference for notifying the hosting provider.
   */
  host_notification?: string;

  /**
   * Evidence supplied with the report.
   */
  justification?: string;

  /**
   * Submitter preference for notifying NCMEC.
   */
  ncmec_notification?: string;

  /**
   * Representation supplied for an NCSEI report.
   */
  ncsei_subject_representation?: boolean;

  /**
   * Original work or targeted brand supplied with the report.
   */
  original_work?: string;

  /**
   * Submitter preference for notifying the content owner.
   */
  owner_notification?: string;

  /**
   * Ports and protocols supplied with a network abuse report.
   */
  ports_protocols?: Array<string>;

  /**
   * RDP-mandated fields for registrar WHOIS data disclosure requests.
   */
  reg_who_request?: SubmittedGetResponse.RegWhoRequest;

  /**
   * Country associated with the reported activity.
   */
  reported_country?: string;

  /**
   * User agent associated with the reported activity.
   */
  reported_user_agent?: string;

  /**
   * Source IP addresses supplied with a network abuse report.
   */
  source_ips?: Array<string>;

  /**
   * Information about the submitter of the report.
   */
  submitter?: SubmittedGetResponse.Submitter;

  /**
   * Additional abuse classifications supplied with the report.
   */
  subtypes?: Array<string>;

  /**
   * Title supplied with the report.
   */
  title?: string;

  /**
   * The string "on" when a UDRP proceeding applies to the report; otherwise omitted.
   */
  udrp?: string;

  /**
   * The string "on" when a URS proceeding applies to the report; otherwise omitted.
   */
  urs?: string;
}

export namespace SubmittedGetResponse {
  /**
   * RDP-mandated fields for registrar WHOIS data disclosure requests.
   */
  export interface RegWhoRequest {
    /**
     * Affirmation that the request is made in good faith per RDP 10.2.4. Must be true.
     */
    reg_who_good_faith_affirmation: boolean;

    /**
     * Agreement to process data lawfully per RDP 10.2.5. Must be true.
     */
    reg_who_lawful_processing_agreement: boolean;

    /**
     * Legal rights and rationale for the request per RDP 10.2.3. Required for all
     * WHOIS requests.
     */
    reg_who_legal_basis: string;

    /**
     * The type of WHOIS data request per RDP procedure.
     */
    reg_who_request_type: 'disclosure' | 'invalid_whois';

    /**
     * The specific WHOIS data elements being requested per RDP 10.2.2. Required for
     * all WHOIS requests.
     */
    reg_who_requested_data_elements: Array<
      | 'registrant_name'
      | 'registrant_organization'
      | 'registrant_email'
      | 'registrant_phone'
      | 'registrant_address'
      | 'registrant_address_country'
      | 'registrant_address_postal_code'
      | 'admin_name'
      | 'admin_organization'
      | 'admin_email'
      | 'admin_phone'
      | 'admin_address'
      | 'tech_name'
      | 'tech_organization'
      | 'tech_email'
      | 'tech_phone'
      | 'tech_address'
    >;

    /**
     * Optional authorization statement or power of attorney per RDP 10.2.1.3.
     */
    reg_who_authorization_statement?: string;

    /**
     * The nature of the requestor per RDP 10.2.1.2.
     */
    reg_who_requestor_type?: 'government' | 'corporation' | 'individual';
  }

  /**
   * Information about the submitter of the report.
   */
  export interface Submitter {
    company?: string;

    email?: string;

    name?: string;

    telephone?: string;
  }
}

export interface SubmittedListParams extends V4PagePaginationParams {
  /**
   * Path param: Cloudflare Account ID
   */
  account_id: string;

  /**
   * Query param: Filter by report code.
   */
  id?: string;

  /**
   * Query param: Return reports submitted after this time.
   */
  created_after?: string;

  /**
   * Query param: Return reports submitted before this time.
   */
  created_before?: string;

  /**
   * Query param: Filter by reported domain. This parameter can be specified multiple
   * times.
   */
  domain?: Array<string>;

  /**
   * Query param: A property and direction to sort by (id, cdate, domain, type,
   * status).
   */
  sort?: string;

  /**
   * Query param: Filter by submitter-facing status. This parameter can be specified
   * multiple times.
   */
  status?: Array<'submitted' | 'accepted' | 'denied'>;

  /**
   * Query param: Filter by report type. This parameter can be specified multiple
   * times.
   */
  type?: Array<'PHISH' | 'GEN' | 'THREAT' | 'DMCA' | 'EMER' | 'TM' | 'REG_WHO' | 'NCSEI' | 'NETWORK'>;
}

export interface SubmittedGetParams {
  /**
   * Cloudflare Account ID
   */
  account_id: string;
}

Submitted.Emails = Emails;
Submitted.BaseEmails = BaseEmails;

export declare namespace Submitted {
  export {
    type SubmittedListResponse as SubmittedListResponse,
    type SubmittedGetResponse as SubmittedGetResponse,
    type SubmittedListResponsesV4PagePagination as SubmittedListResponsesV4PagePagination,
    type SubmittedListParams as SubmittedListParams,
    type SubmittedGetParams as SubmittedGetParams,
  };

  export {
    Emails as Emails,
    BaseEmails as BaseEmails,
    type EmailListResponse as EmailListResponse,
    type EmailListResponsesV4PagePagination as EmailListResponsesV4PagePagination,
    type EmailListParams as EmailListParams,
  };
}
