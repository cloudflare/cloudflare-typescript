// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseZone extends APIResource {
  static override readonly _key: readonly ['dns', 'usage', 'zone'] = Object.freeze([
    'dns',
    'usage',
    'zone',
  ] as const);

  /**
   * Get the current DNS record usage for a zone, including the number of records and
   * the quota limit.
   *
   * @example
   * ```ts
   * const zone = await client.dns.usage.zone.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: ZoneGetParams, options?: RequestOptions): APIPromise<ZoneGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/dns_records/usage`, options) as APIPromise<{
        result: ZoneGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Zone extends BaseZone {}

export interface ZoneGetResponse {
  /**
   * Maximum number of DNS records allowed for the zone. Null if using account-level
   * quota.
   */
  record_quota: number | null;

  /**
   * Current number of DNS records in the zone.
   */
  record_usage: number;
}

export interface ZoneGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Zone {
  export { type ZoneGetResponse as ZoneGetResponse, type ZoneGetParams as ZoneGetParams };
}
