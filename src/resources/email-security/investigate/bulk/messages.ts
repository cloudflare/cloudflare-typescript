// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Messages extends APIResource {
  /**
   * List messages for a bulk action job
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
    jobId: string,
    params: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessageListResponsesV4PagePaginationArray, MessageListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/investigate/bulk/${jobId}/messages`,
      MessageListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class MessageListResponsesV4PagePaginationArray extends V4PagePaginationArray<MessageListResponse> {}

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

  processed_at?: string | null;

  /**
   * When to retry the action if it failed
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
      | 'NONE';
  }

  export interface Release {
    client_recipient: string;

    type: 'RELEASE';
  }
}

export interface MessageListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param
   */
  status?: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';
}

Messages.MessageListResponsesV4PagePaginationArray = MessageListResponsesV4PagePaginationArray;

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    MessageListResponsesV4PagePaginationArray as MessageListResponsesV4PagePaginationArray,
    type MessageListParams as MessageListParams,
  };
}
