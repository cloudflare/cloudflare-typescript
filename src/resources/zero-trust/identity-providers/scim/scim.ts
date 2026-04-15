// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GroupsAPI from './groups';
import { BaseGroups, GroupListParams, Groups } from './groups';
import * as UsersAPI from './users';
import { BaseUsers, UserListParams, Users } from './users';

export class BaseSCIM extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders', 'scim'] = Object.freeze([
    'zeroTrust',
    'identityProviders',
    'scim',
  ] as const);
}
export class SCIM extends BaseSCIM {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

SCIM.Groups = Groups;
SCIM.BaseGroups = BaseGroups;
SCIM.Users = Users;
SCIM.BaseUsers = BaseUsers;

export declare namespace SCIM {
  export { Groups as Groups, BaseGroups as BaseGroups, type GroupListParams as GroupListParams };

  export { Users as Users, BaseUsers as BaseUsers, type UserListParams as UserListParams };
}
