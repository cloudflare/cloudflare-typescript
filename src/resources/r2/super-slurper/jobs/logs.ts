// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import { SinglePage } from '../../../../pagination';

export class Logs extends APIResource {
  /**
   * Gets log entries for an R2 Super Slurper migration job, showing migration status
   * changes, errors, etc.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const logListResponse of client.r2.superSlurper.jobs.logs.list(
   *   'job_id',
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    jobId: string,
    params?: LogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogListResponsesSinglePage, LogListResponse>;
  list(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogListResponsesSinglePage, LogListResponse>;
  list(
    jobId: string,
    params: LogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogListResponsesSinglePage, LogListResponse> {
    if (isRequestOptions(params)) {
      return this.list(jobId, {}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/slurper/jobs/${jobId}/logs`,
      LogListResponsesSinglePage,
      { query, ...options },
    );
  }
}

export class LogListResponsesSinglePage extends SinglePage<LogListResponse> {}

export interface LogListResponse {
  createdAt?: string;

  job?: string;

  logType?:
    | 'migrationStart'
    | 'migrationComplete'
    | 'migrationAbort'
    | 'migrationError'
    | 'migrationPause'
    | 'migrationResume'
    | 'migrationErrorFailedContinuation'
    | 'importErrorRetryExhaustion'
    | 'importSkippedStorageClass'
    | 'importSkippedOversized'
    | 'importSkippedEmptyObject'
    | 'importSkippedUnsupportedContentType'
    | 'importSkippedExcludedContentType'
    | 'importSkippedInvalidMedia'
    | 'importSkippedRequiresRetrieval';

  message?: string | null;

  objectKey?: string | null;
}

export interface LogListParams {
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

Logs.LogListResponsesSinglePage = LogListResponsesSinglePage;

export declare namespace Logs {
  export {
    type LogListResponse as LogListResponse,
    LogListResponsesSinglePage as LogListResponsesSinglePage,
    type LogListParams as LogListParams,
  };
}
