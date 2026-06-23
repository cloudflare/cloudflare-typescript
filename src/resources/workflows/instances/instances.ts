// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as EventsAPI from './events';
import { EventCreateParams, EventCreateResponse, Events } from './events';
import * as StatusAPI from './status';
import { Status, StatusEditParams, StatusEditResponse } from './status';
import { SinglePage, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Instances extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  /**
   * Creates a new instance of a workflow, starting its execution.
   */
  create(
    workflowName: string,
    params: InstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workflows/${workflowName}/instances`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InstanceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all instances of a workflow with their execution status.
   */
  list(
    workflowName: string,
    params: InstanceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workflows/${workflowName}/instances`,
      InstanceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Creates multiple workflow instances in a single batch operation.
   */
  bulk(
    workflowName: string,
    params: InstanceBulkParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InstanceBulkResponsesSinglePage, InstanceBulkResponse> {
    const { account_id, body } = params ?? {};
    return this._client.getAPIList(
      `/accounts/${account_id}/workflows/${workflowName}/instances/batch`,
      InstanceBulkResponsesSinglePage,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Retrieves logs and execution status for a specific workflow instance.
   */
  get(
    workflowName: string,
    instanceId: string,
    params: InstanceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/workflows/${workflowName}/instances/${instanceId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: InstanceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the full, untruncated output for a specific step on a workflow
   * instance. Returns a flat status-shaped JSON body with step `status` ('running' |
   * 'waiting' | 'complete' | 'errored'), `error` (nullable), and `output` (the step
   * value, or null while running/waiting/errored). When the step returned a
   * ReadableStream from step.do, the response is served as
   * 'application/octet-stream' with the raw bytes as the body instead of JSON. A
   * `status='running'` response with non-null `error` indicates the step is
   * currently retrying after a prior attempt failed.
   */
  step(
    workflowName: string,
    instanceId: string,
    params: InstanceStepParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceStepResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/workflows/${workflowName}/instances/${instanceId}/step`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: InstanceStepResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class InstanceListResponsesV4PagePaginationArray extends V4PagePaginationArray<InstanceListResponse> {}

export class InstanceBulkResponsesSinglePage extends SinglePage<InstanceBulkResponse> {}

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
         * Specifies the delay duration. '[dynamic]' indicates the delay is computed by a
         * user-supplied function.
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

export interface InstanceStepResponse {
  /**
   * Error details when status='errored'; null otherwise.
   */
  error: InstanceStepResponse.Error | null;

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

  /**
   * Full step output or waitForEvent payload without truncation. Sensitive outputs
   * are returned as '[REDACTED]'. Populated when status='complete'. May be a
   * ReadableStream when the step returned one from step.do; stream outputs are
   * served as application/octet-stream rather than JSON.
   */
  output?: unknown;
}

export namespace InstanceStepResponse {
  /**
   * Error details when status='errored'; null otherwise.
   */
  export interface Error {
    message: string;

    name: string;
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

export interface InstanceStepParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Exact step name from the instance logs response, including the
   * generated counter suffix.
   */
  name: string;

  /**
   * Query param: Step type to disambiguate step.do and waitForEvent entries that
   * share the same name.
   */
  type: 'step' | 'waitForEvent';

  /**
   * Query param: Specific attempt number to retrieve output or error for.
   */
  attempt?: number;
}

Instances.InstanceListResponsesV4PagePaginationArray = InstanceListResponsesV4PagePaginationArray;
Instances.InstanceBulkResponsesSinglePage = InstanceBulkResponsesSinglePage;
Instances.Status = Status;
Instances.Events = Events;

export declare namespace Instances {
  export {
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceBulkResponse as InstanceBulkResponse,
    type InstanceGetResponse as InstanceGetResponse,
    type InstanceStepResponse as InstanceStepResponse,
    InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    InstanceBulkResponsesSinglePage as InstanceBulkResponsesSinglePage,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceBulkParams as InstanceBulkParams,
    type InstanceGetParams as InstanceGetParams,
    type InstanceStepParams as InstanceStepParams,
  };

  export {
    Status as Status,
    type StatusEditResponse as StatusEditResponse,
    type StatusEditParams as StatusEditParams,
  };

  export {
    Events as Events,
    type EventCreateResponse as EventCreateResponse,
    type EventCreateParams as EventCreateParams,
  };
}
