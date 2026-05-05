// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'ips', 'top'] = Object.freeze([
    'radar',
    'bgp',
    'ips',
    'top',
  ] as const);

  /**
   * Returns the top-N autonomous systems by announced IP space at the nearest 8-hour
   * RIB boundary at or before the requested date. The snapped boundary is returned
   * as `anchor_ts`.
   *
   * @example
   * ```ts
   * const response = await client.radar.bgp.ips.top.ases();
   * ```
   */
  ases(query: TopAsesParams | null | undefined = {}, options?: RequestOptions): APIPromise<TopAsesResponse> {
    return (
      this._client.get('/radar/bgp/ips/top/ases', { query, ...options }) as APIPromise<{
        result: TopAsesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Top extends BaseTop {}

export interface TopAsesResponse {
  anchorTs: string;

  asns: Array<TopAsesResponse.ASN>;

  country: string | null;

  metric: string;
}

export namespace TopAsesResponse {
  export interface ASN {
    asn: number;

    v4_24s: number;

    v6_48s: number;
  }
}

export interface TopAsesParams {
  /**
   * Optional ISO 3166-1 alpha-2 country filter. Omit for global top-N.
   */
  country?: string;

  /**
   * Filters results by the specified datetime (ISO 8601).
   */
  date?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Ranking metric: IPv4 /24 count or IPv6 /48 count.
   */
  metric?: 'v4_24s' | 'v6_48s';
}

export declare namespace Top {
  export { type TopAsesResponse as TopAsesResponse, type TopAsesParams as TopAsesParams };
}
