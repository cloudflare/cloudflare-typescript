// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConsumersAPI from 'cloudflare/resources/workers/queues/consumers';

export class Consumers extends APIResource {
  /**
   * Creates a new consumer for a queue.
   */
  create(
    accountId: string,
    name: string,
    body: ConsumerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/workers/queues/${name}/consumers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerCreateResponse | null }>
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
   * Updates the consumer for a queue, or creates one if it does not exist.
   */
  replace(
    accountId: string,
    name: string,
    consumerName: string,
    body: ConsumerReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/workers/queues/${name}/consumers/${consumerName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConsumerCreateResponse {
  created_on?: unknown;

  dead_letter_queue?: string;

  environment?: unknown;

  queue_name?: unknown;

  script_name?: unknown;

  settings?: ConsumerCreateResponse.Settings;
}

export namespace ConsumerCreateResponse {
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

export interface ConsumerReplaceResponse {
  created_on?: unknown;

  dead_letter_queue?: unknown;

  environment?: unknown;

  queue_name?: unknown;

  script_name?: unknown;

  settings?: ConsumerReplaceResponse.Settings;
}

export namespace ConsumerReplaceResponse {
  export interface Settings {
    batch_size?: number;

    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export type ConsumerCreateParams = unknown;

export type ConsumerReplaceParams = unknown;

export namespace Consumers {
  export import ConsumerCreateResponse = ConsumersAPI.ConsumerCreateResponse;
  export import ConsumerListResponse = ConsumersAPI.ConsumerListResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerReplaceResponse = ConsumersAPI.ConsumerReplaceResponse;
  export import ConsumerCreateParams = ConsumersAPI.ConsumerCreateParams;
  export import ConsumerReplaceParams = ConsumersAPI.ConsumerReplaceParams;
}
