// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as MembersAPI from './members';
import { Members } from './members';

export class UserGroups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
}

UserGroups.Members = Members;

export declare namespace UserGroups {
  export { Members as Members };
}
