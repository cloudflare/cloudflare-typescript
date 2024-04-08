// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Shared from 'cloudflare/resources/shared';
import * as ConsumersAPI from 'cloudflare/resources/queues/consumers';
import * as MessagesAPI from 'cloudflare/resources/queues/messages';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Creates a new queue.
   */
  create(
    params: QueueCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues`, { body: body, ...options }) as Core.APIPromise<{
        result: QueueCreateResponse | null;
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
  ): Core.APIPromise<QueueUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/queues/${queueId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: QueueUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the queues owned by an account.
   */
  list(params: QueueListParams, options?: Core.RequestOptions): Core.APIPromise<QueueListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/queues`, options) as Core.APIPromise<{
        result: QueueListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a queue.
   */
  delete(
    queueId: string,
    params: QueueDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/queues/${queueId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific queue.
   */
  get(
    queueId: string,
    params: QueueGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/queues/${queueId}`, options) as Core.APIPromise<{
        result: QueueGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Queue {
  consumers?: unknown;

  consumers_total_count?: unknown;

  created_on?: unknown;

  modified_on?: unknown;

  producers?: unknown;

  producers_total_count?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface QueueCreated {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface QueueUpdated {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface QueueCreateResponse {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface QueueUpdateResponse {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export type QueueListResponse = Array<QueueListResponse.QueueListResponseItem>;

export namespace QueueListResponse {
  export interface QueueListResponseItem {
    consumers?: unknown;

    consumers_total_count?: unknown;

    created_on?: unknown;

    modified_on?: unknown;

    producers?: unknown;

    producers_total_count?: unknown;

    queue_id?: string;

    queue_name?: string;
  }
}

export interface QueueGetResponse {
  consumers?: unknown;

  consumers_total_count?: unknown;

  created_on?: unknown;

  modified_on?: unknown;

  producers?: unknown;

  producers_total_count?: unknown;

  queue_id?: string;

  queue_name?: string;
}

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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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
  export import UnnamedSchemaRefFbd3a4642487e41594e9af0ccb9a5ca5 = ConsumersAPI.UnnamedSchemaRefFbd3a4642487e41594e9af0ccb9a5ca5;
  export import ConsumerCreateResponse = ConsumersAPI.ConsumerCreateResponse;
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
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
