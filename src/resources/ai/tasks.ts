// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Task Search
   */
  list(
    params: TaskListParams,
    options?: RequestOptions,
  ): PagePromise<TaskListResponsesSinglePage, TaskListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tasks/search`,
      SinglePage<TaskListResponse>,
      options,
    );
  }
}

export type TaskListResponsesSinglePage = SinglePage<TaskListResponse>;

export type TaskListResponse = unknown;

export interface TaskListParams {
  account_id: string;
}

export declare namespace Tasks {
  export {
    type TaskListResponse as TaskListResponse,
    type TaskListResponsesSinglePage as TaskListResponsesSinglePage,
    type TaskListParams as TaskListParams,
  };
}
