// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { BaseEvents, EventCreateParams, EventCreateResponse, Events } from './events';
import * as StatusAPI from './status';
import { BaseStatus, Status, StatusEditParams, StatusEditResponse } from './status';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInstances extends APIResource {
  static override readonly _key: readonly ['workflows', 'instances'] = Object.freeze([
    'workflows',
    'instances',
  ] as const);

  /**
   * Creates a new instance of a workflow, starting its execution.
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
   * Lists all instances of a workflow with their execution status.
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
   * Creates multiple workflow instances in a single batch operation.
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
   * Retrieves logs and execution status for a specific workflow instance.
   */
  get(
    instanceID: string,
    params: InstanceGetParams,
    options?: RequestOptions,
  ): APIPromise<InstanceGetResponse> {
    const { account_id, workflow_name, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/workflows/${workflow_name}/instances/${instanceID}`, {
        query,
        ...options,
      }) as APIPromise<{ result: InstanceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Instances extends BaseInstances {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
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
    | 'rollingBack';

  version_id: string;

  workflow_id: string;

  trigger_source?: 'unknown' | 'api' | 'binding' | 'event' | 'cron';
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
    | 'rollingBack';

  version_id: string;

  workflow_id: string;

  trigger_source?: 'unknown' | 'api' | 'binding' | 'event' | 'cron';
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
    | 'rollingBack';

  version_id: string;

  workflow_id: string;

  trigger_source?: 'unknown' | 'api' | 'binding' | 'event' | 'cron';
}

export interface InstanceGetResponse {
  end: string | null;

  error: InstanceGetResponse.Error | null;

  output: string | number;

  params: unknown;

  queued: string;

  rollback: InstanceGetResponse.Rollback | null;

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
    | 'rollingBack';

  step_count: number;

  steps: Array<
    | InstanceGetResponse.UnionMember0
    | InstanceGetResponse.UnionMember1
    | InstanceGetResponse.UnionMember2
    | InstanceGetResponse.UnionMember3
  >;

  success: boolean | null;

  trigger: InstanceGetResponse.Trigger;

  versionId: string;

  schedule?: InstanceGetResponse.Schedule;
}

export namespace InstanceGetResponse {
  export interface Error {
    message: string;

    name: string;
  }

  export interface Rollback {
    error: Rollback.Error | null;

    outcome: 'complete' | 'failed';
  }

  export namespace Rollback {
    export interface Error {
      message: string;

      name: string;
    }
  }

  export interface UnionMember0 {
    attempts: Array<UnionMember0.Attempt>;

    config: UnionMember0.Config;

    end: string | null;

    name: string;

    output: string | null;

    start: string;

    success: boolean | null;

    type: 'step' | 'rollback';
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

      /**
       * Specifies the timeout duration.
       */
      timeout: string | number;

      /**
       * When set to 'output', step output is redacted from log and step output
       * responses.
       */
      sensitive?: 'output';
    }

    export namespace Config {
      export interface Retries {
        /**
         * Specifies the delay duration.
         */
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

  export interface UnionMember3 {
    end: string;

    error: UnionMember3.Error | null;

    finished: boolean;

    name: string;

    start: string;

    type: 'waitForEvent';

    output?: string;
  }

  export namespace UnionMember3 {
    export interface Error {
      message: string;

      name: string;
    }
  }

  export interface Trigger {
    source: 'unknown' | 'api' | 'binding' | 'event' | 'cron';
  }

  export interface Schedule {
    cron: string;

    scheduledTime: number;
  }
}

export interface InstanceCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  instance_id?: string;

  /**
   * Body param
   */
  instance_retention?: InstanceCreateParams.InstanceRetention;

  /**
   * Body param
   */
  params?: unknown;
}

export namespace InstanceCreateParams {
  export interface InstanceRetention {
    /**
     * Specifies the duration in milliseconds or as a string like '5 minutes'.
     */
    error_retention?: number | string;

    /**
     * Specifies the duration in milliseconds or as a string like '5 minutes'.
     */
    success_retention?: number | string;
  }
}

export interface InstanceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Opaque token for cursor-based pagination. Mutually exclusive with
   * `page`.
   */
  cursor?: string;

  /**
   * Query param: Accepts ISO 8601 with no timezone offsets and in UTC.
   */
  date_end?: string;

  /**
   * Query param: Accepts ISO 8601 with no timezone offsets and in UTC.
   */
  date_start?: string;

  /**
   * Query param: Defines the direction for cursor-based pagination.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param
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
    | 'rollingBack';
}

export interface InstanceBulkParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  body?: Array<InstanceBulkParams.Body>;
}

export namespace InstanceBulkParams {
  export interface Body {
    instance_id?: string;

    instance_retention?: Body.InstanceRetention;

    params?: unknown;
  }

  export namespace Body {
    export interface InstanceRetention {
      /**
       * Specifies the duration in milliseconds or as a string like '5 minutes'.
       */
      error_retention?: number | string;

      /**
       * Specifies the duration in milliseconds or as a string like '5 minutes'.
       */
      success_retention?: number | string;
    }
  }
}

export interface InstanceGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Path param
   */
  workflow_name: string;

  /**
   * Query param: Step ordering: "asc" (default, oldest first) or "desc" (newest
   * first).
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: When true, omits step details and returns only metadata with
   * step_count.
   */
  simple?: 'true' | 'false';
}

Instances.Status = Status;
Instances.BaseStatus = BaseStatus;
Instances.Events = Events;
Instances.BaseEvents = BaseEvents;

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
    BaseStatus as BaseStatus,
    type StatusEditResponse as StatusEditResponse,
    type StatusEditParams as StatusEditParams,
  };

  export {
    Events as Events,
    BaseEvents as BaseEvents,
    type EventCreateResponse as EventCreateResponse,
    type EventCreateParams as EventCreateParams,
  };
}
