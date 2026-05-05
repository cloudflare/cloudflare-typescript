// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'instances', 'jobs'] = Object.freeze([
    'aiSearch',
    'instances',
    'jobs',
  ] as const);

  /**
   * Creates a new indexing job for an AI Search instance.
   *
   * @example
   * ```ts
   * const job = await client.aiSearch.instances.jobs.create(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  create(id: string, params: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-search/instances/${id}/jobs`, {
        body,
        ...options,
      }) as APIPromise<{ result: JobCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists indexing jobs for an AI Search instance.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const jobListResponse of client.aiSearch.instances.jobs.list(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    params: JobListParams,
    options?: RequestOptions,
  ): PagePromise<JobListResponsesV4PagePaginationArray, JobListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-search/instances/${id}/jobs`,
      V4PagePaginationArray<JobListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieves details for a specific AI Search indexing job.
   *
   * @example
   * ```ts
   * const job = await client.aiSearch.instances.jobs.get(
   *   'job_id',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     id: 'my-ai-search',
   *   },
   * );
   * ```
   */
  get(jobID: string, params: JobGetParams, options?: RequestOptions): APIPromise<JobGetResponse> {
    const { account_id, id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobID}`,
        options,
      ) as APIPromise<{ result: JobGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists log entries for an AI Search indexing job.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.instances.jobs.logs(
   *   'job_id',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     id: 'my-ai-search',
   *   },
   * );
   * ```
   */
  logs(jobID: string, params: JobLogsParams, options?: RequestOptions): APIPromise<JobLogsResponse> {
    const { account_id, id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobID}/logs`, {
        query,
        ...options,
      }) as APIPromise<{ result: JobLogsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Jobs extends BaseJobs {}

export type JobListResponsesV4PagePaginationArray = V4PagePaginationArray<JobListResponse>;

export interface JobCreateResponse {
  id: string;

  source: 'user' | 'schedule';

  description?: string;

  end_reason?: string;

  ended_at?: string;

  last_seen_at?: string;

  started_at?: string;
}

export interface JobListResponse {
  id: string;

  source: 'user' | 'schedule';

  description?: string;

  end_reason?: string;

  ended_at?: string;

  last_seen_at?: string;

  started_at?: string;
}

export interface JobGetResponse {
  id: string;

  source: 'user' | 'schedule';

  description?: string;

  end_reason?: string;

  ended_at?: string;

  last_seen_at?: string;

  started_at?: string;
}

export type JobLogsResponse = Array<JobLogsResponse.JobLogsResponseItem>;

export namespace JobLogsResponse {
  export interface JobLogsResponseItem {
    id: number;

    created_at: number;

    message: string;

    message_type: number;
  }
}

export interface JobCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string;
}

export interface JobListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;
}

export interface JobGetParams {
  account_id: string;

  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;
}

export interface JobLogsParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and
   * underscores.
   */
  id: string;

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  per_page?: number;
}

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobLogsResponse as JobLogsResponse,
    type JobListResponsesV4PagePaginationArray as JobListResponsesV4PagePaginationArray,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobGetParams as JobGetParams,
    type JobLogsParams as JobLogsParams,
  };
}
