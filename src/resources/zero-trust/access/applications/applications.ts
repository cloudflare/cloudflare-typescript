// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CAsAPI from './cas';
import { BaseCAs, CAs } from './cas';
import * as PoliciesAPI from './policies';
import { BasePolicies, Policies } from './policies';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as UserPolicyChecksAPI from './user-policy-checks';
import { BaseUserPolicyChecks, UserPolicyChecks } from './user-policy-checks';
import * as PolicyTestsAPI from './policy-tests/policy-tests';
import { BasePolicyTests, PolicyTests } from './policy-tests/policy-tests';

export class BaseApplications extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'applications'] = Object.freeze([
    'zeroTrust',
    'access',
    'applications',
  ] as const);
}
export class Applications extends BaseApplications {
  cas: CAsAPI.CAs = new CAsAPI.CAs(this._client);
  userPolicyChecks: UserPolicyChecksAPI.UserPolicyChecks = new UserPolicyChecksAPI.UserPolicyChecks(
    this._client,
  );
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  policyTests: PolicyTestsAPI.PolicyTests = new PolicyTestsAPI.PolicyTests(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Applications.CAs = CAs;
Applications.BaseCAs = BaseCAs;
Applications.UserPolicyChecks = UserPolicyChecks;
Applications.BaseUserPolicyChecks = BaseUserPolicyChecks;
Applications.Policies = Policies;
Applications.BasePolicies = BasePolicies;
Applications.PolicyTests = PolicyTests;
Applications.BasePolicyTests = BasePolicyTests;
Applications.Settings = Settings;
Applications.BaseSettings = BaseSettings;

export declare namespace Applications {
  export { CAs as CAs, BaseCAs as BaseCAs };

  export { UserPolicyChecks as UserPolicyChecks, BaseUserPolicyChecks as BaseUserPolicyChecks };

  export { Policies as Policies, BasePolicies as BasePolicies };

  export { PolicyTests as PolicyTests, BasePolicyTests as BasePolicyTests };

  export { Settings as Settings, BaseSettings as BaseSettings };
}
