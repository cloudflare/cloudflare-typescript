// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUsage extends APIResource {
  static override readonly _key: readonly ['billing', 'usage'] = Object.freeze(['billing', 'usage'] as const);

  /**
   * Returns billable usage data for PayGo (self-serve) accounts. When no query
   * parameters are provided, returns usage for the current billing period. This
   * endpoint is currently in beta and access is restricted to select accounts.
   */
  paygo(
    params: UsagePaygoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsagePaygoResponse> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/billing/usage/paygo`, {
        query,
        ...options,
      }) as APIPromise<{ result: UsagePaygoResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Usage extends BaseUsage {}

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
     * Specifies the unit of measurement for consumed quantity.
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
  }
}

export interface UsagePaygoParams {
  /**
   * Path param: Represents a Cloudflare resource identifier tag.
   */
  account_id?: string;

  /**
   * Query param: Defines the start date for the usage query (e.g., 2025-02-01).
   */
  from?: string;

  /**
   * Query param: Defines the end date for the usage query (e.g., 2025-03-01).
   */
  to?: string;
}

export declare namespace Usage {
  export { type UsagePaygoResponse as UsagePaygoResponse, type UsagePaygoParams as UsagePaygoParams };
}
