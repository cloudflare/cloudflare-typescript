// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PermissionGroupsAPI from './permission-groups';
import { PermissionGroups } from './permission-groups';
import * as ResourceGroupsAPI from './resource-groups';
import { ResourceGroups } from './resource-groups';
import * as SSOAPI from './sso';
import { SSO } from './sso';
import * as UserGroupsAPI from './user-groups/user-groups';
import { UserGroups } from './user-groups/user-groups';

export class IAM extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  resourceGroups: ResourceGroupsAPI.ResourceGroups = new ResourceGroupsAPI.ResourceGroups(this._client);
  userGroups: UserGroupsAPI.UserGroups = new UserGroupsAPI.UserGroups(this._client);
  sso: SSOAPI.SSO = new SSOAPI.SSO(this._client);
}

IAM.PermissionGroups = PermissionGroups;
IAM.ResourceGroups = ResourceGroups;
IAM.UserGroups = UserGroups;
IAM.SSO = SSO;

export declare namespace IAM {
  export { PermissionGroups as PermissionGroups };

  export { ResourceGroups as ResourceGroups };

  export { UserGroups as UserGroups };

  export { SSO as SSO };
}
