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
  export import PermissionGroupListResponse = PermissionGroupsAPI.PermissionGroupListResponse;
  export import PermissionGroupGetResponse = PermissionGroupsAPI.PermissionGroupGetResponse;
  export import PermissionGroupListResponsesV4PagePaginationArray = PermissionGroupsAPI.PermissionGroupListResponsesV4PagePaginationArray;
  export import PermissionGroupListParams = PermissionGroupsAPI.PermissionGroupListParams;
  export import PermissionGroupGetParams = PermissionGroupsAPI.PermissionGroupGetParams;
  export import ResourceGroups = ResourceGroupsAPI.ResourceGroups;
  export import ResourceGroupCreateResponse = ResourceGroupsAPI.ResourceGroupCreateResponse;
  export import ResourceGroupUpdateResponse = ResourceGroupsAPI.ResourceGroupUpdateResponse;
  export import ResourceGroupListResponse = ResourceGroupsAPI.ResourceGroupListResponse;
  export import ResourceGroupDeleteResponse = ResourceGroupsAPI.ResourceGroupDeleteResponse;
  export import ResourceGroupGetResponse = ResourceGroupsAPI.ResourceGroupGetResponse;
  export import ResourceGroupListResponsesV4PagePaginationArray = ResourceGroupsAPI.ResourceGroupListResponsesV4PagePaginationArray;
  export import ResourceGroupCreateParams = ResourceGroupsAPI.ResourceGroupCreateParams;
  export import ResourceGroupUpdateParams = ResourceGroupsAPI.ResourceGroupUpdateParams;
  export import ResourceGroupListParams = ResourceGroupsAPI.ResourceGroupListParams;
  export import ResourceGroupDeleteParams = ResourceGroupsAPI.ResourceGroupDeleteParams;
  export import ResourceGroupGetParams = ResourceGroupsAPI.ResourceGroupGetParams;
}
