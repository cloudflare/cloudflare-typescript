// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  CursorPaginationAfter,
  type CursorPaginationAfterParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'policies'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'policies',
  ] as const);

  /**
   * Creates a new policy configuration that defines automated actions to be executed
   * when security findings are detected. A policy can include multiple remediation
   * and/or webhook actions that will be triggered automatically.
   *
   * @example
   * ```ts
   * const policy =
   *   await client.zeroTrust.casb.posture.policies.create({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     actions: {},
   *     applies_to_all_integrations: false,
   *     display_name: 'Auto-remediate public files',
   *     enabled: true,
   *     finding_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a',
   *   });
   * ```
   */
  create(params: PolicyCreateParams, options?: RequestOptions): APIPromise<PolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/policies`, {
        body,
        ...options,
      }) as APIPromise<{ result: PolicyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing policy configuration and replaces its actions.
   *
   * @example
   * ```ts
   * const policy =
   *   await client.zeroTrust.casb.posture.policies.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       actions: {},
   *       applies_to_all_integrations: false,
   *       display_name: 'Auto-remediate public files',
   *       enabled: true,
   *     },
   *   );
   * ```
   */
  update(
    policyID: string,
    params: PolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PolicyUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/data-security/posture/policies/${policyID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PolicyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of integration-scoped policy configurations for the given
   * account. This endpoint supports cursor based pagination. By default, results are
   * returned in sorted order based on created_at.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const policyListResponse of client.zeroTrust.casb.posture.policies.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PolicyListParams,
    options?: RequestOptions,
  ): PagePromise<PolicyListResponsesCursorPaginationAfter, PolicyListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/policies`,
      CursorPaginationAfter<PolicyListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a policy configuration.
   *
   * @example
   * ```ts
   * const policy =
   *   await client.zeroTrust.casb.posture.policies.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  delete(
    policyID: string,
    params: PolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PolicyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/data-security/posture/policies/${policyID}`,
        options,
      ) as APIPromise<{ result: PolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the details of a specific policy configuration, including its
   * associated remediation and webhook actions.
   *
   * @example
   * ```ts
   * const policy =
   *   await client.zeroTrust.casb.posture.policies.get(
   *     '497f6eca-6276-4993-bfeb-53cbbbba6f08',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  get(policyID: string, params: PolicyGetParams, options?: RequestOptions): APIPromise<PolicyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/policies/${policyID}`,
        options,
      ) as APIPromise<{ result: PolicyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Policies extends BasePolicies {}

export type PolicyListResponsesCursorPaginationAfter = CursorPaginationAfter<PolicyListResponse>;

/**
 * Response body for a policy configuration.
 */
export interface PolicyCreateResponse {
  /**
   * Unique identifier for the policy configuration.
   */
  id: string;

  /**
   * The actions configured for this policy.
   */
  actions: PolicyCreateResponse.Actions;

  /**
   * When true, the policy applies to all integrations for the account. When false,
   * it applies only to the specified integration_ids.
   */
  applies_to_all_integrations: boolean;

  /**
   * Timestamp when the policy was created.
   */
  created_at: string;

  /**
   * User-set description of what this policy does. Limited to 1000 characters.
   */
  description: string;

  /**
   * Display name for the policy configuration. Limited to 255 characters.
   */
  display_name: string;

  /**
   * Whether the policy is enabled. Derived from disabled_at (enabled when
   * disabled_at is unset).
   */
  enabled: boolean;

  /**
   * The finding type this policy is associated with. Immutable after creation;
   * changing it replaces the policy.
   */
  finding_type_id: string;

  /**
   * The integrations this policy applies to.
   */
  integration_ids: Array<string>;

  /**
   * Timestamp when the policy was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the policy was disabled. Omitted from the response when the
   * policy is enabled.
   */
  disabled_at?: string;

  /**
   * Timestamp of the most recent successful policy invocation. Omitted from the
   * response when the policy has never been successfully triggered. Only populated
   * on GET responses; absent on responses from create/update endpoints.
   */
  last_triggered_at?: string;
}

export namespace PolicyCreateResponse {
  /**
   * The actions configured for this policy.
   */
  export interface Actions {
    /**
     * List of remediation types that will be executed.
     */
    remediation_types: Array<Actions.RemediationType>;

    /**
     * List of webhook configurations that will be triggered.
     */
    webhook_configs: Array<Actions.WebhookConfig>;
  }

  export namespace Actions {
    /**
     * A remediation type configured for the policy.
     */
    export interface RemediationType {
      /**
       * Display name/label of the remediation type.
       */
      display_name: string;

      /**
       * The system name of the remediation type.
       */
      remediation_type: string;

      /**
       * Unique identifier for the remediation type.
       */
      remediation_type_id: string;
    }

    /**
     * A webhook configuration associated with the policy.
     */
    export interface WebhookConfig {
      /**
       * Display name/label of the webhook configuration.
       */
      display_name: string;

      /**
       * Unique identifier for the webhook configuration.
       */
      webhook_config_id: string;
    }
  }
}

/**
 * Response body for a policy configuration.
 */
export interface PolicyUpdateResponse {
  /**
   * Unique identifier for the policy configuration.
   */
  id: string;

  /**
   * The actions configured for this policy.
   */
  actions: PolicyUpdateResponse.Actions;

  /**
   * When true, the policy applies to all integrations for the account. When false,
   * it applies only to the specified integration_ids.
   */
  applies_to_all_integrations: boolean;

  /**
   * Timestamp when the policy was created.
   */
  created_at: string;

  /**
   * User-set description of what this policy does. Limited to 1000 characters.
   */
  description: string;

  /**
   * Display name for the policy configuration. Limited to 255 characters.
   */
  display_name: string;

  /**
   * Whether the policy is enabled. Derived from disabled_at (enabled when
   * disabled_at is unset).
   */
  enabled: boolean;

  /**
   * The finding type this policy is associated with. Immutable after creation;
   * changing it replaces the policy.
   */
  finding_type_id: string;

  /**
   * The integrations this policy applies to.
   */
  integration_ids: Array<string>;

  /**
   * Timestamp when the policy was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the policy was disabled. Omitted from the response when the
   * policy is enabled.
   */
  disabled_at?: string;

  /**
   * Timestamp of the most recent successful policy invocation. Omitted from the
   * response when the policy has never been successfully triggered. Only populated
   * on GET responses; absent on responses from create/update endpoints.
   */
  last_triggered_at?: string;
}

export namespace PolicyUpdateResponse {
  /**
   * The actions configured for this policy.
   */
  export interface Actions {
    /**
     * List of remediation types that will be executed.
     */
    remediation_types: Array<Actions.RemediationType>;

    /**
     * List of webhook configurations that will be triggered.
     */
    webhook_configs: Array<Actions.WebhookConfig>;
  }

  export namespace Actions {
    /**
     * A remediation type configured for the policy.
     */
    export interface RemediationType {
      /**
       * Display name/label of the remediation type.
       */
      display_name: string;

      /**
       * The system name of the remediation type.
       */
      remediation_type: string;

      /**
       * Unique identifier for the remediation type.
       */
      remediation_type_id: string;
    }

    /**
     * A webhook configuration associated with the policy.
     */
    export interface WebhookConfig {
      /**
       * Display name/label of the webhook configuration.
       */
      display_name: string;

      /**
       * Unique identifier for the webhook configuration.
       */
      webhook_config_id: string;
    }
  }
}

/**
 * Response body for a policy configuration.
 */
export interface PolicyListResponse {
  /**
   * Unique identifier for the policy configuration.
   */
  id: string;

  /**
   * The actions configured for this policy.
   */
  actions: PolicyListResponse.Actions;

  /**
   * When true, the policy applies to all integrations for the account. When false,
   * it applies only to the specified integration_ids.
   */
  applies_to_all_integrations: boolean;

  /**
   * Timestamp when the policy was created.
   */
  created_at: string;

  /**
   * User-set description of what this policy does. Limited to 1000 characters.
   */
  description: string;

  /**
   * Display name for the policy configuration. Limited to 255 characters.
   */
  display_name: string;

  /**
   * Whether the policy is enabled. Derived from disabled_at (enabled when
   * disabled_at is unset).
   */
  enabled: boolean;

  /**
   * The finding type this policy is associated with. Immutable after creation;
   * changing it replaces the policy.
   */
  finding_type_id: string;

  /**
   * The integrations this policy applies to.
   */
  integration_ids: Array<string>;

  /**
   * Timestamp when the policy was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the policy was disabled. Omitted from the response when the
   * policy is enabled.
   */
  disabled_at?: string;

  /**
   * Timestamp of the most recent successful policy invocation. Omitted from the
   * response when the policy has never been successfully triggered. Only populated
   * on GET responses; absent on responses from create/update endpoints.
   */
  last_triggered_at?: string;
}

export namespace PolicyListResponse {
  /**
   * The actions configured for this policy.
   */
  export interface Actions {
    /**
     * List of remediation types that will be executed.
     */
    remediation_types: Array<Actions.RemediationType>;

    /**
     * List of webhook configurations that will be triggered.
     */
    webhook_configs: Array<Actions.WebhookConfig>;
  }

  export namespace Actions {
    /**
     * A remediation type configured for the policy.
     */
    export interface RemediationType {
      /**
       * Display name/label of the remediation type.
       */
      display_name: string;

      /**
       * The system name of the remediation type.
       */
      remediation_type: string;

      /**
       * Unique identifier for the remediation type.
       */
      remediation_type_id: string;
    }

    /**
     * A webhook configuration associated with the policy.
     */
    export interface WebhookConfig {
      /**
       * Display name/label of the webhook configuration.
       */
      display_name: string;

      /**
       * Unique identifier for the webhook configuration.
       */
      webhook_config_id: string;
    }
  }
}

/**
 * Response from DeletePolicy operation.
 */
export interface PolicyDeleteResponse {
  /**
   * ID of the policy deleted.
   */
  id: string;
}

/**
 * Response body for a policy configuration.
 */
export interface PolicyGetResponse {
  /**
   * Unique identifier for the policy configuration.
   */
  id: string;

  /**
   * The actions configured for this policy.
   */
  actions: PolicyGetResponse.Actions;

  /**
   * When true, the policy applies to all integrations for the account. When false,
   * it applies only to the specified integration_ids.
   */
  applies_to_all_integrations: boolean;

  /**
   * Timestamp when the policy was created.
   */
  created_at: string;

  /**
   * User-set description of what this policy does. Limited to 1000 characters.
   */
  description: string;

  /**
   * Display name for the policy configuration. Limited to 255 characters.
   */
  display_name: string;

  /**
   * Whether the policy is enabled. Derived from disabled_at (enabled when
   * disabled_at is unset).
   */
  enabled: boolean;

  /**
   * The finding type this policy is associated with. Immutable after creation;
   * changing it replaces the policy.
   */
  finding_type_id: string;

  /**
   * The integrations this policy applies to.
   */
  integration_ids: Array<string>;

  /**
   * Timestamp when the policy was last updated.
   */
  updated_at: string;

  /**
   * Timestamp when the policy was disabled. Omitted from the response when the
   * policy is enabled.
   */
  disabled_at?: string;

  /**
   * Timestamp of the most recent successful policy invocation. Omitted from the
   * response when the policy has never been successfully triggered. Only populated
   * on GET responses; absent on responses from create/update endpoints.
   */
  last_triggered_at?: string;
}

export namespace PolicyGetResponse {
  /**
   * The actions configured for this policy.
   */
  export interface Actions {
    /**
     * List of remediation types that will be executed.
     */
    remediation_types: Array<Actions.RemediationType>;

    /**
     * List of webhook configurations that will be triggered.
     */
    webhook_configs: Array<Actions.WebhookConfig>;
  }

  export namespace Actions {
    /**
     * A remediation type configured for the policy.
     */
    export interface RemediationType {
      /**
       * Display name/label of the remediation type.
       */
      display_name: string;

      /**
       * The system name of the remediation type.
       */
      remediation_type: string;

      /**
       * Unique identifier for the remediation type.
       */
      remediation_type_id: string;
    }

    /**
     * A webhook configuration associated with the policy.
     */
    export interface WebhookConfig {
      /**
       * Display name/label of the webhook configuration.
       */
      display_name: string;

      /**
       * Unique identifier for the webhook configuration.
       */
      webhook_config_id: string;
    }
  }
}

export interface PolicyCreateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Actions to execute when this policy is triggered, grouped by action
   * type. A policy must contain at least one action across all groups and may
   * include at most one remediation.
   */
  actions: PolicyCreateParams.Actions;

  /**
   * Body param: When true, the policy applies to all integrations for the account.
   * When false, integration_ids must be provided.
   */
  applies_to_all_integrations: boolean;

  /**
   * Body param: Display name for the policy configuration.
   */
  display_name: string;

  /**
   * Body param: Boolean specifying if the policy is enabled or disabled.
   */
  enabled: boolean;

  /**
   * Body param: The finding type this policy is associated with. All remediation
   * actions must match this finding type.
   */
  finding_type_id: string;

  /**
   * Body param: Optional description of what this policy does.
   */
  description?: string;

  /**
   * Body param: The integrations this policy applies to. Required when
   * applies_to_all_integrations is false.
   */
  integration_ids?: Array<string>;
}

