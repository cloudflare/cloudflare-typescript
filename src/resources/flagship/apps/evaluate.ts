// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEvaluate extends APIResource {
  static override readonly _key: readonly ['flagship', 'apps', 'evaluate'] = Object.freeze([
    'flagship',
    'apps',
    'evaluate',
  ] as const);

  /**
   * Evaluates a flag against the provided context. Pass context attributes as query
   * parameters; values are coerced to numbers or booleans where unambiguous. For
   * low-latency in-Worker evaluation, prefer the Flagship binding over this
   * endpoint.
   */
  get(appID: string, params: EvaluateGetParams, options?: RequestOptions): APIPromise<EvaluateGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/flagship/apps/${appID}/evaluate`, {
      query,
      ...options,
    });
  }
}
export class Evaluate extends BaseEvaluate {}

export interface EvaluateGetResponse {
  /**
   * Key of the evaluated flag.
   */
  flagKey: string;

  /**
   * Reason the evaluator selected this variation.
   */
  reason: 'STATIC' | 'TARGETING_MATCH' | 'DEFAULT' | 'DISABLED' | 'SPLIT';

  /**
   * Name of the variation that supplied the resolved value.
   */
  variant: string;

  value?: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
}

export interface EvaluateGetParams {
  /**
   * Path param: Cloudflare account ID that owns the Flagship app.
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
