// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/page-shield/policies';

export class Policies extends APIResource {
  /**
   * Create a Page Shield policy.
   */
  create(
    params: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldPageshieldPolicy> {
    const { zone_id, ...body } = params;
    return this._client.post(`/zones/${zone_id}/page_shield/policies`, { body, ...options });
  }

  /**
   * Update a Page Shield policy by ID.
   */
  update(
    policyId: string,
    params: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldPageshieldPolicy> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/page_shield/policies/${policyId}`, { body, ...options });
  }

  /**
   * Lists all Page Shield policies.
   */
  list(params: PolicyListParams, options?: Core.RequestOptions): Core.APIPromise<PolicyListResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield/policies`, options) as Core.APIPromise<{
        result: PolicyListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Page Shield policy by ID.
   */
  delete(policyId: string, params: PolicyDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { zone_id } = params;
    return this._client.delete(`/zones/${zone_id}/page_shield/policies/${policyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches a Page Shield policy by ID.
   */
  get(
    policyId: string,
    params: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldPageshieldPolicy> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/page_shield/policies/${policyId}`, options);
  }
}

export interface PageShieldPageshieldPolicy {
  /**
   * The ID of the policy
   */
  id?: string;

  /**
   * The action to take if the expression matches
   */
  action?: 'allow' | 'log';

  /**
   * A description for the policy
   */
  description?: string;

  /**
   * Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * The policy which will be applied
   */
  value?: string;
}

export type PolicyListResponse = Array<PageShieldPageshieldPolicy>;

export interface PolicyCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to take if the expression matches
   */
  action?: 'allow' | 'log';

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

export interface PolicyUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to take if the expression matches
   */
  action?: 'allow' | 'log';

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

export namespace Policies {
  export import PageShieldPageshieldPolicy = PoliciesAPI.PageShieldPageshieldPolicy;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
