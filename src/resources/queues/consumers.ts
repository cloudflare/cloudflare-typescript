// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Consumers extends APIResource {
  /**
   * Creates a new consumer for a Queue
   */
  create(
    queueId: string,
    params: ConsumerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Consumer> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues/${queueId}/consumers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Consumer }>
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
  ): Core.APIPromise<Consumer> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/queues/${queueId}/consumers/${consumerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Consumer }>
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
  ): Core.APIPromise<ConsumerDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/queues/${queueId}/consumers/${consumerId}`, options);
  }

  /**
   * Returns the consumers for a Queue
   */
  get(
    queueId: string,
    params: ConsumerGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/queues/${queueId}/consumers`, options) as Core.APIPromise<{
        result: ConsumerGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type Consumer = Consumer.MqWorkerConsumer | Consumer.MqHTTPConsumer;

export namespace Consumer {
  export interface MqWorkerConsumer {
    /**
     * A Resource identifier.
     */
    consumer_id?: string;

    created_on?: string;

    /**
     * A Resource identifier.
     */
    queue_id?: string;

    /**
     * Name of a Worker
     */
    script?: string;

    settings?: MqWorkerConsumer.Settings;

    type?: 'worker';
  }

  export namespace MqWorkerConsumer {
    export interface Settings {
      /**
       * The maximum number of messages to include in a batch.
       */
      batch_size?: number;

      /**
       * Maximum number of concurrent consumers that may consume from this Queue. Set to
       * `null` to automatically opt in to the platform's maximum (recommended).
       */
      max_concurrency?: number;

      /**
       * The maximum number of retries
       */
      max_retries?: number;

      /**
       * The number of milliseconds to wait for a batch to fill up before attempting to
       * deliver it
       */
      max_wait_time_ms?: number;

      /**
       * The number of seconds to delay before making the message available for another
       * attempt.
       */
      retry_delay?: number;
    }
  }

  export interface MqHTTPConsumer {
    /**
     * A Resource identifier.
     */
    consumer_id?: string;

    created_on?: string;

    /**
     * A Resource identifier.
     */
    queue_id?: string;

    settings?: MqHTTPConsumer.Settings;

    type?: 'http_pull';
  }

  export namespace MqHTTPConsumer {
    export interface Settings {
      /**
       * The maximum number of messages to include in a batch.
       */
      batch_size?: number;

      /**
       * The maximum number of retries
       */
      max_retries?: number;

      /**
       * The number of seconds to delay before making the message available for another
       * attempt.
       */
      retry_delay?: number;

      /**
       * The number of milliseconds that a message is exclusively leased. After the
       * timeout, the message becomes available for another attempt.
       */
      visibility_timeout_ms?: number;
    }
  }
}

export interface ConsumerDeleteResponse {
  errors?: Array<Shared.ResponseInfo>;

  messages?: Array<string>;

  /**
   * Indicates if the API call was successful or not.
   */
  success?: true;
}

export type ConsumerGetResponse = Array<Consumer>;

export type ConsumerCreateParams =
  | ConsumerCreateParams.MqWorkerConsumer
  | ConsumerCreateParams.MqHTTPConsumer;

export declare namespace ConsumerCreateParams {
  export interface MqWorkerConsumer {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param:
     */
    dead_letter_queue?: string;

    /**
     * Body param: Name of a Worker
     */
    script_name?: string;

    /**
     * Body param:
     */
    settings?: ConsumerCreateParams.MqWorkerConsumer.Settings;

    /**
     * Body param:
     */
    type?: 'worker';
  }

  export namespace MqWorkerConsumer {
    export interface Settings {
      /**
       * The maximum number of messages to include in a batch.
       */
      batch_size?: number;

      /**
       * Maximum number of concurrent consumers that may consume from this Queue. Set to
       * `null` to automatically opt in to the platform's maximum (recommended).
       */
      max_concurrency?: number;

      /**
       * The maximum number of retries
       */
      max_retries?: number;

      /**
       * The number of milliseconds to wait for a batch to fill up before attempting to
       * deliver it
       */
      max_wait_time_ms?: number;

      /**
       * The number of seconds to delay before making the message available for another
       * attempt.
       */
      retry_delay?: number;
    }
  }

  export interface MqHTTPConsumer {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param:
     */
    dead_letter_queue?: string;

    /**
     * Body param:
     */
    settings?: ConsumerCreateParams.MqHTTPConsumer.Settings;

    /**
     * Body param:
     */
    type?: 'http_pull';
  }

  export namespace MqHTTPConsumer {
    export interface Settings {
      /**
       * The maximum number of messages to include in a batch.
       */
      batch_size?: number;

      /**
       * The maximum number of retries
       */
      max_retries?: number;

      /**
       * The number of seconds to delay before making the message available for another
       * attempt.
       */
      retry_delay?: number;

      /**
       * The number of milliseconds that a message is exclusively leased. After the
       * timeout, the message becomes available for another attempt.
       */
      visibility_timeout_ms?: number;
    }
  }
}

export type ConsumerUpdateParams =
  | ConsumerUpdateParams.MqWorkerConsumer
  | ConsumerUpdateParams.MqHTTPConsumer;

export declare namespace ConsumerUpdateParams {
  export interface MqWorkerConsumer {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param:
     */
    dead_letter_queue?: string;

    /**
     * Body param: Name of a Worker
     */
    script_name?: string;

    /**
     * Body param:
     */
    settings?: ConsumerUpdateParams.MqWorkerConsumer.Settings;

    /**
     * Body param:
     */
    type?: 'worker';
  }

  export namespace MqWorkerConsumer {
    export interface Settings {
      /**
       * The maximum number of messages to include in a batch.
       */
      batch_size?: number;

      /**
       * Maximum number of concurrent consumers that may consume from this Queue. Set to
       * `null` to automatically opt in to the platform's maximum (recommended).
       */
      max_concurrency?: number;

      /**
       * The maximum number of retries
       */
      max_retries?: number;

      /**
       * The number of milliseconds to wait for a batch to fill up before attempting to
       * deliver it
       */
      max_wait_time_ms?: number;

      /**
       * The number of seconds to delay before making the message available for another
       * attempt.
       */
      retry_delay?: number;
    }
  }

  export interface MqHTTPConsumer {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param:
     */
    dead_letter_queue?: string;

    /**
     * Body param:
     */
    settings?: ConsumerUpdateParams.MqHTTPConsumer.Settings;

    /**
     * Body param:
     */
    type?: 'http_pull';
  }

  export namespace MqHTTPConsumer {
    export interface Settings {
      /**
       * The maximum number of messages to include in a batch.
       */
      batch_size?: number;

      /**
       * The maximum number of retries
       */
      max_retries?: number;

      /**
       * The number of seconds to delay before making the message available for another
       * attempt.
       */
      retry_delay?: number;

      /**
       * The number of milliseconds that a message is exclusively leased. After the
       * timeout, the message becomes available for another attempt.
       */
      visibility_timeout_ms?: number;
    }
  }
}

export interface ConsumerDeleteParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export interface ConsumerGetParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export declare namespace Consumers {
  export {
    type Consumer as Consumer,
    type ConsumerDeleteResponse as ConsumerDeleteResponse,
    type ConsumerGetResponse as ConsumerGetResponse,
    type ConsumerCreateParams as ConsumerCreateParams,
    type ConsumerUpdateParams as ConsumerUpdateParams,
    type ConsumerDeleteParams as ConsumerDeleteParams,
    type ConsumerGetParams as ConsumerGetParams,
  };
}
