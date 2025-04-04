// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
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
import { SinglePage } from '../../pagination';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  purge: PurgeAPI.Purge = new PurgeAPI.Purge(this._client);

  /**
   * Create a new queue
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
   */
  list(params: QueueListParams, options?: Core.RequestOptions): Core.PagePromise<QueuesSinglePage, Queue> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/queues`, QueuesSinglePage, options);
  }

  /**
   * Deletes a queue
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
  errors?: Array<QueueDeleteResponse.Error>;

  messages?: Array<string>;

  /**
   * Indicates if the API call was successful or not.
   */
  success?: true;
}

export namespace QueueDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }
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

Queues.QueuesSinglePage = QueuesSinglePage;
Queues.Consumers = Consumers;
Queues.ConsumersSinglePage = ConsumersSinglePage;
Queues.Messages = Messages;
Queues.MessagePullResponsesSinglePage = MessagePullResponsesSinglePage;
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
    type Consumer as Consumer,
    type ConsumerDeleteResponse as ConsumerDeleteResponse,
    ConsumersSinglePage as ConsumersSinglePage,
    type ConsumerCreateParams as ConsumerCreateParams,
    type ConsumerUpdateParams as ConsumerUpdateParams,
    type ConsumerDeleteParams as ConsumerDeleteParams,
    type ConsumerGetParams as ConsumerGetParams,
  };

  export {
    Messages as Messages,
    type MessageAckResponse as MessageAckResponse,
    type MessagePullResponse as MessagePullResponse,
    MessagePullResponsesSinglePage as MessagePullResponsesSinglePage,
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
