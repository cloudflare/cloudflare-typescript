// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as PoliciesAPI from './policies';
import * as AccessAPI from '../access';
import * as ApplicationsAPI from './applications';

export class Policies extends APIResource {}

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

export namespace Policies {
  export import ApprovalGroup = PoliciesAPI.ApprovalGroup;
  export import Policy = PoliciesAPI.Policy;
}
