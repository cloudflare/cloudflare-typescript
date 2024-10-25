// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PermissionGroupsAPI from './permission-groups';
import * as ResourceGroupsAPI from './resource-groups';

export class IAM extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  resourceGroups: ResourceGroupsAPI.ResourceGroups = new ResourceGroupsAPI.ResourceGroups(this._client);
}

export namespace IAM {
  export import PermissionGroups = PermissionGroupsAPI.PermissionGroups;
  export type PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export type PermissionGroupGetResponse = PermissionGroupsAPI.PermissionGroupGetResponse;
  export import PermissionGroupListResponsesV4PagePaginationArray = PermissionGroupsAPI.PermissionGroupListResponsesV4PagePaginationArray;
  export type PermissionGroupListParams = PermissionGroupsAPI.PermissionGroupListParams;
  export type PermissionGroupGetParams = PermissionGroupsAPI.PermissionGroupGetParams;
  export import ResourceGroups = ResourceGroupsAPI.ResourceGroups;
  export type ResourceGroupCreateResponse = ResourceGroupsAPI.ResourceGroupCreateResponse;
  export type ResourceGroupUpdateResponse = ResourceGroupsAPI.ResourceGroupUpdateResponse;
  export type ResourceGroupListResponse = ResourceGroupsAPI.ResourceGroupListResponse;
  export type ResourceGroupDeleteResponse = ResourceGroupsAPI.ResourceGroupDeleteResponse;
  export type ResourceGroupGetResponse = ResourceGroupsAPI.ResourceGroupGetResponse;
  export import ResourceGroupListResponsesV4PagePaginationArray = ResourceGroupsAPI.ResourceGroupListResponsesV4PagePaginationArray;
  export type ResourceGroupCreateParams = ResourceGroupsAPI.ResourceGroupCreateParams;
  export type ResourceGroupUpdateParams = ResourceGroupsAPI.ResourceGroupUpdateParams;
  export type ResourceGroupListParams = ResourceGroupsAPI.ResourceGroupListParams;
  export type ResourceGroupDeleteParams = ResourceGroupsAPI.ResourceGroupDeleteParams;
  export type ResourceGroupGetParams = ResourceGroupsAPI.ResourceGroupGetParams;
}
