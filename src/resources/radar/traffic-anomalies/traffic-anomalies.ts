// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LocationsAPI from './locations';
import { BaseLocations, LocationGetParams, LocationGetResponse, Locations } from './locations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseTrafficAnomalies extends APIResource {
  static override readonly _key: readonly ['radar', 'trafficAnomalies'] = Object.freeze([
    'radar',
    'trafficAnomalies',
  ] as const);

  /**
   * Retrieves the latest Internet traffic anomalies, which are signals that might
   * indicate an outage. These alerts are automatically detected by Radar and
   * manually verified by our team.
   *
   * @example
   * ```ts
   * const trafficAnomaly =
   *   await client.radar.trafficAnomalies.get();
   * ```
   */
  get(
    query: TrafficAnomalyGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrafficAnomalyGetResponse> {
    return (
      this._client.get('/radar/traffic_anomalies', { query, ...options }) as APIPromise<{
        result: TrafficAnomalyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TrafficAnomalies extends BaseTrafficAnomalies {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export interface TrafficAnomalyGetResponse {
  trafficAnomalies: Array<TrafficAnomalyGetResponse.TrafficAnomaly>;
}

export namespace TrafficAnomalyGetResponse {
  export interface TrafficAnomaly {
    asnDetails: TrafficAnomaly.ASNDetails | null;

    endDate: string | null;

    locationDetails: TrafficAnomaly.LocationDetails | null;

    originDetails: TrafficAnomaly.OriginDetails | null;

    startDate: string;

    status: string;

    type: string;

    uuid: string;

    visibleInDataSources: Array<string> | null;
  }

  export namespace TrafficAnomaly {
    export interface ASNDetails {
      asn: string;

      location: ASNDetails.Location | null;

      name: string | null;
    }

    export namespace ASNDetails {
      export interface Location {
        code: string;

        name: string;
      }
    }

    export interface LocationDetails {
      code: string;

      name: string;
    }

    export interface OriginDetails {
      name: string | null;

      origin: string;
    }
  }
}

export interface TrafficAnomalyGetParams {
  /**
   * Filters results by Autonomous System. Specify a single Autonomous System Number
   * (ASN) as integer.
   */
  asn?: number;

  /**
   * Filters results by data source.
   */
  dataSource?:
    | 'ALL'
    | 'AI_BOTS'
    | 'AI_GATEWAY'
    | 'BGP'
    | 'BOTS'
    | 'CONNECTION_ANOMALY'
    | 'CT'
    | 'DNS'
    | 'DNS_MAGNITUDE'
    | 'DNS_AS112'
    | 'DOS'
    | 'EMAIL_ROUTING'
    | 'EMAIL_SECURITY'
    | 'FW'
    | 'FW_PG'
    | 'HTTP'
    | 'HTTP_CONTROL'
    | 'HTTP_CRAWLER_REFERER'
    | 'HTTP_ORIGINS'
    | 'IQI'
    | 'LEAKED_CREDENTIALS'
    | 'NET'
    | 'ROBOTS_TXT'
    | 'SPEED'
    | 'WORKERS_AI';

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

  /**
   * Filters results by location. Specify an alpha-2 location code.
   */
  location?: string;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;

  /**
   * Filters results by origin.
   */
  origin?: string;

  status?: 'VERIFIED' | 'UNVERIFIED';

  /**
   * Filters results by entity type (LOCATION, AS, or ORIGIN).
   */
  type?: Array<'LOCATION' | 'AS' | 'ORIGIN'>;
}

TrafficAnomalies.Locations = Locations;
TrafficAnomalies.BaseLocations = BaseLocations;

export declare namespace TrafficAnomalies {
  export {
    type TrafficAnomalyGetResponse as TrafficAnomalyGetResponse,
    type TrafficAnomalyGetParams as TrafficAnomalyGetParams,
  };

  export {
    Locations as Locations,
    BaseLocations as BaseLocations,
    type LocationGetResponse as LocationGetResponse,
    type LocationGetParams as LocationGetParams,
  };
}
