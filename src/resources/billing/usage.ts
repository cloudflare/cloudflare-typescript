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
   *
   * @deprecated Use `get_account_usage_v2` instead.
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
   * Returns high-level usage information for the account, including coverage, and
   * subscription metadata.
   */
  getAccountUsageInfoV1(
    params: UsageGetAccountUsageInfoV1Params,
    options?: RequestOptions,
  ): APIPromise<UsageGetAccountUsageInfoV1Response> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billable-usage/info`, options) as APIPromise<{
        result: UsageGetAccountUsageInfoV1Response;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns billable usage data for the account. When no query parameters are
   * provided, returns usage for the current billing period.
   */
  getAccountUsageV1(
    params: UsageGetAccountUsageV1Params,
    options?: RequestOptions,
  ): APIPromise<UsageGetAccountUsageV1Response> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billable-usage`, { query, ...options }) as APIPromise<{
        result: UsageGetAccountUsageV1Response;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
  getAccountUsageV2(
    params: UsageGetAccountUsageV2Params,
    options?: RequestOptions,
  ): APIPromise<UsageGetAccountUsageV2Response> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billable/usage`, { query, ...options }) as APIPromise<{
        result: UsageGetAccountUsageV2Response;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns billable usage data for the account. When no query parameters are
   * provided, returns usage for the current billing period.
   *
   * @deprecated Use `get_account_usage_v1` instead.
   */
  paygo(params: UsagePaygoParams, options?: RequestOptions): APIPromise<UsagePaygoResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billable-usage`, { query, ...options }) as APIPromise<{
        result: UsagePaygoResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns high-level usage information for the account, including coverage, and
   * subscription metadata.
   *
   * @deprecated Use `get_account_usage_info_v1` instead.
   */
  paygoInfo(params: UsagePaygoInfoParams, options?: RequestOptions): APIPromise<UsagePaygoInfoResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billable-usage/info`, options) as APIPromise<{
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
     * The unique identifier for the billable metric in the Cloudflare catalog.
     * Cloudflare extension; replaces FOCUS SkuId.
     */
    x_BillableMetricId: string;

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
     * The product category the charge belongs to (e.g., "Developer", "Cloudflare
     * One"). Cloudflare extension; replaces FOCUS ServiceCategory.
     */
    x_ProductCategoryName?: string;

    /**
     * The unique identifier for the product family in the Cloudflare catalog.
     * Cloudflare extension; replaces FOCUS ServiceId.
     */
    x_ProductFamilyId?: string;

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
 * Contains the usage info.
 */
export interface UsageGetAccountUsageInfoV1Response {
  /**
   * Indicates whether the account is covered.
   */
  covered: boolean;

  /**
   * List of subscriptions for the account.
   */
  subscriptions: Array<UsageGetAccountUsageInfoV1Response.Subscription>;
}

export namespace UsageGetAccountUsageInfoV1Response {
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

/**
 * Contains the array of billable usage records.
 */
export type UsageGetAccountUsageV1Response =
  Array<UsageGetAccountUsageV1Response.UsageGetAccountUsageV1ResponseItem>;

export namespace UsageGetAccountUsageV1Response {
  /**
   * Represents a single billable usage record.
   *
   * This schema carries 19 of the 21 columns FOCUS 1.3 marks as mandatory. Mandatory
   * columns are always present, using an explicit null when the value is unknown, so
   * consumers can distinguish "unknown" from "not provided".
   *
   * Known gap 1: `ServiceCategory` (FOCUS 1.3 section 3.1.55) is not yet implemented
   * and does not appear in this schema. Cloudflare's product catalog does not yet
   * have a stakeholder-approved mapping from product family to a FOCUS
   * ServiceCategory value, so the column is omitted entirely rather than shipping
   * unapproved values. It will be added once that mapping exists.
   *
   * Known gap 2: `BillingPeriodEnd` (FOCUS 1.3 section 3.1.4) is not yet implemented
   * and does not appear in this schema, because no authoritative source for it
   * exists today. Deriving it by calendar arithmetic drifts for billing cycle
   * anchors on day 29-31, and the billing provider's current period end describes
   * only the current period, so it is wrong for backdated records.
   * `BillingPeriodStart` is correctly sourced and is still reported, so records
   * carry a billing period start with no corresponding end until an authoritative
   * end date is available.
   *
   * Per FOCUS 1.3 section 4.1.4.1, the columns that are not part of FOCUS
   * (`ServiceFamilyName`, `CumulatedPricingQuantity`, `CumulatedContractedCost`,
   * `ZoneId`, `ZoneName` and `SubscriptionId`) would normally carry an `x_` prefix.
   * They are kept unprefixed here to avoid a breaking change for existing consumers.
   */
  export interface UsageGetAccountUsageV1ResponseItem {
    /**
     * The amount invoiced for this charge. PayGo is billed directly by Cloudflare, so
     * this equals ContractedCost.
     */
    BilledCost: number;

    /**
     * The identifier of the account the charge is billed to (account tag).
     */
    BillingAccountId: string;

    /**
     * The display name of the billing account. Null when the name could not be
     * resolved.
     */
    BillingAccountName: string | null;

    /**
     * Specifies the billing currency code (ISO 4217).
     */
    BillingCurrency: string;

    /**
     * Indicates the start of the billing period. There is no `BillingPeriodEnd`
     * counterpart; see the known gaps described on this schema.
     */
    BillingPeriodStart: string;

    /**
     * Describes the nature of the charge. Always "Usage" for this endpoint, which only
     * returns metered usage.
     */
    ChargeCategory: 'Usage';

    /**
     * Indicates whether the row corrects a previously invoiced billing period. Always
     * null for this endpoint, which does not return corrections.
     */
    ChargeClass: string | null;

    /**
     * A human-readable summary of the charge.
     */
    ChargeDescription: string | null;

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
     * The amortized cost of the charge. PayGo has no upfront commitments, so this
     * equals ContractedCost.
     */
    EffectiveCost: number;

    /**
     * The provider that hosts the infrastructure or platform the service runs on.
     */
    HostProviderName: string;

    /**
     * The entity that issues the invoice for this charge.
     */
    InvoiceIssuerName: string;

    /**
     * The cost at published list prices, before any discount. PayGo has no commitment
     * discounts, so this equals ContractedCost.
     */
    ListCost: number;

    /**
     * Specifies the pricing quantity for this charge period.
     */
    PricingQuantity: number;

    /**
     * The unit that PricingQuantity is expressed in. Unlike ConsumedUnit this is never
     * empty; it falls back to "Count" when the service has no explicit unit.
     */
    PricingUnit: string;

    /**
     * Identifies the Cloudflare service.
     */
    ServiceName: string;

    /**
     * The provider of the purchased service.
     */
    ServiceProviderName: string;

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
 * Contains the array of cost and usage records.
 */
export type UsageGetAccountUsageV2Response =
  Array<UsageGetAccountUsageV2Response.UsageGetAccountUsageV2ResponseItem>;

export namespace UsageGetAccountUsageV2Response {
  /**
   * A single cost and usage record for a metered product within a specific charge
   * period, aligned with the FinOps FOCUS v1.3 specification.
   */
  export interface UsageGetAccountUsageV2ResponseItem {
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
     * The unique identifier for the billable metric in the Cloudflare catalog.
     * Cloudflare extension; replaces FOCUS SkuId.
     */
    x_BillableMetricId: string;

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
     * The product category the charge belongs to (e.g., "Developer", "Cloudflare
     * One"). Cloudflare extension; replaces FOCUS ServiceCategory.
     */
    x_ProductCategoryName?: string;

    /**
     * The unique identifier for the product family in the Cloudflare catalog.
     * Cloudflare extension; replaces FOCUS ServiceId.
     */
    x_ProductFamilyId?: string;

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
   *
   * This schema carries 19 of the 21 columns FOCUS 1.3 marks as mandatory. Mandatory
   * columns are always present, using an explicit null when the value is unknown, so
   * consumers can distinguish "unknown" from "not provided".
   *
   * Known gap 1: `ServiceCategory` (FOCUS 1.3 section 3.1.55) is not yet implemented
   * and does not appear in this schema. Cloudflare's product catalog does not yet
   * have a stakeholder-approved mapping from product family to a FOCUS
   * ServiceCategory value, so the column is omitted entirely rather than shipping
   * unapproved values. It will be added once that mapping exists.
   *
   * Known gap 2: `BillingPeriodEnd` (FOCUS 1.3 section 3.1.4) is not yet implemented
   * and does not appear in this schema, because no authoritative source for it
   * exists today. Deriving it by calendar arithmetic drifts for billing cycle
   * anchors on day 29-31, and the billing provider's current period end describes
   * only the current period, so it is wrong for backdated records.
   * `BillingPeriodStart` is correctly sourced and is still reported, so records
   * carry a billing period start with no corresponding end until an authoritative
   * end date is available.
   *
   * Per FOCUS 1.3 section 4.1.4.1, the columns that are not part of FOCUS
   * (`ServiceFamilyName`, `CumulatedPricingQuantity`, `CumulatedContractedCost`,
   * `ZoneId`, `ZoneName` and `SubscriptionId`) would normally carry an `x_` prefix.
   * They are kept unprefixed here to avoid a breaking change for existing consumers.
   */
  export interface UsagePaygoResponseItem {
    /**
     * The amount invoiced for this charge. PayGo is billed directly by Cloudflare, so
     * this equals ContractedCost.
     */
    BilledCost: number;

    /**
     * The identifier of the account the charge is billed to (account tag).
     */
    BillingAccountId: string;

    /**
     * The display name of the billing account. Null when the name could not be
     * resolved.
     */
    BillingAccountName: string | null;

    /**
     * Specifies the billing currency code (ISO 4217).
     */
    BillingCurrency: string;

    /**
     * Indicates the start of the billing period. There is no `BillingPeriodEnd`
     * counterpart; see the known gaps described on this schema.
     */
    BillingPeriodStart: string;

    /**
     * Describes the nature of the charge. Always "Usage" for this endpoint, which only
     * returns metered usage.
     */
    ChargeCategory: 'Usage';

    /**
     * Indicates whether the row corrects a previously invoiced billing period. Always
     * null for this endpoint, which does not return corrections.
     */
    ChargeClass: string | null;

    /**
     * A human-readable summary of the charge.
     */
    ChargeDescription: string | null;

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
     * The amortized cost of the charge. PayGo has no upfront commitments, so this
     * equals ContractedCost.
     */
    EffectiveCost: number;

    /**
     * The provider that hosts the infrastructure or platform the service runs on.
     */
    HostProviderName: string;

    /**
     * The entity that issues the invoice for this charge.
     */
    InvoiceIssuerName: string;

    /**
     * The cost at published list prices, before any discount. PayGo has no commitment
     * discounts, so this equals ContractedCost.
     */
    ListCost: number;

    /**
     * Specifies the pricing quantity for this charge period.
     */
    PricingQuantity: number;

    /**
     * The unit that PricingQuantity is expressed in. Unlike ConsumedUnit this is never
     * empty; it falls back to "Count" when the service has no explicit unit.
     */
    PricingUnit: string;

    /**
     * Identifies the Cloudflare service.
     */
    ServiceName: string;

    /**
     * The provider of the purchased service.
     */
    ServiceProviderName: string;

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
 * Contains the usage info.
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
   * Query param: End date for the usage query (ISO 8601). Required if `from` is set.
   * When omitted along with `from`, defaults to today. Filters by charge period
   * (when consumption happened), not billing period. The maximum date range is 31
   * days.
   */
  to?: string;
}

export interface UsageGetAccountUsageInfoV1Params {
  /**
   * Represents a Cloudflare resource identifier tag.
   */
  account_id: string;
}

export interface UsageGetAccountUsageV1Params {
  /**
   * Path param: Represents a Cloudflare resource identifier tag.
   */
  account_id: string;

  /**
   * Query param: Start date for the usage query (ISO 8601). The provided time range
   * must include the subscription billing cycle anchor day, otherwise no usage data
   * is returned. Use the info endpoint to retrieve the subscription anchor day.
   */
  from?: string;

  /**
   * Query param: End date for the usage query (ISO 8601).
   */
  to?: string;
}

export interface UsageGetAccountUsageV2Params {
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
   * Query param: Start date for the usage query (ISO 8601). The provided time range
   * must include the subscription billing cycle anchor day, otherwise no usage data
   * is returned. Use the info endpoint to retrieve the subscription anchor day.
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
    type UsageGetAccountUsageInfoV1Response as UsageGetAccountUsageInfoV1Response,
    type UsageGetAccountUsageV1Response as UsageGetAccountUsageV1Response,
    type UsageGetAccountUsageV2Response as UsageGetAccountUsageV2Response,
    type UsagePaygoResponse as UsagePaygoResponse,
    type UsagePaygoInfoResponse as UsagePaygoInfoResponse,
    type UsageGetParams as UsageGetParams,
    type UsageGetAccountUsageInfoV1Params as UsageGetAccountUsageInfoV1Params,
    type UsageGetAccountUsageV1Params as UsageGetAccountUsageV1Params,
    type UsageGetAccountUsageV2Params as UsageGetAccountUsageV2Params,
    type UsagePaygoParams as UsagePaygoParams,
    type UsagePaygoInfoParams as UsagePaygoInfoParams,
  };
}
