// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AnnotationsAPI from './annotations';
import * as OutagesAPI from './outages';

export class Annotations extends APIResource {
  outages: OutagesAPI.Outages = new OutagesAPI.Outages(this._client);

  /**
   * Get latest annotations.
   */
  list(query?: AnnotationListParams, options?: Core.RequestOptions): Core.APIPromise<AnnotationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AnnotationListResponse>;
  list(
    query: AnnotationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnnotationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/annotations', { query, ...options }) as Core.APIPromise<{
        result: AnnotationListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AnnotationListResponse {
  annotations: Array<AnnotationListResponse.Annotation>;
}

export namespace AnnotationListResponse {
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

export interface AnnotationListParams {
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

export namespace Annotations {
  export import AnnotationListResponse = AnnotationsAPI.AnnotationListResponse;
  export import AnnotationListParams = AnnotationsAPI.AnnotationListParams;
  export import Outages = OutagesAPI.Outages;
  export import OutageGetResponse = OutagesAPI.OutageGetResponse;
  export import OutageLocationsResponse = OutagesAPI.OutageLocationsResponse;
  export import OutageGetParams = OutagesAPI.OutageGetParams;
  export import OutageLocationsParams = OutagesAPI.OutageLocationsParams;
}
