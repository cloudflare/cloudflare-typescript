// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Acknowledge + Retry messages from a Queue
   */
  ack(queueID: string, params: MessageAckParams, options?: RequestOptions): APIPromise<MessageAckResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/queues/${queueID}/messages/ack`, {
        body,
        ...options,
      }) as APIPromise<{ result: MessageAckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Pull a batch of messages from a Queue
   */
  pull(
    queueID: string,
    params: MessagePullParams,
    options?: RequestOptions,
  ): PagePromise<MessagePullResponsesSinglePage, MessagePullResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/queues/${queueID}/messages/pull`,
      SinglePage<MessagePullResponse>,
      { body, method: 'post', ...options },
    );
  }
}

export type MessagePullResponsesSinglePage = SinglePage<MessagePullResponse>;

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

export interface MessagePullResponse {
  id?: string;

  attempts?: number;

  body?: string;

  /**
   * An ID that represents an "in-flight" message that has been pulled from a Queue.
   * You must hold on to this ID and use it to acknowledge this message.
   */
  lease_id?: string;

  metadata?: unknown;

  timestamp_ms?: number;
}

export interface MessageAckParams {
  /**
   * Path param: A Resource identifier.
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
     * An ID that represents an "in-flight" message that has been pulled from a Queue.
     * You must hold on to this ID and use it to acknowledge this message.
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
     * An ID that represents an "in-flight" message that has been pulled from a Queue.
     * You must hold on to this ID and use it to acknowledge this message.
     */
    lease_id?: string;
  }
}

export interface MessagePullParams {
  /**
   * Path param: A Resource identifier.
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

export declare namespace Messages {
  export {
    type MessageAckResponse as MessageAckResponse,
    type MessagePullResponse as MessagePullResponse,
    type MessagePullResponsesSinglePage as MessagePullResponsesSinglePage,
    type MessageAckParams as MessageAckParams,
    type MessagePullParams as MessagePullParams,
  };
}
