// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseLocations extends APIResource {
  static override readonly _key: readonly ['radar', 'trafficAnomalies', 'locations'] = Object.freeze([
    'radar',
    'trafficAnomalies',
    'locations',
  ] as const);

  /**
   * Retrieves the sum of Internet traffic anomalies, grouped by location. These
   * anomalies are signals that might indicate an outage, automatically detected by
   * Radar and manually verified by our team.
   *
   * @example
   * ```ts
   * const location =
   *   await client.radar.trafficAnomalies.locations.get();
   * ```
   */
  get(
    query: LocationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationGetResponse> {
    return (
      this._client.get('/radar/traffic_anomalies/locations', { query, ...options }) as APIPromise<{
        result: LocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Locations extends BaseLocations {}

export interface LocationGetResponse {
  trafficAnomalies: Array<LocationGetResponse.TrafficAnomaly>;
}

export namespace LocationGetResponse {
  export interface TrafficAnomaly {
    clientCountryAlpha2: string;

    clientCountryName: string;

    /**
     * A numeric string.
     */
    value: string;
  }
}

export interface LocationGetParams {
  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`.
   */
  dateEnd?: string;

  /**
   * Filters results by a relative date range ending at the current time. Use `<n>d`
   * for days (up to `364d`) or `<n>w` for weeks (up to `52w`), e.g. `7d`. Append
   * `control` to request the equivalent previous period for comparison: the
   * comparison window is shifted back by the current window's length rounded up to a
   * whole number of weeks, so it keeps the same weekday alignment and does not
   * overlap the current window (e.g. `3dcontrol` covers days -10 to -7, `7dcontrol`
   * covers days -14 to -7, `28dcontrol` covers days -56 to -28, and `10dcontrol`
   * covers days -24 to -14). Mutually exclusive with `dateStart`/`dateEnd`.
   */
  dateRange?: string;

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
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  status?: 'VERIFIED' | 'UNVERIFIED';
}

export declare namespace Locations {
  export { type LocationGetResponse as LocationGetResponse, type LocationGetParams as LocationGetParams };
}
