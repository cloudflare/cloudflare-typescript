// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class Roas extends APIResource {
  /**
   * Retrieves RPKI ROA (Route Origin Authorization) validation ratios over time.
   * Returns the selected metric as a time series. Supports filtering by ASN or
   * location (country code) — multiple values of the same filter type produce one
   * series per value. If no ASN or location is specified, returns the global
   * aggregate.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.bgp.rpki.roas.timeseries();
   * ```
   */
  timeseries(
    query?: RoaTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoaTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<RoaTimeseriesResponse>;
  timeseries(
    query: RoaTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoaTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/bgp/rpki/roas/timeseries', { query, ...options }) as Core.APIPromise<{
        result: RoaTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RoaTimeseriesResponse {
  meta: RoaTimeseriesResponse.Meta;

  serie_0: RoaTimeseriesResponse.Serie0;
}

export namespace RoaTimeseriesResponse {
  export interface Meta {
    /**
     * Timestamp of the underlying data.
     */
    dataTime: string;

    /**
     * Timestamp when the query was executed.
     */
    queryTime: string;
  }

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface RoaTimeseriesParams {
  /**
   * Filters results by Autonomous System Number. Specify one or more ASNs. Multiple
   * values generate one series per ASN.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 location
   * codes.
   */
  location?: Array<string>;

  /**
   * Which RPKI ROA validation metric to return. validPfxsRatio = ratio of RPKI-valid
   * prefixes (IPv4+IPv6 combined). validPfxsV4Ratio / validPfxsV6Ratio = same, split
   * by IP version. validIpsRatio = ratio of RPKI-valid address space (IPv4 /24s +
   * IPv6 /48s). validIpsV4Ratio / validIpsV6Ratio = same, split by IP version.
   */
  metric?:
    | 'validPfxsRatio'
    | 'validPfxsV4Ratio'
    | 'validPfxsV6Ratio'
    | 'validIpsRatio'
    | 'validIpsV4Ratio'
    | 'validIpsV6Ratio';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace Roas {
  export {
    type RoaTimeseriesResponse as RoaTimeseriesResponse,
    type RoaTimeseriesParams as RoaTimeseriesParams,
  };
}
