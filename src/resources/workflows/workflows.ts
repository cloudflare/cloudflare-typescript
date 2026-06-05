// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VersionsAPI from './versions';
import {
  BaseVersions,
  VersionGetParams,
  VersionGetResponse,
  VersionListParams,
  VersionListResponse,
  VersionListResponsesV4PagePaginationArray,
  Versions,
} from './versions';
import * as InstancesAPI from './instances/instances';
import {
  BaseInstances,
  InstanceBulkParams,
  InstanceBulkResponse,
  InstanceBulkResponsesSinglePage,
  InstanceCreateParams,
  InstanceCreateResponse,
  InstanceGetParams,
  InstanceGetResponse,
  InstanceListParams,
  InstanceListResponse,
  InstanceListResponsesV4PagePaginationArray,
  Instances as InstancesAPIInstances,
} from './instances/instances';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseWorkflows extends APIResource {
  static override readonly _key: readonly ['workflows'] = Object.freeze(['workflows'] as const);

  /**
   * Creates a new workflow or updates an existing workflow definition.
   */
  update(
    workflowName: string,
    params: WorkflowUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/workflows/${workflowName}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WorkflowUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all workflows configured for the account.
   */
  list(
    params: WorkflowListParams,
    options?: RequestOptions,
  ): PagePromise<WorkflowListResponsesV4PagePaginationArray, WorkflowListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workflows`,
      V4PagePaginationArray<WorkflowListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a Workflow. This only deletes the Workflow and does not delete or modify
   * any Worker associated to this Workflow or bounded to it.
   */
  delete(
    workflowName: string,
    params: WorkflowDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/workflows/${workflowName}`, options) as APIPromise<{
        result: WorkflowDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves configuration and metadata for a specific workflow.
   */
  get(
    workflowName: string,
    params: WorkflowGetParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/workflows/${workflowName}`, options) as APIPromise<{
        result: WorkflowGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Workflows extends BaseWorkflows {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

export type WorkflowListResponsesV4PagePaginationArray = V4PagePaginationArray<WorkflowListResponse>;

export interface WorkflowUpdateResponse {
  id: string;

  class_name: string;

  created_on: string;

  is_deleted: number;

  modified_on: string;

  name: string;

  script_name: string;

  terminator_running: number;

  triggered_on: string | null;

  version_id: string;
}

export interface WorkflowListResponse {
  id: string;

  class_name: string;

  created_on: string;

  instances: WorkflowListResponse.Instances;

  modified_on: string;

  name: string;

  script_name: string;

  triggered_on: string | null;

  schedules?: Array<WorkflowListResponse.Schedule>;
}

export namespace WorkflowListResponse {
  export interface Instances {
    complete?: number;

    errored?: number;

    paused?: number;

    queued?: number;

    rollingBack?: number;

    running?: number;

    terminated?: number;

    waiting?: number;

    waitingForPause?: number;
  }

  export interface Schedule {
    cron: string;

    next_instance: string;
  }
}

export interface WorkflowDeleteResponse {
  status: 'ok';

  success: boolean | null;
}

export interface WorkflowGetResponse {
  id: string;

  class_name: string;

  created_on: string;

  instances: WorkflowGetResponse.Instances;

  modified_on: string;

  name: string;

  script_name: string;

  triggered_on: string | null;

  schedules?: Array<WorkflowGetResponse.Schedule>;
}

export namespace WorkflowGetResponse {
  export interface Instances {
    complete?: number;

    errored?: number;

    paused?: number;

    queued?: number;

    rollingBack?: number;

    running?: number;

    terminated?: number;

    waiting?: number;

    waitingForPause?: number;
  }

  export interface Schedule {
    cron: string;

    next_instance: string;
  }
}

export interface WorkflowUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  class_name: string;

  /**
   * Body param
   */
  script_name: string;

  /**
   * Body param
   */
  limits?: WorkflowUpdateParams.Limits;

  /**
   * Body param
   */
  schedules?: Array<WorkflowUpdateParams.Schedule>;
}

export namespace WorkflowUpdateParams {
  export interface Limits {
    steps?: number;
  }

  export interface Schedule {
    cron: string;
  }
}

export interface WorkflowListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Allows filtering workflows` name.
   */
  search?: string;
}

export interface WorkflowDeleteParams {
  account_id: string;
}

export interface WorkflowGetParams {
  account_id: string;
}

Workflows.Instances = InstancesAPIInstances;
Workflows.BaseInstances = BaseInstances;
Workflows.Versions = Versions;
Workflows.BaseVersions = BaseVersions;

export declare namespace Workflows {
  export {
    type WorkflowUpdateResponse as WorkflowUpdateResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowDeleteResponse as WorkflowDeleteResponse,
    type WorkflowGetResponse as WorkflowGetResponse,
    type WorkflowListResponsesV4PagePaginationArray as WorkflowListResponsesV4PagePaginationArray,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowGetParams as WorkflowGetParams,
  };

  export {
    InstancesAPIInstances as Instances,
    BaseInstances as BaseInstances,
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
    Versions as Versions,
    BaseVersions as BaseVersions,
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListResponsesV4PagePaginationArray as VersionListResponsesV4PagePaginationArray,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
