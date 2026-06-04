// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Resources extends APIResource {
  /**
   * Adds a resource to an existing share, making it available to share recipients.
   *
   * @example
   * ```ts
   * const resource =
   *   await client.resourceSharing.resources.create(
   *     '3fd85f74b32742f1bff64a85009dda07',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       meta: {},
   *       resource_account_id:
   *         '023e105f4ecef8ad9ca31a8372d0c353',
   *       resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       resource_type: 'custom-ruleset',
   *     },
   *   );
   * ```
   */
  create(
    shareId: string,
    params: ResourceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/shares/${shareId}/resources`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ResourceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List share resources by share ID.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceListResponse of client.resourceSharing.resources.list(
   *   '3fd85f74b32742f1bff64a85009dda07',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    shareId: string,
    params: ResourceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceListResponsesV4PagePaginationArray, ResourceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/shares/${shareId}/resources`,
      ResourceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
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
  resource_type:
    | 'custom-ruleset'
    | 'gateway-policy'
    | 'gateway-destination-ip'
    | 'gateway-block-page-settings'
    | 'gateway-extended-email-matching'
    | 'idp-federation-grant';

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
  resource_type:
    | 'custom-ruleset'
    | 'gateway-policy'
    | 'gateway-destination-ip'
    | 'gateway-block-page-settings'
    | 'gateway-extended-email-matching'
    | 'idp-federation-grant';

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
  resource_type:
    | 'custom-ruleset'
    | 'gateway-policy'
    | 'gateway-destination-ip'
    | 'gateway-block-page-settings'
    | 'gateway-extended-email-matching'
    | 'idp-federation-grant';
}

export interface ResourceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter share resources by resource_type.
   */
  resource_type?:
    | 'custom-ruleset'
    | 'gateway-policy'
    | 'gateway-destination-ip'
    | 'gateway-block-page-settings'
    | 'gateway-extended-email-matching'
    | 'idp-federation-grant';

  /**
   * Query param: Filter share resources by status.
   */
  status?: 'active' | 'deleting' | 'deleted';
}

Resources.ResourceListResponsesV4PagePaginationArray = ResourceListResponsesV4PagePaginationArray;

export declare namespace Resources {
  export {
    type ResourceCreateResponse as ResourceCreateResponse,
    type ResourceListResponse as ResourceListResponse,
    ResourceListResponsesV4PagePaginationArray as ResourceListResponsesV4PagePaginationArray,
    type ResourceCreateParams as ResourceCreateParams,
    type ResourceListParams as ResourceListParams,
  };
}
