// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as PoliciesAPI from './policies';
import * as AccessAPI from './access';
import * as ApplicationsAPI from './applications/applications';
import * as ApplicationsPoliciesAPI from './applications/policies';
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

export interface PolicyCreateResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  /**
   * Number of access applications currently using this policy.
   */
  app_count?: number;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApplicationsPoliciesAPI.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  connection_rules?: PolicyCreateResponse.ConnectionRules;

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
   * this policy. 'Client Web Isolation' must be on for the account in order to use
   * this feature.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

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

  reusable?: true;

  /**
   * The amount of time that tokens issued for the application will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h.
   */
  session_duration?: string;

  updated_at?: string;
}

export namespace PolicyCreateResponse {
  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  export interface ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    ssh?: ConnectionRules.SSH;
  }

  export namespace ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    export interface SSH {
      /**
       * Contains the Unix usernames that may be used when connecting over SSH.
       */
      usernames: Array<string>;
    }
  }
}

export interface PolicyUpdateResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  /**
   * Number of access applications currently using this policy.
   */
  app_count?: number;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApplicationsPoliciesAPI.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  connection_rules?: PolicyUpdateResponse.ConnectionRules;

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
   * this policy. 'Client Web Isolation' must be on for the account in order to use
   * this feature.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

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

  reusable?: true;

  /**
   * The amount of time that tokens issued for the application will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h.
   */
  session_duration?: string;

  updated_at?: string;
}

export namespace PolicyUpdateResponse {
  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  export interface ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    ssh?: ConnectionRules.SSH;
  }

  export namespace ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    export interface SSH {
      /**
       * Contains the Unix usernames that may be used when connecting over SSH.
       */
      usernames: Array<string>;
    }
  }
}

export interface PolicyListResponse {
  /**
   * The UUID of the policy
   */
  id?: string;

  /**
   * Number of access applications currently using this policy.
   */
  app_count?: number;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApplicationsPoliciesAPI.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  connection_rules?: PolicyListResponse.ConnectionRules;

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
   * this policy. 'Client Web Isolation' must be on for the account in order to use
   * this feature.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

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

  reusable?: true;

  /**
   * The amount of time that tokens issued for the application will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h.
   */
  session_duration?: string;

  updated_at?: string;
}

export namespace PolicyListResponse {
  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  export interface ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    ssh?: ConnectionRules.SSH;
  }

  export namespace ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    export interface SSH {
      /**
       * Contains the Unix usernames that may be used when connecting over SSH.
       */
      usernames: Array<string>;
    }
  }
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

  /**
   * Number of access applications currently using this policy.
   */
  app_count?: number;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApplicationsPoliciesAPI.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  connection_rules?: PolicyGetResponse.ConnectionRules;

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
   * this policy. 'Client Web Isolation' must be on for the account in order to use
   * this feature.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

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

  reusable?: true;

  /**
   * The amount of time that tokens issued for the application will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h.
   */
  session_duration?: string;

  updated_at?: string;
}

export namespace PolicyGetResponse {
  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  export interface ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    ssh?: ConnectionRules.SSH;
  }

  export namespace ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    export interface SSH {
      /**
       * Contains the Unix usernames that may be used when connecting over SSH.
       */
      usernames: Array<string>;
    }
  }
}

export interface PolicyCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApplicationsPoliciesAPI.ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: The rules that define how users may connect to the targets secured
   * by your application.
   */
  connection_rules?: PolicyCreateParams.ConnectionRules;

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

export namespace PolicyCreateParams {
  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  export interface ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    ssh?: ConnectionRules.SSH;
  }

  export namespace ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    export interface SSH {
      /**
       * Contains the Unix usernames that may be used when connecting over SSH.
       */
      usernames: Array<string>;
    }
  }
}

export interface PolicyUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ApplicationsPoliciesAPI.ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: The rules that define how users may connect to the targets secured
   * by your application.
   */
  connection_rules?: PolicyUpdateParams.ConnectionRules;

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

export namespace PolicyUpdateParams {
  /**
   * The rules that define how users may connect to the targets secured by your
   * application.
   */
  export interface ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    ssh?: ConnectionRules.SSH;
  }

  export namespace ConnectionRules {
    /**
     * The SSH-specific rules that define how users may connect to the targets secured
     * by your application.
     */
    export interface SSH {
      /**
       * Contains the Unix usernames that may be used when connecting over SSH.
       */
      usernames: Array<string>;
    }
  }
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

export namespace Policies {
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyListResponsesSinglePage = PoliciesAPI.PolicyListResponsesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
