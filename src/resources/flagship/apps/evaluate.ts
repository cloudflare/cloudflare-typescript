// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Evaluate extends APIResource {
  /**
   * Evaluates a flag against the provided context. Pass context attributes as query
   * parameters; boolean and numeric strings are coerced automatically. For
   * low-latency in-Worker evaluation, prefer the Flagship binding over this
   * endpoint.
   */
  get(
    appId: string,
    params: EvaluateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/flagship/apps/${appId}/evaluate`, { query, ...options });
  }
}

export interface EvaluateGetResponse {
  flagKey: string;

  reason: 'TARGETING_MATCH' | 'DEFAULT' | 'DISABLED' | 'SPLIT';

  variant: string;

  value?: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
}

export interface EvaluateGetParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param: The flag key to evaluate.
   */
  flagKey: string;

  /**
   * Query param: Context targeting key (per OpenFeature spec); used for percentage
   * rollout bucketing.
   */
  targetingKey?: string;
}

export declare namespace Evaluate {
  export { type EvaluateGetResponse as EvaluateGetResponse, type EvaluateGetParams as EvaluateGetParams };
}
