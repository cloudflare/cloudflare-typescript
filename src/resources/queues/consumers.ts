// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConsumersAPI from './consumers';

export class Consumers extends APIResource {
  /**
   * Creates a new consumer for a queue.
   */
  create(
    queueId: string,
    params: ConsumerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues/${queueId}/consumers`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the consumer for a queue, or creates one if it does not exist.
   */
  update(
    queueId: string,
    consumerId: string,
    params: ConsumerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/queues/${queueId}/consumers/${consumerId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ConsumerUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the consumer for a queue.
   */
  delete(
    queueId: string,
    consumerId: string,
    params: ConsumerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/queues/${queueId}/consumers/${consumerId}`,
        options,
      ) as Core.APIPromise<{ result: ConsumerDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the consumers for a queue.
   */
  get(
    queueId: string,
    params: ConsumerGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/queues/${queueId}/consumers`, options) as Core.APIPromise<{
        result: ConsumerGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Consumer {
  created_on?: string;

  environment?: string;

  queue_name?: string;

  service?: string;

  settings?: Consumer.Settings;
}

export namespace Consumer {
  export interface Settings {
    /**
     * The maximum number of messages to include in a batch.
     */
    batch_size?: number;

    /**
     * The maximum number of retries
     */
    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export interface ConsumerCreateResponse {
  created_on?: string;

  /**
   * The name of the dead letter queue.
   */
  dead_letter_queue?: string;

  environment?: string;

  queue_name?: string;

  script_name?: string;

  settings?: ConsumerCreateResponse.Settings;
}

export namespace ConsumerCreateResponse {
  export interface Settings {
    /**
     * The maximum number of messages to include in a batch.
     */
    batch_size?: number;

    /**
     * The maximum number of retries
     */
    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export interface ConsumerUpdateResponse {
  created_on?: string;

  dead_letter_queue?: string;

  environment?: string;

  queue_name?: string;

  script_name?: string;

  settings?: ConsumerUpdateResponse.Settings;
}

export namespace ConsumerUpdateResponse {
  export interface Settings {
    batch_size?: number;

    /**
     * The maximum number of retries
     */
    max_retries?: number;

    max_wait_time_ms?: number;
  }
}

export type ConsumerDeleteResponse = unknown | Array<unknown> | string;

export type ConsumerGetResponse = Array<Consumer>;

export interface ConsumerCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConsumerUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConsumerDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConsumerGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Consumers {
  export import Consumer = ConsumersAPI.Consumer;
  export import ConsumerCreateResponse = ConsumersAPI.ConsumerCreateResponse;
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerGetResponse = ConsumersAPI.ConsumerGetResponse;
  export import ConsumerCreateParams = ConsumersAPI.ConsumerCreateParams;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerDeleteParams = ConsumersAPI.ConsumerDeleteParams;
  export import ConsumerGetParams = ConsumersAPI.ConsumerGetParams;
}
