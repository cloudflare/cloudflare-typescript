// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ConsumersAPI from './consumers';
import {
  ConsumerCreateParams,
  ConsumerCreateResponse,
  ConsumerDeleteParams,
  ConsumerDeleteResponse,
  ConsumerGetParams,
  ConsumerGetResponse,
  ConsumerListParams,
  ConsumerListResponse,
  ConsumerListResponsesSinglePage,
  ConsumerUpdateParams,
  ConsumerUpdateResponse,
  Consumers,
} from './consumers';
import * as MessagesAPI from './messages';
import {
  MessageAckParams,
  MessageAckResponse,
  MessageBulkPushParams,
  MessageBulkPushResponse,
  MessagePullParams,
  MessagePullResponse,
  MessagePushParams,
  MessagePushResponse,
  Messages,
} from './messages';
import * as PurgeAPI from './purge';
import { Purge, PurgeStartParams, PurgeStatusParams, PurgeStatusResponse } from './purge';
import { SinglePage } from '../../pagination';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  purge: PurgeAPI.Purge = new PurgeAPI.Purge(this._client);

  /**
   * Create a new queue
   *
   * @example
   * ```ts
   * const queue = await client.queues.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   queue_name: 'example-queue',
   * });
   * ```
   */
  create(params: QueueCreateParams, options?: Core.RequestOptions): Core.APIPromise<Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/queues`, { body, ...options }) as Core.APIPromise<{
        result: Queue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a Queue. Note that this endpoint does not support partial updates. If
   * successful, the Queue's configuration is overwritten with the supplied
   * configuration.
   *
   * @example
   * ```ts
   * const queue = await client.queues.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(queueId: string, params: QueueUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/queues/${queueId}`, { body, ...options }) as Core.APIPromise<{
        result: Queue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the queues owned by an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const queue of client.queues.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(params: QueueListParams, options?: Core.RequestOptions): Core.PagePromise<QueuesSinglePage, Queue> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/queues`, QueuesSinglePage, options);
  }

  /**
   * Deletes a queue
   *
   * @example
   * ```ts
   * const queue = await client.queues.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    queueId: string,
    params: QueueDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/queues/${queueId}`, options);
  }

  /**
   * Updates a Queue.
   *
   * @example
   * ```ts
   * const queue = await client.queues.edit(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(queueId: string, params: QueueEditParams, options?: Core.RequestOptions): Core.APIPromise<Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/queues/${queueId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Queue }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details about a specific queue.
   *
   * @example
   * ```ts
   * const queue = await client.queues.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(queueId: string, params: QueueGetParams, options?: Core.RequestOptions): Core.APIPromise<Queue> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/queues/${queueId}`, options) as Core.APIPromise<{
        result: Queue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class QueuesSinglePage extends SinglePage<Queue> {}

export interface Queue {
  consumers?: Array<Queue.MqWorkerConsumerResponse | Queue.MqHTTPConsumerResponse>;

  consumers_total_count?: number;

  created_on?: string;

  modified_on?: string;

  producers?: Array<Queue.MqWorkerProducer | Queue.MqR2Producer>;

  producers_total_count?: number;

  queue_id?: string;

  queue_name?: string;

  settings?: Queue.Settings;
}

export namespace Queue {
  export interface MqWorkerConsumerResponse {
    /**
     * A Resource identifier.
     */
    consumer_id?: string;

    created_on?: string;

    /**
     * Name of the dead letter queue, or empty string if not configured
     */
    dead_letter_queue?: string;

    queue_name?: string;

    /**
     * Name of a Worker
     */
    script_name?: string;

    settings?: MqWorkerConsumerResponse.Settings;

    type?: 'worker';
  }

  export namespace MqWorkerConsumerResponse {
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

  export interface MqHTTPConsumerResponse {
    /**
     * A Resource identifier.
     */
    consumer_id?: string;

    created_on?: string;

    /**
     * Name of the dead letter queue, or empty string if not configured
     */
    dead_letter_queue?: string;

    queue_name?: string;

    settings?: MqHTTPConsumerResponse.Settings;

    type?: 'http_pull';
  }

  export namespace MqHTTPConsumerResponse {
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

  export interface MqWorkerProducer {
    script?: string;

    type?: 'worker';
  }

  export interface MqR2Producer {
    bucket_name?: string;

    type?: 'r2_bucket';
  }

  export interface Settings {
    /**
     * Number of seconds to delay delivery of all messages to consumers.
     */
    delivery_delay?: number;

    /**
     * Indicates if message delivery to consumers is currently paused.
     */
    delivery_paused?: boolean;

    /**
     * Number of seconds after which an unconsumed message will be delayed.
     */
    message_retention_period?: number;
  }
}

export interface QueueDeleteResponse {
  errors?: Array<Shared.ResponseInfo>;

  messages?: Array<string>;

  /**
   * Indicates if the API call was successful or not.
   */
  success?: true;
}

export interface QueueCreateParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  queue_name: string;
}

