// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['pageShield', 'policies'] = Object.freeze([
    'pageShield',
    'policies',
  ] as const);

  /**
   * Creates a rule that applies a client-side security action when its filter
   * expression matches.
   *
   * @example
   * ```ts
   * const policy = await client.pageShield.policies.create({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   action: 'allow',
   *   description: 'Checkout page CSP policy',
   *   enabled: true,
   *   expression:
   *     'ends_with(http.request.uri.path, "/checkout")',
   *   value: "script-src 'none';",
   * });
   * ```
   */
  create(params: PolicyCreateParams, options?: RequestOptions): APIPromise<PolicyCreateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/page_shield/policies`, { body, ...options }) as APIPromise<{
        result: PolicyCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the description, action, expression, enabled state, and policy value for
   * a content security rule.
   *
   * @example
   * ```ts
   * const policy = await client.pageShield.policies.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    policyID: string,
    params: PolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PolicyUpdateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/page_shield/policies/${policyID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PolicyUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists content security rules configured for the zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const policyListResponse of client.pageShield.policies.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PolicyListParams,
    options?: RequestOptions,
  ): PagePromise<PolicyListResponsesSinglePage, PolicyListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/page_shield/policies`,
      SinglePage<PolicyListResponse>,
      options,
    );
  }

  /**
   * Permanently deletes a content security rule by ID.
   *
   * @example
   * ```ts
   * await client.pageShield.policies.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(policyID: string, params: PolicyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/page_shield/policies/${policyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a content security rule by ID.
   *
   * @example
   * ```ts
   * const policy = await client.pageShield.policies.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    policyID: string,
    params: PolicyGetParams,
    options?: RequestOptions,
  ): APIPromise<PolicyGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/page_shield/policies/${policyID}`, options) as APIPromise<{
        result: PolicyGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Policies extends BasePolicies {}

export type PolicyListResponsesSinglePage = SinglePage<PolicyListResponse>;

export interface PolicyCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The action to take if the expression matches
   */
  action: 'allow' | 'log' | 'add_reporting_directives';

  /**
   * A description for the policy
   */
  description: string;

  /**
   * Whether the policy is enabled
   */
  enabled: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression: string;

  /**
   * The policy which will be applied
   */
  value: string;
}

export interface PolicyUpdateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The action to take if the expression matches
   */
  action: 'allow' | 'log' | 'add_reporting_directives';

  /**
   * A description for the policy
   */
  description: string;

  /**
   * Whether the policy is enabled
   */
  enabled: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression: string;

  /**
   * The policy which will be applied
   */
  value: string;
}

export interface PolicyListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The action to take if the expression matches
   */
  action: 'allow' | 'log' | 'add_reporting_directives';

  /**
   * A description for the policy
   */
  description: string;

  /**
   * Whether the policy is enabled
   */
  enabled: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression: string;

  /**
   * The policy which will be applied
   */
  value: string;
}

export interface PolicyGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The action to take if the expression matches
   */
  action: 'allow' | 'log' | 'add_reporting_directives';

  /**
   * A description for the policy
   */
  description: string;

  /**
   * Whether the policy is enabled
   */
  enabled: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression: string;

  /**
   * The policy which will be applied
   */
  value: string;
}

export interface PolicyCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to take if the expression matches
   */
  action: 'allow' | 'log' | 'add_reporting_directives';

  /**
   * Body param: A description for the policy
   */
  description: string;

  /**
   * Body param: Whether the policy is enabled
   */
  enabled: boolean;

  /**
   * Body param: The expression which must match for the policy to be applied, using
   * the Cloudflare Firewall rule expression syntax
   */
  expression: string;

  /**
   * Body param: The policy which will be applied
   */
  value: string;
}

export interface PolicyUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to take if the expression matches
   */
  action?: 'allow' | 'log' | 'add_reporting_directives';

  /**
   * Body param: A description for the policy
   */
  description?: string;

  /**
   * Body param: Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * Body param: The expression which must match for the policy to be applied, using
   * the Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * Body param: The policy which will be applied
   */
  value?: string;
}

export interface PolicyListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PolicyDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PolicyGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Policies {
  export {
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListResponsesSinglePage as PolicyListResponsesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
