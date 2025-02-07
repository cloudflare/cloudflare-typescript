// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Outages extends APIResource {
  /**
   * Get latest Internet outages and anomalies.
   */
  get(
    query: OutageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OutageGetResponse> {
    return (
      this._client.get('/radar/annotations/outages', { query, ...options }) as APIPromise<{
        result: OutageGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the number of outages by location.
   */
  locations(
    query: OutageLocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OutageLocationsResponse> {
    return (
      this._client.get('/radar/annotations/outages/locations', { query, ...options }) as APIPromise<{
        result: OutageLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OutageGetResponse {
  annotations: Array<OutageGetResponse.Annotation>;
}

export namespace OutageGetResponse {
  export interface Annotation {
    id: string;

    asns: Array<number>;

    asnsDetails: Array<Annotation.ASNsDetail>;

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
    export interface ASNsDetail {
      asn: string;

      name: string;

      locations?: ASNsDetail.Locations;
    }

    export namespace ASNsDetail {
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

export interface OutageLocationsResponse {
  annotations: Array<OutageLocationsResponse.Annotation>;
}

export namespace OutageLocationsResponse {
  export interface Annotation {
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface OutageGetParams {
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
}

export interface OutageLocationsParams {
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
}

export declare namespace Outages {
  export {
    type OutageGetResponse as OutageGetResponse,
    type OutageLocationsResponse as OutageLocationsResponse,
    type OutageGetParams as OutageGetParams,
    type OutageLocationsParams as OutageLocationsParams,
  };
}
