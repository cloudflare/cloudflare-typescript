// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsesAPI from 'cloudflare/resources/radar/quality/speed/top/ases';

export class Ases extends APIResource {
  /**
   * Get the top autonomous systems by bandwidth, latency, jitter or packet loss,
   * from the previous 90 days of Cloudflare Speed Test data.
   */
  list(query?: AseListParams, options?: Core.RequestOptions): Core.APIPromise<AseListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AseListResponse>;
  list(
    query: AseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AseListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/quality/speed/top/ases', { query, ...options }) as Core.APIPromise<{
        result: AseListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AseListResponse {
  meta: AseListResponse.Meta;

  top_0: Array<AseListResponse.Top0>;
}

export namespace AseListResponse {
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

        isInstantaneous: unknown;

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

export interface AseListParams {
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
  orderBy?:
    | 'BANDWIDTH_DOWNLOAD'
    | 'BANDWIDTH_UPLOAD'
    | 'LATENCY_IDLE'
    | 'LATENCY_LOADED'
    | 'JITTER_IDLE'
    | 'JITTER_LOADED';

  /**
   * Reverse the order of results.
   */
  reverse?: boolean;
}

export namespace Ases {
  export import AseListResponse = AsesAPI.AseListResponse;
  export import AseListParams = AsesAPI.AseListParams;
}
