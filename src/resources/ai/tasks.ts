// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTasks extends APIResource {
  static override readonly _key: readonly ['ai', 'tasks'] = Object.freeze(['ai', 'tasks'] as const);

  /**
   * Searches Workers AI models by task type (e.g., text-generation, embeddings).
   */
  list(
    params: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TaskListResponsesSinglePage, TaskListResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tasks/search`,
      SinglePage<TaskListResponse>,
      options,
    );
  }
}
export class Tasks extends BaseTasks {}

export type TaskListResponsesSinglePage = SinglePage<TaskListResponse>;

export type TaskListResponse = unknown;

export interface TaskListParams {
  account_id?: string;
}

export declare namespace Tasks {
  export {
    type TaskListResponse as TaskListResponse,
    type TaskListResponsesSinglePage as TaskListResponsesSinglePage,
    type TaskListParams as TaskListParams,
  };
}
