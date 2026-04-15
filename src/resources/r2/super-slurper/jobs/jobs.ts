// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SippyAPI from '../../buckets/sippy';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, LogListResponsesSinglePage, Logs } from './logs';
import { SinglePage } from '../../../../pagination';

export class Jobs extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Creates a new R2 Super Slurper migration job to transfer objects from a source
   * bucket (e.g. S3, GCS, R2) to R2.
   *
   * @example
   * ```ts
   * const job = await client.r2.superSlurper.jobs.create({
   *   account_id: 'account_id',
   * });
   * ```
   */
  create(params?: JobCreateParams, options?: Core.RequestOptions): Core.APIPromise<JobCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<JobCreateResponse>;
  create(
    params: JobCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/slurper/jobs`, { body, ...options }) as Core.APIPromise<{
        result: JobCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all R2 Super Slurper migration jobs for the account with their status.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const jobListResponse of client.r2.superSlurper.jobs.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesSinglePage, JobListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<JobListResponsesSinglePage, JobListResponse>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesSinglePage, JobListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/slurper/jobs`, JobListResponsesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Cancels a specific R2 Super Slurper migration job. Any objects in the middle of
   * a transfer will finish, but no new objects will start transferring.
   *
   * @example
   * ```ts
   * const response = await client.r2.superSlurper.jobs.abort(
   *   'job_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  abort(
    jobId: string,
    params?: JobAbortParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobAbortResponse>;
  abort(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobAbortResponse>;
  abort(
    jobId: string,
    params: JobAbortParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobAbortResponse> {
    if (isRequestOptions(params)) {
      return this.abort(jobId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.put(`/accounts/${account_id}/slurper/jobs/${jobId}/abort`, options) as Core.APIPromise<{
        result: JobAbortResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cancels all running R2 Super Slurper migration jobs for the account. Any objects
   * in the middle of a transfer will finish, but no new objects will start
   * transferring.
   *
   * @example
   * ```ts
   * const response = await client.r2.superSlurper.jobs.abortAll(
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  abortAll(params?: JobAbortAllParams, options?: Core.RequestOptions): Core.APIPromise<JobAbortAllResponse>;
  abortAll(options?: Core.RequestOptions): Core.APIPromise<JobAbortAllResponse>;
  abortAll(
    params: JobAbortAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobAbortAllResponse> {
    if (isRequestOptions(params)) {
      return this.abortAll({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.put(`/accounts/${account_id}/slurper/jobs/abortAll`, options) as Core.APIPromise<{
        result: JobAbortAllResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves detailed status and configuration for a specific R2 Super Slurper
   * migration job.
   *
   * @example
   * ```ts
   * const job = await client.r2.superSlurper.jobs.get(
   *   'job_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(jobId: string, params?: JobGetParams, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse>;
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse>;
  get(
    jobId: string,
    params: JobGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(jobId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/slurper/jobs/${jobId}`, options) as Core.APIPromise<{
        result: JobGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Pauses a running R2 Super Slurper migration job. The job can be resumed later to
   * continue transferring.
   *
   * @example
   * ```ts
   * const response = await client.r2.superSlurper.jobs.pause(
   *   'job_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  pause(
    jobId: string,
    params?: JobPauseParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobPauseResponse>;
  pause(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobPauseResponse>;
  pause(
    jobId: string,
    params: JobPauseParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobPauseResponse> {
    if (isRequestOptions(params)) {
      return this.pause(jobId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.put(`/accounts/${account_id}/slurper/jobs/${jobId}/pause`, options) as Core.APIPromise<{
        result: JobPauseResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves current progress metrics for an R2 Super Slurper migration job
   *
   * @example
   * ```ts
   * const response = await client.r2.superSlurper.jobs.progress(
   *   'job_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  progress(
    jobId: string,
    params?: JobProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobProgressResponse>;
  progress(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobProgressResponse>;
  progress(
    jobId: string,
    params: JobProgressParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobProgressResponse> {
    if (isRequestOptions(params)) {
      return this.progress(jobId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/slurper/jobs/${jobId}/progress`, options) as Core.APIPromise<{
        result: JobProgressResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Resumes a paused R2 Super Slurper migration job, continuing the transfer from
   * where it stopped.
   *
   * @example
   * ```ts
   * const response = await client.r2.superSlurper.jobs.resume(
   *   'job_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  resume(
    jobId: string,
    params?: JobResumeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobResumeResponse>;
  resume(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobResumeResponse>;
  resume(
    jobId: string,
    params: JobResumeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobResumeResponse> {
    if (isRequestOptions(params)) {
      return this.resume(jobId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.put(`/accounts/${account_id}/slurper/jobs/${jobId}/resume`, options) as Core.APIPromise<{
        result: JobResumeResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class JobListResponsesSinglePage extends SinglePage<JobListResponse> {}

export interface JobCreateResponse {
  id?: string;
}

export interface JobListResponse {
  id?: string;

  createdAt?: string;

  finishedAt?: string | null;

  overwrite?: boolean;

  source?:
    | JobListResponse.S3SourceResponseSchema
    | JobListResponse.GcsSourceResponseSchema
    | JobListResponse.R2SourceResponseSchema;

  status?: 'running' | 'paused' | 'aborted' | 'completed';

  target?: JobListResponse.Target;
}

export namespace JobListResponse {
  export interface S3SourceResponseSchema {
    bucket?: string;

    endpoint?: string | null;

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    vendor?: 's3';
  }

  export interface GcsSourceResponseSchema {
    bucket?: string;

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    vendor?: 'gcs';
  }

  export interface R2SourceResponseSchema {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    vendor?: SippyAPI.Provider;
  }

  export interface Target {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    vendor?: SippyAPI.Provider;
  }
}

export type JobAbortResponse = string;

export type JobAbortAllResponse = string;

export interface JobGetResponse {
  id?: string;

  createdAt?: string;

  finishedAt?: string | null;

  overwrite?: boolean;

  source?:
    | JobGetResponse.S3SourceResponseSchema
    | JobGetResponse.GcsSourceResponseSchema
    | JobGetResponse.R2SourceResponseSchema;

  status?: 'running' | 'paused' | 'aborted' | 'completed';

  target?: JobGetResponse.Target;
}

export namespace JobGetResponse {
  export interface S3SourceResponseSchema {
    bucket?: string;

    endpoint?: string | null;

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    vendor?: 's3';
  }

  export interface GcsSourceResponseSchema {
    bucket?: string;

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    vendor?: 'gcs';
  }

  export interface R2SourceResponseSchema {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    vendor?: SippyAPI.Provider;
  }

  export interface Target {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    vendor?: SippyAPI.Provider;
  }
}

export type JobPauseResponse = string;

export interface JobProgressResponse {
  id?: string;

  createdAt?: string;

  failedObjects?: number;

  objects?: number;

  skippedObjects?: number;

  status?: 'running' | 'paused' | 'aborted' | 'completed';

  transferredObjects?: number;
}

export type JobResumeResponse = string;

export interface JobCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  overwrite?: boolean;

  /**
   * Body param
   */
  source?:
    | JobCreateParams.R2SlurperS3SourceSchema
    | JobCreateParams.R2SlurperGcsSourceSchema
    | JobCreateParams.R2SlurperR2SourceSchema;

  /**
   * Body param
   */
  target?: JobCreateParams.Target;
}

export namespace JobCreateParams {
  export interface R2SlurperS3SourceSchema {
    bucket: string;

    secret: R2SlurperS3SourceSchema.Secret;

    vendor: 's3';

    endpoint?: string | null;

    keys?: Array<string> | null;

    pathPrefix?: string | null;

    region?: string | null;
  }

  export namespace R2SlurperS3SourceSchema {
    export interface Secret {
      accessKeyId: string;

      secretAccessKey: string;
    }
  }

  export interface R2SlurperGcsSourceSchema {
    bucket: string;

    secret: R2SlurperGcsSourceSchema.Secret;

    vendor: 'gcs';

    keys?: Array<string> | null;

    pathPrefix?: string | null;
  }

  export namespace R2SlurperGcsSourceSchema {
    export interface Secret {
      clientEmail: string;

      privateKey: string;
    }
  }

  export interface R2SlurperR2SourceSchema {
    bucket: string;

    secret: R2SlurperR2SourceSchema.Secret;

    vendor: SippyAPI.ProviderParam;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    keys?: Array<string> | null;

    pathPrefix?: string | null;
  }

  export namespace R2SlurperR2SourceSchema {
    export interface Secret {
      accessKeyId: string;

      secretAccessKey: string;
    }
  }

  export interface Target {
    bucket: string;

    secret: Target.Secret;

    vendor: SippyAPI.ProviderParam;

    jurisdiction?: 'default' | 'eu' | 'fedramp';
  }

  export namespace Target {
    export interface Secret {
      accessKeyId: string;

      secretAccessKey: string;
    }
  }
}

export interface JobListParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  offset?: number;
}

export interface JobAbortParams {
  account_id?: string;
}

export interface JobAbortAllParams {
  account_id?: string;
}

export interface JobGetParams {
  account_id?: string;
}

export interface JobPauseParams {
  account_id?: string;
}

export interface JobProgressParams {
  account_id?: string;
}

export interface JobResumeParams {
  account_id?: string;
}

Jobs.JobListResponsesSinglePage = JobListResponsesSinglePage;
Jobs.Logs = Logs;
Jobs.LogListResponsesSinglePage = LogListResponsesSinglePage;

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobAbortResponse as JobAbortResponse,
    type JobAbortAllResponse as JobAbortAllResponse,
    type JobGetResponse as JobGetResponse,
    type JobPauseResponse as JobPauseResponse,
    type JobProgressResponse as JobProgressResponse,
    type JobResumeResponse as JobResumeResponse,
    JobListResponsesSinglePage as JobListResponsesSinglePage,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobAbortParams as JobAbortParams,
    type JobAbortAllParams as JobAbortAllParams,
    type JobGetParams as JobGetParams,
    type JobPauseParams as JobPauseParams,
    type JobProgressParams as JobProgressParams,
    type JobResumeParams as JobResumeParams,
  };

  export {
    Logs as Logs,
    type LogListResponse as LogListResponse,
    LogListResponsesSinglePage as LogListResponsesSinglePage,
    type LogListParams as LogListParams,
  };
}
