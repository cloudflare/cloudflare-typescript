// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Investigate extends APIResource {
  /**
   * Returns information for each email that matches the search parameter(s).
   */
  list(
    params: InvestigateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvestigateListResponsesV4PagePaginationArray, InvestigateListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/investigate`,
      InvestigateListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Returns detection details such as threat categories and sender information for
   * non-benign messages.
   */
  detections(
    postfixId: string,
    params: InvestigateDetectionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvestigateDetectionsResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${postfixId}/detections`,
        options,
      ) as Core.APIPromise<{ result: InvestigateDetectionsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get message details
   */
  get(
    postfixId: string,
    params: InvestigateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvestigateGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${postfixId}`,
        options,
      ) as Core.APIPromise<{ result: InvestigateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a preview of the message body as a base64 encoded PNG image for
   * non-benign messages.
   */
  preview(
    postfixId: string,
    params: InvestigatePreviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvestigatePreviewResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${postfixId}/preview`,
        options,
      ) as Core.APIPromise<{ result: InvestigatePreviewResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the raw eml of any non-benign message.
   */
  raw(
    postfixId: string,
    params: InvestigateRawParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvestigateRawResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${postfixId}/raw`,
        options,
      ) as Core.APIPromise<{ result: InvestigateRawResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get email trace
   */
  trace(
    postfixId: string,
    params: InvestigateTraceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvestigateTraceResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${postfixId}/trace`,
        options,
      ) as Core.APIPromise<{ result: InvestigateTraceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class InvestigateListResponsesV4PagePaginationArray extends V4PagePaginationArray<InvestigateListResponse> {}

export interface InvestigateListResponse {
  id: string;

  action_log: unknown;

  client_recipients: Array<string>;

  detection_reasons: Array<string>;

  is_phish_submission: boolean;

  is_quarantined: boolean;

  /**
   * The identifier of the message.
   */
  postfix_id: string;

  ts: string;

  alert_id?: string | null;

  delivery_mode?:
    | 'DIRECT'
    | 'BCC'
    | 'JOURNAL'
    | 'REVIEW_SUBMISSION'
    | 'DMARC_UNVERIFIED'
    | 'DMARC_FAILURE_REPORT'
    | 'DMARC_AGGREGATE_REPORT'
    | 'THREAT_INTEL_SUBMISSION'
    | 'SIMULATION_SUBMISSION'
    | 'API'
    | 'RETRO_SCAN'
    | null;

  edf_hash?: string | null;

  final_disposition?:
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

  from?: string | null;

  from_name?: string | null;

  message_id?: string | null;

  sent_date?: string | null;

  subject?: string | null;

  threat_categories?: Array<string> | null;

  to?: Array<string> | null;

  to_name?: Array<string> | null;

  validation?: InvestigateListResponse.Validation | null;
}

export namespace InvestigateListResponse {
  export interface Validation {
    comment?: string | null;

    dkim?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

    dmarc?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

    spf?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;
  }
}

export interface InvestigateDetectionsResponse {
  action: string;

  attachments: Array<InvestigateDetectionsResponse.Attachment>;

  headers: Array<InvestigateDetectionsResponse.Header>;

  links: Array<InvestigateDetectionsResponse.Link>;

  sender_info: InvestigateDetectionsResponse.SenderInfo;

  threat_categories: Array<InvestigateDetectionsResponse.ThreatCategory>;

  validation: InvestigateDetectionsResponse.Validation;

  final_disposition?:
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
}

export namespace InvestigateDetectionsResponse {
  export interface Attachment {
    size: number;

    content_type?: string | null;

    detection?:
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

    encrypted?: boolean | null;

    name?: string | null;
  }

  export interface Header {
    name: string;

    value: string;
  }

  export interface Link {
    href: string;

    text?: string | null;
  }

  export interface SenderInfo {
    /**
     * The name of the autonomous system.
     */
    as_name?: string | null;

    /**
     * The number of the autonomous system.
     */
    as_number?: number | null;

    geo?: string | null;

    ip?: string | null;

    pld?: string | null;
  }

  export interface ThreatCategory {
    id: number;

    description?: string | null;

    name?: string | null;
  }

  export interface Validation {
    comment?: string | null;

    dkim?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

    dmarc?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

    spf?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;
  }
}

export interface InvestigateGetResponse {
  id: string;

  action_log: unknown;

  client_recipients: Array<string>;

  detection_reasons: Array<string>;

  is_phish_submission: boolean;

  is_quarantined: boolean;

  /**
   * The identifier of the message.
   */
  postfix_id: string;

  ts: string;

  alert_id?: string | null;

  delivery_mode?:
    | 'DIRECT'
    | 'BCC'
    | 'JOURNAL'
    | 'REVIEW_SUBMISSION'
    | 'DMARC_UNVERIFIED'
    | 'DMARC_FAILURE_REPORT'
    | 'DMARC_AGGREGATE_REPORT'
    | 'THREAT_INTEL_SUBMISSION'
    | 'SIMULATION_SUBMISSION'
    | 'API'
    | 'RETRO_SCAN'
    | null;

  edf_hash?: string | null;

  final_disposition?:
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

  from?: string | null;

  from_name?: string | null;

  message_id?: string | null;

  sent_date?: string | null;

  subject?: string | null;

  threat_categories?: Array<string> | null;

  to?: Array<string> | null;

  to_name?: Array<string> | null;

  validation?: InvestigateGetResponse.Validation | null;
}

export namespace InvestigateGetResponse {
  export interface Validation {
    comment?: string | null;

    dkim?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

    dmarc?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

    spf?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;
  }
}

export interface InvestigatePreviewResponse {
  /**
   * A base64 encoded PNG image of the email.
   */
  screenshot: string;
}

export interface InvestigateRawResponse {
  /**
   * A UTF-8 encoded eml file of the email.
   */
  raw: string;
}

export interface InvestigateTraceResponse {
  inbound: InvestigateTraceResponse.Inbound;

  outbound: InvestigateTraceResponse.Outbound;
}

export namespace InvestigateTraceResponse {
  export interface Inbound {
    lines?: Array<Inbound.Line> | null;
  }

  export namespace Inbound {
    export interface Line {
      lineno: number;

      message: string;

      ts: string;
    }
  }

  export interface Outbound {
    lines?: Array<Outbound.Line> | null;
  }

  export namespace Outbound {
    export interface Line {
      lineno: number;

      message: string;

      ts: string;
    }
  }
}

export interface InvestigateListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: Determines if the message action log is included in the response.
   */
  action_log?: boolean;

  /**
   * Query param:
   */
  alert_id?: string;

  /**
   * Query param: Determines if the search results will include detections or not.
   */
  detections_only?: boolean;

  /**
   * Query param: The sender domains the search filters by.
   */
  domain?: string;

  /**
   * Query param: The end of the search date range. Defaults to `now`.
   */
  end?: string;

  /**
   * Query param: The dispositions the search filters by.
   */
  final_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK';

  /**
   * Query param: The message actions the search filters by.
   */
  message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED';

  /**
   * Query param:
   */
  message_id?: string;

  /**
   * Query param:
   */
  metric?: string;

  /**
   * Query param: The space-delimited term used in the query. The search is
   * case-insensitive.
   *
   * The content of the following email metadata fields are searched:
   *
   * - alert_id
   * - CC
   * - From (envelope_from)
   * - From Name
   * - final_disposition
   * - md5 hash (of any attachment)
   * - sha1 hash (of any attachment)
   * - sha256 hash (of any attachment)
   * - name (of any attachment)
   * - Reason
   * - Received DateTime (yyyy-mm-ddThh:mm:ss)
   * - Sent DateTime (yyyy-mm-ddThh:mm:ss)
   * - ReplyTo
   * - To (envelope_to)
   * - To Name
   * - Message-ID
   * - smtp_helo_server_ip
   * - smtp_previous_hop_ip
   * - x_originating_ip
   * - Subject
   */
  query?: string;

  /**
   * Query param:
   */
  recipient?: string;

  /**
   * Query param:
   */
  sender?: string;

  /**
   * Query param: The beginning of the search date range. Defaults to
   * `now - 30 days`.
   */
  start?: string;
}

export interface InvestigateDetectionsParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface InvestigateGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface InvestigatePreviewParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface InvestigateRawParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface InvestigateTraceParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

Investigate.InvestigateListResponsesV4PagePaginationArray = InvestigateListResponsesV4PagePaginationArray;

export declare namespace Investigate {
  export {
    type InvestigateListResponse as InvestigateListResponse,
    type InvestigateDetectionsResponse as InvestigateDetectionsResponse,
    type InvestigateGetResponse as InvestigateGetResponse,
    type InvestigatePreviewResponse as InvestigatePreviewResponse,
    type InvestigateRawResponse as InvestigateRawResponse,
    type InvestigateTraceResponse as InvestigateTraceResponse,
    InvestigateListResponsesV4PagePaginationArray as InvestigateListResponsesV4PagePaginationArray,
    type InvestigateListParams as InvestigateListParams,
    type InvestigateDetectionsParams as InvestigateDetectionsParams,
    type InvestigateGetParams as InvestigateGetParams,
    type InvestigatePreviewParams as InvestigatePreviewParams,
    type InvestigateRawParams as InvestigateRawParams,
    type InvestigateTraceParams as InvestigateTraceParams,
  };
}
