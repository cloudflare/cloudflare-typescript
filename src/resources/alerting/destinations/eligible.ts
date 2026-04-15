// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEligible extends APIResource {
  static override readonly _key: readonly ['alerting', 'destinations', 'eligible'] = Object.freeze([
    'alerting',
    'destinations',
    'eligible',
  ] as const);

  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   *
   * @example
   * ```ts
   * const eligible =
   *   await client.alerting.destinations.eligible.get({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: EligibleGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EligibleGetResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(
        path`/accounts/${account_id}/alerting/v3/destinations/eligible`,
        options,
      ) as APIPromise<{ result: EligibleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Eligible extends BaseEligible {}

export type EligibleGetResponse = { [key: string]: Array<EligibleGetResponse.Item> };

export namespace EligibleGetResponse {
  export interface Item {
    /**
     * Determines whether or not the account is eligible for the delivery mechanism.
     */
    eligible?: boolean;

    /**
     * Beta flag. Users can create a policy with a mechanism that is not ready, but we
     * cannot guarantee successful delivery of notifications.
     */
    ready?: boolean;

    /**
     * Determines type of delivery mechanism.
     */
    type?: 'email' | 'pagerduty' | 'webhook';
  }
}

export interface EligibleGetParams {
  /**
   * The account id
   */
  account_id?: string;
}

export declare namespace Eligible {
  export { type EligibleGetResponse as EligibleGetResponse, type EligibleGetParams as EligibleGetParams };
}
