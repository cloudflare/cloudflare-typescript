// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../../policies';
import * as ApplicationsAPI from '../applications';
import * as ApplicationsPoliciesAPI from '../policies';
import * as UsersAPI from './users';
import { UserListParams, UserListResponse, UserListResponsesSinglePage, Users } from './users';

export class PolicyTests extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Starts an Access policy test.
   */
  create(
    params: PolicyTestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyTestCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/policy-tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyTestCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the current status of a given Access policy test.
   */
  get(
    policyTestId: string,
    params: PolicyTestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyTestGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/access/policy-tests/${policyTestId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PolicyTestGetResponse }>
    )._thenUnwrap((obj) => obj.result);
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
   * Body param:
   */
  policies?: Array<PolicyTestCreateParams.Policy>;
}

export namespace PolicyTestCreateParams {
  export interface Policy {
    /**
     * The action Access will take if a user matches this policy. Infrastructure
     * application policies can only use the Allow action.
     */
    decision: ApplicationsAPI.DecisionParam;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

    /**
     * The name of the Access policy.
     */
    name: string;

    /**
     * Administrators who can approve a temporary authentication request.
     */
    approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

    /**
     * Requires the user to request access from an administrator at the start of each
     * session.
     */
    approval_required?: boolean;

    /**
     * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
     * meet any of the Exclude rules.
     */
    exclude?: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

    /**
     * Require this application to be served in an isolated browser for users matching
     * this policy. 'Client Web Isolation' must be on for the account in order to use
     * this feature.
     */
    isolation_required?: boolean;

    /**
     * A custom message that will appear on the purpose justification screen.
     */
    purpose_justification_prompt?: string;

    /**
     * Require users to enter a justification when they log in to the application.
     */
    purpose_justification_required?: boolean;

    /**
     * Rules evaluated with an AND logical operator. To match the policy, a user must
     * meet all of the Require rules.
     */
    require?: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

    /**
     * The amount of time that tokens issued for the application will be valid. Must be
     * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
     * m, h.
     */
    session_duration?: string;
  }
}

export interface PolicyTestGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  page?: number;
}

PolicyTests.Users = Users;
PolicyTests.UserListResponsesSinglePage = UserListResponsesSinglePage;

export declare namespace PolicyTests {
  export {
    type PolicyTestCreateResponse as PolicyTestCreateResponse,
    type PolicyTestGetResponse as PolicyTestGetResponse,
    type PolicyTestCreateParams as PolicyTestCreateParams,
    type PolicyTestGetParams as PolicyTestGetParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    UserListResponsesSinglePage as UserListResponsesSinglePage,
    type UserListParams as UserListParams,
  };
}
