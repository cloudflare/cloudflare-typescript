// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Versions extends APIResource {
  /**
   * Lists all deployed versions of a workflow.
   */
  list(
    workflowName: string,
    params?: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesV4PagePaginationArray, VersionListResponse>;
  list(
    workflowName: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesV4PagePaginationArray, VersionListResponse>;
  list(
    workflowName: string,
    params: VersionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesV4PagePaginationArray, VersionListResponse> {
    if (isRequestOptions(params)) {
      return this.list(workflowName, {}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workflows/${workflowName}/versions`,
      VersionListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Retrieves details for a specific deployed workflow version.
   */
  get(
    workflowName: string,
    versionId: string,
    params?: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse>;
  get(
    workflowName: string,
    versionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse>;
  get(
    workflowName: string,
    versionId: string,
    params: VersionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(workflowName, versionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workflows/${workflowName}/versions/${versionId}`,
        options,
      ) as Core.APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VersionListResponsesV4PagePaginationArray extends V4PagePaginationArray<VersionListResponse> {}

export interface VersionListResponse {
  id: string;

  class_name: string;

  created_on: string;

  has_dag: boolean;

  /**
   * The programming language of the workflow implementation
   */
  language: 'javascript' | 'python';

  modified_on: string;

  workflow_id: string;

  limits?: VersionListResponse.Limits;
}

export namespace VersionListResponse {
  export interface Limits {
    steps?: number;
  }
}

export interface VersionGetResponse {
  id: string;

  class_name: string;

  created_on: string;

  has_dag: boolean;

  /**
   * The programming language of the workflow implementation
   */
  language: 'javascript' | 'python';

  modified_on: string;

  workflow_id: string;

  limits?: VersionGetResponse.Limits;
}

export namespace VersionGetResponse {
  export interface Limits {
    steps?: number;
  }
}

export interface VersionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id?: string;
}

export interface VersionGetParams {
  account_id?: string;
}

Versions.VersionListResponsesV4PagePaginationArray = VersionListResponsesV4PagePaginationArray;

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    VersionListResponsesV4PagePaginationArray as VersionListResponsesV4PagePaginationArray,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
