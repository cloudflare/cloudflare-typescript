// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as InstancesAPI from './instances';
import * as StatusAPI from './status';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Instances extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * Create a new workflow instance
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
   * List of workflow instances
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
   * Get logs and status from instance
   */
  get(
    workflowName: string,
    instanceId: string,
    params: InstanceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workflows/${workflowName}/instances/${instanceId}`,
        options,
      ) as Core.APIPromise<{ result: InstanceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class InstanceListResponsesV4PagePaginationArray extends V4PagePaginationArray<InstanceListResponse> {}

export type InstanceCreateResponse = Array<InstanceCreateResponse.InstanceCreateResponseItem>;

export namespace InstanceCreateResponse {
  export interface InstanceCreateResponseItem {
    id: string;

    status:
      | 'queued'
      | 'running'
      | 'paused'
      | 'errored'
      | 'terminated'
      | 'complete'
      | 'waitingForPause'
      | 'unknown';

    version_id: string;

    workflow_id: string;
  }
}

export interface InstanceListResponse {
  id: string;

  created_on: string;

  modified_on: string;

  status:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
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
    | 'unknown';
}

export interface InstanceGetParams {
  account_id: string;
}

export namespace Instances {
  export import InstanceCreateResponse = InstancesAPI.InstanceCreateResponse;
  export import InstanceListResponse = InstancesAPI.InstanceListResponse;
  export import InstanceGetResponse = InstancesAPI.InstanceGetResponse;
  export import InstanceListResponsesV4PagePaginationArray = InstancesAPI.InstanceListResponsesV4PagePaginationArray;
  export import InstanceCreateParams = InstancesAPI.InstanceCreateParams;
  export import InstanceListParams = InstancesAPI.InstanceListParams;
  export import InstanceGetParams = InstancesAPI.InstanceGetParams;
  export import Status = StatusAPI.Status;
  export import StatusEditResponse = StatusAPI.StatusEditResponse;
  export import StatusEditParams = StatusAPI.StatusEditParams;
}
