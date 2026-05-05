// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSummary extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring', 'summary'] = Object.freeze([
    'zeroTrust',
    'riskScoring',
    'summary',
  ] as const);

  /**
   * Gets an aggregate summary of risk scores across the account, including
   * distribution and trends.
   *
   * @example
   * ```ts
   * const summary =
   *   await client.zeroTrust.riskScoring.summary.get({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  get(params: SummaryGetParams, options?: RequestOptions): APIPromise<SummaryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/zt_risk_scoring/summary`, options) as APIPromise<{
        result: SummaryGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Summary extends BaseSummary {}

export interface SummaryGetResponse {
  users: Array<SummaryGetResponse.User>;
}

export namespace SummaryGetResponse {
  export interface User {
    email: string;

    event_count: number;

    last_event: string;

    max_risk_level: 'low' | 'medium' | 'high';

    name: string;

    user_id: string;
  }
}

export interface SummaryGetParams {
  account_id: string;
}

export declare namespace Summary {
  export { type SummaryGetResponse as SummaryGetResponse, type SummaryGetParams as SummaryGetParams };
}
