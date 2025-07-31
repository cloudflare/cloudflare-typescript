// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ConsumersAPI from './consumers';
import {
  Consumer,
  ConsumerCreateParams,
  ConsumerDeleteParams,
  ConsumerDeleteResponse,
  ConsumerGetParams,
  ConsumerListParams,
  ConsumerUpdateParams,
  Consumers,
  ConsumersSinglePage,
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
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
  create(params: QueueCreateParams, options?: RequestOptions): APIPromise<Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/queues`, { body, ...options }) as APIPromise<{
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
  update(queueID: string, params: QueueUpdateParams, options?: RequestOptions): APIPromise<Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/queues/${queueID}`, { body, ...options }) as APIPromise<{
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
  list(params: QueueListParams, options?: RequestOptions): PagePromise<QueuesSinglePage, Queue> {
    const { account_id } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/queues`, SinglePage<Queue>, options);
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
    queueID: string,
    params: QueueDeleteParams,
    options?: RequestOptions,
  ): APIPromise<QueueDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/queues/${queueID}`, options);
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
  edit(queueID: string, params: QueueEditParams, options?: RequestOptions): APIPromise<Queue> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/queues/${queueID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Queue }>
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
  get(queueID: string, params: QueueGetParams, options?: RequestOptions): APIPromise<Queue> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/queues/${queueID}`, options) as APIPromise<{
        result: Queue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type QueuesSinglePage = SinglePage<Queue>;

export interface Queue {
  consumers?: Array<ConsumersAPI.Consumer>;

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
   * Body param:
   */
  queue_name: string;
}

export interface QueueUpdateParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param:
   */
  queue_name?: string;

  /**
   * Body param:
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
   * Body param:
   */
  queue_name?: string;

  /**
   * Body param:
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

Queues.Consumers = Consumers;
Queues.Messages = Messages;
Queues.Purge = Purge;

export declare namespace Queues {
  export {
    type Queue as Queue,
    type QueueDeleteResponse as QueueDeleteResponse,
    type QueuesSinglePage as QueuesSinglePage,
    type QueueCreateParams as QueueCreateParams,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueListParams as QueueListParams,
    type QueueDeleteParams as QueueDeleteParams,
    type QueueEditParams as QueueEditParams,
    type QueueGetParams as QueueGetParams,
  };

  export {
    Consumers as Consumers,
    type Consumer as Consumer,
    type ConsumerDeleteResponse as ConsumerDeleteResponse,
    type ConsumersSinglePage as ConsumersSinglePage,
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
