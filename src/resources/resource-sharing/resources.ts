// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseResources extends APIResource {
  static override readonly _key: readonly ['resourceSharing', 'resources'] = Object.freeze([
    'resourceSharing',
    'resources',
  ] as const);

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
}
export class Resources extends BaseResources {}

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

export declare namespace Resources {
  export {
    type ResourceCreateResponse as ResourceCreateResponse,
    type ResourceListResponse as ResourceListResponse,
    type ResourceListResponsesV4PagePaginationArray as ResourceListResponsesV4PagePaginationArray,
    type ResourceCreateParams as ResourceCreateParams,
    type ResourceListParams as ResourceListParams,
  };
}
