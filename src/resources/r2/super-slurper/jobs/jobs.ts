// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as SippyAPI from '../../buckets/sippy';
import * as LogsAPI from './logs';
import { Logs } from './logs';
import { SinglePage } from '../../../../pagination';

export class Jobs extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a job
   */
  create(params: JobCreateParams, options?: Core.RequestOptions): Core.APIPromise<JobCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/slurper/jobs`, { body, ...options }) as Core.APIPromise<{
        result: JobCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List jobs
   */
  list(
    params: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesSinglePage, JobListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/slurper/jobs`, JobListResponsesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Abort all jobs
   */
  abortAll(params: JobAbortAllParams, options?: Core.RequestOptions): Core.APIPromise<JobAbortAllResponse> {
    const { account_id } = params;
    return (
      this._client.put(`/accounts/${account_id}/slurper/jobs/abortAll`, options) as Core.APIPromise<{
        result: JobAbortAllResponse;
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

export type JobAbortAllResponse = string;

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

export interface JobAbortAllParams {
  account_id: string;
}

Jobs.JobListResponsesSinglePage = JobListResponsesSinglePage;
Jobs.Logs = Logs;

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobAbortAllResponse as JobAbortAllResponse,
    JobListResponsesSinglePage as JobListResponsesSinglePage,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobAbortAllParams as JobAbortAllParams,
  };

  export { Logs as Logs };
}
