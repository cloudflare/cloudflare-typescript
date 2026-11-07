// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActivityAPI from './activity';
import {
  Activity,
  ActivityListParams,
  ActivityListResponse,
  ActivityListResponsesCursorPaginationAfter,
  BaseActivity,
} from './activity';
import * as AuditAPI from './audit';
import { Audit, AuditListParams, AuditListResponse, AuditListResponsesSinglePage, BaseAudit } from './audit';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSpendPolicies extends APIResource {
  static override readonly _key: readonly ['billing', 'spendPolicies'] = Object.freeze([
    'billing',
    'spendPolicies',
  ] as const);

  /**
   * Creates a spend policy. Each account can have only one enabled `usage_block`
   * policy per product. A second one returns `409`. There is no limit on
   * `notification` policies.
   *
   * @example
   * ```ts
   * const spendPolicy =
   *   await client.billing.spendPolicies.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     action: 'notification',
   *     enabled: true,
   *     name: 'Durable Objects alert',
   *     product_id: 'durable_objects',
   *     threshold_cents: 100,
   *     notification_email: 'billing@example.com',
   *   });
   * ```
   */
  create(params: SpendPolicyCreateParams, options?: RequestOptions): APIPromise<SpendPolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/billing/spend-policies`, {
        body,
        ...options,
      }) as APIPromise<{ result: SpendPolicyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the whole spend policy. Every field is required, as on create; there
   * are no partial updates and `PATCH` is not supported. The `If-Match` header must
   * equal the policy's current `version`. On success, `version` goes up by one and
   * the new value is returned in `ETag`.
   *
   * @example
   * ```ts
   * const spendPolicy =
   *   await client.billing.spendPolicies.update(
   *     '6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       action: 'notification',
   *       enabled: true,
   *       name: 'Workers cap',
   *       product_id: 'workers',
   *       threshold_cents: 100,
   *       'If-Match': '"3"',
   *     },
   *   );
   * ```
   */
  update(
    policyID: string,
    params: SpendPolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SpendPolicyUpdateResponse> {
    const { account_id, 'If-Match': ifMatch, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/billing/spend-policies/${policyID}`, {
        body,
        ...options,
        headers: buildHeaders([{ 'If-Match': ifMatch }, options?.headers]),
      }) as APIPromise<{ result: SpendPolicyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns every spend policy on the account that has not been deleted, including
   * disabled ones. Results are sorted by `name`, then `id`. There is no pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const spendPolicyListResponse of client.billing.spendPolicies.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SpendPolicyListParams,
    options?: RequestOptions,
  ): PagePromise<SpendPolicyListResponsesSinglePage, SpendPolicyListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/billing/spend-policies`,
      SinglePage<SpendPolicyListResponse>,
      options,
    );
  }

  /**
   * Soft-deletes the spend policy. The policy is disabled and no longer appears in
   * list, get or audit responses. The `If-Match` header must equal the policy's
   * current `version`.
   *
   * @example
   * ```ts
   * const spendPolicy =
   *   await client.billing.spendPolicies.delete(
   *     '6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       'If-Match': '"3"',
   *     },
   *   );
   * ```
   */
  delete(
    policyID: string,
    params: SpendPolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SpendPolicyDeleteResponse> {
    const { account_id, 'If-Match': ifMatch } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/billing/spend-policies/${policyID}`, {
        ...options,
        headers: buildHeaders([{ 'If-Match': ifMatch }, options?.headers]),
      }) as APIPromise<{ result: SpendPolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns one spend policy. The `ETag` response header holds the current
   * `version`; send it as `If-Match` on a later update or delete.
   *
   * @example
   * ```ts
   * const spendPolicy = await client.billing.spendPolicies.get(
   *   '6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    policyID: string,
    params: SpendPolicyGetParams,
    options?: RequestOptions,
  ): APIPromise<SpendPolicyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/billing/spend-policies/${policyID}`,
        options,
      ) as APIPromise<{ result: SpendPolicyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class SpendPolicies extends BaseSpendPolicies {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);
}

