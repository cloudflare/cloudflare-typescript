// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUpstreams extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'routes', 'upstreams'] = Object.freeze([
    'radar',
    'bgp',
    'routes',
    'upstreams',
  ] as const);

  /**
   * Retrieves the share of an AS’s observed paths carried by each direct upstream
   * over time, derived from RouteViews RIB snapshots across all collectors (the
   * combined product). Each upstream ASN is returned as its own series of shares
   * (0–1); the least-significant upstreams beyond the requested limit are grouped
   * into an "OTHER" series. Series share a common set of timestamps.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.bgp.routes.upstreams.timeseries(174);
   * ```
   */
  timeseries(
    asn: number,
    query: UpstreamTimeseriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UpstreamTimeseriesResponse> {
    return (
      this._client.get(path`/radar/bgp/routes/upstreams/${asn}/timeseries`, {
        query,
        ...options,
      }) as APIPromise<{ result: UpstreamTimeseriesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Upstreams extends BaseUpstreams {}

export interface UpstreamTimeseriesResponse {
  meta: UpstreamTimeseriesResponse.Meta;

  serie_0: UpstreamTimeseriesResponse.Serie0;
}

export namespace UpstreamTimeseriesResponse {
  export interface Meta {
    /**
     * Timestamp of the underlying RIB data.
     */
    dataTime: string | null;

    effectiveCollector: string | null;

    /**
     * Timestamp when the query was executed.
     */
    queryTime: string | null;

    stale: boolean;
  }

  export interface Serie0 {
    timestamps: Array<string>;

    [k: string]: Array<string> | Array<string> | undefined;
  }
}

export interface UpstreamTimeseriesParams {
  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`.
   */
  dateEnd?: string;

  /**
   * Start of the date range (inclusive). Alternative to `dateRange`; provide
   * together with `dateEnd`.
   */
  dateStart?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Address family of the observed paths. Defaults to IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';

  /**
   * Number of upstream ASNs to return as separate series, ranked by the first
   * bucket. Remaining upstreams are grouped into an "OTHER" series. Defaults to 5.
   */
  limit?: number;
}

export declare namespace Upstreams {
  export {
    type UpstreamTimeseriesResponse as UpstreamTimeseriesResponse,
    type UpstreamTimeseriesParams as UpstreamTimeseriesParams,
  };
}
