// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Get job logs
   */
  list(
    jobID: string,
    params: LogListParams,
    options?: RequestOptions,
  ): PagePromise<LogListResponsesSinglePage, LogListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/slurper/jobs/${jobID}/logs`,
      SinglePage<LogListResponse>,
      { query, ...options },
    );
  }
}

export type LogListResponsesSinglePage = SinglePage<LogListResponse>;

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

export declare namespace Logs {
  export {
    type LogListResponse as LogListResponse,
    type LogListResponsesSinglePage as LogListResponsesSinglePage,
    type LogListParams as LogListParams,
  };
}
