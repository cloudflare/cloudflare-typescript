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
}

export class PermissionGroupListResponsesSinglePage extends SinglePage<PermissionGroupListResponse> {}

export type PermissionGroupListResponse = unknown;

export interface PermissionGroupListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

PermissionGroups.PermissionGroupListResponsesSinglePage = PermissionGroupListResponsesSinglePage;

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
    type PermissionGroupListParams as PermissionGroupListParams,
  };
}
