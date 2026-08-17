// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseQuota extends APIResource {
  static override readonly _key: readonly ['customHostnames', 'quota'] = Object.freeze([
    'customHostnames',
    'quota',
  ] as const);

  /**
   * Returns custom hostname quota usage for a zone. The allocated quota is a soft
   * limit; creating custom hostnames after usage exceeds this limit can still
   * succeed until the hard cap is reached. Use the exceeded and hard_cap fields to
   * track when usage is above the soft limit and when new custom hostname creation
   * will be rejected.
   *
   * @example
   * ```ts
   * const quota = await client.customHostnames.quota.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: QuotaGetParams, options?: RequestOptions): APIPromise<QuotaGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/custom_hostnames/quota`, options) as APIPromise<{
        result: QuotaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Quota extends BaseQuota {}

export interface QuotaGetResponse {
  /**
   * The allocated custom hostname quota.
   */
  allocated: number;

  /**
   * Whether the current usage has exceeded the allocated quota.
   */
  exceeded: boolean;

  /**
   * The maximum number of custom hostnames allowed before create requests are
   * rejected.
   */
  hard_cap: number;

  /**
   * The number of custom hostnames currently in use.
   */
  used: number;
}

export interface QuotaGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Quota {
  export { type QuotaGetResponse as QuotaGetResponse, type QuotaGetParams as QuotaGetParams };
}
