// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as TopAPI from './top';

export class Top extends APIResource {
  /**
   * Get the top autonomous systems by bandwidth, latency, jitter or packet loss,
   * from the previous 90 days of Cloudflare Speed Test data.
   */
  ases(query?: TopAsesParams, options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse>
  ases(options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse>
  ases(query: TopAsesParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse> {
    if (isRequestOptions(query)) {
      return this.ases({}, query);
    }
    return (this._client.get('/radar/quality/speed/top/ases', { query, ...options }) as Core.APIPromise<{ result: TopAsesResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the top locations by bandwidth, latency, jitter or packet loss, from the
   * previous 90 days of Cloudflare Speed Test data.
   */
  locations(query?: TopLocationsParams, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>
  locations(options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>
  locations(query: TopLocationsParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse> {
    if (isRequestOptions(query)) {
      return this.locations({}, query);
    }
    return (this._client.get('/radar/quality/speed/top/locations', { query, ...options }) as Core.APIPromise<{ result: TopLocationsResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface TopAsesResponse {
  meta: TopAsesResponse.Meta;

  top_0: Array<TopAsesResponse.Top0>;
}

export namespace TopAsesResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    bandwidthDownload: string;

    bandwidthUpload: string;

    clientASN: number;

    clientASName: string;

    jitterIdle: string;

    jitterLoaded: string;

    latencyIdle: string;

    latencyLoaded: string;

    numTests: number;

    rankPower: number;
  }
}

export interface TopLocationsResponse {
  meta: TopLocationsResponse.Meta;

  top_0: Array<TopLocationsResponse.Top0>;
}

export namespace TopLocationsResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    bandwidthDownload: string;

    bandwidthUpload: string;

    clientCountryAlpha2: string;

    clientCountryName: string;

    jitterIdle: string;

    jitterLoaded: string;

    latencyIdle: string;

    latencyLoaded: string;

    numTests: number;

    rankPower: number;
  }
}

export interface TopAsesParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Metric to order the results by.
   */
  orderBy?: 'BANDWIDTH_DOWNLOAD' | 'BANDWIDTH_UPLOAD' | 'LATENCY_IDLE' | 'LATENCY_LOADED' | 'JITTER_IDLE' | 'JITTER_LOADED';

  /**
   * Reverse the order of results.
   */
  reverse?: boolean;
}

export interface TopLocationsParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Metric to order the results by.
   */
  orderBy?: 'BANDWIDTH_DOWNLOAD' | 'BANDWIDTH_UPLOAD' | 'LATENCY_IDLE' | 'LATENCY_LOADED' | 'JITTER_IDLE' | 'JITTER_LOADED';

  /**
   * Reverse the order of results.
   */
  reverse?: boolean;
}

export namespace Top {
  export import TopAsesResponse = TopAPI.TopAsesResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopAsesParams = TopAPI.TopAsesParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
}
