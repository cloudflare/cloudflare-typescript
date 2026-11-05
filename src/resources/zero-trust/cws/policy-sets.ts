// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePolicySets extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'policySets'] = Object.freeze([
    'zeroTrust',
    'cws',
    'policySets',
  ] as const);

  /**
   * Creates a policy set containing the specified policies and workload targets.
   *
   * @example
   * ```ts
   * const policySet =
   *   await client.zeroTrust.cws.policySets.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     name: 'x',
   *     policies: [
   *       { policy_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *     ],
   *   });
   * ```
   */
  create(params: PolicySetCreateParams, options?: RequestOptions): APIPromise<PolicySet> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/policy-sets`, { body, ...options }) as APIPromise<{
        result: PolicySet;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the policy set's configuration. Omit tags or use {} to clear them.
   *
   * @example
   * ```ts
   * const policySet =
   *   await client.zeroTrust.cws.policySets.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       name: 'x',
   *       policies: [
   *         {
   *           policy_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    policySetID: string,
    params: PolicySetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PolicySet> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/policy-sets/${policySetID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PolicySet }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of policy sets in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const policySet of client.zeroTrust.cws.policySets.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PolicySetListParams,
    options?: RequestOptions,
  ): PagePromise<PolicySetsCursorPagination, PolicySet> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/policy-sets`,
      CursorPagination<PolicySet>,
      { query, ...options },
    );
  }

  /**
   * Deletes the policy set and cascades its deployment attachment and policy and
   * workload membership rows. The referenced deployments, policies, and workloads
   * remain.
   *
   * @example
   * ```ts
   * const policySet =
   *   await client.zeroTrust.cws.policySets.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    policySetID: string,
    params: PolicySetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PolicySetDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/policy-sets/${policySetID}`,
        options,
      ) as APIPromise<{ result: PolicySetDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the policy set with the specified ID.
   *
   * @example
   * ```ts
   * const policySet = await client.zeroTrust.cws.policySets.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  get(policySetID: string, params: PolicySetGetParams, options?: RequestOptions): APIPromise<PolicySet> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cws/policy-sets/${policySetID}`, options) as APIPromise<{
        result: PolicySet;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class PolicySets extends BasePolicySets {}

export type PolicySetsCursorPagination = CursorPagination<PolicySet>;

export interface PolicySet {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * IDs of workloads that exclude matching requests. Exclusions take precedence.
   */
  exclude_workload_ids: Array<string> | null;

  /**
   * IDs of workloads that include matching requests. Empty includes all requests
   * before exclusions.
   */
  include_workload_ids: Array<string> | null;

  /**
   * Human-readable name; unique per account
   */
  name: string;

  /**
   * Member policies and their per-membership enforcement mode
   */
  policies: Array<PolicySet.Policy> | null;

  /**
   * Tags attached to this policy set
   */
  tags: { [key: string]: string };

  updated_at: string;

  /**
   * Optional free-form description.
   */
  description?: string;
}

export namespace PolicySet {
  export interface Policy {
    /**
     * Whether this policy should enforce when it matches. False keeps the policy
     * attached for non-enforcing evaluation.
     */
    enforce: boolean;

    /**
     * ID of the member policy
     */
    policy_id: string;
  }
}

export interface PolicySetDeleteResponse {
  id: string;
}

export interface PolicySetCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Name of the policy set
   */
  name: string;

  /**
   * Body param: Policies to include with per-membership enforcement mode
   */
  policies: Array<PolicySetCreateParams.Policy> | null;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: Workload IDs that exclude matching requests. Exclusions take
   * precedence.
   */
  exclude_workload_ids?: Array<string> | null;

  /**
   * Body param: Workload IDs that include matching requests. Empty or omitted
   * includes all requests before exclusions.
   */
  include_workload_ids?: Array<string> | null;

  /**
   * Body param: Tags to attach. Keys are limited to 256 UTF-8 bytes and values to
   * 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export namespace PolicySetCreateParams {
  export interface Policy {
    /**
     * ID of the member policy
     */
    policy_id: string;

    /**
     * Whether this policy should enforce when it matches. Defaults to true; false
     * keeps the policy attached for non-enforcing evaluation.
     */
    enforce?: boolean;
  }
}

export interface PolicySetUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Name of the policy set
   */
  name: string;

  /**
   * Body param: Replacement set of policies with per-membership enforcement mode
   */
  policies: Array<PolicySetUpdateParams.Policy> | null;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: Replacement set of excluded workload IDs. Exclusions take
   * precedence.
   */
  exclude_workload_ids?: Array<string> | null;

  /**
   * Body param: Replacement set of included workload IDs. Empty or omitted includes
   * all requests before exclusions.
   */
  include_workload_ids?: Array<string> | null;

  /**
   * Body param: Replacement tag set. Omit or use {} to clear. Keys are limited to
   * 256 UTF-8 bytes and values to 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export namespace PolicySetUpdateParams {
  export interface Policy {
    /**
     * ID of the member policy
     */
    policy_id: string;

    /**
     * Whether this policy should enforce when it matches. Defaults to true; false
     * keeps the policy attached for non-enforcing evaluation.
     */
    enforce?: boolean;
  }
}

export interface PolicySetListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Filter to policy sets attached to this deployment
   */
  deployment_id?: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by policy set name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';
}

export interface PolicySetDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface PolicySetGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace PolicySets {
  export {
    type PolicySet as PolicySet,
    type PolicySetDeleteResponse as PolicySetDeleteResponse,
    type PolicySetsCursorPagination as PolicySetsCursorPagination,
    type PolicySetCreateParams as PolicySetCreateParams,
    type PolicySetUpdateParams as PolicySetUpdateParams,
    type PolicySetListParams as PolicySetListParams,
    type PolicySetDeleteParams as PolicySetDeleteParams,
    type PolicySetGetParams as PolicySetGetParams,
  };
}