export type SpendPolicyListResponsesSinglePage = SinglePage<SpendPolicyListResponse>;

/**
 * A spend policy.
 */
export interface SpendPolicyCreateResponse {
  /**
   * The unique identifier of the spend policy.
   */
  id: string;

  /**
   * Internal numeric ID of the account that owns the policy. This is not the account
   * tag used in the path.
   */
  account_id: number;

  /**
   * The action taken when the threshold is reached. `notification` sends an email to
   * `notification_email`. `usage_block` blocks further usage of the product until
   * the end of the billing period. Raising the threshold above the current balance,
   * disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * Whether the policy is evaluated.
   */
  enabled: boolean;

  /**
   * Display name of the policy.
   */
  name: string;

  /**
   * Email address that receives notifications. An empty string when none is set.
   */
  notification_email: string;

  /**
   * The product the policy applies to: `workers` or `durable_objects`. Each
   * product's balance and policies are separate. Both products support
   * `notification` and `usage_block` policies on create and update.
   */
  product_id: 'workers' | 'durable_objects';

  /**
   * The spend threshold for the current billing period, in US cents.
   */
  threshold_cents: number;

  /**
   * Optimistic-concurrency version. It starts at 1 and goes up by one on every
   * update or delete. This value is also returned in `ETag`.
   */
  version: number;

  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  current_state?: SpendPolicyCreateResponse.CurrentState;
}

export namespace SpendPolicyCreateResponse {
  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  export interface CurrentState {
    balance_cents: number | null;

    billing_period_end: string | null;

    billing_period_start: string | null;

    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    enforcement: CurrentState.Enforcement | null;

    /**
     * Evaluation time; not the timestamp of the latest usage event.
     */
    evaluated_at: string;

    /**
     * Threshold evaluation, not proof of an edge cap. No current active period yields
     * no_current_period for enabled policies; failed aggregate reads yield unavailable
     * for enabled policies. Disabled policies report disabled. Neither
     * no_current_period nor unavailable implies a zero balance or below-limit state.
     * Operators may disable current-state reads, in which case current_state is
     * omitted.
     */
    status: 'disabled' | 'no_current_period' | 'unavailable' | 'below_limit' | 'limit_reached';
  }

  export namespace CurrentState {
    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    export interface Enforcement {
      applied_generation: number;

      delivery_status: 'pending' | 'leased' | 'retry' | 'succeeded';

      desired_generation: number;

      desired_state: 'active' | 'inactive';

      expires_at: string | null;
    }
  }
}

/**
 * A spend policy.
 */
export interface SpendPolicyUpdateResponse {
  /**
   * The unique identifier of the spend policy.
   */
  id: string;

  /**
   * Internal numeric ID of the account that owns the policy. This is not the account
   * tag used in the path.
   */
  account_id: number;

  /**
   * The action taken when the threshold is reached. `notification` sends an email to
   * `notification_email`. `usage_block` blocks further usage of the product until
   * the end of the billing period. Raising the threshold above the current balance,
   * disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * Whether the policy is evaluated.
   */
  enabled: boolean;

  /**
   * Display name of the policy.
   */
  name: string;

  /**
   * Email address that receives notifications. An empty string when none is set.
   */
  notification_email: string;

  /**
   * The product the policy applies to: `workers` or `durable_objects`. Each
   * product's balance and policies are separate. Both products support
   * `notification` and `usage_block` policies on create and update.
   */
  product_id: 'workers' | 'durable_objects';

  /**
   * The spend threshold for the current billing period, in US cents.
   */
  threshold_cents: number;

  /**
   * Optimistic-concurrency version. It starts at 1 and goes up by one on every
   * update or delete. This value is also returned in `ETag`.
   */
  version: number;

  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  current_state?: SpendPolicyUpdateResponse.CurrentState;
}

