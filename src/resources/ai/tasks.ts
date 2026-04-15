// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Tasks extends APIResource {
  /**
   * Searches Workers AI models by task type (e.g., text-generation, embeddings).
   */
  list(
    params?: TaskListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TaskListResponsesSinglePage, TaskListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<TaskListResponsesSinglePage, TaskListResponse>;
  list(
    params: TaskListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TaskListResponsesSinglePage, TaskListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tasks/search`,
      TaskListResponsesSinglePage,
      options,
    );
  }
}

export class TaskListResponsesSinglePage extends SinglePage<TaskListResponse> {}

export type TaskListResponse = unknown;

export interface TaskListParams {
  account_id?: string;
}

Tasks.TaskListResponsesSinglePage = TaskListResponsesSinglePage;

export declare namespace Tasks {
  export {
    type TaskListResponse as TaskListResponse,
    TaskListResponsesSinglePage as TaskListResponsesSinglePage,
    type TaskListParams as TaskListParams,
  };
}
