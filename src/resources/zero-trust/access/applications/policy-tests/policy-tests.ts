// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import { Users } from './users';
import * as PolicyTestsAPI from './policy-tests';
import * as AccessAPI from '../../access';
import * as ApplicationsAPI from '../applications';
import * as PoliciesAPI from '../policies';
import * as UsersAPI from './users';

export class PolicyTests extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Starts an Access policy test.
   */
  create(params: PolicyTestCreateParams, options?: Core.RequestOptions): Core.APIPromise<PolicyTestCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/access/policy-tests`, { body, ...options });
  }

  /**
   * Fetches the current status of a given Access policy test.
   */
  get(policyTestId: string, params: PolicyTestGetParams, options?: Core.RequestOptions): Core.APIPromise<PolicyTestGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/access/policy-tests/${policyTestId}`, options);
  }
}

export interface PolicyTestCreateResponse {
  /**
   * The UUID of the policy test.
   */
  id?: string;

  /**
   * The status of the policy test request.
   */
  status?: 'success';
}

export interface PolicyTestGetResponse {
  /**
   * The UUID of the policy test.
   */
  id?: string;

  /**
   * The number of pages of (processed) users.
   */
  pages_processed?: number;

  /**
   * The percentage of (processed) users approved based on policy evaluation results.
   */
  percent_approved?: number;

  /**
   * The percentage of (processed) users blocked based on policy evaluation results.
   */
  percent_blocked?: number;

  /**
   * The percentage of users processed so far (of the entire user base).
   */
  percent_users_processed?: number;

  /**
   * The status of the policy test.
   */
  status?: 'blocked' | 'processing' | 'complete';

  /**
   * The total number of users in the user base.
   */
  total_users?: number;

  /**
   * The number of (processed) users approved based on policy evaluation results.
   */
  users_approved?: number;

  /**
   * The number of (processed) users blocked based on policy evaluation results.
   */
  users_blocked?: number;
}

export interface PolicyTestCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The UUID of the policy
   */
  id?: string;

  /**
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: The action Access will take if a user matches this policy.
   */
  decision?: ApplicationsAPI.DecisionParam;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The name of the Access policy.
   */
  name?: string;

  /**
   * Body param: A custom message that will appear on the purpose justification
   * screen.
   */
  purpose_justification_prompt?: string;

  /**
   * Body param: Require users to enter a justification when they log in to the
   * application.
   */
  purpose_justification_required?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match the policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: The amount of time that tokens issued for the application will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;
}

export interface PolicyTestGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace PolicyTests {
  export import PolicyTestCreateResponse = PolicyTestsAPI.PolicyTestCreateResponse;
  export import PolicyTestGetResponse = PolicyTestsAPI.PolicyTestGetResponse;
  export import PolicyTestCreateParams = PolicyTestsAPI.PolicyTestCreateParams;
  export import PolicyTestGetParams = PolicyTestsAPI.PolicyTestGetParams;
  export import Users = UsersAPI.Users;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserListParams = UsersAPI.UserListParams;
}
