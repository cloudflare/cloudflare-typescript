// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GroupsAPI from './groups';
import { Groups } from './groups';
import * as UsersAPI from './users';
import { Users } from './users';

export class SCIM extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

SCIM.Groups = Groups;
SCIM.Users = Users;

export declare namespace SCIM {
  export { Groups as Groups };

  export { Users as Users };
}
