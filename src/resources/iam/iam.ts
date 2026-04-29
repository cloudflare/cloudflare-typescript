// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PermissionGroupsAPI from './permission-groups';
import { BasePermissionGroups, PermissionGroups } from './permission-groups';
import * as ResourceGroupsAPI from './resource-groups';
import { BaseResourceGroups, ResourceGroups } from './resource-groups';
import * as SSOAPI from './sso';
import { BaseSSO, SSO } from './sso';
import * as UserGroupsAPI from './user-groups/user-groups';
import { BaseUserGroups, UserGroups } from './user-groups/user-groups';

export class BaseIAM extends APIResource {
  static override readonly _key: readonly ['iam'] = Object.freeze(['iam'] as const);
}
export class IAM extends BaseIAM {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  resourceGroups: ResourceGroupsAPI.ResourceGroups = new ResourceGroupsAPI.ResourceGroups(this._client);
  userGroups: UserGroupsAPI.UserGroups = new UserGroupsAPI.UserGroups(this._client);
  sso: SSOAPI.SSO = new SSOAPI.SSO(this._client);
}

IAM.PermissionGroups = PermissionGroups;
IAM.BasePermissionGroups = BasePermissionGroups;
IAM.ResourceGroups = ResourceGroups;
IAM.BaseResourceGroups = BaseResourceGroups;
IAM.UserGroups = UserGroups;
IAM.BaseUserGroups = BaseUserGroups;
IAM.SSO = SSO;
IAM.BaseSSO = BaseSSO;

export declare namespace IAM {
  export { PermissionGroups as PermissionGroups, BasePermissionGroups as BasePermissionGroups };

  export { ResourceGroups as ResourceGroups, BaseResourceGroups as BaseResourceGroups };

  export { UserGroups as UserGroups, BaseUserGroups as BaseUserGroups };

  export { SSO as SSO, BaseSSO as BaseSSO };
}
