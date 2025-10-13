// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VersionsAPI from './versions';
import {
  Version,
  VersionCreateParams,
  VersionDeleteParams,
  VersionDeleteResponse,
  VersionGetParams,
  VersionListParams,
  Versions,
  VersionsV4PagePaginationArray,
} from './versions';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Workers extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new Worker.
   *
   * @example
   * ```ts
   * const worker = await client.workers.beta.workers.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my-worker',
   * });
   * ```
   */
  create(params: WorkerCreateParams, options?: RequestOptions): APIPromise<Worker> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workers/workers`, { body, ...options }) as APIPromise<{
        result: Worker;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Perform a complete replacement of a Worker, where omitted properties are set to
   * their default values. This is the exact same as the Create Worker endpoint, but
   * operates on an existing Worker. To perform a partial update instead, use the
   * Edit Worker endpoint.
   *
   * @example
   * ```ts
   * const worker = await client.workers.beta.workers.update(
   *   'worker_id',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'my-worker',
   *   },
   * );
   * ```
   */
  update(workerID: string, params: WorkerUpdateParams, options?: RequestOptions): APIPromise<Worker> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/workers/workers/${workerID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Worker }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Workers for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const worker of client.workers.beta.workers.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: WorkerListParams,
    options?: RequestOptions,
  ): PagePromise<WorkersV4PagePaginationArray, Worker> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/workers`,
      V4PagePaginationArray<Worker>,
      { query, ...options },
    );
  }

  /**
   * Delete a Worker and all its associated resources (versions, deployments, etc.).
   *
   * @example
   * ```ts
   * const worker = await client.workers.beta.workers.delete(
   *   'worker_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    workerID: string,
    params: WorkerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkerDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/workers/workers/${workerID}`, options);
  }

  /**
   * Perform a partial update on a Worker, where omitted properties are left
   * unchanged from their current values.
   *
   * @example
   * ```ts
   * const worker = await client.workers.beta.workers.edit(
   *   'worker_id',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     logpush: true,
   *     name: 'my-worker',
   *     observability: {},
   *     subdomain: {},
   *     tags: ['my-team', 'my-public-api'],
   *     tail_consumers: [{ name: 'my-tail-consumer' }],
   *   },
   * );
   * ```
   */
  edit(workerID: string, params: WorkerEditParams, options?: RequestOptions): APIPromise<Worker> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/workers/workers/${workerID}`, {
        body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/merge-patch+json' }, options?.headers]),
      }) as APIPromise<{ result: Worker }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details about a specific Worker.
   *
   * @example
   * ```ts
   * const worker = await client.workers.beta.workers.get(
   *   'worker_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(workerID: string, params: WorkerGetParams, options?: RequestOptions): APIPromise<Worker> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/workers/workers/${workerID}`, options) as APIPromise<{
        result: Worker;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WorkersV4PagePaginationArray = V4PagePaginationArray<Worker>;

export interface Worker {
  /**
   * Immutable ID of the Worker.
   */
  id: string;

  /**
   * When the Worker was created.
   */
  created_on: string;

  /**
   * Whether logpush is enabled for the Worker.
   */
  logpush: boolean;

  /**
   * Name of the Worker.
   */
  name: string;

  /**
   * Observability settings for the Worker.
   */
  observability: Worker.Observability;

  /**
   * Other resources that reference the Worker and depend on it existing.
   */
  references: Worker.References;

  /**
   * Subdomain settings for the Worker.
   */
  subdomain: Worker.Subdomain;

  /**
   * Tags associated with the Worker.
   */
  tags: Array<string>;

  /**
   * Other Workers that should consume logs from the Worker.
   */
  tail_consumers: Array<Worker.TailConsumer>;

  /**
   * When the Worker was most recently updated.
   */
  updated_on: string;
}

export namespace Worker {
  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
     */
    head_sampling_rate?: number;

    /**
     * Log settings for the Worker.
     */
    logs?: Observability.Logs;
  }

  export namespace Observability {
    /**
     * Log settings for the Worker.
     */
    export interface Logs {
      /**
       * Whether logs are enabled for the Worker.
       */
      enabled?: boolean;

      /**
       * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
       */
      head_sampling_rate?: number;

      /**
       * Whether
       * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
       * are enabled for the Worker.
       */
      invocation_logs?: boolean;
    }
  }

  /**
   * Other resources that reference the Worker and depend on it existing.
   */
  export interface References {
    /**
     * Other Workers that reference the Worker as an outbound for a dispatch namespace.
     */
    dispatch_namespace_outbounds: Array<References.DispatchNamespaceOutbound>;

    /**
     * Custom domains connected to the Worker.
     */
    domains: Array<References.Domain>;

    /**
     * Other Workers that reference Durable Object classes implemented by the Worker.
     */
    durable_objects: Array<References.DurableObject>;

    /**
     * Queues that send messages to the Worker.
     */
    queues: Array<References.Queue>;

    /**
     * Other Workers that reference the Worker using
     * [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/).
     */
    workers: Array<References.Worker>;
  }

  export namespace References {
    export interface DispatchNamespaceOutbound {
      /**
       * ID of the dispatch namespace.
       */
      namespace_id: string;

      /**
       * Name of the dispatch namespace.
       */
      namespace_name: string;

      /**
       * ID of the Worker using the dispatch namespace.
       */
      worker_id: string;

      /**
       * Name of the Worker using the dispatch namespace.
       */
      worker_name: string;
    }

    export interface Domain {
      /**
       * ID of the custom domain.
       */
      id: string;

      /**
       * ID of the TLS certificate issued for the custom domain.
       */
      certificate_id: string;

      /**
       * Full hostname of the custom domain, including the zone name.
       */
      hostname: string;

      /**
       * ID of the zone.
       */
      zone_id: string;

      /**
       * Name of the zone.
       */
      zone_name: string;
    }

    export interface DurableObject {
      /**
       * ID of the Durable Object namespace being used.
       */
      namespace_id: string;

      /**
       * Name of the Durable Object namespace being used.
       */
      namespace_name: string;

      /**
       * ID of the Worker using the Durable Object implementation.
       */
      worker_id: string;

      /**
       * Name of the Worker using the Durable Object implementation.
       */
      worker_name: string;
    }

    export interface Queue {
      /**
       * ID of the queue consumer configuration.
       */
      queue_consumer_id: string;

      /**
       * ID of the queue.
       */
      queue_id: string;

      /**
       * Name of the queue.
       */
      queue_name: string;
    }

    export interface Worker {
      /**
       * ID of the referencing Worker.
       */
      id: string;

      /**
       * Name of the referencing Worker.
       */
      name: string;
    }
  }

  /**
   * Subdomain settings for the Worker.
   */
  export interface Subdomain {
    /**
     * Whether the \*.workers.dev subdomain is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * Whether
     * [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/)
     * are enabled for the Worker.
     */
    previews_enabled?: boolean;
  }

  export interface TailConsumer {
    /**
     * Name of the consumer Worker.
     */
    name: string;
  }
}

