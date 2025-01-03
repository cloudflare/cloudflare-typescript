// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PermissionGroupsAPI from './permission-groups';
import {
  PermissionGroupGetParams,
  PermissionGroupGetResponse,
  PermissionGroupListParams,
  PermissionGroupListResponse,
  PermissionGroupListResponsesV4PagePaginationArray,
  PermissionGroups,
} from './permission-groups';
import * as ResourceGroupsAPI from './resource-groups';
import {
  ResourceGroupCreateParams,
  ResourceGroupCreateResponse,
  ResourceGroupDeleteParams,
  ResourceGroupDeleteResponse,
  ResourceGroupGetParams,
  ResourceGroupGetResponse,
  ResourceGroupListParams,
  ResourceGroupListResponse,
  ResourceGroupListResponsesV4PagePaginationArray,
  ResourceGroupUpdateParams,
  ResourceGroupUpdateResponse,
  ResourceGroups,
} from './resource-groups';

export class IAM extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  resourceGroups: ResourceGroupsAPI.ResourceGroups = new ResourceGroupsAPI.ResourceGroups(this._client);
}

IAM.PermissionGroups = PermissionGroups;
IAM.PermissionGroupListResponsesV4PagePaginationArray = PermissionGroupListResponsesV4PagePaginationArray;
IAM.ResourceGroups = ResourceGroups;
IAM.ResourceGroupListResponsesV4PagePaginationArray = ResourceGroupListResponsesV4PagePaginationArray;

export declare namespace IAM {
  export {
    PermissionGroups as PermissionGroups,
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    PermissionGroupListResponsesV4PagePaginationArray as PermissionGroupListResponsesV4PagePaginationArray,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };

  export {
    ResourceGroups as ResourceGroups,
    type ResourceGroupCreateResponse as ResourceGroupCreateResponse,
    type ResourceGroupUpdateResponse as ResourceGroupUpdateResponse,
    type ResourceGroupListResponse as ResourceGroupListResponse,
    type ResourceGroupDeleteResponse as ResourceGroupDeleteResponse,
    type ResourceGroupGetResponse as ResourceGroupGetResponse,
    ResourceGroupListResponsesV4PagePaginationArray as ResourceGroupListResponsesV4PagePaginationArray,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupGetParams as ResourceGroupGetParams,
  };
}
