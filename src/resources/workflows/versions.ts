// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as VersionsAPI from './versions';
import { V4PagePagination, type V4PagePaginationParams } from '../../pagination';

export class Versions extends APIResource {
  /**
   * List deployed Workflow versions
   */
  list(
    workflowName: string,
    params: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesV4PagePagination, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workflows/${workflowName}/versions`,
      VersionListResponsesV4PagePagination,
      { query, ...options },
    );
  }

  /**
   * Get Workflow version details
   */
  get(
    workflowName: string,
    versionId: string,
    params: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workflows/${workflowName}/versions/${versionId}`,
        options,
      ) as Core.APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VersionListResponsesV4PagePagination extends V4PagePagination<VersionListResponse> {}

export interface VersionListResponse {
  errors: Array<VersionListResponse.Error>;

  messages: Array<VersionListResponse.Message>;

  result: VersionListResponse.Result;

  success: true;

  result_info?: VersionListResponse.ResultInfo;
}

export namespace VersionListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: string;

    class_name: string;

    created_on: string;

    modified_on: string;

    workflow_id: string;
  }

  export interface ResultInfo {
    count: number;

    page: number;

    per_page: number;

    total_count: number;
  }
}

export interface VersionGetResponse {
  id: string;

  class_name: string;

  created_on: string;

  modified_on: string;

  workflow_id: string;
}

export interface VersionListParams extends V4PagePaginationParams {
  /**
   * Path param:
   */
  account_id: string;
}

export interface VersionGetParams {
  account_id: string;
}

export namespace Versions {
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesV4PagePagination = VersionsAPI.VersionListResponsesV4PagePagination;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
