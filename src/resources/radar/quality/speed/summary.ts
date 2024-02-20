// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SummaryAPI from 'cloudflare/resources/radar/quality/speed/summary';

export class Summary extends APIResource {
  /**
   * Get a summary of bandwidth, latency, jitter and packet loss, from the previous
   * 90 days of Cloudflare Speed Test data.
   */
  list(query?: SummaryListParams, options?: Core.RequestOptions): Core.APIPromise<SummaryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SummaryListResponse>;
  list(
    query: SummaryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/quality/speed/summary', { query, ...options }) as Core.APIPromise<{
        result: SummaryListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryListResponse {
  meta: SummaryListResponse.Meta;

  summary_0: SummaryListResponse.Summary0;
}

export namespace SummaryListResponse {
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

        isInstantaneous: unknown;

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

export interface SummaryListParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

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

export namespace Summary {
  export import SummaryListResponse = SummaryAPI.SummaryListResponse;
  export import SummaryListParams = SummaryAPI.SummaryListParams;
}
