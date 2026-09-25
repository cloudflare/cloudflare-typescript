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
   * provided search parameters.
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
   * terminal state (`COMPLETED`, `CANCELLED`, `FAILED`, or `SKIPPED`) can be
   * deleted. To stop an in-progress job without removing it, use the cancel endpoint
   * instead.
   *
   * @example
   * ```ts
   * const bulk =
   *   await client.emailSecurity.investigate.bulk.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  status: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';

  total_messages_discovered: number;

  comment?: string | null;

  completed_at?: string | null;

  started_at?: string | null;

  status_message?: string | null;
}

export namespace BulkCreateResponse {
  export interface Move {
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

    alert_id?: string | null;

    /**
     * Delivery status of the message.
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

    detections_only?: boolean;

    domain?: string | null;

    /**
     * End of search date range.
     */
    end?: string;

    exact_subject?: string | null;

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

    message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED' | null;

    message_id?: string | null;

    metric?: string | null;

    query?: string | null;

    recipient?: string | null;

    sender?: string | null;

    /**
     * Matches messages whose SMTP HELO server IP address equals this value.
     */
    smtp_helo_ip?: string | null;

    /**
     * Beginning of search date range.
     */
    start?: string;

    subject?: string | null;

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

  status: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';

  total_messages_discovered: number;

  comment?: string | null;

  completed_at?: string | null;

  started_at?: string | null;

  status_message?: string | null;
}

export namespace BulkListResponse {
  export interface Move {
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

    alert_id?: string | null;

    /**
     * Delivery status of the message.
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

    detections_only?: boolean;

    domain?: string | null;

    /**
     * End of search date range.
     */
    end?: string;

    exact_subject?: string | null;

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

    message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED' | null;

    message_id?: string | null;

    metric?: string | null;

    query?: string | null;

    recipient?: string | null;

    sender?: string | null;

    /**
     * Matches messages whose SMTP HELO server IP address equals this value.
     */
    smtp_helo_ip?: string | null;

    /**
     * Beginning of search date range.
     */
    start?: string;

    subject?: string | null;

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

  status: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';

  total_messages_discovered: number;

  comment?: string | null;

  completed_at?: string | null;

  started_at?: string | null;

  status_message?: string | null;
}

export namespace BulkGetResponse {
  export interface Move {
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

    alert_id?: string | null;

    /**
     * Delivery status of the message.
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

    detections_only?: boolean;

    domain?: string | null;

    /**
     * End of search date range.
     */
    end?: string;

    exact_subject?: string | null;

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

    message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED' | null;

    message_id?: string | null;

    metric?: string | null;

    query?: string | null;

    recipient?: string | null;

    sender?: string | null;

    /**
     * Matches messages whose SMTP HELO server IP address equals this value.
     */
    smtp_helo_ip?: string | null;

    /**
     * Beginning of search date range.
     */
    start?: string;

    subject?: string | null;

    submissions?: boolean;
  }
}

export interface BulkCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  action: 'MOVE' | 'RELEASE';

  /**
   * Body param
   */
  search_params: BulkCreateParams.SearchParams;

  /**
   * Body param
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

    alert_id?: string | null;

    /**
     * Delivery status of the message.
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

    detections_only?: boolean;

    domain?: string | null;

    /**
     * End of search date range.
     */
    end?: string;

    exact_subject?: string | null;

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

    message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED' | null;

    message_id?: string | null;

    metric?: string | null;

    query?: string | null;

    recipient?: string | null;

    sender?: string | null;

    /**
     * Matches messages whose SMTP HELO server IP address equals this value.
     */
    smtp_helo_ip?: string | null;

    /**
     * Beginning of search date range.
     */
    start?: string;

    subject?: string | null;

    submissions?: boolean;
  }
}

export interface BulkListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param
   */
  action_type?: 'MOVE' | 'RELEASE';

  /**
   * Query param
   */
  status?: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';
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
