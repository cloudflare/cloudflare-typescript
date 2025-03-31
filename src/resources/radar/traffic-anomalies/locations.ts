// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Locations extends APIResource {
  /**
   * Retrieves the sum of Internet traffic anomalies, grouped by location. These
   * anomalies are signals that might indicate an outage, automatically detected by
   * Radar and manually verified by our team.
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

export interface LocationGetResponse {
  trafficAnomalies: Array<unknown>;
}

export interface LocationGetParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive).
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
