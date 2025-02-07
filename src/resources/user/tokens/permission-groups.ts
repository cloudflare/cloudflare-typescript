// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups for API Tokens
   */
  list(
    options?: RequestOptions,
  ): PagePromise<PermissionGroupListResponsesSinglePage, PermissionGroupListResponse> {
    return this._client.getAPIList(
      '/user/tokens/permission_groups',
      SinglePage<PermissionGroupListResponse>,
      options,
    );
  }
}

export type PermissionGroupListResponsesSinglePage = SinglePage<PermissionGroupListResponse>;

export type PermissionGroupListResponse = unknown;

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
  };
}
