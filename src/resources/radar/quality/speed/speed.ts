// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Top } from './top';
import * as SpeedAPI from './speed';
import * as TopAPI from './top';

export class Speed extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get an histogram from the previous 90 days of Cloudflare Speed Test data, split
   * into fixed bandwidth (Mbps), latency (ms) or jitter (ms) buckets.
   */
  histogram(query?: SpeedHistogramParams, options?: Core.RequestOptions): Core.APIPromise<SpeedHistogramResponse>
  histogram(options?: Core.RequestOptions): Core.APIPromise<SpeedHistogramResponse>
  histogram(query: SpeedHistogramParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpeedHistogramResponse> {
    if (isRequestOptions(query)) {
      return this.histogram({}, query);
    }
    return (this._client.get('/radar/quality/speed/histogram', { query, ...options }) as Core.APIPromise<{ result: SpeedHistogramResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a summary of bandwidth, latency, jitter and packet loss, from the previous
   * 90 days of Cloudflare Speed Test data.
   */
  summary(query?: SpeedSummaryParams, options?: Core.RequestOptions): Core.APIPromise<SpeedSummaryResponse>
  summary(options?: Core.RequestOptions): Core.APIPromise<SpeedSummaryResponse>
  summary(query: SpeedSummaryParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpeedSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary({}, query);
    }
    return (this._client.get('/radar/quality/speed/summary', { query, ...options }) as Core.APIPromise<{ result: SpeedSummaryResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SpeedHistogramResponse {
  histogram_0: SpeedHistogramResponse.Histogram0;

  meta: unknown;
}

export namespace SpeedHistogramResponse {
  export interface Histogram0 {
    bandwidthDownload: Array<string>;

    bandwidthUpload: Array<string>;

    bucketMin: Array<string>;
  }
}

export interface SpeedSummaryResponse {
  meta: SpeedSummaryResponse.Meta;

  summary_0: SpeedSummaryResponse.Summary0;
}

export namespace SpeedSummaryResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

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

  export interface Summary0 {
    bandwidthDownload: string;

    bandwidthUpload: string;

    jitterIdle: string;

    jitterLoaded: string;

    latencyIdle: string;

    latencyLoaded: string;

    packetLoss: string;
  }
}

export interface SpeedHistogramParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * The width for every bucket in the histogram.
   */
  bucketSize?: number;

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
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Metrics to be returned.
   */
  metricGroup?: 'BANDWIDTH' | 'LATENCY' | 'JITTER';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface SpeedSummaryParams {
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
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Speed {
  export import SpeedHistogramResponse = SpeedAPI.SpeedHistogramResponse;
  export import SpeedSummaryResponse = SpeedAPI.SpeedSummaryResponse;
  export import SpeedHistogramParams = SpeedAPI.SpeedHistogramParams;
  export import SpeedSummaryParams = SpeedAPI.SpeedSummaryParams;
  export import Top = TopAPI.Top;
  export import TopAsesResponse = TopAPI.TopAsesResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopAsesParams = TopAPI.TopAsesParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
}
