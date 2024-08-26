// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import { CloudflareError } from '../../../../error';
import * as PoliciesAPI from './policies';
import * as AccessAPI from '../access';
import * as ApplicationsAPI from './applications';
import { ApplicationPoliciesSinglePage } from './applications';

export class Policies extends APIResource {
  /**
   * Creates a policy applying exclusive to a single application that defines the
   * users or groups who can reach it. We recommend creating a reusable policy
   * instead and subsequently referencing its ID in the application's 'policies'
   * array.
   */
  create(
    appId: string,
    params: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationsAPI.ApplicationPolicy> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/policies`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ApplicationsAPI.ApplicationPolicy }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Access policy specific to an application. To update a reusable
   * policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.
   */
  update(
    appId: string,
    policyId: string,
    params: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationsAPI.ApplicationPolicy> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/policies/${policyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ApplicationsAPI.ApplicationPolicy }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Access policies configured for an application. Returns both exclusively
   * scoped and reusable policies used by the application.
   */
  list(
    appId: string,
    params?: PolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationPoliciesSinglePage, ApplicationsAPI.ApplicationPolicy>;
  list(
    appId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationPoliciesSinglePage, ApplicationsAPI.ApplicationPolicy>;
  list(
    appId: string,
    params: PolicyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationPoliciesSinglePage, ApplicationsAPI.ApplicationPolicy> {
    if (isRequestOptions(params)) {
      return this.list(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/policies`,
      ApplicationPoliciesSinglePage,
      options,
    );
  }

  /**
   * Deletes an Access policy specific to an application. To delete a reusable
   * policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.
   */
  delete(
    appId: string,
    policyId: string,
    params?: PolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse>;
  delete(
    appId: string,
    policyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse>;
  delete(
    appId: string,
    policyId: string,
    params: PolicyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(appId, policyId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/policies/${policyId}`,
        options,
      ) as Core.APIPromise<{ result: PolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access policy configured for an application. Returns both
   * exclusively owned and reusable policies used by the application.
   */
  get(
    appId: string,
    policyId: string,
    params?: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationsAPI.ApplicationPolicy>;
  get(
    appId: string,
    policyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationsAPI.ApplicationPolicy>;
  get(
    appId: string,
    policyId: string,
    params: PolicyGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationsAPI.ApplicationPolicy> {
    if (isRequestOptions(params)) {
      return this.get(appId, policyId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/policies/${policyId}`,
        options,
      ) as Core.APIPromise<{ result: ApplicationsAPI.ApplicationPolicy }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
    email_addresses?: Array<unknown>;

    /**
     * The UUID of an re-usable email list.
     */
    email_list_uuid?: string;
  }
}

export interface PolicyDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface PolicyCreateParams {
  /**
   * Body param: The action Access will take if a user matches this policy.
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
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The order of execution for this policy. Must be unique for each
   * policy within an app.
   */
  precedence?: number;

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

export interface PolicyUpdateParams {
  /**
   * Body param: The action Access will take if a user matches this policy.
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
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The order of execution for this policy. Must be unique for each
   * policy within an app.
   */
  precedence?: number;

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

export interface PolicyListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface PolicyDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface PolicyGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Policies {
  export import ApprovalGroup = PoliciesAPI.ApprovalGroup;
  export import Policy = PoliciesAPI.Policy;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}

export { ApplicationPoliciesSinglePage };
