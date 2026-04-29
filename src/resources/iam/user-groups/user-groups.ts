// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MembersAPI from './members';
import { BaseMembers, Members } from './members';

export class BaseUserGroups extends APIResource {
  static override readonly _key: readonly ['iam', 'userGroups'] = Object.freeze([
    'iam',
    'userGroups',
  ] as const);
}
export class UserGroups extends BaseUserGroups {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
}

UserGroups.Members = Members;
UserGroups.BaseMembers = BaseMembers;

export declare namespace UserGroups {
  export { Members as Members, BaseMembers as BaseMembers };
}