export namespace SpendPolicyUpdateResponse {
  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  export interface CurrentState {
    balance_cents: number | null;

    billing_period_end: string | null;

    billing_period_start: string | null;

    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    enforcement: CurrentState.Enforcement | null;

    /**
     * Evaluation time; not the timestamp of the latest usage event.
     */
    evaluated_at: string;

    /**
     * Threshold evaluation, not proof of an edge cap. No current active period yields
     * no_current_period for enabled policies; failed aggregate reads yield unavailable
     * for enabled policies. Disabled policies report disabled. Neither
     * no_current_period nor unavailable implies a zero balance or below-limit state.
     * Operators may disable current-state reads, in which case current_state is
     * omitted.
     */
    status: 'disabled' | 'no_current_period' | 'unavailable' | 'below_limit' | 'limit_reached';
  }

  export namespace CurrentState {
    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    export interface Enforcement {
      applied_generation: number;

      delivery_status: 'pending' | 'leased' | 'retry' | 'succeeded';

      desired_generation: number;

      desired_state: 'active' | 'inactive';

      expires_at: string | null;
    }
  }
}

/**
 * A spend policy.
 */
export interface SpendPolicyListResponse {
  /**
   * The unique identifier of the spend policy.
   */
  id: string;

  /**
   * Internal numeric ID of the account that owns the policy. This is not the account
   * tag used in the path.
   */
  account_id: number;

  /**
   * The action taken when the threshold is reached. `notification` sends an email to
   * `notification_email`. `usage_block` blocks further usage of the product until
   * the end of the billing period. Raising the threshold above the current balance,
   * disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * Whether the policy is evaluated.
   */
  enabled: boolean;

  /**
   * Display name of the policy.
   */
  name: string;

  /**
   * Email address that receives notifications. An empty string when none is set.
   */
  notification_email: string;

  /**
   * The product the policy applies to: `workers` or `durable_objects`. Each
   * product's balance and policies are separate. Both products support
   * `notification` and `usage_block` policies on create and update.
   */
  product_id: 'workers' | 'durable_objects';

  /**
   * The spend threshold for the current billing period, in US cents.
   */
  threshold_cents: number;

  /**
   * Optimistic-concurrency version. It starts at 1 and goes up by one on every
   * update or delete. This value is also returned in `ETag`.
   */
  version: number;

  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  current_state?: SpendPolicyListResponse.CurrentState;
}

export namespace SpendPolicyListResponse {
  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  export interface CurrentState {
    balance_cents: number | null;

    billing_period_end: string | null;

    billing_period_start: string | null;

    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    enforcement: CurrentState.Enforcement | null;

    /**
     * Evaluation time; not the timestamp of the latest usage event.
     */
    evaluated_at: string;

    /**
     * Threshold evaluation, not proof of an edge cap. No current active period yields
     * no_current_period for enabled policies; failed aggregate reads yield unavailable
     * for enabled policies. Disabled policies report disabled. Neither
     * no_current_period nor unavailable implies a zero balance or below-limit state.
     * Operators may disable current-state reads, in which case current_state is
     * omitted.
     */
    status: 'disabled' | 'no_current_period' | 'unavailable' | 'below_limit' | 'limit_reached';
  }

  export namespace CurrentState {
    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    export interface Enforcement {
      applied_generation: number;

      delivery_status: 'pending' | 'leased' | 'retry' | 'succeeded';

      desired_generation: number;

      desired_state: 'active' | 'inactive';

      expires_at: string | null;
    }
  }
}

export interface SpendPolicyDeleteResponse {
  /**
   * The unique identifier of the spend policy.
   */
  id: string;
}

/**
 * A spend policy.
 */
export interface SpendPolicyGetResponse {
  /**
   * The unique identifier of the spend policy.
   */
  id: string;

  /**
   * Internal numeric ID of the account that owns the policy. This is not the account
   * tag used in the path.
   */
  account_id: number;