export interface QueueUpdateParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  queue_name?: string;

  /**
   * Body param
   */
  settings?: QueueUpdateParams.Settings;
}

export namespace QueueUpdateParams {
  export interface Settings {
    /**
     * Number of seconds to delay delivery of all messages to consumers.
     */
    delivery_delay?: number;

    /**
     * Indicates if message delivery to consumers is currently paused.
     */
    delivery_paused?: boolean;

    /**
     * Number of seconds after which an unconsumed message will be delayed.
     */
    message_retention_period?: number;
  }
}

export interface QueueListParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export interface QueueDeleteParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export interface QueueEditParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  queue_name?: string;

  /**
   * Body param
   */
  settings?: QueueEditParams.Settings;
}

export namespace QueueEditParams {
  export interface Settings {
    /**
     * Number of seconds to delay delivery of all messages to consumers.
     */
    delivery_delay?: number;

    /**
     * Indicates if message delivery to consumers is currently paused.
     */
    delivery_paused?: boolean;

    /**
     * Number of seconds after which an unconsumed message will be delayed.
     */
    message_retention_period?: number;
  }
}

export interface QueueGetParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

Queues.QueuesSinglePage = QueuesSinglePage;
Queues.Consumers = Consumers;
Queues.ConsumerListResponsesSinglePage = ConsumerListResponsesSinglePage;
Queues.Messages = Messages;
Queues.Purge = Purge;

export declare namespace Queues {
  export {
    type Queue as Queue,
    type QueueDeleteResponse as QueueDeleteResponse,
    QueuesSinglePage as QueuesSinglePage,
    type QueueCreateParams as QueueCreateParams,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueListParams as QueueListParams,
    type QueueDeleteParams as QueueDeleteParams,
    type QueueEditParams as QueueEditParams,
    type QueueGetParams as QueueGetParams,
  };

  export {
    Consumers as Consumers,
    type ConsumerCreateResponse as ConsumerCreateResponse,
    type ConsumerUpdateResponse as ConsumerUpdateResponse,
    type ConsumerListResponse as ConsumerListResponse,
    type ConsumerDeleteResponse as ConsumerDeleteResponse,
    type ConsumerGetResponse as ConsumerGetResponse,
    ConsumerListResponsesSinglePage as ConsumerListResponsesSinglePage,
    type ConsumerCreateParams as ConsumerCreateParams,
    type ConsumerUpdateParams as ConsumerUpdateParams,
    type ConsumerListParams as ConsumerListParams,
    type ConsumerDeleteParams as ConsumerDeleteParams,
    type ConsumerGetParams as ConsumerGetParams,
  };

  export {
    Messages as Messages,
    type MessageAckResponse as MessageAckResponse,
    type MessageBulkPushResponse as MessageBulkPushResponse,
    type MessagePullResponse as MessagePullResponse,
    type MessagePushResponse as MessagePushResponse,
    type MessageAckParams as MessageAckParams,
    type MessageBulkPushParams as MessageBulkPushParams,
    type MessagePullParams as MessagePullParams,
    type MessagePushParams as MessagePushParams,
  };

  export {
    Purge as Purge,
    type PurgeStatusResponse as PurgeStatusResponse,
    type PurgeStartParams as PurgeStartParams,
    type PurgeStatusParams as PurgeStatusParams,
  };
}
