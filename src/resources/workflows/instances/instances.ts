// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatusAPI from './status';
import { Status, StatusEditParams, StatusEditResponse } from './status';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Instances extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * Create a new workflow instance
   */
  create(
    workflowName: string,
    params: InstanceCreateParams,
    options?: RequestOptions,
  ): APIPromise<InstanceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workflows/${workflowName}/instances`, {
        body,
        ...options,
      }) as APIPromise<{ result: InstanceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of workflow instances
   */
  list(
    workflowName: string,
    params: InstanceListParams,
    options?: RequestOptions,
  ): PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workflows/${workflowName}/instances`,
      V4PagePaginationArray<InstanceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Batch create new Workflow instances
   */
  bulk(
    workflowName: string,
    params: InstanceBulkParams,
    options?: RequestOptions,
  ): PagePromise<InstanceBulkResponsesSinglePage, InstanceBulkResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workflows/${workflowName}/instances/batch`,
      SinglePage<InstanceBulkResponse>,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Get logs and status from instance
   */
  get(
    instanceID: string,
    params: InstanceGetParams,
    options?: RequestOptions,
  ): APIPromise<InstanceGetResponse> {
    const { account_id, workflow_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workflows/${workflow_name}/instances/${instanceID}`,
        options,
      ) as APIPromise<{ result: InstanceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type InstanceListResponsesV4PagePaginationArray = V4PagePaginationArray<InstanceListResponse>;

export type InstanceBulkResponsesSinglePage = SinglePage<InstanceBulkResponse>;

export interface InstanceCreateResponse {
  id: string;

  status:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
    | 'waiting'
    | 'unknown';

  version_id: string;

  workflow_id: string;
}

export interface InstanceListResponse {
  id: string;

  created_on: string;

  ended_on: string | null;

  modified_on: string;

  started_on: string | null;

  status:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
    | 'waiting'
    | 'unknown';

  version_id: string;

  workflow_id: string;
}

export interface InstanceBulkResponse {
  id: string;

  status:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
    | 'waiting'
    | 'unknown';

  version_id: string;

  workflow_id: string;
}

export interface InstanceGetResponse {
  end: string | null;

  error: InstanceGetResponse.Error | null;

  output: string | number;

  params: unknown;

  queued: string;

  start: string | null;

  status:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
    | 'waiting'
    | 'unknown';

  steps: Array<
    InstanceGetResponse.UnionMember0 | InstanceGetResponse.UnionMember1 | InstanceGetResponse.UnionMember2
  >;

  success: boolean | null;

  trigger: InstanceGetResponse.Trigger;

  versionId: string;
}

export namespace InstanceGetResponse {
  export interface Error {
    message: string;

    name: string;
  }

  export interface UnionMember0 {
    attempts: Array<UnionMember0.Attempt>;

    config: UnionMember0.Config;

    end: string | null;

    name: string;

    output: unknown;

    start: string;

    success: boolean | null;

    type: 'step';
  }

  export namespace UnionMember0 {
    export interface Attempt {
      end: string | null;

      error: Attempt.Error | null;

      start: string;

      success: boolean | null;
    }

    export namespace Attempt {
      export interface Error {
        message: string;

        name: string;
      }
    }

    export interface Config {
      retries: Config.Retries;

      timeout: string | number;
    }

    export namespace Config {
      export interface Retries {
        delay: string | number;

        limit: number;

        backoff?: 'constant' | 'linear' | 'exponential';
      }
    }
  }

  export interface UnionMember1 {
    end: string;

    error: UnionMember1.Error | null;

    finished: boolean;

    name: string;

    start: string;

    type: 'sleep';
  }

  export namespace UnionMember1 {
    export interface Error {
      message: string;

      name: string;
    }
  }

  export interface UnionMember2 {
    trigger: UnionMember2.Trigger;

    type: 'termination';
  }

  export namespace UnionMember2 {
    export interface Trigger {
      source: string;
    }
  }

  export interface Trigger {
    source: 'unknown' | 'api' | 'binding' | 'event' | 'cron';
  }
}

export interface InstanceCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  instance_id?: string;

  /**
   * Body param:
   */
  params?: unknown;
}

export interface InstanceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: In ISO 8601 with no timezone offsets and in UTC.
   */
  date_end?: string;

  /**
   * Query param: In ISO 8601 with no timezone offsets and in UTC.
   */
  date_start?: string;

  /**
   * Query param:
   */
  status?:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
    | 'waiting'
    | 'unknown';
}

export interface InstanceBulkParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body?: Array<InstanceBulkParams.Body>;
}

export namespace InstanceBulkParams {
  export interface Body {
    instance_id?: string;

    params?: unknown;
  }
}

export interface InstanceGetParams {
  account_id: string;

  workflow_name: string;
}

Instances.Status = Status;

export declare namespace Instances {
  export {
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceBulkResponse as InstanceBulkResponse,
    type InstanceGetResponse as InstanceGetResponse,
    type InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    type InstanceBulkResponsesSinglePage as InstanceBulkResponsesSinglePage,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceBulkParams as InstanceBulkParams,
    type InstanceGetParams as InstanceGetParams,
  };

  export {
    Status as Status,
    type StatusEditResponse as StatusEditResponse,
    type StatusEditParams as StatusEditParams,
  };
}
