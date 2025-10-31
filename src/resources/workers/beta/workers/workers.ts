// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
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
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

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
  create(params: WorkerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Worker> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/workers`, { body, ...options }) as Core.APIPromise<{
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
  update(
    workerId: string,
    params: WorkerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Worker> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/workers/${workerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Worker }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkersV4PagePaginationArray, Worker> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/workers/workers`, WorkersV4PagePaginationArray, {
      query,
      ...options,
    });
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
    workerId: string,
    params: WorkerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkerDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/workers/workers/${workerId}`, options);
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
  edit(workerId: string, params: WorkerEditParams, options?: Core.RequestOptions): Core.APIPromise<Worker> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/workers/workers/${workerId}`, {
        body,
        ...options,
        headers: { 'Content-Type': 'application/merge-patch+json', ...options?.headers },
      }) as Core.APIPromise<{ result: Worker }>
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
  get(workerId: string, params: WorkerGetParams, options?: Core.RequestOptions): Core.APIPromise<Worker> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/workers/${workerId}`, options) as Core.APIPromise<{
        result: Worker;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WorkersV4PagePaginationArray extends V4PagePaginationArray<Worker> {}

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

Workers.WorkersV4PagePaginationArray = WorkersV4PagePaginationArray;
Workers.Versions = Versions;
Workers.VersionsV4PagePaginationArray = VersionsV4PagePaginationArray;

export declare namespace Workers {
  export {
    type Worker as Worker,
    type WorkerDeleteResponse as WorkerDeleteResponse,
    WorkersV4PagePaginationArray as WorkersV4PagePaginationArray,
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
    VersionsV4PagePaginationArray as VersionsV4PagePaginationArray,
    type VersionCreateParams as VersionCreateParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionGetParams as VersionGetParams,
  };
}
