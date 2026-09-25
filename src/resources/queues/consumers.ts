// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseConsumers extends APIResource {
  static override readonly _key: readonly ['queues', 'consumers'] = Object.freeze([
    'queues',
    'consumers',
  ] as const);

  /**
   * Creates a consumer for a Queue.
   *
   * @example
   * ```ts
   * const consumer = await client.queues.consumers.create(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     script_name: 'my-consumer-worker',
   *     type: 'worker',
   *   },
   * );
   * ```
   */
  create(queueID: string, params: ConsumerCreateParams, options?: RequestOptions): APIPromise<Consumer> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/queues/${queueID}/consumers`, {
        body,
        ...options,
      }) as APIPromise<{ result: Consumer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces a Queue consumer, or creates it if it does not exist.
   *
   * @example
   * ```ts
   * const consumer = await client.queues.consumers.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     queue_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     script_name: 'my-consumer-worker',
   *     type: 'worker',
   *   },
   * );
   * ```
   */
  update(consumerID: string, params: ConsumerUpdateParams, options?: RequestOptions): APIPromise<Consumer> {
    const { account_id, queue_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/queues/${queue_id}/consumers/${consumerID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Consumer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the consumers configured for a Queue.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const consumer of client.queues.consumers.list(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    queueID: string,
    params: ConsumerListParams,
    options?: RequestOptions,
  ): PagePromise<ConsumersSinglePage, Consumer> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/queues/${queueID}/consumers`,
      SinglePage<Consumer>,
      options,
    );
  }

  /**
   * Deletes a consumer from a Queue.
   *
   * @example
   * ```ts
   * const consumer = await client.queues.consumers.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     queue_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  delete(
    consumerID: string,
    params: ConsumerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConsumerDeleteResponse> {
    const { account_id, queue_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/queues/${queue_id}/consumers/${consumerID}`,
      options,
    );
  }

  /**
   * Returns a Queue consumer by identifier.
   *
   * @example
   * ```ts
   * const consumer = await client.queues.consumers.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     queue_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  get(consumerID: string, params: ConsumerGetParams, options?: RequestOptions): APIPromise<Consumer> {
    const { account_id, queue_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/queues/${queue_id}/consumers/${consumerID}`,
        options,
      ) as APIPromise<{ result: Consumer }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Consumers extends BaseConsumers {}

export type ConsumersSinglePage = SinglePage<Consumer>;

/**
 * Response body representing a consumer
 */
export type Consumer =
  | Consumer.MqWorkerConsumerResponse
  | Consumer.MqHTTPConsumerResponse
  | Consumer.MqNotificationConsumerResponse;

export namespace Consumer {
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

  export interface MqNotificationConsumerResponse {
    /**
     * A Resource identifier.
     */
    consumer_id?: string;

    created_on?: string;

    /**
     * Name of the dead letter queue, or empty string if not configured.
     */
    dead_letter_queue?: string;

    queue_name?: string;

    /**
     * Notification destinations for a Queue. At least one email, webhook, or PagerDuty
     * destination is required.
     */
    settings?:
      | MqNotificationConsumerResponse.UnionMember0
      | MqNotificationConsumerResponse.UnionMember1
      | MqNotificationConsumerResponse.UnionMember2;

    type?: 'notification';
  }

  export namespace MqNotificationConsumerResponse {
    export interface UnionMember0 {
      email: Array<UnionMember0.Email>;

      /**
       * PagerDuty notification destinations.
       */
      pagerduty?: Array<UnionMember0.Pagerduty>;

      /**
       * Webhook notification destinations.
       */
      webhooks?: Array<UnionMember0.Webhook>;
    }

    export namespace UnionMember0 {
      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }
    }

    export interface UnionMember1 {
      webhooks: Array<UnionMember1.Webhook>;

      /**
       * Email notification destinations.
       */
      email?: Array<UnionMember1.Email>;

      /**
       * PagerDuty notification destinations.
       */
      pagerduty?: Array<UnionMember1.Pagerduty>;
    }

    export namespace UnionMember1 {
      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }
    }

    export interface UnionMember2 {
      pagerduty: Array<UnionMember2.Pagerduty>;

      /**
       * Email notification destinations.
       */
      email?: Array<UnionMember2.Email>;

      /**
       * Webhook notification destinations.
       */
      webhooks?: Array<UnionMember2.Webhook>;
    }

    export namespace UnionMember2 {
      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }
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

export type ConsumerCreateParams =
  | ConsumerCreateParams.MqWorkerConsumerRequest
  | ConsumerCreateParams.MqHTTPConsumerRequest
  | ConsumerCreateParams.MqNotificationConsumerRequest;

export declare namespace ConsumerCreateParams {
  export interface MqWorkerConsumerRequest {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param: Name of a Worker
     */
    script_name: string;

    /**
     * Body param
     */
    type: 'worker';

    /**
     * Body param
     */
    dead_letter_queue?: string;

    /**
     * Body param
     */
    settings?: MqWorkerConsumerRequest.Settings;
  }

  export namespace MqWorkerConsumerRequest {
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

  export interface MqHTTPConsumerRequest {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param
     */
    type: 'http_pull';

    /**
     * Body param
     */
    dead_letter_queue?: string;

    /**
     * Body param
     */
    settings?: MqHTTPConsumerRequest.Settings;
  }

  export namespace MqHTTPConsumerRequest {
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

  export interface MqNotificationConsumerRequest {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Body param: Notification destinations for a Queue. At least one email, webhook,
     * or PagerDuty destination is required.
     */
    settings:
      | MqNotificationConsumerRequest.UnionMember0
      | MqNotificationConsumerRequest.UnionMember1
      | MqNotificationConsumerRequest.UnionMember2;

