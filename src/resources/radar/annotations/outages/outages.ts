// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OutagesAPI from 'cloudflare/resources/radar/annotations/outages/outages';
import * as LocationsAPI from 'cloudflare/resources/radar/annotations/outages/locations';

export class Outages extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);

  /**
   * Get latest Internet outages and anomalies.
   */
  list(query?: OutageListParams, options?: Core.RequestOptions): Core.APIPromise<OutageListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OutageListResponse>;
  list(
    query: OutageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutageListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/annotations/outages', { query, ...options }) as Core.APIPromise<{
        result: OutageListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OutageListResponse {
  annotations: Array<OutageListResponse.Annotation>;
}

export namespace OutageListResponse {
  export interface Annotation {
    id: string;

    asns: Array<number>;

    asnsDetails: Array<Annotation.AsnsDetail>;

    dataSource: string;

    eventType: string;

    locations: Array<string>;

    locationsDetails: Array<Annotation.LocationsDetail>;

    outage: Annotation.Outage;

    startDate: string;

    description?: string;

    endDate?: string;

    linkedUrl?: string;

    scope?: string;
  }

  export namespace Annotation {
    export interface AsnsDetail {
      asn: string;

      name: string;

      locations?: AsnsDetail.Locations;
    }

    export namespace AsnsDetail {
      export interface Locations {
        code: string;

        name: string;
      }
    }

    export interface LocationsDetail {
      code: string;

      name: string;
    }

    export interface Outage {
      outageCause: string;

      outageType: string;
    }
  }
}

export interface OutageListParams {
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
  dateRange?:
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl';

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
}

export namespace Outages {
  export import OutageListResponse = OutagesAPI.OutageListResponse;
  export import OutageListParams = OutagesAPI.OutageListParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
}