  /**
   * The action taken when the threshold is reached. `notification` sends an email to
   * `notification_email`. `usage_block` blocks further usage of the product until
   * the end of the billing period. Raising the threshold above the current balance,
   * disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * Whether the policy is evaluated.
   */
  enabled: boolean;

  /**
   * Display name of the policy.
   */
  name: string;

  /**
   * Email address that receives notifications. An empty string when none is set.
   */
  notification_email: string;

  /**
   * The product the policy applies to: `workers` or `durable_objects`. Each
   * product's balance and policies are separate. Both products support
   * `notification` and `usage_block` policies on create and update.
   */
  product_id: 'workers' | 'durable_objects';

  /**
   * The spend threshold for the current billing period, in US cents.
   */
  threshold_cents: number;

  /**
   * Optimistic-concurrency version. It starts at 1 and goes up by one on every
   * update or delete. This value is also returned in `ETag`.
   */
  version: number;

  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  current_state?: SpendPolicyGetResponse.CurrentState;
}

export namespace SpendPolicyGetResponse {
  /**
   * Read-only state on list/get responses, evaluated from the latest owning
   * projector snapshot at request time, independently of the API replica.
   * Configuration enabled/version/ETag do not change when a cycle rolls over. Audit
   * history remains unchanged. Missing during a rolling upgrade or on mutation
   * responses; clients must treat missing state as unavailable. Balances are
   * asynchronous estimates, not a synchronous usage read.
   */
  export interface CurrentState {
    balance_cents: number | null;

    billing_period_end: string | null;

    billing_period_start: string | null;

    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    enforcement: CurrentState.Enforcement | null;

    /**
     * Evaluation time; not the timestamp of the latest usage event.
     */
    evaluated_at: string;

    /**
     * Threshold evaluation, not proof of an edge cap. No current active period yields
     * no_current_period for enabled policies; failed aggregate reads yield unavailable
     * for enabled policies. Disabled policies report disabled. Neither
     * no_current_period nor unavailable implies a zero balance or below-limit state.
     * Operators may disable current-state reads, in which case current_state is
     * omitted.
     */
    status: 'disabled' | 'no_current_period' | 'unavailable' | 'below_limit' | 'limit_reached';
  }

  export namespace CurrentState {
    /**
     * Durable desired cap and delivery bookkeeping for this policy, or null if no
     * owned effect exists. Separate from threshold evaluation: pending/leased/retry
     * can lag the new billing period. Succeeded with equal generations means delivery
     * completed, not an EWC readback.
     */
    export interface Enforcement {
      applied_generation: number;

      delivery_status: 'pending' | 'leased' | 'retry' | 'succeeded';

      desired_generation: number;

      desired_state: 'active' | 'inactive';

      expires_at: string | null;
    }
  }
}

export interface SpendPolicyCreateParams {
  /**
   * Path param: Identifies the Cloudflare account (account tag).
   */
  account_id: string;

  /**
   * Body param: The action taken when the threshold is reached. `notification` sends
   * an email to `notification_email`. `usage_block` blocks further usage of the
   * product until the end of the billing period. Raising the threshold above the
   * current balance, disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * Body param: Whether the policy is evaluated.
   */
  enabled: boolean;

  /**
   * Body param: Display name of the policy. After surrounding whitespace is trimmed,
   * it must be 1 to 200 bytes long. The value is stored as sent, untrimmed.
   */
  name: string;

  /**
   * Body param: The product the policy applies to: `workers` or `durable_objects`.
   * Each product's balance and policies are separate. Both products support
   * `notification` and `usage_block` policies on create and update.
   */
  product_id: 'workers' | 'durable_objects';

  /**
   * Body param: The spend threshold for the current billing period, in US cents.
   * Must be greater than zero.
   */
  threshold_cents: number;

  /**
   * Body param: Email address that receives notifications. Required when `action` is
   * `notification`. When set, it must be a bare address (`user@example.com`);
   * display-name forms such as `Name <user@example.com>` are rejected.
   */
  notification_email?: string;
}

