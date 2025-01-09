// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AbuseReports extends APIResource {
  /**
   * Submit the Abuse Report of a particular type
   */
  create(
    reportType:
      | 'abuse_dmca'
      | 'abuse_trademark'
      | 'abuse_general'
      | 'abuse_phishing'
      | 'abuse_children'
      | 'abuse_threat'
      | 'abuse_registrar_whois'
      | 'abuse_ncsei',
    params: AbuseReportCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AbuseReportCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/abuse-reports/${reportType}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AbuseReportCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The result should be 'success' for successful response
 */
export type AbuseReportCreateResponse = string;

export interface AbuseReportCreateParams {
  /**
   * Path param: The account ID of the submitter.
   */
  account_id: string;

  /**
   * Body param: The abuse report type
   */
  act:
    | 'abuse_dmca'
    | 'abuse_trademark'
    | 'abuse_general'
    | 'abuse_phishing'
    | 'abuse_children'
    | 'abuse_threat'
    | 'abuse_registrar_whois'
    | 'abuse_ncsei';

  /**
   * Body param: A valid email of the abuse reporter
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
  host_notification: 'send' | 'send-anon' | 'none';

  /**
   * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
   * and Trademark reports cannot be anonymous.
   */
  ncmec_notification: 'send' | 'send-anon' | 'none';

  /**
   * Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA)
   * and Trademark reports cannot be anonymous.
   */
  owner_notification: 'send' | 'send-anon' | 'none';

  /**
   * Body param: A list of valid URLs separated by ‘ ’ (new line character). The list
   * of the URLs should not exceed 250 URLs. All URLs should have the same hostname.
   * Each URL should be unique
   */
  urls: string;

  /**
   * Body param: Text not exceeding 100 characters
   */
  address1?: string;

  /**
   * Body param: The name of the copyright holder. Text not exceeding 60 characters.
   */
  agent_name?: string;

  /**
   * Body param: Can be 0 or 1
   */
  agree?: 0 | 1;

  /**
   * Body param: Text not exceeding 255 characters
   */
  city?: string;

  /**
   * Body param: Any additional comments about the infringement not exceeding 2000
   * characters
   */
  comments?: string;

  /**
   * Body param: Text not exceeding 100 characters
   */
  company?: string;

  /**
   * Body param: Text not exceeding 255 characters
   */
  country?: string;

  /**
   * Body param: A list of IP addresses separated by ‘ ’ (new line character). The
   * list of destination IPs should not exceed 30 IP addresses. Each one of the IP
   * addresses ought to be unique
   */
  destination_ips?: string;

  /**
   * Body param: A detailed description of the infringement, including any necessary
   * access details and the exact steps needed to view the content, not exceeding
   * 5000 characters
   */
  justification?: string;

  /**
   * Body param: Text not exceeding 255 characters
   */
  name?: string;

  /**
   * Body param: If the submitter is the target of NCSEI in the URLs of the abuse
   * report
   */
  ncsei_subject_representation?: boolean;

  /**
   * Body param: Text not exceeding 255 characters
   */
  original_work?: string;

  /**
   * Body param: A comma separated list of ports and protocols e.g. 80/TCP, 22/UDP.
   * The total size of the field should not exceed 2000 characters. Each individual
   * port/protocol should not exceed 100 characters. The list should not have more
   * than 30 unique ports and protocols.
   */
  ports_protocols?: string;

  /**
   * Body param: Required for DMCA reports, should be same as Name. An affirmation
   * that all information in the report is true and accurate while agreeing to the
   * policies of Cloudflare's abuse reports
   */
  signature?: string;

  /**
   * Body param: A list of IP addresses separated by ‘ ’ (new line character). The
   * list of source IPs should not exceed 30 IP addresses. Each one of the IP
   * addresses ought to be unique
   */
  source_ips?: string;

  /**
   * Body param: Text not exceeding 255 characters
   */
  state?: string;

  /**
   * Body param: Text not exceeding 20 characters
   */
  tele?: string;

  /**
   * Body param: Text not exceeding 255 characters
   */
  title?: string;

  /**
   * Body param: Text not exceeding 1000 characters
   */
  trademark_number?: string;

  /**
   * Body param: Text not exceeding 1000 characters
   */
  trademark_office?: string;

  /**
   * Body param: Text not exceeding 1000 characters
   */
  trademark_symbol?: string;
}
