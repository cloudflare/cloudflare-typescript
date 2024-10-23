// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WorkflowsAPI from './workflows';
import * as VersionsAPI from './versions';
import * as InstancesAPI from './instances/instances';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Workflows extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create/modify Workflow
   */
  update(
    workflowName: string,
    params: WorkflowUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workflows/${workflowName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WorkflowUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Workflows
   */
  list(
    params: WorkflowListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkflowListResponsesV4PagePaginationArray, WorkflowListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workflows`,
      WorkflowListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Get Workflow details
   */
  get(
    workflowName: string,
    params: WorkflowGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workflows/${workflowName}`, options) as Core.APIPromise<{
        result: WorkflowGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WorkflowListResponsesV4PagePaginationArray extends V4PagePaginationArray<WorkflowListResponse> {}

export interface WorkflowUpdateResponse {
  id: string;

  class_name: string;

  created_on: string;

  modified_on: string;

  name: string;

  script_name: string;

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
}

export namespace WorkflowListResponse {
  export interface Instances {
    complete?: number;

    errored?: number;

    paused?: number;

    queued?: number;

    running?: number;

    terminated?: number;

    unknown?: number;

    waitingForPause?: number;
  }
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
}

export namespace WorkflowGetResponse {
  export interface Instances {
    complete?: number;

    errored?: number;

    paused?: number;

    queued?: number;

    running?: number;

    terminated?: number;

    unknown?: number;

    waitingForPause?: number;
  }
}

export interface WorkflowUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  class_name: string;

  /**
   * Body param:
   */
  script_name: string;
}

export interface WorkflowListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;
}

export interface WorkflowGetParams {
  account_id: string;
}

export namespace Workflows {
  export import WorkflowUpdateResponse = WorkflowsAPI.WorkflowUpdateResponse;
  export import WorkflowListResponse = WorkflowsAPI.WorkflowListResponse;
  export import WorkflowGetResponse = WorkflowsAPI.WorkflowGetResponse;
  export import WorkflowListResponsesV4PagePaginationArray = WorkflowsAPI.WorkflowListResponsesV4PagePaginationArray;
  export import WorkflowUpdateParams = WorkflowsAPI.WorkflowUpdateParams;
  export import WorkflowListParams = WorkflowsAPI.WorkflowListParams;
  export import WorkflowGetParams = WorkflowsAPI.WorkflowGetParams;
  export import Instances = InstancesAPI.Instances;
  export import InstanceCreateResponse = InstancesAPI.InstanceCreateResponse;
  export import InstanceListResponse = InstancesAPI.InstanceListResponse;
  export import InstanceGetResponse = InstancesAPI.InstanceGetResponse;
  export import InstanceListResponsesV4PagePaginationArray = InstancesAPI.InstanceListResponsesV4PagePaginationArray;
  export import InstanceCreateParams = InstancesAPI.InstanceCreateParams;
  export import InstanceListParams = InstancesAPI.InstanceListParams;
  export import InstanceGetParams = InstancesAPI.InstanceGetParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesV4PagePagination = VersionsAPI.VersionListResponsesV4PagePagination;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