export namespace PolicyCreateParams {
  /**
   * Actions to execute when this policy is triggered, grouped by action type. A
   * policy must contain at least one action across all groups and may include at
   * most one remediation.
   */
  export interface Actions {
    /**
     * Remediation actions to execute (at most one).
     */
    remediation_types?: Array<Actions.RemediationType>;

    /**
     * Webhook actions to execute.
     */
    webhook_configs?: Array<Actions.WebhookConfig>;
  }

  export namespace Actions {
    /**
     * A remediation action to be executed.
     */
    export interface RemediationType {
      /**
       * The ID of the remediation type to execute.
       */
      remediation_type_id: string;
    }

    /**
     * A webhook action to be executed.
     */
    export interface WebhookConfig {
      /**
       * The ID of the webhook configuration to use.
       */
      webhook_config_id: string;
    }
  }
}

export interface PolicyUpdateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Actions to execute when this policy is triggered, grouped by action
   * type. A policy must contain at least one action across all groups and may
   * include at most one remediation.
   */
  actions: PolicyUpdateParams.Actions;

  /**
   * Body param: When true, the policy applies to all integrations for the account.
   * When false, integration_ids must be provided.
   */
  applies_to_all_integrations: boolean;

  /**
   * Body param: Display name for the policy configuration.
   */
  display_name: string;

  /**
   * Body param: Boolean specifying if the policy is enabled or disabled.
   */
  enabled: boolean;

  /**
   * Body param: Optional description of what this policy does.
   */
  description?: string;

  /**
   * Body param: The integrations this policy applies to. Required when
   * applies_to_all_integrations is false.
   */
  integration_ids?: Array<string>;
}

export namespace PolicyUpdateParams {
  /**
   * Actions to execute when this policy is triggered, grouped by action type. A
   * policy must contain at least one action across all groups and may include at
   * most one remediation.
   */
  export interface Actions {
    /**
     * Remediation actions to execute (at most one).
     */
    remediation_types?: Array<Actions.RemediationType>;

    /**
     * Webhook actions to execute.
     */
    webhook_configs?: Array<Actions.WebhookConfig>;
  }

  export namespace Actions {
    /**
     * A remediation action to be executed.
     */
    export interface RemediationType {
      /**
       * The ID of the remediation type to execute.
       */
      remediation_type_id: string;
    }

    /**
     * A webhook action to be executed.
     */
    export interface WebhookConfig {
      /**
       * The ID of the webhook configuration to use.
       */
      webhook_config_id: string;
    }
  }
}

export interface PolicyListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface PolicyDeleteParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface PolicyGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export declare namespace Policies {
  export {
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListResponsesCursorPaginationAfter as PolicyListResponsesCursorPaginationAfter,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
