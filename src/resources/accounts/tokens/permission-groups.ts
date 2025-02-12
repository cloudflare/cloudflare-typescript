// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups for Account Owned API Tokens
   */
  list(
    params: PermissionGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionGroupListResponsesSinglePage, PermissionGroupListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/tokens/permission_groups`,
      PermissionGroupListResponsesSinglePage,
      options,
    );
  }

  /**
   * Find all available permission groups for Account Owned API Tokens
   */
  get(
    params: PermissionGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionGroupGetResponsesSinglePage, PermissionGroupGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/tokens/permission_groups`,
      PermissionGroupGetResponsesSinglePage,
      options,
    );
  }
}

export class PermissionGroupListResponsesSinglePage extends SinglePage<PermissionGroupListResponse> {}

export class PermissionGroupGetResponsesSinglePage extends SinglePage<PermissionGroupGetResponse> {}

export interface PermissionGroupListResponse {
  /**
   * Public ID.
   */
  id?: string;

  /**
   * Permission Group Name
   */
  name?: string;

  /**
   * Resources to which the Permission Group is scoped
   */
  scopes?: Array<
    | 'com.cloudflare.api.account'
    | 'com.cloudflare.api.account.zone'
    | 'com.cloudflare.api.user'
    | 'com.cloudflare.edge.r2.bucket'
  >;
}

export interface PermissionGroupGetResponse {
  /**
   * Public ID.
   */
  id?: string;

  /**
   * Permission Group Name
   */
  name?: string;

  /**
   * Resources to which the Permission Group is scoped
   */
  scopes?: Array<
    | 'com.cloudflare.api.account'
    | 'com.cloudflare.api.account.zone'
    | 'com.cloudflare.api.user'
    | 'com.cloudflare.edge.r2.bucket'
  >;
}

export interface PermissionGroupListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface PermissionGroupGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

PermissionGroups.PermissionGroupListResponsesSinglePage = PermissionGroupListResponsesSinglePage;
PermissionGroups.PermissionGroupGetResponsesSinglePage = PermissionGroupGetResponsesSinglePage;

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
    PermissionGroupGetResponsesSinglePage as PermissionGroupGetResponsesSinglePage,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };
}
