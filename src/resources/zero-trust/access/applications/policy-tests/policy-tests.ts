// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as UsersAPI from './users';
import { Users } from './users';

export class PolicyTests extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

PolicyTests.Users = Users;

export declare namespace PolicyTests {
  export { Users as Users };
}
