// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups for Account Owned API Tokens
   */
  list(
    params: PermissionGroupListParams,
    options?: RequestOptions,
  ): PagePromise<PermissionGroupListResponsesSinglePage, PermissionGroupListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/tokens/permission_groups`,
      SinglePage<PermissionGroupListResponse>,
      options,
    );
  }

  /**
   * Find all available permission groups for Account Owned API Tokens
   */
  get(
    params: PermissionGroupGetParams,
    options?: RequestOptions,
  ): PagePromise<PermissionGroupGetResponsesSinglePage, PermissionGroupGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/tokens/permission_groups`,
      SinglePage<PermissionGroupGetResponse>,
      options,
    );
  }
}

export type PermissionGroupListResponsesSinglePage = SinglePage<PermissionGroupListResponse>;

export type PermissionGroupGetResponsesSinglePage = SinglePage<PermissionGroupGetResponse>;

export type PermissionGroupListResponse = unknown;

export type PermissionGroupGetResponse = unknown;

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

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    type PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
    type PermissionGroupGetResponsesSinglePage as PermissionGroupGetResponsesSinglePage,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };
}
