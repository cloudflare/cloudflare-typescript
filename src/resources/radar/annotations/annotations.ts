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
   * Retrieves the latest annotations.
   *
   * @example
   * ```ts
   * const annotations = await client.radar.annotations.list();
   * ```
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

    origins: Array<string>;

    originsDetails: Array<Annotation.OriginsDetail>;

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

    export interface OriginsDetail {
      name: string;

      origin: string;
    }

    export interface Outage {
      outageCause: string;

      outageType: string;
    }
  }
}

export interface AnnotationListParams {
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
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Filters results by date range.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Filters results by event type.
   */
  eventType?: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

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
