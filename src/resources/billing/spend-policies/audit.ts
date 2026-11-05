// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAudit extends APIResource {
  static override readonly _key: readonly ['billing', 'spendPolicies', 'audit'] = Object.freeze([
    'billing',
    'spendPolicies',
    'audit',
  ] as const);

  /**
   * Returns the policy's evaluation history, newest first. At most one
   * threshold-crossing entry (`limit_reached`) is recorded per policy version and
   * billing period, so a policy update can record a new entry without any change in
   * balance. Disabled policies still return their history; deleted policies return
   * `404`. There is no pagination: use `limit` to set how many entries come back.
   * Defaults to `period=current_billing_cycle`, resolved from the product's
   * canonical aggregates, not calendar months. Crossings match their recorded
   * billing-period bounds, even if recorded late. Set `period=all` for history
   * across cycles. Filtering happens before LIMIT. No current cycle returns an empty
   * array; unavailable or disabled cycle resolution returns `503` with code `1013`,
   * never an empty success.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditListResponse of client.billing.spendPolicies.audit.list(
   *   '6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    policyID: string,
    params: AuditListParams,
    options?: RequestOptions,
  ): PagePromise<AuditListResponsesSinglePage, AuditListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/billing/spend-policies/${policyID}/audit`,
      SinglePage<AuditListResponse>,
      { query, ...options },
    );
  }
}
export class Audit extends BaseAudit {}

export type AuditListResponsesSinglePage = SinglePage<AuditListResponse>;

/**
 * A state transition recorded when the policy was evaluated against the account's
 * balance.
 */
export interface AuditListResponse {
  /**
   * The action taken when the threshold is reached. `notification` sends an email to
   * `notification_email`. `usage_block` blocks further usage of the product until
   * the end of the billing period. Raising the threshold above the current balance,
   * disabling the policy, or deleting it lifts the block early.
   */
  action: 'notification' | 'usage_block';

  /**
   * The account's balance for the product at evaluation time, in US cents.
   */
  balance_cents: number;

  /**
   * Exclusive end of the billing period that was evaluated.
   */
  billing_period_end: string;

  /**
   * Inclusive start of the billing period that was evaluated.
   */
  billing_period_start: string;

  /**
   * When the entry was recorded.
   */
  created_at: string;

  /**
   * The policy `version` that was evaluated.
   */
  policy_version: number;

  /**
   * A human-readable explanation of the trigger.
   */
  reason: string;

  /**
   * What caused the evaluation. `kafka` means a balance update. `policy_revision`
   * means a change to the policy.
   */
  source: 'kafka' | 'policy_revision';

  /**
   * The policy threshold at evaluation time, in US cents.
   */
  threshold_cents: number;

  /**
   * The trigger recorded at evaluation time. New evaluations record `limit_reached`
   * when the balance reaches or exceeds the configured threshold. Earlier entries
   * retain their recorded trigger.
   */
  trigger: string;
}

export interface AuditListParams {
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

export declare namespace Audit {
  export {
    type AuditListResponse as AuditListResponse,
    type AuditListResponsesSinglePage as AuditListResponsesSinglePage,
    type AuditListParams as AuditListParams,
  };
}
