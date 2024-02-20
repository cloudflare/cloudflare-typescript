// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionsAPI from 'cloudflare/resources/intel/indicator-feeds/permissions';

export class Permissions extends APIResource {
  /**
   * Grant permission to indicator feed
   */
  create(
    accountId: string,
    body: PermissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionCreateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/intel/indicator-feeds/permissions/add`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PermissionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List indicator feed permissions
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PermissionListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/intel/indicator-feeds/permissions/view`,
        options,
      ) as Core.APIPromise<{ result: PermissionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revoke permission to indicator feed
   */
  delete(
    accountId: string,
    body: PermissionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionDeleteResponse> {
    return (
      this._client.put(`/accounts/${accountId}/intel/indicator-feeds/permissions/remove`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PermissionDeleteResponse }>
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
   * The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export interface PermissionDeleteParams {
  /**
   * The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export namespace Permissions {
  export import PermissionCreateResponse = PermissionsAPI.PermissionCreateResponse;
  export import PermissionListResponse = PermissionsAPI.PermissionListResponse;
  export import PermissionDeleteResponse = PermissionsAPI.PermissionDeleteResponse;
  export import PermissionCreateParams = PermissionsAPI.PermissionCreateParams;
  export import PermissionDeleteParams = PermissionsAPI.PermissionDeleteParams;
}
