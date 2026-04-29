// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as UsersAPI from './users';
import { BaseUsers, Users } from './users';

export class BasePolicyTests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'applications', 'policyTests'] =
    Object.freeze(['zeroTrust', 'access', 'applications', 'policyTests'] as const);
}
export class PolicyTests extends BasePolicyTests {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

PolicyTests.Users = Users;
PolicyTests.BaseUsers = BaseUsers;

export declare namespace PolicyTests {
  export { Users as Users, BaseUsers as BaseUsers };
}
