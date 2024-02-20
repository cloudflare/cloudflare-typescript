// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistogramAPI from 'cloudflare/resources/radar/quality/speed/histogram';

export class Histogram extends APIResource {
  /**
   * Get an histogram from the previous 90 days of Cloudflare Speed Test data, split
   * into fixed bandwidth (Mbps), latency (ms) or jitter (ms) buckets.
   */
  list(query?: HistogramListParams, options?: Core.RequestOptions): Core.APIPromise<HistogramListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<HistogramListResponse>;
  list(
    query: HistogramListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistogramListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/quality/speed/histogram', { query, ...options }) as Core.APIPromise<{
        result: HistogramListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HistogramListResponse {
  histogram_0: HistogramListResponse.Histogram0;

  meta: unknown;
}

export namespace HistogramListResponse {
  export interface Histogram0 {
    bandwidthDownload: Array<string>;

    bandwidthUpload: Array<string>;

    bucketMin: Array<string>;
  }
}

export interface HistogramListParams {
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

export namespace Histogram {
  export import HistogramListResponse = HistogramAPI.HistogramListResponse;
  export import HistogramListParams = HistogramAPI.HistogramListParams;
}
