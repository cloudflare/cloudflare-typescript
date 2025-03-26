// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Permissions extends APIResource {
  /**
   * Grant permission to indicator feed
   */
  create(params: PermissionCreateParams, options?: RequestOptions): APIPromise<PermissionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/intel/indicator-feeds/permissions/add`, {
        body,
        ...options,
      }) as APIPromise<{ result: PermissionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List indicator feed permissions
   */
  list(params: PermissionListParams, options?: RequestOptions): APIPromise<PermissionListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/intel/indicator-feeds/permissions/view`,
        options,
      ) as APIPromise<{ result: PermissionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revoke permission to indicator feed
   */
  delete(params: PermissionDeleteParams, options?: RequestOptions): APIPromise<PermissionDeleteResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/intel/indicator-feeds/permissions/remove`, {
        body,
        ...options,
      }) as APIPromise<{ result: PermissionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PermissionCreateResponse {
  /**
   * Whether the update succeeded or not
   */
  success?: boolean;
}

export type PermissionListResponse = Array<PermissionListResponse.PermissionListResponseItem>;

export namespace PermissionListResponse {
  export interface PermissionListResponseItem {
    /**
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * Whether the indicator feed can be attributed to a provider
     */
    is_attributable?: boolean;

    /**
     * Whether the indicator feed can be downloaded
     */
    is_downloadable?: boolean;

    /**
     * Whether the indicator feed is exposed to customers
     */
    is_public?: boolean;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export interface PermissionDeleteResponse {
  /**
   * Whether the update succeeded or not
   */
  success?: boolean;
}

export interface PermissionCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * Body param: The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export interface PermissionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PermissionDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * Body param: The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export declare namespace Permissions {
  export {
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionListResponse as PermissionListResponse,
    type PermissionDeleteResponse as PermissionDeleteResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
    type PermissionDeleteParams as PermissionDeleteParams,
  };
}
