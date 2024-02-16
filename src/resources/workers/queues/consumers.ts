// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConsumersAPI from 'cloudflare/resources/workers/queues/consumers';

export class Consumers extends APIResource {
  /**
   * Updates the consumer for a queue, or creates one if it does not exist.
   */
  update(
    accountId: string,
    name: string,
    consumerName: string,
    body: ConsumerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/workers/queues/${name}/consumers/${consumerName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the consumers for a queue.
   */
  list(
    accountId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerListResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/queues/${name}/consumers`,
        options,
      ) as Core.APIPromise<{ result: ConsumerListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the consumer for a queue.
   */
  delete(
    accountId: string,
    name: string,
    consumerName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/workers/queues/${name}/consumers/${consumerName}`,
        options,
      ) as Core.APIPromise<{ result: ConsumerDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new consumer for a queue.
   */
  queueCreateQueueConsumer(
    accountId: string,
    name: string,
    body: ConsumerQueueCreateQueueConsumerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerQueueCreateQueueConsumerResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/workers/queues/${name}/consumers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerQueueCreateQueueConsumerResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConsumerUpdateResponse {
  created_on?: unknown;

  dead_letter_queue?: unknown;

  environment?: unknown;

  queue_name?: unknown;

  script_name?: unknown;

  settings?: ConsumerUpdateResponse.Settings;
}

export namespace ConsumerUpdateResponse {
  export interface Settings {
    batch_size?: number;

    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export type ConsumerListResponse = Array<ConsumerListResponse.ConsumerListResponseItem>;

export namespace ConsumerListResponse {
  export interface ConsumerListResponseItem {
    created_on?: unknown;

    environment?: unknown;

    queue_name?: unknown;

    service?: unknown;

    settings?: ConsumerListResponseItem.Settings;
  }

  export namespace ConsumerListResponseItem {
    export interface Settings {
      batch_size?: number;

      max_retries?: number;

      max_wait_time_ms?: number;
    }
  }
}

export type ConsumerDeleteResponse = unknown | Array<unknown> | string;

export interface ConsumerQueueCreateQueueConsumerResponse {
  created_on?: unknown;

  dead_letter_queue?: string;

  environment?: unknown;

  queue_name?: unknown;

  script_name?: unknown;

  settings?: ConsumerQueueCreateQueueConsumerResponse.Settings;
}

export namespace ConsumerQueueCreateQueueConsumerResponse {
  export interface Settings {
    batch_size?: number;

    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export type ConsumerUpdateParams = unknown;

export type ConsumerQueueCreateQueueConsumerParams = unknown;

export namespace Consumers {
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerListResponse = ConsumersAPI.ConsumerListResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerQueueCreateQueueConsumerResponse = ConsumersAPI.ConsumerQueueCreateQueueConsumerResponse;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerQueueCreateQueueConsumerParams = ConsumersAPI.ConsumerQueueCreateQueueConsumerParams;
}
