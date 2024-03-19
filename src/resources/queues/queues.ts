// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QueuesAPI from 'cloudflare/resources/queues/queues';
import * as ConsumersAPI from 'cloudflare/resources/queues/consumers';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);

  /**
   * Creates a new queue.
   */
  create(
    params: QueueCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersQueueCreated | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/queues`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: WorkersQueueCreated | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a queue.
   */
  update(
    name: string,
    params: QueueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersQueueUpdated | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/queues/${name}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: WorkersQueueUpdated | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the queues owned by an account.
   */
  list(params: QueueListParams, options?: Core.RequestOptions): Core.APIPromise<QueueListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/queues`, options) as Core.APIPromise<{
        result: QueueListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a queue.
   */
  delete(
    name: string,
    params: QueueDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/workers/queues/${name}`, options) as Core.APIPromise<{
        result: QueueDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific queue.
   */
  get(
    name: string,
    params: QueueGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersQueue | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/queues/${name}`, options) as Core.APIPromise<{
        result: WorkersQueue | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WorkersQueue {
  consumers?: unknown;

  consumers_total_count?: unknown;

  created_on?: unknown;

  modified_on?: unknown;

  producers?: unknown;

  producers_total_count?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface WorkersQueueCreated {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface WorkersQueueUpdated {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export type QueueListResponse = Array<WorkersQueue>;

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
  export import WorkersQueue = QueuesAPI.WorkersQueue;
  export import WorkersQueueCreated = QueuesAPI.WorkersQueueCreated;
  export import WorkersQueueUpdated = QueuesAPI.WorkersQueueUpdated;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueCreateParams = QueuesAPI.QueueCreateParams;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueListParams = QueuesAPI.QueueListParams;
  export import QueueDeleteParams = QueuesAPI.QueueDeleteParams;
  export import QueueGetParams = QueuesAPI.QueueGetParams;
  export import Consumers = ConsumersAPI.Consumers;
  export import WorkersConsumer = ConsumersAPI.WorkersConsumer;
  export import WorkersConsumerCreated = ConsumersAPI.WorkersConsumerCreated;
  export import WorkersConsumerUpdated = ConsumersAPI.WorkersConsumerUpdated;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerGetResponse = ConsumersAPI.ConsumerGetResponse;
  export import ConsumerCreateParams = ConsumersAPI.ConsumerCreateParams;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerDeleteParams = ConsumersAPI.ConsumerDeleteParams;
  export import ConsumerGetParams = ConsumersAPI.ConsumerGetParams;
}
