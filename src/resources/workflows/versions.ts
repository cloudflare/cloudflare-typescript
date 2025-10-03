// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * List deployed Workflow versions
   */
  list(
    workflowName: string,
    params: VersionListParams,
    options?: RequestOptions,
  ): PagePromise<VersionListResponsesV4PagePaginationArray, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workflows/${workflowName}/versions`,
      V4PagePaginationArray<VersionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get Workflow version details
   */
  get(versionID: string, params: VersionGetParams, options?: RequestOptions): APIPromise<VersionGetResponse> {
    const { account_id, workflow_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workflows/${workflow_name}/versions/${versionID}`,
        options,
      ) as APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type VersionListResponsesV4PagePaginationArray = V4PagePaginationArray<VersionListResponse>;

export interface VersionListResponse {
  id: string;

  class_name: string;

  created_on: string;

  modified_on: string;

  workflow_id: string;
}

export interface VersionGetResponse {
  id: string;

  class_name: string;

  created_on: string;

  modified_on: string;

  workflow_id: string;
}

export interface VersionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;
}

export interface VersionGetParams {
  account_id: string;

  workflow_name: string;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListResponsesV4PagePaginationArray as VersionListResponsesV4PagePaginationArray,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
