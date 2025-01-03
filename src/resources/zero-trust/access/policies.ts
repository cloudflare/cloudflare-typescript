// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SettingsAPI from '../../zones/settings';
import * as AccessAPI from './access';
import * as ApplicationsAPI from './applications/applications';
import { SinglePage } from '../../../pagination';

export class Policies extends APIResource {
  /**
   * Creates a new Access reusable policy.
   */
  create(params: PolicyCreateParams, options?: Core.RequestOptions): Core.APIPromise<PolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/policies`, { body, ...options }) as Core.APIPromise<{
        result: PolicyCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a Access reusable policy.
   */
  update(
    policyId: string,
    params: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/access/policies/${policyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Access reusable policies.
   */
  list(
    params: PolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PolicyListResponsesSinglePage, PolicyListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/policies`,
      PolicyListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes an Access reusable policy.
   */
  delete(
    policyId: string,
    params: PolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/access/policies/${policyId}`, options) as Core.APIPromise<{
        result: PolicyDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access reusable policy.
   */
  get(
    policyId: string,
    params: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/access/policies/${policyId}`, options) as Core.APIPromise<{
        result: PolicyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PolicyListResponsesSinglePage extends SinglePage<PolicyListResponse> {}

/**
 * A group of email addresses that can approve a temporary authentication request.
 */
export interface ApprovalGroup {
  /**
   * The number of approvals needed to obtain access.
   */
  approvals_needed: number;

  /**
   * A list of emails that can approve the access request.
   */
  email_addresses?: Array<string>;

  /**
   * The UUID of an re-usable email list.
   */
  email_list_uuid?: string;
}

/**
 * A group of email addresses that can approve a temporary authentication request.
 */
export interface ApprovalGroupParam {
  /**
   * The number of approvals needed to obtain access.
   */
  approvals_needed: number;

  /**
   * A list of emails that can approve the access request.
   */
  email_addresses?: Array<string>;

  /**
   * The UUID of an re-usable email list.
   */
  email_list_uuid?: string;
}

export interface Policy {
  /**
   * UUID
   */
  id?: string;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<Policy.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy.
   */
  decision?: 'allow' | 'deny' | 'non_identity' | 'bypass';

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<AccessAPI.AccessRule>;

  /**
   * Require this application to be served in an isolated browser for users matching
   * this policy.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * The order of execution for this policy. Must be unique for each policy.
   */
  precedence?: number;

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
  require?: Array<AccessAPI.AccessRule>;

  updated_at?: string;
}

export namespace Policy {
  /**
   * A group of email addresses that can approve a temporary authentication request.
   */
  export interface ApprovalGroup {
    /**
     * The number of approvals needed to obtain access.
     */
    approvals_needed: number;

    /**
     * A list of emails that can approve the access request.
     */
    email_addresses?: Array<SettingsAPI.OriginMaxHTTPVersion>;

    /**
     * The UUID of an re-usable email list.
     */
    email_list_uuid?: string;
  }
}

export interface PolicyCreateResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy. Infrastructure
   * application policies can only use the Allow action.
   */
  decision?: ApplicationsAPI.Decision;

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<AccessAPI.AccessRule>;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match the policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRule>;

  updated_at?: string;
}

export interface PolicyUpdateResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy. Infrastructure
   * application policies can only use the Allow action.
   */
  decision?: ApplicationsAPI.Decision;

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<AccessAPI.AccessRule>;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match the policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRule>;

  updated_at?: string;
}

export interface PolicyListResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy. Infrastructure
   * application policies can only use the Allow action.
   */
  decision?: ApplicationsAPI.Decision;

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<AccessAPI.AccessRule>;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match the policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRule>;

  updated_at?: string;
}

export interface PolicyDeleteResponse {
  /**
   * The UUID of the policy
   */
  id?: string;
}

export interface PolicyGetResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy. Infrastructure
   * application policies can only use the Allow action.
   */
  decision?: ApplicationsAPI.Decision;

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<AccessAPI.AccessRule>;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match the policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRule>;

  updated_at?: string;
}

export interface PolicyCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The action Access will take if a user matches this policy.
   * Infrastructure application policies can only use the Allow action.
   */
  decision: ApplicationsAPI.DecisionParam;

  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: The name of the Access policy.
   */
  name: string;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match the policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRuleParam>;
}

export interface PolicyUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The action Access will take if a user matches this policy.
   * Infrastructure application policies can only use the Allow action.
   */
  decision: ApplicationsAPI.DecisionParam;

  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: The name of the Access policy.
   */
  name: string;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match the policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRuleParam>;
}

export interface PolicyListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PolicyDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PolicyGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Policies.PolicyListResponsesSinglePage = PolicyListResponsesSinglePage;

export declare namespace Policies {
  export {
    type ApprovalGroup as ApprovalGroup,
    type Policy as Policy,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    PolicyListResponsesSinglePage as PolicyListResponsesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
