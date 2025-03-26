// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as ConsumersAPI from './consumers';
import {
  Consumer,
  ConsumerCreateParams,
  ConsumerDeleteParams,
  ConsumerDeleteResponse,
  ConsumerGetParams,
  ConsumerUpdateParams,
  Consumers,
  ConsumersSinglePage,
} from './consumers';
import * as MessagesAPI from './messages';
import {
  MessageAckParams,
  MessageAckResponse,
  MessagePullParams,
  MessagePullResponse,
  MessagePullResponsesSinglePage,
  Messages,
} from './messages';
import * as PurgeAPI from './purge';
import { Purge, PurgeStartParams, PurgeStatusParams, PurgeStatusResponse } from './purge';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  purge: PurgeAPI.Purge = new PurgeAPI.Purge(this._client);

  /**
   * Create a new queue
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
   */
  list(params: QueueListParams, options?: RequestOptions): PagePromise<QueuesSinglePage, Queue> {
    const { account_id } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/queues`, SinglePage<Queue>, options);
  }

  /**
   * Deletes a queue
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
    type ConsumerDeleteParams as ConsumerDeleteParams,
    type ConsumerGetParams as ConsumerGetParams,
  };

  export {
    Messages as Messages,
    type MessageAckResponse as MessageAckResponse,
    type MessagePullResponse as MessagePullResponse,
    type MessagePullResponsesSinglePage as MessagePullResponsesSinglePage,
    type MessageAckParams as MessageAckParams,
    type MessagePullParams as MessagePullParams,
  };

  export {
    Purge as Purge,
    type PurgeStatusResponse as PurgeStatusResponse,
    type PurgeStartParams as PurgeStartParams,
    type PurgeStatusParams as PurgeStatusParams,
  };
}
