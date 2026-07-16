// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUsage extends APIResource {
  static override readonly _key: readonly ['billing', 'usage'] = Object.freeze(['billing', 'usage'] as const);

  /**
   * Returns cost and usage data for a single Cloudflare account, aligned with the
   * [FinOps FOCUS v1.3](https://focus.finops.org/focus-specification/v1-3/) Cost and
   * Usage dataset specification.
   *
   * Each record represents one billable metric for one account on one day. This
   * includes all metered usage, including usage that falls within free-tier
   * allowances and may result in zero cost.
   *
   * **Note:** Cost and pricing fields are not yet populated and will be absent from
   * responses until billing integration is complete.
   *
   * When `from` and `to` are omitted, defaults to the start of the current month
   * through today. The maximum date range is 31 days.
   */
  get(params: UsageGetParams, options?: RequestOptions): APIPromise<UsageGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billable/usage`, { query, ...options }) as APIPromise<{
        result: UsageGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns billable usage data for PayGo (self-serve) accounts. When no query
   * parameters are provided, returns usage for the current billing period.
   */
  paygo(params: UsagePaygoParams, options?: RequestOptions): APIPromise<UsagePaygoResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/paygo-usage`, { query, ...options }) as APIPromise<{
        result: UsagePaygoResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns high-level usage information for the account, including coverage, and
   * subscription metadata.
   */
  paygoInfo(params: UsagePaygoInfoParams, options?: RequestOptions): APIPromise<UsagePaygoInfoResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/paygo-usage-info`, options) as APIPromise<{
        result: UsagePaygoInfoResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Usage extends BaseUsage {}

/**
 * Contains the array of cost and usage records.
 */
export type UsageGetResponse = Array<UsageGetResponse.UsageGetResponseItem>;

export namespace UsageGetResponse {
  /**
   * A single cost and usage record for a metered product within a specific charge
   * period, aligned with the FinOps FOCUS v1.3 specification.
   */
  export interface UsageGetResponseItem {
    /**
     * Public identifier of the Cloudflare account (account tag).
     */
    BillingAccountId: string;

    /**
     * Display name of the Cloudflare account.
     */
    BillingAccountName: string;

    /**
     * Highest-level classification of a charge based on the nature of how it gets
     * billed. Currently only "Usage" is supported.
     */
    ChargeCategory: 'Usage';

    /**
     * Self-contained summary of the charge's purpose and price.
     */
    ChargeDescription: string;

    /**
     * Indicates how often a charge occurs. Currently only "Usage-Based" is supported.
     */
    ChargeFrequency: 'Usage-Based';

    /**
     * Exclusive end of the time interval during which the usage was consumed.
     */
    ChargePeriodEnd: string;

    /**
     * Inclusive start of the time interval during which the usage was consumed.
     */
    ChargePeriodStart: string;

    /**
     * Measured usage amount within the charge period. Reflects raw metered consumption
     * before pricing transformations.
     */
    ConsumedQuantity: number;

    /**
     * Unit of measure for the consumed quantity (e.g., "GB", "Requests",
     * "vCPU-Hours").
     */
    ConsumedUnit: string;

    /**
     * Name of the entity providing the underlying infrastructure or platform.
     */
    HostProviderName: string;

    /**
     * Name of the entity responsible for invoicing for the services consumed.
     */
    InvoiceIssuerName: string;

    /**
     * Name of the entity that made the services available for purchase.
     */
    ServiceProviderName: string;

    /**
     * The display name of the billable metric. Cloudflare extension; replaces FOCUS
     * SkuMeter.
     */
    x_BillableMetricName: string;

    /**
     * A charge serving as the basis for invoicing, inclusive of all reduced rates and
     * discounts while excluding the amortization of upfront charges (one-time or
     * recurring).
     */
    BilledCost?: number | null;

    /**
     * Currency that a charge was billed in (ISO 4217).
     */
    BillingCurrency?: string | null;

    /**
     * Exclusive end of the billing cycle that contains this usage record.
     */
    BillingPeriodEnd?: string | null;

    /**
     * Inclusive start of the billing cycle that contains this usage record.
     */
    BillingPeriodStart?: string | null;

    /**
     * Indicates whether the row represents a correction to one or more charges
     * invoiced in a previous billing period.
     */
    ChargeClass?: 'Correction' | null;

    /**
     * Cost calculated by multiplying ContractedUnitPrice and the corresponding
     * PricingQuantity.
     */
    ContractedCost?: number | null;

    /**
     * The agreed-upon unit price for a single PricingUnit of the associated billable
     * metric, inclusive of negotiated discounts, if present, while excluding any other
     * discounts.
     */
    ContractedUnitPrice?: number | null;

    /**
     * The amortized cost of the charge after applying all reduced rates, discounts,
     * and the applicable portion of relevant, prepaid purchases (one-time or
     * recurring) that covered the charge.
     */
    EffectiveCost?: number | null;

    /**
     * Cost calculated by multiplying ListUnitPrice and the corresponding
     * PricingQuantity.
     */
    ListCost?: number | null;

    /**
     * Suggested provider-published unit price for a single PricingUnit of the
     * associated billable metric, exclusive of any discounts.
     */
    ListUnitPrice?: number | null;

    /**
     * Volume of a given service used or purchased, based on the PricingUnit.
     */
    PricingQuantity?: number | null;

    /**
     * Provider-specified measurement unit for determining unit prices, indicating how
     * the provider rates measured usage after applying pricing rules like block
     * pricing.
     */
    PricingUnit?: string | null;

    /**
     * Provider-assigned identifier for an isolated geographic area where a service is
     * provided.
     */
    RegionId?: string | null;

    /**
     * Name of an isolated geographic area where a service is provided.
     */
    RegionName?: string | null;

    /**
     * Unique identifier assigned to a grouping of services. For Cloudflare, this is
     * the subscription or contract ID.
     */
    SubAccountId?: string;

    /**
     * Name assigned to a grouping of services. For Cloudflare, this is the
     * subscription or contract display name.
     */
    SubAccountName?: string;

    /**
     * The unique identifier for the billable metric in the Cloudflare catalog.
     * Cloudflare extension; replaces FOCUS SkuId.
     */
    x_BillableMetricId?: string;

    /**
     * The product family the charge belongs to (e.g., "R2", "Workers"). Cloudflare
     * extension; replaces FOCUS ServiceName.
     */
    x_ProductFamilyName?: string;

    /**
     * The identifier for the Cloudflare zone (zone tag). Cloudflare extension.
     */
    x_ZoneId?: string | null;

    /**
     * The display name of the Cloudflare zone. Cloudflare extension.
     */
    x_ZoneName?: string | null;
  }
}

/**
 * Contains the array of billable usage records.
 */
export type UsagePaygoResponse = Array<UsagePaygoResponse.UsagePaygoResponseItem>;

export namespace UsagePaygoResponse {
  /**
   * Represents a single billable usage record.
   */
  export interface UsagePaygoResponseItem {
    /**
     * Specifies the billing currency code (ISO 4217).
     */
    BillingCurrency: string;

    /**
     * Indicates the start of the billing period.
     */
    BillingPeriodStart: string;

    /**
     * Indicates the end of the charge period.
     */
    ChargePeriodEnd: string;

    /**
     * Indicates the start of the charge period.
     */
    ChargePeriodStart: string;

    /**
     * Specifies the quantity consumed during this charge period.
     */
    ConsumedQuantity: number;

    /**
     * A display name for the unit of measurement used for the product (for example,
     * "GB-months", "GB-seconds"). May be empty when the unit is implicit in the
     * service name.
     */
    ConsumedUnit: string;

    /**
     * Specifies the cost for this charge period in the billing currency.
     */
    ContractedCost: number;

    /**
     * Specifies the cumulated cost for the billing period in the billing currency.
     */
    CumulatedContractedCost: number;

    /**
     * Specifies the cumulated pricing quantity for the billing period.
     */
    CumulatedPricingQuantity: number;

    /**
     * Specifies the pricing quantity for this charge period.
     */
    PricingQuantity: number;

    /**
     * Identifies the Cloudflare service.
     */
    ServiceName: string;

    /**
     * Identifies the product family for the Cloudflare service.
     */
    ServiceFamilyName?: string;

    /**
     * The identifier for the Cloudflare subscription.
     */
    SubscriptionId?: string | null;

    /**
     * The identifier for the Cloudflare zone (zone tag).
     */
    ZoneId?: string | null;

    /**
     * The display name of the Cloudflare zone.
     */
    ZoneName?: string | null;
  }
}

/**
 * Contains the paygo usage info.
 */
export interface UsagePaygoInfoResponse {
  /**
   * Indicates whether the account is covered.
   */
  covered: boolean;

  /**
   * List of subscriptions for the account.
   */
  subscriptions: Array<UsagePaygoInfoResponse.Subscription>;
}

export namespace UsagePaygoInfoResponse {
  export interface Subscription {
    /**
     * The identifier for the Cloudflare subscription.
     */
    id: string;

    /**
     * The subscription billing cycle anchor timestamp.
     */
    billing_cycle_anchor_timestamp: string;

    /**
     * The subscription start timestamp.
     */
    start_timestamp: string;

    /**
     * The subscription end timestamp. Omitted for active subscriptions; present only
     * when the subscription has been cancelled.
     */
    end_timestamp?: string;
  }
}

export interface UsageGetParams {
  /**
   * Path param: Represents a Cloudflare resource identifier tag.
   */
  account_id: string;

  /**
   * Query param: Start date for the usage query (ISO 8601). Required if `to` is set.
   * When omitted along with `to`, defaults to the start of the current month.
   * Filters by charge period (when consumption happened), not billing period. The
   * maximum date range is 31 days.
   */
  from?: string;

  /**
   * Query param: Filter results by one or more billable metric ids. Repeat the
   * parameter to filter by multiple metrics. Maximum 10 values.
   */
  metric_id?: Array<string>;

  /**
   * Query param: End date for the usage query (ISO 8601). Required if `from` is set.
   * When omitted along with `from`, defaults to today. Filters by charge period
   * (when consumption happened), not billing period. The maximum date range is 31
   * days.
   */
  to?: string;
}

export interface UsagePaygoParams {
  /**
   * Path param: Represents a Cloudflare resource identifier tag.
   */
  account_id: string;

  /**
   * Query param: Start date for the usage query (ISO 8601).
   */
  from?: string;

  /**
   * Query param: End date for the usage query (ISO 8601).
   */
  to?: string;
}

export interface UsagePaygoInfoParams {
  /**
   * Represents a Cloudflare resource identifier tag.
   */
  account_id: string;
}

export declare namespace Usage {
  export {
    type UsageGetResponse as UsageGetResponse,
    type UsagePaygoResponse as UsagePaygoResponse,
    type UsagePaygoInfoResponse as UsagePaygoInfoResponse,
    type UsageGetParams as UsageGetParams,
    type UsagePaygoParams as UsagePaygoParams,
    type UsagePaygoInfoParams as UsagePaygoInfoParams,
  };
}
