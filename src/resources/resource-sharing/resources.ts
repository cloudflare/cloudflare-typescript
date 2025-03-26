// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Resources extends APIResource {
  /**
   * Create a new share resource
   */
  create(
    shareID: string,
    params: ResourceCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/shares/${shareID}/resources`, {
        body,
        ...options,
      }) as APIPromise<{ result: ResourceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update is not immediate, an updated share resource object with a new status will
   * be returned.
   */
  update(
    resourceID: string,
    params: ResourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceUpdateResponse> {
    const { account_id, share_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/shares/${share_id}/resources/${resourceID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ResourceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List share resources by share ID.
   */
  list(
    shareID: string,
    params: ResourceListParams,
    options?: RequestOptions,
  ): PagePromise<ResourceListResponsesV4PagePaginationArray, ResourceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/shares/${shareID}/resources`,
      V4PagePaginationArray<ResourceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletion is not immediate, an updated share resource object with a new status
   * will be returned.
   */
  delete(
    resourceID: string,
    params: ResourceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ResourceDeleteResponse> {
    const { account_id, share_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/shares/${share_id}/resources/${resourceID}`,
        options,
      ) as APIPromise<{ result: ResourceDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get share resource by ID.
   */
  get(
    resourceID: string,
    params: ResourceGetParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGetResponse> {
    const { account_id, share_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/shares/${share_id}/resources/${resourceID}`,
        options,
      ) as APIPromise<{ result: ResourceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ResourceListResponsesV4PagePaginationArray = V4PagePaginationArray<ResourceListResponse>;

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
  resource_type: 'custom-ruleset' | 'widget';

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
  resource_type: 'custom-ruleset' | 'widget';

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
  resource_type: 'custom-ruleset' | 'widget';

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
  resource_type: 'custom-ruleset' | 'widget';

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
  resource_type: 'custom-ruleset' | 'widget';

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
  resource_type: 'custom-ruleset' | 'widget';
}

export interface ResourceUpdateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Path param: Share identifier tag.
   */
  share_id: string;

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
  resource_type?: 'custom-ruleset' | 'widget';

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

  /**
   * Share identifier tag.
   */
  share_id: string;
}

export interface ResourceGetParams {
  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share identifier tag.
   */
  share_id: string;
}

export declare namespace Resources {
  export {
    type ResourceCreateResponse as ResourceCreateResponse,
    type ResourceUpdateResponse as ResourceUpdateResponse,
    type ResourceListResponse as ResourceListResponse,
    type ResourceDeleteResponse as ResourceDeleteResponse,
    type ResourceGetResponse as ResourceGetResponse,
    type ResourceListResponsesV4PagePaginationArray as ResourceListResponsesV4PagePaginationArray,
    type ResourceCreateParams as ResourceCreateParams,
    type ResourceUpdateParams as ResourceUpdateParams,
    type ResourceListParams as ResourceListParams,
    type ResourceDeleteParams as ResourceDeleteParams,
    type ResourceGetParams as ResourceGetParams,
  };
}
