// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OutagesAPI from './outages';
import {
  OutageGetParams,
  OutageGetResponse,
  OutageLocationsParams,
  OutageLocationsResponse,
  Outages,
} from './outages';

export class Annotations extends APIResource {
  outages: OutagesAPI.Outages = new OutagesAPI.Outages(this._client);

  /**
   * Get the latest annotations.
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

Annotations.Outages = Outages;

export declare namespace Annotations {
  export {
    type AnnotationListResponse as AnnotationListResponse,
    type AnnotationListParams as AnnotationListParams,
  };

  export {
    Outages as Outages,
    type OutageGetResponse as OutageGetResponse,
    type OutageLocationsResponse as OutageLocationsResponse,
    type OutageGetParams as OutageGetParams,
    type OutageLocationsParams as OutageLocationsParams,
  };
}
