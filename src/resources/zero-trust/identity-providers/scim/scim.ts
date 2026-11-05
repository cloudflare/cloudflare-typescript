// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GroupsAPI from './groups';
import {
  BaseGroups,
  GroupDeleteParams,
  GroupGetParams,
  GroupGetResponse,
  GroupListParams,
  Groups,
} from './groups';
import * as UsersAPI from './users';
import { BaseUsers, UserDeleteParams, UserGetParams, UserListParams, Users } from './users';

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
  export {
    Groups as Groups,
    BaseGroups as BaseGroups,
    type GroupGetResponse as GroupGetResponse,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };

  export {
    Users as Users,
    BaseUsers as BaseUsers,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
  };
}
