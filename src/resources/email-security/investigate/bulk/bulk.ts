// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CancelAPI from './cancel';
import { BaseCancel, Cancel, CancelCreateParams, CancelCreateResponse } from './cancel';
import * as MessagesAPI from './messages';
import {
  BaseMessages,
  MessageListParams,
  MessageListResponse,
  MessageListResponsesV4PagePaginationArray,
  Messages,
} from './messages';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseBulk extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'bulk'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'bulk',
  ] as const);

  /**
   * Creates a new bulk action job to move or release messages that match the
   * provided search parameters. To move or release an explicit list of known
   * messages instead of a search, use the move or release endpoints.
   *
   * @example
   * ```ts
   * const bulk =
   *   await client.emailSecurity.investigate.bulk.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     action: 'MOVE',
   *     search_params: {},
   *   });
   * ```
   */
  create(params: BulkCreateParams, options?: RequestOptions): APIPromise<BulkCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/investigate/bulk`, {
        body,
        ...options,
      }) as APIPromise<{ result: BulkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of bulk action jobs for the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bulkListResponse of client.emailSecurity.investigate.bulk.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: BulkListParams,
    options?: RequestOptions,
  ): PagePromise<BulkListResponsesV4PagePaginationArray, BulkListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/bulk`,
      V4PagePaginationArray<BulkListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes the job, removing it from all list and detail endpoints. Only jobs in a
   * terminal state (`COMPLETED`, `CANCELLED`, or `FAILED`) can be deleted. To stop
   * an in-progress job without removing it, use the cancel endpoint instead.
   *
   * @example
   * ```ts
   * const bulk =
   *   await client.emailSecurity.investigate.bulk.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(jobID: string, params: BulkDeleteParams, options?: RequestOptions): APIPromise<BulkDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/investigate/bulk/${jobID}`,
        options,
      ) as APIPromise<{ result: BulkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the status and details of a specific bulk action job.
   *
   * @example
   * ```ts
   * const bulk =
   *   await client.emailSecurity.investigate.bulk.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(jobID: string, params: BulkGetParams, options?: RequestOptions): APIPromise<BulkGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/bulk/${jobID}`,
        options,
      ) as APIPromise<{ result: BulkGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Bulk extends BaseBulk {
  cancel: CancelAPI.Cancel = new CancelAPI.Cancel(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

export type BulkListResponsesV4PagePaginationArray = V4PagePaginationArray<BulkListResponse>;

export interface BulkCreateResponse {
  action_params: BulkCreateResponse.Move | BulkCreateResponse.Release;

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

  search_params: BulkCreateResponse.SearchParams;

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

export namespace BulkCreateResponse {
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

export interface BulkListResponse {
  action_params: BulkListResponse.Move | BulkListResponse.Release;

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

  search_params: BulkListResponse.SearchParams;

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

export namespace BulkListResponse {
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

export interface BulkDeleteResponse {
  id: string;
}

export interface BulkGetResponse {
  action_params: BulkGetResponse.Move | BulkGetResponse.Release;

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

  search_params: BulkGetResponse.SearchParams;

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

export namespace BulkGetResponse {
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

export interface BulkCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The action the job performs on every message matching the search
   * parameters.
   */
  action: 'MOVE' | 'RELEASE';

  /**
   * Body param
   */
  search_params: BulkCreateParams.SearchParams;

  /**
   * Body param: Optional note describing the job.
   */
  comment?: string | null;

  /**
   * Body param: Required when action is 'MOVE'.
   */
  destination?:
    | 'Inbox'
    | 'JunkEmail'
    | 'DeletedItems'
    | 'RecoverableItemsDeletions'
    | 'RecoverableItemsPurges';

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

export namespace BulkCreateParams {
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

export interface BulkListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Filter jobs by the action they perform.
   */
  action_type?: 'MOVE' | 'RELEASE';

  /**
   * Query param: Filter jobs by their processing status.
   */
  status?: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
}

export interface BulkDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface BulkGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

Bulk.Cancel = Cancel;
Bulk.BaseCancel = BaseCancel;
Bulk.Messages = Messages;
Bulk.BaseMessages = BaseMessages;

export declare namespace Bulk {
  export {
    type BulkCreateResponse as BulkCreateResponse,
    type BulkListResponse as BulkListResponse,
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkGetResponse as BulkGetResponse,
    type BulkListResponsesV4PagePaginationArray as BulkListResponsesV4PagePaginationArray,
    type BulkCreateParams as BulkCreateParams,
    type BulkListParams as BulkListParams,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkGetParams as BulkGetParams,
  };

  export {
    Cancel as Cancel,
    BaseCancel as BaseCancel,
    type CancelCreateResponse as CancelCreateResponse,
    type CancelCreateParams as CancelCreateParams,
  };

  export {
    Messages as Messages,
    BaseMessages as BaseMessages,
    type MessageListResponse as MessageListResponse,
    type MessageListResponsesV4PagePaginationArray as MessageListResponsesV4PagePaginationArray,
    type MessageListParams as MessageListParams,
  };
}
