// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import {
  CursorPaginationAfter,
  type CursorPaginationAfterParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseActivity extends APIResource {
  static override readonly _key: readonly ['billing', 'spendPolicies', 'activity'] = Object.freeze([
    'billing',
    'spendPolicies',
    'activity',
  ] as const);

  /**
   * Returns configuration history from immutable policy revisions for the account,
   * including deleted policies. Entries contain before/after values and verified
   * actor attribution. Pages use descending revision IDs, not event or commit order;
   * refresh the first page for new entries. This cursor is not an incremental
   * consumer checkpoint. Defaults to `period=current_billing_cycle`: each revision's
   * timestamp must be within its product's current subscription cycle (inclusive
   * start, exclusive end). Each product's cycle is resolved independently from
   * canonical aggregates, including for disabled or deleted policies. Set
   * `period=all` for history across cycles. Filtering happens before pagination. No
   * current cycles returns an empty page; unavailable or disabled cycle resolution
   * returns `503` with code `1013`. Cursors pin resolved cycle bounds across pages
   * and must be used with the same period selection. Cursors obtained before this
   * filter was introduced must be refreshed.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const activityListResponse of client.billing.spendPolicies.activity.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ActivityListParams,
    options?: RequestOptions,
  ): PagePromise<ActivityListResponsesCursorPaginationAfter, ActivityListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/billing/spend-policies/activity`,
      CursorPaginationAfter<ActivityListResponse>,
      { query, ...options },
    );
  }
}
export class Activity extends BaseActivity {}

export type ActivityListResponsesCursorPaginationAfter = CursorPaginationAfter<ActivityListResponse>;

export interface ActivityListResponse {
  id: string;

  action: 'created' | 'updated' | 'enabled' | 'disabled' | 'deleted';

  /**
   * Verified actor identifier, unknown when absent, or trusted internal actor.
   */
  actor: string;

  details: ActivityListResponse.Details;

  occurred_at: string;

  /**
   * The unique identifier of the spend policy.
   */
  policy_id: string;

  policy_version: number;

  product_id: string;
}

export namespace ActivityListResponse {
  export interface Details {
    /**
     * A spend policy.
     */
    after?: Details.After;

    /**
     * Prior configuration; null on creation or if a previous revision is unavailable.
     */
    before?: Details.Before | null;
  }

  export namespace Details {
    /**
     * A spend policy.
     */
    export interface After {
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
      current_state?: After.CurrentState;
    }

    export namespace After {
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
     * Prior configuration; null on creation or if a previous revision is unavailable.
     */
    export interface Before {
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
      current_state?: Before.CurrentState;
    }

    export namespace Before {
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
  }
}

export interface ActivityListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifies the Cloudflare account (account tag).
   */
  account_id: string;

  /**
   * Query param: Maximum number of audit entries to return. Defaults to 50. Values
   * above 100 are capped at 100 rather than rejected.
   */
  limit?: number;

  /**
   * Query param: Select current subscription billing-cycle history or history across
   * all cycles.
   */
  period?: 'current_billing_cycle' | 'all';
}

export declare namespace Activity {
  export {
    type ActivityListResponse as ActivityListResponse,
    type ActivityListResponsesCursorPaginationAfter as ActivityListResponsesCursorPaginationAfter,
    type ActivityListParams as ActivityListParams,
  };
}