export interface SpendPolicyUpdateParams {
  /**
   * Path param: Identifies the Cloudflare account (account tag).
   */
  account_id: string;

  /**
   * Body param: The action taken when the threshold is reached. `notification` sends
   * an email to `notification_email`. `usage_block` blocks further usage of the
   * product until the end of the billing period. Raising the threshold above the
   * current balance, disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * Body param: Whether the policy is evaluated.
   */
  enabled: boolean;

  /**
   * Body param: Display name of the policy. After surrounding whitespace is trimmed,
   * it must be 1 to 200 bytes long. The value is stored as sent, untrimmed.
   */
  name: string;

  /**
   * Body param: The product the policy applies to: `workers` or `durable_objects`.
   * Each product's balance and policies are separate. Both products support
   * `notification` and `usage_block` policies on create and update.
   */
  product_id: 'workers' | 'durable_objects';

  /**
   * Body param: The spend threshold for the current billing period, in US cents.
   * Must be greater than zero.
   */
  threshold_cents: number;

  /**
   * Header param: The policy `version` the change is based on, as returned in
   * `ETag`. Quoted (`"3"`) and bare (`3`) values are both accepted. Weak ETags
   * (`W/"3"`) and `*` are not.
   */
  'If-Match': string;

  /**
   * Body param: Email address that receives notifications. Required when `action` is
   * `notification`. When set, it must be a bare address (`user@example.com`);
   * display-name forms such as `Name <user@example.com>` are rejected.
   */
  notification_email?: string;
}

export interface SpendPolicyListParams {
  /**
   * Identifies the Cloudflare account (account tag).
   */
  account_id: string;
}

export interface SpendPolicyDeleteParams {
  /**
   * Path param: Identifies the Cloudflare account (account tag).
   */
  account_id: string;

  /**
   * Header param: The policy `version` the change is based on, as returned in
   * `ETag`. Quoted (`"3"`) and bare (`3`) values are both accepted. Weak ETags
   * (`W/"3"`) and `*` are not.
   */
  'If-Match': string;
}

export interface SpendPolicyGetParams {
  /**
   * Identifies the Cloudflare account (account tag).
   */
  account_id: string;
}

SpendPolicies.Audit = Audit;
SpendPolicies.BaseAudit = BaseAudit;
SpendPolicies.Activity = Activity;
SpendPolicies.BaseActivity = BaseActivity;

export declare namespace SpendPolicies {
  export {
    type SpendPolicyCreateResponse as SpendPolicyCreateResponse,
    type SpendPolicyUpdateResponse as SpendPolicyUpdateResponse,
    type SpendPolicyListResponse as SpendPolicyListResponse,
    type SpendPolicyDeleteResponse as SpendPolicyDeleteResponse,
    type SpendPolicyGetResponse as SpendPolicyGetResponse,
    type SpendPolicyListResponsesSinglePage as SpendPolicyListResponsesSinglePage,
    type SpendPolicyCreateParams as SpendPolicyCreateParams,
    type SpendPolicyUpdateParams as SpendPolicyUpdateParams,
    type SpendPolicyListParams as SpendPolicyListParams,
    type SpendPolicyDeleteParams as SpendPolicyDeleteParams,
    type SpendPolicyGetParams as SpendPolicyGetParams,
  };

  export {
    Audit as Audit,
    BaseAudit as BaseAudit,
    type AuditListResponse as AuditListResponse,
    type AuditListResponsesSinglePage as AuditListResponsesSinglePage,
    type AuditListParams as AuditListParams,
  };

  export {
    Activity as Activity,
    BaseActivity as BaseActivity,
    type ActivityListResponse as ActivityListResponse,
    type ActivityListResponsesCursorPaginationAfter as ActivityListResponsesCursorPaginationAfter,
    type ActivityListParams as ActivityListParams,
  };
}
