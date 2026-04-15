// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseQuota extends APIResource {
  static override readonly _key: readonly ['ssl', 'certificatePacks', 'quota'] = Object.freeze([
    'ssl',
    'certificatePacks',
    'quota',
  ] as const);

  /**
   * For a given zone, list certificate pack quotas.
   *
   * @example
   * ```ts
   * const quota = await client.ssl.certificatePacks.quota.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: QuotaGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuotaGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/ssl/certificate_packs/quota`, options) as APIPromise<{
        result: QuotaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Quota extends BaseQuota {}

export interface QuotaGetResponse {
  advanced?: QuotaGetResponse.Advanced;
}

export namespace QuotaGetResponse {
  export interface Advanced {
    /**
     * Quantity Allocated.
     */
    allocated?: number;

    /**
     * Quantity Used.
     */
    used?: number;
  }
}

export interface QuotaGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace Quota {
  export { type QuotaGetResponse as QuotaGetResponse, type QuotaGetParams as QuotaGetParams };
}
