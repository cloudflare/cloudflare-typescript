// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a new event subscription for a queue
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.queues.subscriptions.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(params: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/event_subscriptions/subscriptions`, {
        body,
        ...options,
      }) as APIPromise<{ result: SubscriptionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing event subscription
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.queues.subscriptions.update(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    subscriptionID: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/event_subscriptions/subscriptions/${subscriptionID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SubscriptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a paginated list of event subscriptions with optional sorting and filtering
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subscriptionListResponse of client.queues.subscriptions.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SubscriptionListParams,
    options?: RequestOptions,
  ): PagePromise<SubscriptionListResponsesV4PagePaginationArray, SubscriptionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/event_subscriptions/subscriptions`,
      V4PagePaginationArray<SubscriptionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an existing event subscription
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.queues.subscriptions.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    subscriptionID: string,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/event_subscriptions/subscriptions/${subscriptionID}`,
        options,
      ) as APIPromise<{ result: SubscriptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details about an existing event subscription
   *
   * @example
   * ```ts
   * const subscription = await client.queues.subscriptions.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    subscriptionID: string,
    params: SubscriptionGetParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/event_subscriptions/subscriptions/${subscriptionID}`,
        options,
      ) as APIPromise<{ result: SubscriptionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SubscriptionListResponsesV4PagePaginationArray = V4PagePaginationArray<SubscriptionListResponse>;

export interface SubscriptionCreateResponse {
  /**
   * Unique identifier for the subscription
   */
  id: string;

  /**
   * When the subscription was created
   */
  created_at: string;

  /**
   * Destination configuration for the subscription
   */
  destination: SubscriptionCreateResponse.Destination;

  /**
   * Whether the subscription is active
   */
  enabled: boolean;

  /**
   * List of event types this subscription handles
   */
  events: Array<string>;

  /**
   * When the subscription was last modified
   */
  modified_at: string;

  /**
   * Name of the subscription
   */
  name: string;

  /**
   * Source configuration for the subscription
   */
  source:
    | SubscriptionCreateResponse.MqEventSourceImages
    | SubscriptionCreateResponse.MqEventSourceKV
    | SubscriptionCreateResponse.MqEventSourceR2
    | SubscriptionCreateResponse.MqEventSourceSuperSlurper
    | SubscriptionCreateResponse.MqEventSourceVectorize
    | SubscriptionCreateResponse.MqEventSourceWorkersAIModel
    | SubscriptionCreateResponse.MqEventSourceWorkersBuildsWorker
    | SubscriptionCreateResponse.MqEventSourceWorkflowsWorkflow;
}

export namespace SubscriptionCreateResponse {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }

  export interface MqEventSourceImages {
    /**
     * Type of source
     */
    type?: 'images';
  }

  export interface MqEventSourceKV {
    /**
     * Type of source
     */
    type?: 'kv';
  }

  export interface MqEventSourceR2 {
    /**
     * Type of source
     */
    type?: 'r2';
  }

  export interface MqEventSourceSuperSlurper {
    /**
     * Type of source
     */
    type?: 'superSlurper';
  }

  export interface MqEventSourceVectorize {
    /**
     * Type of source
     */
    type?: 'vectorize';
  }

  export interface MqEventSourceWorkersAIModel {
    /**
     * Name of the Workers AI model
     */
    model_name?: string;

    /**
     * Type of source
     */
    type?: 'workersAi.model';
  }

  export interface MqEventSourceWorkersBuildsWorker {
    /**
     * Type of source
     */
    type?: 'workersBuilds.worker';

    /**
     * Name of the worker
     */
    worker_name?: string;
  }

  export interface MqEventSourceWorkflowsWorkflow {
    /**
     * Type of source
     */
    type?: 'workflows.workflow';

    /**
     * Name of the workflow
     */
    workflow_name?: string;
  }
}

export interface SubscriptionUpdateResponse {
  /**
   * Unique identifier for the subscription
   */
  id: string;

  /**
   * When the subscription was created
   */
  created_at: string;

  /**
   * Destination configuration for the subscription
   */
  destination: SubscriptionUpdateResponse.Destination;

  /**
   * Whether the subscription is active
   */
  enabled: boolean;

  /**
   * List of event types this subscription handles
   */
  events: Array<string>;

  /**
   * When the subscription was last modified
   */
  modified_at: string;

  /**
   * Name of the subscription
   */
  name: string;

  /**
   * Source configuration for the subscription
   */
  source:
    | SubscriptionUpdateResponse.MqEventSourceImages
    | SubscriptionUpdateResponse.MqEventSourceKV
    | SubscriptionUpdateResponse.MqEventSourceR2
    | SubscriptionUpdateResponse.MqEventSourceSuperSlurper
    | SubscriptionUpdateResponse.MqEventSourceVectorize
    | SubscriptionUpdateResponse.MqEventSourceWorkersAIModel
    | SubscriptionUpdateResponse.MqEventSourceWorkersBuildsWorker
    | SubscriptionUpdateResponse.MqEventSourceWorkflowsWorkflow;
}

export namespace SubscriptionUpdateResponse {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }

  export interface MqEventSourceImages {
    /**
     * Type of source
     */
    type?: 'images';
  }

  export interface MqEventSourceKV {
    /**
     * Type of source
     */
    type?: 'kv';
  }

  export interface MqEventSourceR2 {
    /**
     * Type of source
     */
    type?: 'r2';
  }

  export interface MqEventSourceSuperSlurper {
    /**
     * Type of source
     */
    type?: 'superSlurper';
  }

  export interface MqEventSourceVectorize {
    /**
     * Type of source
     */
    type?: 'vectorize';
  }

  export interface MqEventSourceWorkersAIModel {
    /**
     * Name of the Workers AI model
     */
    model_name?: string;

    /**
     * Type of source
     */
    type?: 'workersAi.model';
  }

  export interface MqEventSourceWorkersBuildsWorker {
    /**
     * Type of source
     */
    type?: 'workersBuilds.worker';

    /**
     * Name of the worker
     */
    worker_name?: string;
  }

  export interface MqEventSourceWorkflowsWorkflow {
    /**
     * Type of source
     */
    type?: 'workflows.workflow';

    /**
     * Name of the workflow
     */
    workflow_name?: string;
  }
}

export interface SubscriptionListResponse {
  /**
   * Unique identifier for the subscription
   */
  id: string;

  /**
   * When the subscription was created
   */
  created_at: string;

  /**
   * Destination configuration for the subscription
   */
  destination: SubscriptionListResponse.Destination;

  /**
   * Whether the subscription is active
   */
  enabled: boolean;

  /**
   * List of event types this subscription handles
   */
  events: Array<string>;

  /**
   * When the subscription was last modified
   */
  modified_at: string;

  /**
   * Name of the subscription
   */
  name: string;

  /**
   * Source configuration for the subscription
   */
  source:
    | SubscriptionListResponse.MqEventSourceImages
    | SubscriptionListResponse.MqEventSourceKV
    | SubscriptionListResponse.MqEventSourceR2
    | SubscriptionListResponse.MqEventSourceSuperSlurper
    | SubscriptionListResponse.MqEventSourceVectorize
    | SubscriptionListResponse.MqEventSourceWorkersAIModel
    | SubscriptionListResponse.MqEventSourceWorkersBuildsWorker
    | SubscriptionListResponse.MqEventSourceWorkflowsWorkflow;
}

export namespace SubscriptionListResponse {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }

  export interface MqEventSourceImages {
    /**
     * Type of source
     */
    type?: 'images';
  }

  export interface MqEventSourceKV {
    /**
     * Type of source
     */
    type?: 'kv';
  }

  export interface MqEventSourceR2 {
    /**
     * Type of source
     */
    type?: 'r2';
  }

  export interface MqEventSourceSuperSlurper {
    /**
     * Type of source
     */
    type?: 'superSlurper';
  }

  export interface MqEventSourceVectorize {
    /**
     * Type of source
     */
    type?: 'vectorize';
  }

  export interface MqEventSourceWorkersAIModel {
    /**
     * Name of the Workers AI model
     */
    model_name?: string;

    /**
     * Type of source
     */
    type?: 'workersAi.model';
  }

  export interface MqEventSourceWorkersBuildsWorker {
    /**
     * Type of source
     */
    type?: 'workersBuilds.worker';

    /**
     * Name of the worker
     */
    worker_name?: string;
  }

  export interface MqEventSourceWorkflowsWorkflow {
    /**
     * Type of source
     */
    type?: 'workflows.workflow';

    /**
     * Name of the workflow
     */
    workflow_name?: string;
  }
}

export interface SubscriptionDeleteResponse {
  /**
   * Unique identifier for the subscription
   */
  id: string;

  /**
   * When the subscription was created
   */
  created_at: string;

  /**
   * Destination configuration for the subscription
   */
  destination: SubscriptionDeleteResponse.Destination;

  /**
   * Whether the subscription is active
   */
  enabled: boolean;

  /**
   * List of event types this subscription handles
   */
  events: Array<string>;

  /**
   * When the subscription was last modified
   */
  modified_at: string;

  /**
   * Name of the subscription
   */
  name: string;

  /**
   * Source configuration for the subscription
   */
  source:
    | SubscriptionDeleteResponse.MqEventSourceImages
    | SubscriptionDeleteResponse.MqEventSourceKV
    | SubscriptionDeleteResponse.MqEventSourceR2
    | SubscriptionDeleteResponse.MqEventSourceSuperSlurper
    | SubscriptionDeleteResponse.MqEventSourceVectorize
    | SubscriptionDeleteResponse.MqEventSourceWorkersAIModel
    | SubscriptionDeleteResponse.MqEventSourceWorkersBuildsWorker
    | SubscriptionDeleteResponse.MqEventSourceWorkflowsWorkflow;
}

export namespace SubscriptionDeleteResponse {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }

  export interface MqEventSourceImages {
    /**
     * Type of source
     */
    type?: 'images';
  }

  export interface MqEventSourceKV {
    /**
     * Type of source
     */
    type?: 'kv';
  }

  export interface MqEventSourceR2 {
    /**
     * Type of source
     */
    type?: 'r2';
  }

  export interface MqEventSourceSuperSlurper {
    /**
     * Type of source
     */
    type?: 'superSlurper';
  }

  export interface MqEventSourceVectorize {
    /**
     * Type of source
     */
    type?: 'vectorize';
  }

  export interface MqEventSourceWorkersAIModel {
    /**
     * Name of the Workers AI model
     */
    model_name?: string;

    /**
     * Type of source
     */
    type?: 'workersAi.model';
  }

  export interface MqEventSourceWorkersBuildsWorker {
    /**
     * Type of source
     */
    type?: 'workersBuilds.worker';

    /**
     * Name of the worker
     */
    worker_name?: string;
  }

  export interface MqEventSourceWorkflowsWorkflow {
    /**
     * Type of source
     */
    type?: 'workflows.workflow';

    /**
     * Name of the workflow
     */
    workflow_name?: string;
  }
}

export interface SubscriptionGetResponse {
  /**
   * Unique identifier for the subscription
   */
  id: string;

  /**
   * When the subscription was created
   */
  created_at: string;

  /**
   * Destination configuration for the subscription
   */
  destination: SubscriptionGetResponse.Destination;

  /**
   * Whether the subscription is active
   */
  enabled: boolean;

  /**
   * List of event types this subscription handles
   */
  events: Array<string>;

  /**
   * When the subscription was last modified
   */
  modified_at: string;

  /**
   * Name of the subscription
   */
  name: string;

  /**
   * Source configuration for the subscription
   */
  source:
    | SubscriptionGetResponse.MqEventSourceImages
    | SubscriptionGetResponse.MqEventSourceKV
    | SubscriptionGetResponse.MqEventSourceR2
    | SubscriptionGetResponse.MqEventSourceSuperSlurper
    | SubscriptionGetResponse.MqEventSourceVectorize
    | SubscriptionGetResponse.MqEventSourceWorkersAIModel
    | SubscriptionGetResponse.MqEventSourceWorkersBuildsWorker
    | SubscriptionGetResponse.MqEventSourceWorkflowsWorkflow;
}

export namespace SubscriptionGetResponse {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }

  export interface MqEventSourceImages {
    /**
     * Type of source
     */
    type?: 'images';
  }

  export interface MqEventSourceKV {
    /**
     * Type of source
     */
    type?: 'kv';
  }

  export interface MqEventSourceR2 {
    /**
     * Type of source
     */
    type?: 'r2';
  }

  export interface MqEventSourceSuperSlurper {
    /**
     * Type of source
     */
    type?: 'superSlurper';
  }

  export interface MqEventSourceVectorize {
    /**
     * Type of source
     */
    type?: 'vectorize';
  }

  export interface MqEventSourceWorkersAIModel {
    /**
     * Name of the Workers AI model
     */
    model_name?: string;

    /**
     * Type of source
     */
    type?: 'workersAi.model';
  }

  export interface MqEventSourceWorkersBuildsWorker {
    /**
     * Type of source
     */
    type?: 'workersBuilds.worker';

    /**
     * Name of the worker
     */
    worker_name?: string;
  }

  export interface MqEventSourceWorkflowsWorkflow {
    /**
     * Type of source
     */
    type?: 'workflows.workflow';

    /**
     * Name of the workflow
     */
    workflow_name?: string;
  }
}

export interface SubscriptionCreateParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param: Destination configuration for the subscription
   */
  destination?: SubscriptionCreateParams.Destination;

  /**
   * Body param: Whether the subscription is active
   */
  enabled?: boolean;

  /**
   * Body param: List of event types this subscription handles
   */
  events?: Array<string>;

  /**
   * Body param: Name of the subscription
   */
  name?: string;

  /**
   * Body param: Source configuration for the subscription
   */
  source?:
    | SubscriptionCreateParams.MqEventSourceImages
    | SubscriptionCreateParams.MqEventSourceKV
    | SubscriptionCreateParams.MqEventSourceR2
    | SubscriptionCreateParams.MqEventSourceSuperSlurper
    | SubscriptionCreateParams.MqEventSourceVectorize
    | SubscriptionCreateParams.MqEventSourceWorkersAIModel
    | SubscriptionCreateParams.MqEventSourceWorkersBuildsWorker
    | SubscriptionCreateParams.MqEventSourceWorkflowsWorkflow;
}

export namespace SubscriptionCreateParams {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }

  export interface MqEventSourceImages {
    /**
     * Type of source
     */
    type?: 'images';
  }

  export interface MqEventSourceKV {
    /**
     * Type of source
     */
    type?: 'kv';
  }

  export interface MqEventSourceR2 {
    /**
     * Type of source
     */
    type?: 'r2';
  }

  export interface MqEventSourceSuperSlurper {
    /**
     * Type of source
     */
    type?: 'superSlurper';
  }

  export interface MqEventSourceVectorize {
    /**
     * Type of source
     */
    type?: 'vectorize';
  }

  export interface MqEventSourceWorkersAIModel {
    /**
     * Name of the Workers AI model
     */
    model_name?: string;

    /**
     * Type of source
     */
    type?: 'workersAi.model';
  }

  export interface MqEventSourceWorkersBuildsWorker {
    /**
     * Type of source
     */
    type?: 'workersBuilds.worker';

    /**
     * Name of the worker
     */
    worker_name?: string;
  }

  export interface MqEventSourceWorkflowsWorkflow {
    /**
     * Type of source
     */
    type?: 'workflows.workflow';

    /**
     * Name of the workflow
     */
    workflow_name?: string;
  }
}

export interface SubscriptionUpdateParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Body param: Destination configuration for the subscription
   */
  destination?: SubscriptionUpdateParams.Destination;

  /**
   * Body param: Whether the subscription is active
   */
  enabled?: boolean;

  /**
   * Body param: List of event types this subscription handles
   */
  events?: Array<string>;

  /**
   * Body param: Name of the subscription
   */
  name?: string;
}

export namespace SubscriptionUpdateParams {
  /**
   * Destination configuration for the subscription
   */
  export interface Destination {
    /**
     * ID of the target queue
     */
    queue_id: string;

    /**
     * Type of destination
     */
    type: 'queues.queue';
  }
}

export interface SubscriptionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: A Resource identifier.
   */
  account_id: string;

  /**
   * Query param: Sort direction
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to sort by
   */
  order?: 'created_at' | 'name' | 'enabled' | 'source';
}

export interface SubscriptionDeleteParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export interface SubscriptionGetParams {
  /**
   * A Resource identifier.
   */
  account_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionListResponsesV4PagePaginationArray as SubscriptionListResponsesV4PagePaginationArray,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionGetParams as SubscriptionGetParams,
  };
}
