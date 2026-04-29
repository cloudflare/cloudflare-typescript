// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CAsAPI from './cas';
import { CAs } from './cas';
import * as PoliciesAPI from './policies';
import { Policies } from './policies';
import * as SettingsAPI from './settings';
import { Settings } from './settings';
import * as UserPolicyChecksAPI from './user-policy-checks';
import { UserPolicyChecks } from './user-policy-checks';
import * as PolicyTestsAPI from './policy-tests/policy-tests';
import { PolicyTests } from './policy-tests/policy-tests';

export class Applications extends APIResource {
  cas: CAsAPI.CAs = new CAsAPI.CAs(this._client);
  userPolicyChecks: UserPolicyChecksAPI.UserPolicyChecks = new UserPolicyChecksAPI.UserPolicyChecks(
    this._client,
  );
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  policyTests: PolicyTestsAPI.PolicyTests = new PolicyTestsAPI.PolicyTests(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Applications.CAs = CAs;
Applications.UserPolicyChecks = UserPolicyChecks;
Applications.Policies = Policies;
Applications.PolicyTests = PolicyTests;
Applications.Settings = Settings;

export declare namespace Applications {
  export { CAs as CAs };

  export { UserPolicyChecks as UserPolicyChecks };

  export { Policies as Policies };

  export { PolicyTests as PolicyTests };

  export { Settings as Settings };
}
