// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseMessages extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'bulk', 'messages'] =
    Object.freeze(['emailSecurity', 'investigate', 'bulk', 'messages'] as const);

  /**
   * Returns the individual messages associated with a bulk action job, including
   * their processing status.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messageListResponse of client.emailSecurity.investigate.bulk.messages.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    jobID: string,
    params: MessageListParams,
    options?: RequestOptions,
  ): PagePromise<MessageListResponsesV4PagePaginationArray, MessageListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/bulk/${jobID}/messages`,
      V4PagePaginationArray<MessageListResponse>,
      { query, ...options },
    );
  }
}
export class Messages extends BaseMessages {}

export type MessageListResponsesV4PagePaginationArray = V4PagePaginationArray<MessageListResponse>;

export interface MessageListResponse {
  action_params: MessageListResponse.Move | MessageListResponse.Release;

  action_type: 'MOVE' | 'RELEASE';

  created_at: string;

  message_id: string;

  postfix_id: string;

  retry_count: number;

  status: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';

  alert_id?: string | null;

  email_message_id?: string | null;

  message?: MessageListResponse.Message;

  processed_at?: string | null;

  /**
   * When to retry the action if it failed.
   */
  retry_after?: string | null;

  status_message?: string | null;
}

export namespace MessageListResponse {
  export interface Move {
    client_recipient: string;

    destination:
      | 'Inbox'
      | 'JunkEmail'
      | 'DeletedItems'
      | 'RecoverableItemsDeletions'
      | 'RecoverableItemsPurges';

    type: 'MOVE';

    /**
     * @deprecated This field is nonfunctional.
     */
    expected_disposition?:
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

  export interface Release {
    client_recipient: string;

    type: 'RELEASE';
  }

  export interface Message {
    /**
     * Unique identifier for a message retrieved from investigation.
     */
    id: string;

    /**
     * @deprecated Use GET /investigate/{investigate_id}/action_log instead.
     */
    action_log: Array<Message.ActionLog>;

    client_recipients: Array<string>;

    detection_reasons: Array<string>;

    is_phish_submission: boolean;

    is_quarantined: boolean;

    /**
     * The identifier of the message.
     */
    postfix_id: string;

    /**
     * Message processing properties.
     */
    properties: Message.Properties;

    /**
     * @deprecated Use `scanned_at` instead.
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
      | 'RETRO_SCAN'
      | null;

    delivery_status?: Array<
      'delivered' | 'moved' | 'quarantined' | 'rejected' | 'deferred' | 'bounced' | 'queued' | 'move_failed'
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
      | 'NONE'
      | null;

    /**
     * @deprecated Use the `findings` field from GET
     * /investigate/{investigate_id}/detections instead.
     */
    findings?: Array<Message.Finding> | null;

    from?: string | null;

    from_name?: string | null;

    htmltext_structure_hash?: string | null;

    message_id?: string | null;

    /**
     * Post-delivery operations performed on this message.
     */
    post_delivery_operations?: Array<'PREVIEW' | 'QUARANTINE_RELEASE' | 'SUBMISSION' | 'MOVE'> | null;

    postfix_id_outbound?: string | null;

    replyto?: string | null;

    /**
     * When the message was scanned (UTC).
     */
    scanned_at?: string | null;

    /**
     * When the message was sent (UTC).
     */
    sent_at?: string | null;

    sent_date?: string | null;

    smtp_helo_server_ip?: string | null;

    smtp_previous_hop_ip?: string | null;

    subject?: string | null;

    threat_categories?: Array<string> | null;

    to?: Array<string> | null;

    to_name?: Array<string> | null;

    validation?: Message.Validation | null;

    x_originating_ip?: string | null;
  }

  export namespace Message {
    export interface ActionLog {
      /**
       * Timestamp when action completed.
       */
      completed_at: string;

      /**
       * Type of action performed.
       */
      operation: 'MOVE' | 'RELEASE' | 'RECLASSIFY' | 'SUBMISSION' | 'QUARANTINE_RELEASE' | 'PREVIEW';

      /**
       * @deprecated Use `completed_at` instead.
       */
      completed_timestamp?: string;

      /**
       * Additional properties for the action.
       */
      properties?: ActionLog.Properties;

      /**
       * Status of the action.
       */
      status?: string | null;
    }

    export namespace ActionLog {
      /**
       * Additional properties for the action.
       */
      export interface Properties {
        /**
         * Target folder for move operations.
         */
        folder?: string;

        /**
         * User who requested the action.
         */
        requested_by?: string;
      }
    }

    /**
     * Message processing properties.
     */
    export interface Properties {
      /**
       * Pattern that allowlisted this message.
       */
      allowlisted_pattern?: string | null;

      /**
       * Type of allowlist pattern.
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
       * Whether message was blocklisted.
       */
      blocklisted_message?: boolean | null;

      /**
       * Pattern that blocklisted this message.
       */
      blocklisted_pattern?: string | null;

      /**
       * Legacy field for allowlist pattern type.
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
        | 'NONE'
        | null;

      field?: string | null;

      name?: string | null;

      portion?: string | null;

      reason?: string | null;

      score?: number | null;

      value?: string | null;
    }

    export interface Validation {
      comment?: string | null;

      dkim?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

      dmarc?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;

      spf?: 'pass' | 'neutral' | 'fail' | 'error' | 'none' | null;
    }
  }
}

export interface MessageListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param
   */
  status?: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageListResponsesV4PagePaginationArray as MessageListResponsesV4PagePaginationArray,
    type MessageListParams as MessageListParams,
  };
}
