// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ResourcesAPI from './resources';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Resources extends APIResource {
  /**
   * Create a new share resource
   */
  create(
    shareIdentifier: string,
    params: ResourceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/shares/${shareIdentifier}/resources`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ResourceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update is not immediate, an updated share resource object with a new status will
   * be returned.
   */
  update(
    shareIdentifier: string,
    resourceIdentifier: string,
    params: ResourceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/shares/${shareIdentifier}/resources/${resourceIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ResourceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List share resources by share ID.
   */
  list(
    shareIdentifier: string,
    params: ResourceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceListResponsesV4PagePaginationArray, ResourceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/shares/${shareIdentifier}/resources`,
      ResourceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletion is not immediate, an updated share resource object with a new status
   * will be returned.
   */
  delete(
    shareIdentifier: string,
    resourceIdentifier: string,
    params: ResourceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/shares/${shareIdentifier}/resources/${resourceIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ResourceDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get share resource by ID.
   */
  get(
    shareIdentifier: string,
    resourceIdentifier: string,
    params: ResourceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/shares/${shareIdentifier}/resources/${resourceIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ResourceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ResourceListResponsesV4PagePaginationArray extends V4PagePaginationArray<ResourceListResponse> {}

export interface ResourceCreateResponse {
  /**
   * Share Resource identifier.
   */
  id: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * Resource Metadata.
   */
  meta: unknown;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Account identifier.
   */
  resource_account_id: string;

  /**
   * Share Resource identifier.
   */
  resource_id: string;

  /**
   * Resource Type.
   */
  resource_type: 'custom-ruleset';

  /**
   * Resource Version.
   */
  resource_version: number;

  /**
   * Resource Status.
   */
  status: 'active' | 'deleting' | 'deleted';
}

export interface ResourceUpdateResponse {
  /**
   * Share Resource identifier.
   */
  id: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * Resource Metadata.
   */
  meta: unknown;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Account identifier.
   */
  resource_account_id: string;

  /**
   * Share Resource identifier.
   */
  resource_id: string;

  /**
   * Resource Type.
   */
  resource_type: 'custom-ruleset';

  /**
   * Resource Version.
   */
  resource_version: number;

  /**
   * Resource Status.
   */
  status: 'active' | 'deleting' | 'deleted';
}

export interface ResourceListResponse {
  /**
   * Share Resource identifier.
   */
  id: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * Resource Metadata.
   */
  meta: unknown;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Account identifier.
   */
  resource_account_id: string;

  /**
   * Share Resource identifier.
   */
  resource_id: string;

  /**
   * Resource Type.
   */
  resource_type: 'custom-ruleset';

  /**
   * Resource Version.
   */
  resource_version: number;

  /**
   * Resource Status.
   */
  status: 'active' | 'deleting' | 'deleted';
}

export interface ResourceDeleteResponse {
  /**
   * Share Resource identifier.
   */
  id: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * Resource Metadata.
   */
  meta: unknown;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Account identifier.
   */
  resource_account_id: string;

  /**
   * Share Resource identifier.
   */
  resource_id: string;

  /**
   * Resource Type.
   */
  resource_type: 'custom-ruleset';

  /**
   * Resource Version.
   */
  resource_version: number;

  /**
   * Resource Status.
   */
  status: 'active' | 'deleting' | 'deleted';
}

export interface ResourceGetResponse {
  /**
   * Share Resource identifier.
   */
  id: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * Resource Metadata.
   */
  meta: unknown;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Account identifier.
   */
  resource_account_id: string;

  /**
   * Share Resource identifier.
   */
  resource_id: string;

  /**
   * Resource Type.
   */
  resource_type: 'custom-ruleset';

  /**
   * Resource Version.
   */
  resource_version: number;

  /**
   * Resource Status.
   */
  status: 'active' | 'deleting' | 'deleted';
}

export interface ResourceCreateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: Resource Metadata.
   */
  meta: unknown;

  /**
   * Body param: Account identifier.
   */
  resource_account_id: string;

  /**
   * Body param: Share Resource identifier.
   */
  resource_id: string;

  /**
   * Body param: Resource Type.
   */
  resource_type: 'custom-ruleset';
}

export interface ResourceUpdateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: Resource Metadata.
   */
  meta: unknown;
}

export interface ResourceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter share resources by resource_type.
   */
  resource_type?: 'custom-ruleset';

  /**
   * Query param: Filter share resources by status.
   */
  status?: 'active' | 'deleting' | 'deleted';
}

export interface ResourceDeleteParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export interface ResourceGetParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export namespace Resources {
  export import ResourceCreateResponse = ResourcesAPI.ResourceCreateResponse;
  export import ResourceUpdateResponse = ResourcesAPI.ResourceUpdateResponse;
  export import ResourceListResponse = ResourcesAPI.ResourceListResponse;
  export import ResourceDeleteResponse = ResourcesAPI.ResourceDeleteResponse;
  export import ResourceGetResponse = ResourcesAPI.ResourceGetResponse;
  export import ResourceListResponsesV4PagePaginationArray = ResourcesAPI.ResourceListResponsesV4PagePaginationArray;
  export import ResourceCreateParams = ResourcesAPI.ResourceCreateParams;
  export import ResourceUpdateParams = ResourcesAPI.ResourceUpdateParams;
  export import ResourceListParams = ResourcesAPI.ResourceListParams;
  export import ResourceDeleteParams = ResourcesAPI.ResourceDeleteParams;
  export import ResourceGetParams = ResourcesAPI.ResourceGetParams;
}
