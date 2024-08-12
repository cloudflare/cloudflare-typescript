// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MessagesAPI from './messages';

export class Messages extends APIResource {
  /**
   * Acknowledge + Retry messages from a Queue.
   */
  ack(
    queueId: string,
    params: MessageAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageAckResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues/${queueId}/messages/ack`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MessageAckResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Pull a batch of messages from a Queue.
   */
  pull(
    queueId: string,
    params: MessagePullParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessagePullResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues/${queueId}/messages/pull`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MessagePullResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MessageAckResponse {
  /**
   * The number of messages that were succesfully acknowledged.
   */
  ackCount?: number;

  /**
   * The number of messages that were succesfully retried.
   */
  retryCount?: number;

  warnings?: Array<string>;
}

export type MessagePullResponse = Array<MessagePullResponse.MessagePullResponseItem>;

export namespace MessagePullResponse {
  export interface MessagePullResponseItem {
    id?: string;

    attempts?: number;

    body?: string;

    lease_id?: string;

    metadata?: unknown;

    timestamp_ms?: number;
  }
}

export interface MessageAckParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  acks?: Array<MessageAckParams.Ack>;

  /**
   * Body param:
   */
  retries?: Array<MessageAckParams.Retry>;
}

export namespace MessageAckParams {
  export interface Ack {
    /**
     * Lease ID for a message to acknowledge.
     */
    lease_id?: string;
  }

  export interface Retry {
    /**
     * The number of seconds to delay before making the message available for another
     * attempt.
     */
    delay_seconds?: number;

    /**
     * Lease ID for a message to retry.
     */
    lease_id?: string;
  }
}

export interface MessagePullParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The maximum number of messages to include in a batch.
   */
  batch_size?: number;

  /**
   * Body param: The number of milliseconds that a message is exclusively leased.
   * After the timeout, the message becomes available for another attempt.
   */
  visibility_timeout_ms?: number;
}

export namespace Messages {
  export import MessageAckResponse = MessagesAPI.MessageAckResponse;
  export import MessagePullResponse = MessagesAPI.MessagePullResponse;
  export import MessageAckParams = MessagesAPI.MessageAckParams;
  export import MessagePullParams = MessagesAPI.MessagePullParams;
}
