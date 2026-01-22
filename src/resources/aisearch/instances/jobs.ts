// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Jobs extends APIResource {
  /**
   * Create new job
   *
   * @example
   * ```ts
   * const job = await client.aiSearch.instances.jobs.create(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  create(
    id: string,
    params: JobCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/ai-search/instances/${id}/jobs`,
        options,
      ) as Core.APIPromise<{ result: JobCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Jobs
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesV4PagePaginationArray, JobListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-search/instances/${id}/jobs`,
      JobListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Get a Job Details
   *
   * @example
   * ```ts
   * const job = await client.aiSearch.instances.jobs.get(
   *   'my-ai-search',
   *   'job_id',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  get(
    id: string,
    jobId: string,
    params: JobGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobId}`,
        options,
      ) as Core.APIPromise<{ result: JobGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Job Logs
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.instances.jobs.logs(
   *   'my-ai-search',
   *   'job_id',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  logs(
    id: string,
    jobId: string,
    params: JobLogsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobLogsResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobId}/logs`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: JobLogsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class JobListResponsesV4PagePaginationArray extends V4PagePaginationArray<JobListResponse> {}

export interface JobCreateResponse {
  id: string;

  source: 'user' | 'schedule';

  end_reason?: string;

  ended_at?: string;

  last_seen_at?: string;

  started_at?: string;
}

export interface JobListResponse {
  id: string;

  source: 'user' | 'schedule';

  end_reason?: string;

  ended_at?: string;

  last_seen_at?: string;

  started_at?: string;
}

export interface JobGetResponse {
  id: string;

  source: 'user' | 'schedule';

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
  account_id: string;
}

export interface JobListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;
}

export interface JobGetParams {
  account_id: string;
}

export interface JobLogsParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  per_page?: number;
}

Jobs.JobListResponsesV4PagePaginationArray = JobListResponsesV4PagePaginationArray;

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobLogsResponse as JobLogsResponse,
    JobListResponsesV4PagePaginationArray as JobListResponsesV4PagePaginationArray,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobGetParams as JobGetParams,
    type JobLogsParams as JobLogsParams,
  };
}
