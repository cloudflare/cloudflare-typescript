// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Locations } from './locations';
import * as TrafficAnomaliesAPI from './traffic-anomalies';
import * as LocationsAPI from './locations';

export class TrafficAnomalies extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);

  /**
   * Internet traffic anomalies are signals that might point to an outage, These
   * alerts are automatically detected by Radar and then manually verified by our
   * team. This endpoint returns the latest alerts.
   */
  get(query?: TrafficAnomalyGetParams, options?: Core.RequestOptions): Core.APIPromise<TrafficAnomalyGetResponse>
  get(options?: Core.RequestOptions): Core.APIPromise<TrafficAnomalyGetResponse>
  get(query: TrafficAnomalyGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TrafficAnomalyGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (this._client.get('/radar/traffic_anomalies', { query, ...options }) as Core.APIPromise<{ result: TrafficAnomalyGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface TrafficAnomalyGetResponse {
  trafficAnomalies: Array<TrafficAnomalyGetResponse.TrafficAnomaly>;
}

export namespace TrafficAnomalyGetResponse {
  export interface TrafficAnomaly {
    startDate: string;

    status: string;

    type: string;

    uuid: string;

    asnDetails?: TrafficAnomaly.ASNDetails;

    endDate?: string;

    locationDetails?: TrafficAnomaly.LocationDetails;

    visibleInDataSources?: Array<string>;
  }

  export namespace TrafficAnomaly {
    export interface ASNDetails {
      asn: string;

      name: string;

      locations?: ASNDetails.Locations;
    }

    export namespace ASNDetails {
      export interface Locations {
        code: string;

        name: string;
      }
    }

    export interface LocationDetails {
      code: string;

      name: string;
    }
  }
}

export interface TrafficAnomalyGetParams {
  /**
   * Single ASN as integer.
   */
  asn?: number;

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
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Location Alpha2 code.
   */
  location?: string;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;

  status?: 'VERIFIED' | 'UNVERIFIED';
}

export namespace TrafficAnomalies {
  export import TrafficAnomalyGetResponse = TrafficAnomaliesAPI.TrafficAnomalyGetResponse;
  export import TrafficAnomalyGetParams = TrafficAnomaliesAPI.TrafficAnomalyGetParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
