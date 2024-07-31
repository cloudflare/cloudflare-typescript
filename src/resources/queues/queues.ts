// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConsumersAPI from './consumers';
import * as MessagesAPI from './messages';
import { SinglePage } from '../../pagination';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Creates a new queue.
   */
  create(params: QueueCreateParams, options?: Core.RequestOptions): Core.APIPromise<QueueCreated | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues`, { body: body, ...options }) as Core.APIPromise<{
        result: QueueCreated | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a queue.
   */
  update(
    queueId: string,
    params: QueueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueUpdated | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/queues/${queueId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: QueueUpdated | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the queues owned by an account.
   */
  list(params: QueueListParams, options?: Core.RequestOptions): Core.PagePromise<QueuesSinglePage, Queue> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/queues`, QueuesSinglePage, options);
  }

  /**
   * Deletes a queue.
   */
  delete(
    queueId: string,
    params: QueueDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/queues/${queueId}`, options) as Core.APIPromise<{
        result: QueueDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific queue.
   */
  get(queueId: string, params: QueueGetParams, options?: Core.RequestOptions): Core.APIPromise<Queue | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/queues/${queueId}`, options) as Core.APIPromise<{
        result: Queue | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class QueuesSinglePage extends SinglePage<Queue> {}

export interface Queue {
  consumers?: unknown;

  consumers_total_count?: number;

  created_on?: string;

  modified_on?: string;

  producers?: unknown;

  producers_total_count?: number;

  queue_id?: string;

  queue_name?: string;
}

export interface QueueCreated {
  created_on?: string;

  modified_on?: string;

  queue_id?: string;

  queue_name?: string;
}

export interface QueueUpdated {
  created_on?: string;

  modified_on?: string;

  queue_id?: string;

  queue_name?: string;
}

export type QueueDeleteResponse = unknown | Array<unknown> | string;

export interface QueueCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface QueueUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface QueueListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface QueueDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface QueueGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Queues {
  export import Consumers = ConsumersAPI.Consumers;
  export import Consumer = ConsumersAPI.Consumer;
  export import ConsumerCreateResponse = ConsumersAPI.ConsumerCreateResponse;
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerGetResponse = ConsumersAPI.ConsumerGetResponse;
  export import ConsumerCreateParams = ConsumersAPI.ConsumerCreateParams;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerDeleteParams = ConsumersAPI.ConsumerDeleteParams;
  export import ConsumerGetParams = ConsumersAPI.ConsumerGetParams;
  export import Messages = MessagesAPI.Messages;
  export import MessageAckResponse = MessagesAPI.MessageAckResponse;
  export import MessagePullResponse = MessagesAPI.MessagePullResponse;
  export import MessageAckParams = MessagesAPI.MessageAckParams;
  export import MessagePullParams = MessagesAPI.MessagePullParams;
}
