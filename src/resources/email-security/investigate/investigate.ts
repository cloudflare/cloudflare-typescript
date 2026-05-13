// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DetectionsAPI from './detections';
import { DetectionGetParams, DetectionGetResponse, Detections } from './detections';
import * as MoveAPI from './move';
import {
  Move,
  MoveBulkParams,
  MoveBulkResponse,
  MoveBulkResponsesSinglePage,
  MoveCreateParams,
  MoveCreateResponse,
  MoveCreateResponsesSinglePage,
} from './move';
import * as PreviewAPI from './preview';
import {
  Preview,
  PreviewCreateParams,
  PreviewCreateResponse,
  PreviewGetParams,
  PreviewGetResponse,
} from './preview';
import * as RawAPI from './raw';
import { Raw, RawGetParams, RawGetResponse } from './raw';
import * as ReclassifyAPI from './reclassify';
import { Reclassify, ReclassifyCreateParams, ReclassifyCreateResponse } from './reclassify';
import * as ReleaseAPI from './release';
import { Release, ReleaseBulkParams, ReleaseBulkResponse, ReleaseBulkResponsesSinglePage } from './release';
import * as TraceAPI from './trace';
import { Trace, TraceGetParams, TraceGetResponse } from './trace';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Investigate extends APIResource {
  detections: DetectionsAPI.Detections = new DetectionsAPI.Detections(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
  trace: TraceAPI.Trace = new TraceAPI.Trace(this._client);
  move: MoveAPI.Move = new MoveAPI.Move(this._client);
  reclassify: ReclassifyAPI.Reclassify = new ReclassifyAPI.Reclassify(this._client);
  release: ReleaseAPI.Release = new ReleaseAPI.Release(this._client);

  /**
   * Returns information for each email that matches the search parameter(s).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const investigateListResponse of client.emailSecurity.investigate.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   * Retrieves comprehensive details for a specific email message including headers,
   * recipients, sender information, and current quarantine status. Use the
   * investigate_id from search results to fetch detailed information.
   *
   * @example
   * ```ts
   * const investigate =
   *   await client.emailSecurity.investigate.get(
   *     '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    investigateId: string,
    params: InvestigateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvestigateGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/email-security/investigate/${investigateId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: InvestigateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class InvestigateListResponsesV4PagePaginationArray extends V4PagePaginationArray<InvestigateListResponse> {}

export interface InvestigateListResponse {
  /**
   * Unique identifier for a message retrieved from investigation
   */
  id: string;

  /**
   * @deprecated Deprecated, use `GET /investigate/{investigate_id}/action_log`
   * instead. End of life: November 1, 2026.
   */
  action_log: Array<InvestigateListResponse.ActionLog>;

  client_recipients: Array<string>;

  detection_reasons: Array<string>;

  is_phish_submission: boolean;

  is_quarantined: boolean;

  /**
   * The identifier of the message
   */
  postfix_id: string;

  /**
   * Message processing properties
   */
  properties: InvestigateListResponse.Properties;

  /**
   * @deprecated Deprecated, use `scanned_at` instead. End of life: November 1, 2026.
   */
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
    | 'RETRO_SCAN';

  delivery_status?: Array<
    'delivered' | 'moved' | 'quarantined' | 'rejected' | 'deferred' | 'bounced' | 'queued'
  > | null;

  edf_hash?: string | null;

  envelope_from?: string | null;

  envelope_to?: Array<string> | null;

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
    | 'NONE';

  /**
   * @deprecated Deprecated, use the `findings` field from
   * `GET /investigate/{investigate_id}/detections` instead. End of life: November
   * 1, 2026. Detection findings for this message.
   */
  findings?: Array<InvestigateListResponse.Finding> | null;

  from?: string | null;

  from_name?: string | null;

  htmltext_structure_hash?: string | null;

  message_id?: string | null;

  /**
   * Post-delivery operations performed on this message
   */
  post_delivery_operations?: Array<'PREVIEW' | 'QUARANTINE_RELEASE' | 'SUBMISSION' | 'MOVE'> | null;

  postfix_id_outbound?: string | null;

  replyto?: string | null;

  /**
   * When the message was scanned (UTC)
   */
  scanned_at?: string | null;

  /**
   * When the message was sent (UTC)
   */
  sent_at?: string | null;

  sent_date?: string | null;

  smtp_helo_server_ip?: string | null;

  smtp_previous_hop_ip?: string | null;

  subject?: string | null;

  threat_categories?: Array<string> | null;

  to?: Array<string> | null;

  to_name?: Array<string> | null;

  validation?: InvestigateListResponse.Validation;

  x_originating_ip?: string | null;
}

export namespace InvestigateListResponse {
  export interface ActionLog {
    /**
     * Timestamp when action completed
     */
    completed_at: string;

    /**
     * Type of action performed
     */
    operation: 'MOVE' | 'RELEASE' | 'RECLASSIFY' | 'SUBMISSION' | 'QUARANTINE_RELEASE' | 'PREVIEW';

    /**
     * @deprecated Deprecated, use `completed_at` instead. End of life: November
     * 1, 2026.
     */
    completed_timestamp?: string;

    /**
     * Additional properties for the action
     */
    properties?: ActionLog.Properties;

    /**
     * Status of the action
     */
    status?: string | null;
  }

  export namespace ActionLog {
    /**
     * Additional properties for the action
     */
    export interface Properties {
      /**
       * Target folder for move operations
       */
      folder?: string;

      /**
       * User who requested the action
       */
      requested_by?: string;
    }
  }

  /**
   * Message processing properties
   */
  export interface Properties {
    /**
     * Pattern that allowlisted this message
     */
    allowlisted_pattern?: string | null;

    /**
     * Type of allowlist pattern
     */
    allowlisted_pattern_type?:
      | 'quarantine_release'
      | 'acceptable_sender'
      | 'allowed_sender'
      | 'allowed_recipient'
      | 'domain_similarity'
      | 'domain_recency'
      | 'managed_acceptable_sender'
      | 'outbound_ndr'
      | null;

    /**
     * Whether message was blocklisted
     */
    blocklisted_message?: boolean | null;

    /**
     * Pattern that blocklisted this message
     */
    blocklisted_pattern?: string | null;

    /**
     * Legacy field for allowlist pattern type
     */
    whitelisted_pattern_type?:
      | 'quarantine_release'
      | 'acceptable_sender'
      | 'allowed_sender'
      | 'allowed_recipient'
      | 'domain_similarity'
      | 'domain_recency'
      | 'managed_acceptable_sender'
      | 'outbound_ndr'
      | null;
  }

  export interface Finding {
    attachment?: string | null;

    detail?: string | null;

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
      | 'NONE';

    field?: string | null;

    name?: string | null;

    portion?: string | null;

    reason?: string | null;

    score?: number | null;

    value?: string | null;
  }

  export interface Validation {
    comment?: string | null;

    dkim?: 'pass' | 'neutral' | 'fail' | 'error' | 'none';

    dmarc?: 'pass' | 'neutral' | 'fail' | 'error' | 'none';

    spf?: 'pass' | 'neutral' | 'fail' | 'error' | 'none';
  }
}

export interface InvestigateGetResponse {
  /**
   * Unique identifier for a message retrieved from investigation
   */
  id: string;

  /**
   * @deprecated Deprecated, use `GET /investigate/{investigate_id}/action_log`
   * instead. End of life: November 1, 2026.
   */
  action_log: Array<InvestigateGetResponse.ActionLog>;

  client_recipients: Array<string>;

  detection_reasons: Array<string>;

  is_phish_submission: boolean;

  is_quarantined: boolean;

  /**
   * The identifier of the message
   */
  postfix_id: string;

  /**
   * Message processing properties
   */
  properties: InvestigateGetResponse.Properties;

  /**
   * @deprecated Deprecated, use `scanned_at` instead. End of life: November 1, 2026.
   */
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
    | 'RETRO_SCAN';

  delivery_status?: Array<
    'delivered' | 'moved' | 'quarantined' | 'rejected' | 'deferred' | 'bounced' | 'queued'
  > | null;

  edf_hash?: string | null;

  envelope_from?: string | null;

  envelope_to?: Array<string> | null;

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
    | 'NONE';

  /**
   * @deprecated Deprecated, use the `findings` field from
   * `GET /investigate/{investigate_id}/detections` instead. End of life: November
   * 1, 2026. Detection findings for this message.
   */
  findings?: Array<InvestigateGetResponse.Finding> | null;

  from?: string | null;

  from_name?: string | null;

  htmltext_structure_hash?: string | null;

  message_id?: string | null;

  /**
   * Post-delivery operations performed on this message
   */
  post_delivery_operations?: Array<'PREVIEW' | 'QUARANTINE_RELEASE' | 'SUBMISSION' | 'MOVE'> | null;

  postfix_id_outbound?: string | null;

  replyto?: string | null;

  /**
   * When the message was scanned (UTC)
   */
  scanned_at?: string | null;

  /**
   * When the message was sent (UTC)
   */
  sent_at?: string | null;

  sent_date?: string | null;

  smtp_helo_server_ip?: string | null;

  smtp_previous_hop_ip?: string | null;

  subject?: string | null;

  threat_categories?: Array<string> | null;

  to?: Array<string> | null;

  to_name?: Array<string> | null;

  validation?: InvestigateGetResponse.Validation;

  x_originating_ip?: string | null;
}

export namespace InvestigateGetResponse {
  export interface ActionLog {
    /**
     * Timestamp when action completed
     */
    completed_at: string;

    /**
     * Type of action performed
     */
    operation: 'MOVE' | 'RELEASE' | 'RECLASSIFY' | 'SUBMISSION' | 'QUARANTINE_RELEASE' | 'PREVIEW';

    /**
     * @deprecated Deprecated, use `completed_at` instead. End of life: November
     * 1, 2026.
     */
    completed_timestamp?: string;

    /**
     * Additional properties for the action
     */
    properties?: ActionLog.Properties;

    /**
     * Status of the action
     */
    status?: string | null;
  }

  export namespace ActionLog {
    /**
     * Additional properties for the action
     */
    export interface Properties {
      /**
       * Target folder for move operations
       */
      folder?: string;

      /**
       * User who requested the action
       */
      requested_by?: string;
    }
  }

  /**
   * Message processing properties
   */
  export interface Properties {
    /**
     * Pattern that allowlisted this message
     */
    allowlisted_pattern?: string | null;

    /**
     * Type of allowlist pattern
     */
    allowlisted_pattern_type?:
      | 'quarantine_release'
      | 'acceptable_sender'
      | 'allowed_sender'
      | 'allowed_recipient'
      | 'domain_similarity'
      | 'domain_recency'
      | 'managed_acceptable_sender'
      | 'outbound_ndr'
      | null;

    /**
     * Whether message was blocklisted
     */
    blocklisted_message?: boolean | null;

    /**
     * Pattern that blocklisted this message
     */
    blocklisted_pattern?: string | null;

    /**
     * Legacy field for allowlist pattern type
     */
    whitelisted_pattern_type?:
      | 'quarantine_release'
      | 'acceptable_sender'
      | 'allowed_sender'
      | 'allowed_recipient'
      | 'domain_similarity'
      | 'domain_recency'
      | 'managed_acceptable_sender'
      | 'outbound_ndr'
      | null;
  }

  export interface Finding {
    attachment?: string | null;

    detail?: string | null;

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
      | 'NONE';

    field?: string | null;

    name?: string | null;

    portion?: string | null;

    reason?: string | null;

    score?: number | null;

    value?: string | null;
  }

  export interface Validation {
    comment?: string | null;

    dkim?: 'pass' | 'neutral' | 'fail' | 'error' | 'none';

    dmarc?: 'pass' | 'neutral' | 'fail' | 'error' | 'none';

    spf?: 'pass' | 'neutral' | 'fail' | 'error' | 'none';
  }
}

export interface InvestigateListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Whether to include the message action log in the response.
   */
  action_log?: boolean;

  /**
   * Query param
   */
  alert_id?: string;

  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param: Delivery status to filter by.
   */
  delivery_status?: 'delivered' | 'moved' | 'quarantined' | 'rejected' | 'deferred' | 'bounced' | 'queued';

  /**
   * Query param: Whether to include only detections in search results.
   */
  detections_only?: boolean;

  /**
   * Query param: Sender domains to filter by.
   */
  domain?: string;

  /**
   * Query param: The end of the search date range. Defaults to `now`.
   */
  end?: string;

  /**
   * Query param: Dispositions to filter by.
   */
  final_disposition?: 'MALICIOUS' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'NONE';

  /**
   * Query param: Message actions to filter by.
   */
  message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED';

  /**
   * Query param
   */
  message_id?: string;

  /**
   * Query param
   */
  metric?: string;

  /**
   * Query param: Space-delimited search term. Case-insensitive.
   */
  query?: string;

  /**
   * Query param
   */
  recipient?: string;

  /**
   * Query param
   */
  sender?: string;

  /**
   * Query param: The beginning of the search date range. Defaults to
   * `now - 30 days`.
   */
  start?: string;

  /**
   * Query param
   */
  subject?: string;
}