export interface WorkerDeleteResponse {
  errors: Array<WorkerDeleteResponse.Error>;

  messages: Array<WorkerDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace WorkerDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface WorkerCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Name of the Worker.
   */
  name: string;

  /**
   * Body param: Whether logpush is enabled for the Worker.
   */
  logpush?: boolean;

  /**
   * Body param: Observability settings for the Worker.
   */
  observability?: WorkerCreateParams.Observability;

  /**
   * Body param: Subdomain settings for the Worker.
   */
  subdomain?: WorkerCreateParams.Subdomain;

  /**
   * Body param: Tags associated with the Worker.
   */
  tags?: Array<string>;

  /**
   * Body param: Other Workers that should consume logs from the Worker.
   */
  tail_consumers?: Array<WorkerCreateParams.TailConsumer>;
}

export namespace WorkerCreateParams {
  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
     */
    head_sampling_rate?: number;

    /**
     * Log settings for the Worker.
     */
    logs?: Observability.Logs;
  }

  export namespace Observability {
    /**
     * Log settings for the Worker.
     */
    export interface Logs {
      /**
       * Whether logs are enabled for the Worker.
       */
      enabled?: boolean;

      /**
       * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
       */
      head_sampling_rate?: number;

      /**
       * Whether
       * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
       * are enabled for the Worker.
       */
      invocation_logs?: boolean;
    }
  }

  /**
   * Subdomain settings for the Worker.
   */
  export interface Subdomain {
    /**
     * Whether the \*.workers.dev subdomain is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * Whether
     * [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/)
     * are enabled for the Worker.
     */
    previews_enabled?: boolean;
  }

  export interface TailConsumer {
    /**
     * Name of the consumer Worker.
     */
    name: string;
  }
}

