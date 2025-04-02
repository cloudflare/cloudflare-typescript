// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SippyAPI from '../../buckets/sippy';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, LogListResponsesSinglePage, Logs } from './logs';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Jobs extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a job
   */
  create(params: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/slurper/jobs`, { body, ...options }) as APIPromise<{
        result: JobCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List jobs
   */
  list(
    params: JobListParams,
    options?: RequestOptions,
  ): PagePromise<JobListResponsesSinglePage, JobListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/slurper/jobs`, SinglePage<JobListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Abort a job
   */
  abort(jobID: string, params: JobAbortParams, options?: RequestOptions): APIPromise<JobAbortResponse> {
    const { account_id } = params;
    return (
      this._client.put(path`/accounts/${account_id}/slurper/jobs/${jobID}/abort`, options) as APIPromise<{
        result: JobAbortResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Abort all jobs
   */
  abortAll(params: JobAbortAllParams, options?: RequestOptions): APIPromise<JobAbortAllResponse> {
    const { account_id } = params;
    return (
      this._client.put(path`/accounts/${account_id}/slurper/jobs/abortAll`, options) as APIPromise<{
        result: JobAbortAllResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get job details
   */
  get(jobID: string, params: JobGetParams, options?: RequestOptions): APIPromise<JobGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/slurper/jobs/${jobID}`, options) as APIPromise<{
        result: JobGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Pause a job
   */
  pause(jobID: string, params: JobPauseParams, options?: RequestOptions): APIPromise<JobPauseResponse> {
    const { account_id } = params;
    return (
      this._client.put(path`/accounts/${account_id}/slurper/jobs/${jobID}/pause`, options) as APIPromise<{
        result: JobPauseResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get job progress
   */
  progress(
    jobID: string,
    params: JobProgressParams,
    options?: RequestOptions,
  ): APIPromise<JobProgressResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/slurper/jobs/${jobID}/progress`, options) as APIPromise<{
        result: JobProgressResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Resume a job
   */
  resume(jobID: string, params: JobResumeParams, options?: RequestOptions): APIPromise<JobResumeResponse> {
    const { account_id } = params;
    return (
      this._client.put(path`/accounts/${account_id}/slurper/jobs/${jobID}/resume`, options) as APIPromise<{
        result: JobResumeResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type JobListResponsesSinglePage = SinglePage<JobListResponse>;

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

    pathPrefix?: string | null;

    vendor?: 's3';
  }

  export interface GcsSourceResponseSchema {
    bucket?: string;

    pathPrefix?: string | null;

    vendor?: 'gcs';
  }

  export interface R2SourceResponseSchema {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

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

    pathPrefix?: string | null;

    vendor?: 's3';
  }

  export interface GcsSourceResponseSchema {
    bucket?: string;

    pathPrefix?: string | null;

    vendor?: 'gcs';
  }

  export interface R2SourceResponseSchema {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

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
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  overwrite?: boolean;

  /**
   * Body param:
   */
  source?:
    | JobCreateParams.R2SlurperS3SourceSchema
    | JobCreateParams.R2SlurperGcsSourceSchema
    | JobCreateParams.R2SlurperR2SourceSchema;

  /**
   * Body param:
   */
  target?: JobCreateParams.Target;
}

export namespace JobCreateParams {
  export interface R2SlurperS3SourceSchema {
    bucket?: string;

    endpoint?: string | null;

    secret?: R2SlurperS3SourceSchema.Secret;

    vendor?: 's3';
  }

  export namespace R2SlurperS3SourceSchema {
    export interface Secret {
      accessKeyId?: string;

      secretAccessKey?: string;
    }
  }

  export interface R2SlurperGcsSourceSchema {
    bucket?: string;

    secret?: R2SlurperGcsSourceSchema.Secret;

    vendor?: 'gcs';
  }

  export namespace R2SlurperGcsSourceSchema {
    export interface Secret {
      clientEmail?: string;

      privateKey?: string;
    }
  }

  export interface R2SlurperR2SourceSchema {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    secret?: R2SlurperR2SourceSchema.Secret;

    vendor?: SippyAPI.ProviderParam;
  }

  export namespace R2SlurperR2SourceSchema {
    export interface Secret {
      accessKeyId?: string;

      secretAccessKey?: string;
    }
  }

  export interface Target {
    bucket?: string;

    jurisdiction?: 'default' | 'eu' | 'fedramp';

    secret?: Target.Secret;

    vendor?: SippyAPI.ProviderParam;
  }

  export namespace Target {
    export interface Secret {
      accessKeyId?: string;

      secretAccessKey?: string;
    }
  }
}

export interface JobListParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  offset?: number;
}

export interface JobAbortParams {
  account_id: string;
}

export interface JobAbortAllParams {
  account_id: string;
}

export interface JobGetParams {
  account_id: string;
}

export interface JobPauseParams {
  account_id: string;
}

export interface JobProgressParams {
  account_id: string;
}

export interface JobResumeParams {
  account_id: string;
}

Jobs.Logs = Logs;

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
    type JobListResponsesSinglePage as JobListResponsesSinglePage,
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
    type LogListResponsesSinglePage as LogListResponsesSinglePage,
    type LogListParams as LogListParams,
  };
}
