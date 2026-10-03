// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCancel extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'bulk', 'cancel'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'bulk',
    'cancel',
  ] as const);

  /**
   * Cancels the job, marking it as cancelled and stopping any pending message
   * processing. The job record remains visible in list and detail endpoints.
   *
   * @example
   * ```ts
   * const cancel =
   *   await client.emailSecurity.investigate.bulk.cancel.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    jobID: string,
    params: CancelCreateParams,
    options?: RequestOptions,
  ): APIPromise<CancelCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/email-security/investigate/bulk/${jobID}/cancel`,
        options,
      ) as APIPromise<{ result: CancelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Cancel extends BaseCancel {}

export interface CancelCreateResponse {
  action_params: CancelCreateResponse.Move | CancelCreateResponse.Release;

  action_type: 'MOVE' | 'RELEASE';

  created_at: string;

  job_id: string;

  /**
   * Messages that were cancelled: rows cancelled via the API before being claimed,
   * and rows whose in-flight attempt ended when the job reached a terminal state.
   * Together the counters satisfy total_messages_discovered = messages_pending +
   * messages_successful + messages_failed + messages_skipped + messages_cancelled.
   */
  messages_cancelled: number;

  messages_failed: number;

  messages_pending: number;

  /**
   * Messages that discovery skipped (for example, phish submissions, which the job
   * cannot action).
   */
  messages_skipped: number;

  messages_successful: number;

  search_params: CancelCreateResponse.SearchParams;

  /**
   * Status of a bulk action job.
   */
  status: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

  total_messages_discovered: number;

  comment?: string | null;

  completed_at?: string | null;

  started_at?: string | null;

  status_message?: string | null;
}

export namespace CancelCreateResponse {
  export interface Move {
    /**
     * The mailbox folder to move messages to.
     */
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
    type: 'RELEASE';
  }

  export interface SearchParams {
    /**
     * @deprecated Use GET /investigate/{investigate_id}/action_log instead.
     */
    action_log?: boolean;

    /**
     * Alert ID of the detection to filter by.
     */
    alert_id?: string | null;

    /**
     * Delivery status to filter by.
     */
    delivery_status?:
      | 'delivered'
      | 'moved'
      | 'quarantined'
      | 'rejected'
      | 'deferred'
      | 'bounced'
      | 'queued'
      | 'move_failed'
      | null;

    /**
     * Whether to include only detections in search results.
     */
    detections_only?: boolean;

    /**
     * Match messages that mention this domain — sender domain, recipient domain, or a
     * domain in a link.
     */
    domain?: string | null;

    /**
     * End of search date range.
     */
    end?: string;

    /**
     * Match messages whose subject line equals this value exactly.
     */
    exact_subject?: string | null;

    /**
     * Dispositions to filter by.
     */
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
     * Message actions to filter by.
     */
    message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED' | null;

    /**
     * Message-ID header value to filter by.
     */
    message_id?: string | null;

    /**
     * Metric name to filter the search by.
     */
    metric?: string | null;

    /**
     * Space-delimited search term. Case-insensitive.
     */
    query?: string | null;

    /**
     * Match messages whose recipient is this email address or domain.
     */
    recipient?: string | null;

    /**
     * Match messages whose sender is this email address or domain.
     */
    sender?: string | null;

    /**
     * Matches messages whose SMTP HELO server IP address equals this value.
     */
    smtp_helo_ip?: string | null;

    /**
     * Beginning of search date range.
     */
    start?: string;

    /**
     * Match messages whose subject contains these keywords, in any order.
     */
    subject?: string | null;

    /**
     * Whether to search reclassification submissions instead of original messages.
     */
    submissions?: boolean;
  }
}

export interface CancelCreateParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace Cancel {
  export { type CancelCreateResponse as CancelCreateResponse, type CancelCreateParams as CancelCreateParams };
}