export interface InvestigateGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: When true, search the submissions datastore only. When false or
   * omitted, search the regular datastore only.
   */
  submission?: boolean;
}

Investigate.InvestigateListResponsesV4PagePaginationArray = InvestigateListResponsesV4PagePaginationArray;
Investigate.Detections = Detections;
Investigate.Preview = Preview;
Investigate.Raw = Raw;
Investigate.Trace = Trace;
Investigate.Move = Move;
Investigate.MoveCreateResponsesSinglePage = MoveCreateResponsesSinglePage;
Investigate.MoveBulkResponsesSinglePage = MoveBulkResponsesSinglePage;
Investigate.Reclassify = Reclassify;
Investigate.Release = Release;
Investigate.ReleaseBulkResponsesSinglePage = ReleaseBulkResponsesSinglePage;

export declare namespace Investigate {
  export {
    type InvestigateListResponse as InvestigateListResponse,
    type InvestigateGetResponse as InvestigateGetResponse,
    InvestigateListResponsesV4PagePaginationArray as InvestigateListResponsesV4PagePaginationArray,
    type InvestigateListParams as InvestigateListParams,
    type InvestigateGetParams as InvestigateGetParams,
  };

  export {
    Detections as Detections,
    type DetectionGetResponse as DetectionGetResponse,
    type DetectionGetParams as DetectionGetParams,
  };

