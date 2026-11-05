// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'policies'] = Object.freeze([
    'zeroTrust',
    'cws',
    'policies',
  ] as const);

  /**
   * Creates a policy from inline Rego source, an entrypoint, and a filter
   * expression.
   *
   * @example
   * ```ts
   * const policy = await client.zeroTrust.cws.policies.create({
   *   account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *   entrypoint: 'entrypoint',
   *   filter: 'x',
   *   name: 'x',
   *   rego_source: 'x',
   * });
   * ```
   */
  create(params: PolicyCreateParams, options?: RequestOptions): APIPromise<Policy> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/policies`, { body, ...options }) as APIPromise<{
        result: Policy;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the policy's configuration. Omit tags or use {} to clear them.
   *
   * @example
   * ```ts
   * const policy = await client.zeroTrust.cws.policies.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     entrypoint: 'entrypoint',
   *     filter: 'x',
   *     name: 'x',
   *     rego_source: 'x',
   *   },
   * );
   * ```
   */
  update(policyID: string, params: PolicyUpdateParams, options?: RequestOptions): APIPromise<Policy> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/policies/${policyID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Policy }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of policies in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const policy of client.zeroTrust.cws.policies.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(params: PolicyListParams, options?: RequestOptions): PagePromise<PoliciesCursorPagination, Policy> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/cws/policies`, CursorPagination<Policy>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes the policy and cascades its policy-set membership rows. The policy sets
   * remain.
   *
   * @example
   * ```ts
   * const policy = await client.zeroTrust.cws.policies.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  delete(
    policyID: string,
    params: PolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PolicyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/cws/policies/${policyID}`, options) as APIPromise<{
        result: PolicyDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the policy with the specified ID.
   *
   * @example
   * ```ts
   * const policy = await client.zeroTrust.cws.policies.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  get(policyID: string, params: PolicyGetParams, options?: RequestOptions): APIPromise<Policy> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cws/policies/${policyID}`, options) as APIPromise<{
        result: Policy;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Policies extends BasePolicies {}

export type PoliciesCursorPagination = CursorPagination<Policy>;

export interface Policy {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * Non-function rule declared in rego_source. Evaluation uses
   * data.<package_path>.<entrypoint>.
   */
  entrypoint: string;

  /**
   * Filter expression that determines whether this policy applies. Maximum 4096
   * UTF-8 bytes.
   */
  filter: string;

  /**
   * Human-readable name; unique per account
   */
  name: string;

  /**
   * Dotted path derived from rego_source. Begins with policy. and is unique per
   * account.
   */
  package_path: string;

  /**
   * Inline Rego source with a package beginning with "policy." Maximum 16384 UTF-8
   * bytes.
   */
  rego_source: string;

  /**
   * Tags attached to this policy
   */
  tags: { [key: string]: string };

  updated_at: string;

  /**
   * Optional free-form description.
   */
  description?: string;
}

export interface PolicyDeleteResponse {
  id: string;
}

export interface PolicyCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Non-function rule declared in rego_source. Evaluation uses
   * data.<package_path>.<entrypoint>.
   */
  entrypoint: string;

  /**
   * Body param: Filter expression that determines whether this policy applies.
   * Maximum 4096 UTF-8 bytes.
   */
  filter: string;

  /**
   * Body param: Name of the policy
   */
  name: string;

  /**
   * Body param: Inline Rego source with a package beginning with "policy." Maximum
   * 16384 UTF-8 bytes.
   */
  rego_source: string;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: Tags to attach. Keys are limited to 256 UTF-8 bytes and values to
   * 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export interface PolicyUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Non-function rule declared in rego_source. Evaluation uses
   * data.<package_path>.<entrypoint>.
   */
  entrypoint: string;

  /**
   * Body param: Filter expression that determines whether this policy applies.
   * Maximum 4096 UTF-8 bytes.
   */
  filter: string;

  /**
   * Body param: Name of the policy
   */
  name: string;

  /**
   * Body param: Inline Rego source with a package beginning with "policy." Maximum
   * 16384 UTF-8 bytes.
   */
  rego_source: string;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: Replacement tag set. Omit or use {} to clear. Keys are limited to
   * 256 UTF-8 bytes and values to 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export interface PolicyListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by policy name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';

  /**
   * Query param: Filter by package path (case-sensitive literal substring match)
   */
  package_path?: string;

  /**
   * Query param: Filter to policies attached to (members of) this policy set
   */
  policy_set_id?: string;
}

export interface PolicyDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface PolicyGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace Policies {
  export {
    type Policy as Policy,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PoliciesCursorPagination as PoliciesCursorPagination,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