    /**
     * Body param
     */
    type: 'notification';

    /**
     * Body param
     */
    dead_letter_queue?: string;
  }

  export namespace MqNotificationConsumerRequest {
    export interface UnionMember0 {
      email: Array<UnionMember0.Email>;

      /**
       * PagerDuty notification destinations.
       */
      pagerduty?: Array<UnionMember0.Pagerduty>;

      /**
       * Webhook notification destinations.
       */
      webhooks?: Array<UnionMember0.Webhook>;
    }

    export namespace UnionMember0 {
      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }
    }

    export interface UnionMember1 {
      webhooks: Array<UnionMember1.Webhook>;

      /**
       * Email notification destinations.
       */
      email?: Array<UnionMember1.Email>;

      /**
       * PagerDuty notification destinations.
       */
      pagerduty?: Array<UnionMember1.Pagerduty>;
    }

    export namespace UnionMember1 {
      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }
    }

    export interface UnionMember2 {
      pagerduty: Array<UnionMember2.Pagerduty>;

      /**
       * Email notification destinations.
       */
      email?: Array<UnionMember2.Email>;

      /**
       * Webhook notification destinations.
       */
      webhooks?: Array<UnionMember2.Webhook>;
    }

    export namespace UnionMember2 {
      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }
    }
  }
}

export type ConsumerUpdateParams =
  | ConsumerUpdateParams.MqWorkerConsumerRequest
  | ConsumerUpdateParams.MqHTTPConsumerRequest
  | ConsumerUpdateParams.MqNotificationConsumerRequest;

export declare namespace ConsumerUpdateParams {
  export interface MqWorkerConsumerRequest {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Path param: A Resource identifier.
     */
    queue_id: string;

    /**
     * Body param: Name of a Worker
     */
    script_name: string;

    /**
     * Body param
     */
    type: 'worker';

    /**
     * Body param
     */
    dead_letter_queue?: string;

    /**
     * Body param
     */
    settings?: MqWorkerConsumerRequest.Settings;
  }

  export namespace MqWorkerConsumerRequest {
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

  export interface MqHTTPConsumerRequest {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Path param: A Resource identifier.
     */
    queue_id: string;

    /**
     * Body param
     */
    type: 'http_pull';

    /**
     * Body param
     */
    dead_letter_queue?: string;

    /**
     * Body param
     */
    settings?: MqHTTPConsumerRequest.Settings;
  }

  export namespace MqHTTPConsumerRequest {
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

  export interface MqNotificationConsumerRequest {
    /**
     * Path param: A Resource identifier.
     */
    account_id: string;

    /**
     * Path param: A Resource identifier.
     */
    queue_id: string;

    /**
     * Body param: Notification destinations for a Queue. At least one email, webhook,
     * or PagerDuty destination is required.
     */
    settings:
      | MqNotificationConsumerRequest.UnionMember0
      | MqNotificationConsumerRequest.UnionMember1
      | MqNotificationConsumerRequest.UnionMember2;

    /**
     * Body param
     */
    type: 'notification';

    /**
     * Body param
     */
    dead_letter_queue?: string;
  }

  export namespace MqNotificationConsumerRequest {
    export interface UnionMember0 {
      email: Array<UnionMember0.Email>;

      /**
       * PagerDuty notification destinations.
       */
      pagerduty?: Array<UnionMember0.Pagerduty>;

      /**
       * Webhook notification destinations.
       */
      webhooks?: Array<UnionMember0.Webhook>;
    }

    export namespace UnionMember0 {
      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }
    }

    export interface UnionMember1 {
      webhooks: Array<UnionMember1.Webhook>;

      /**
       * Email notification destinations.
       */
      email?: Array<UnionMember1.Email>;

      /**
       * PagerDuty notification destinations.
       */
      pagerduty?: Array<UnionMember1.Pagerduty>;
    }

    export namespace UnionMember1 {
      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }
    }

    export interface UnionMember2 {
      pagerduty: Array<UnionMember2.Pagerduty>;

      /**
       * Email notification destinations.
       */
      email?: Array<UnionMember2.Email>;

      /**
       * Webhook notification destinations.
       */
      webhooks?: Array<UnionMember2.Webhook>;
    }

    export namespace UnionMember2 {
      export interface Pagerduty {
        /**
         * UUID.
         */
        id: string;
      }

      export interface Email {
        /**
         * The email address.
         */
        id: string;
      }

      export interface Webhook {
        /**
         * UUID.
         */
        id: string;
      }
    }
  }
}

export interface ConsumerListParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export interface ConsumerDeleteParams {
  /**
   * A Resource identifier.
   */
  account_id: string;

  /**
   * A Resource identifier.
   */
  queue_id: string;
}

export interface ConsumerGetParams {
  /**
   * A Resource identifier.
   */
  account_id: string;

  /**
   * A Resource identifier.
   */
  queue_id: string;
}

export declare namespace Consumers {
  export {
    type Consumer as Consumer,
    type ConsumerDeleteResponse as ConsumerDeleteResponse,
    type ConsumersSinglePage as ConsumersSinglePage,
    type ConsumerCreateParams as ConsumerCreateParams,
    type ConsumerUpdateParams as ConsumerUpdateParams,
    type ConsumerListParams as ConsumerListParams,
    type ConsumerDeleteParams as ConsumerDeleteParams,
    type ConsumerGetParams as ConsumerGetParams,
  };
}
