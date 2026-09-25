// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRatePlans extends APIResource {
  static override readonly _key: readonly ['billing', 'ratePlans'] = Object.freeze([
    'billing',
    'ratePlans',
  ] as const);

  /**
   * Gets a rate plan's details by its public key (e.g., 'teams_free',
   * 'cf_pro_20_20'). This is a public catalog endpoint, so authentication is not
   * enforced and credentials are accepted but not required.
   *
   * @example
   * ```ts
   * const ratePlan = await client.billing.ratePlans.get(
   *   'teams_free',
   * );
   * ```
   */
  get(publicKey: string, options?: RequestOptions): APIPromise<RatePlanGetResponse> {
    return (
      this._client.get(path`/billing/rate_plans/${publicKey}`, options) as APIPromise<{
        result: RatePlanGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class RatePlans extends BaseRatePlans {}

export interface RatePlanGetResponse {
  /**
   * The uppercase rate plan public key.
   */
  id?: string;

  /**
   * Pricing components that make up this rate plan.
   */
  components?: Array<{ [key: string]: unknown }>;

  /**
   * Currency of the rate plan pricing.
   */
  currency?: string;

  /**
   * Human-readable description of the rate plan.
   */
  public_name?: string;
}

export declare namespace RatePlans {
  export { type RatePlanGetResponse as RatePlanGetResponse };
}
