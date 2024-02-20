// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/page-shield/policies';

export class Policies extends APIResource {
  /**
   * Create a Page Shield policy.
   */
  create(
    zoneId: string,
    body: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyCreateResponse> {
    return this._client.post(`/zones/${zoneId}/page_shield/policies`, { body, ...options });
  }

  /**
   * Update a Page Shield policy by ID.
   */
  update(
    zoneId: string,
    policyId: string,
    body: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyUpdateResponse> {
    return this._client.put(`/zones/${zoneId}/page_shield/policies/${policyId}`, { body, ...options });
  }

  /**
   * Lists all Page Shield policies.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PolicyListResponse | null> {
    return (
      this._client.get(`/zones/${zoneId}/page_shield/policies`, options) as Core.APIPromise<{
        result: PolicyListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Page Shield policy by ID.
   */
  delete(zoneId: string, policyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/zones/${zoneId}/page_shield/policies/${policyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches a Page Shield policy by ID.
   */
  get(zoneId: string, policyId: string, options?: Core.RequestOptions): Core.APIPromise<PolicyGetResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield/policies/${policyId}`, options);
  }
}

export interface PolicyCreateResponse {
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

export interface PolicyUpdateResponse {
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

export type PolicyListResponse = Array<PolicyListResponse.PolicyListResponseItem>;

export namespace PolicyListResponse {
  export interface PolicyListResponseItem {
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
}

export interface PolicyGetResponse {
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

export interface PolicyCreateParams {
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

export interface PolicyUpdateParams {
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

export namespace Policies {
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
}