export interface WorkerUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Name of the Worker.
   */
  name: string;

  /**
   * Body param: Whether logpush is enabled for the Worker.
   */
  logpush?: boolean;

  /**
   * Body param: Observability settings for the Worker.
   */
  observability?: WorkerUpdateParams.Observability;

  /**
   * Body param: Subdomain settings for the Worker.
   */
  subdomain?: WorkerUpdateParams.Subdomain;

  /**
   * Body param: Tags associated with the Worker.
   */
  tags?: Array<string>;

  /**
   * Body param: Other Workers that should consume logs from the Worker.
   */
  tail_consumers?: Array<WorkerUpdateParams.TailConsumer>;
}

export namespace WorkerUpdateParams {
  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
     */
    head_sampling_rate?: number;

    /**
     * Log settings for the Worker.
     */
    logs?: Observability.Logs;
  }

  export namespace Observability {
    /**
     * Log settings for the Worker.
     */
    export interface Logs {
      /**
       * Whether logs are enabled for the Worker.
       */
      enabled?: boolean;

      /**
       * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
       */
      head_sampling_rate?: number;

      /**
       * Whether
       * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
       * are enabled for the Worker.
       */
      invocation_logs?: boolean;
    }
  }

  /**
   * Subdomain settings for the Worker.
   */
  export interface Subdomain {
    /**
     * Whether the \*.workers.dev subdomain is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * Whether
     * [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/)
     * are enabled for the Worker.
     */
    previews_enabled?: boolean;
  }

  export interface TailConsumer {
    /**
     * Name of the consumer Worker.
     */
    name: string;
  }
}

export interface WorkerListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface WorkerDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface WorkerEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Whether logpush is enabled for the Worker.
   */
  logpush: boolean;

  /**
   * Body param: Name of the Worker.
   */
  name: string;

  /**
   * Body param: Observability settings for the Worker.
   */
  observability: WorkerEditParams.Observability;

  /**
   * Body param: Subdomain settings for the Worker.
   */
  subdomain: WorkerEditParams.Subdomain;

  /**
   * Body param: Tags associated with the Worker.
   */
  tags: Array<string>;

  /**
   * Body param: Other Workers that should consume logs from the Worker.
   */
  tail_consumers: Array<WorkerEditParams.TailConsumer>;
}

export namespace WorkerEditParams {
  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
     */
    head_sampling_rate?: number;

    /**
     * Log settings for the Worker.
     */
    logs?: Observability.Logs;
  }

  export namespace Observability {
    /**
     * Log settings for the Worker.
     */
    export interface Logs {
      /**
       * Whether logs are enabled for the Worker.
       */
      enabled?: boolean;

      /**
       * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
       */
      head_sampling_rate?: number;

      /**
       * Whether
       * [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs)
       * are enabled for the Worker.
       */
      invocation_logs?: boolean;
    }
  }

  /**
   * Subdomain settings for the Worker.
   */
  export interface Subdomain {
    /**
     * Whether the \*.workers.dev subdomain is enabled for the Worker.
     */
    enabled?: boolean;

    /**
     * Whether
     * [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/)
     * are enabled for the Worker.
     */
    previews_enabled?: boolean;
  }

  export interface TailConsumer {
    /**
     * Name of the consumer Worker.
     */
    name: string;
  }
}

export interface WorkerGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Workers.Versions = Versions;

export declare namespace Workers {
  export {
    type Worker as Worker,
    type WorkerDeleteResponse as WorkerDeleteResponse,
    type WorkersV4PagePaginationArray as WorkersV4PagePaginationArray,
    type WorkerCreateParams as WorkerCreateParams,
    type WorkerUpdateParams as WorkerUpdateParams,
    type WorkerListParams as WorkerListParams,
    type WorkerDeleteParams as WorkerDeleteParams,
    type WorkerEditParams as WorkerEditParams,
    type WorkerGetParams as WorkerGetParams,
  };

  export {
    Versions as Versions,
    type Version as Version,
    type VersionDeleteResponse as VersionDeleteResponse,
    type VersionsV4PagePaginationArray as VersionsV4PagePaginationArray,
    type VersionCreateParams as VersionCreateParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionGetParams as VersionGetParams,
  };
}
