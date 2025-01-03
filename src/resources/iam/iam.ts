// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PermissionGroupsAPI from './permission-groups';
import {
  PermissionGroupGetParams,
  PermissionGroupGetResponse,
  PermissionGroupListParams,
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
IAM.ResourceGroups = ResourceGroups;

export declare namespace IAM {
  export {
    PermissionGroups as PermissionGroups,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };

  export {
    ResourceGroups as ResourceGroups,
    type ResourceGroupCreateResponse as ResourceGroupCreateResponse,
    type ResourceGroupUpdateResponse as ResourceGroupUpdateResponse,
    type ResourceGroupDeleteResponse as ResourceGroupDeleteResponse,
    type ResourceGroupGetResponse as ResourceGroupGetResponse,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupGetParams as ResourceGroupGetParams,
  };
}