  export {
    Preview as Preview,
    type PreviewCreateResponse as PreviewCreateResponse,
    type PreviewGetResponse as PreviewGetResponse,
    type PreviewCreateParams as PreviewCreateParams,
    type PreviewGetParams as PreviewGetParams,
  };

  export { Raw as Raw, type RawGetResponse as RawGetResponse, type RawGetParams as RawGetParams };

  export { Trace as Trace, type TraceGetResponse as TraceGetResponse, type TraceGetParams as TraceGetParams };

  export {
    Move as Move,
    type MoveCreateResponse as MoveCreateResponse,
    type MoveBulkResponse as MoveBulkResponse,
    MoveCreateResponsesSinglePage as MoveCreateResponsesSinglePage,
    MoveBulkResponsesSinglePage as MoveBulkResponsesSinglePage,
    type MoveCreateParams as MoveCreateParams,
    type MoveBulkParams as MoveBulkParams,
  };

  export {
    Reclassify as Reclassify,
    type ReclassifyCreateResponse as ReclassifyCreateResponse,
    type ReclassifyCreateParams as ReclassifyCreateParams,
  };

  export {
    Release as Release,
    type ReleaseBulkResponse as ReleaseBulkResponse,
    ReleaseBulkResponsesSinglePage as ReleaseBulkResponsesSinglePage,
    type ReleaseBulkParams as ReleaseBulkParams,
  };
}
