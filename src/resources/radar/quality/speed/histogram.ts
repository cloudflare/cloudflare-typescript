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
  get(query?: HistogramGetParams, options?: Core.RequestOptions): Core.APIPromise<HistogramGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<HistogramGetResponse>;
  get(
    query: HistogramGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistogramGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/quality/speed/histogram', { query, ...options }) as Core.APIPromise<{
        result: HistogramGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HistogramGetResponse {
  histogram_0: HistogramGetResponse.Histogram0;

  meta: unknown;
}

export namespace HistogramGetResponse {
  export interface Histogram0 {
    bandwidthDownload: Array<string>;

    bandwidthUpload: Array<string>;

    bucketMin: Array<string>;
  }
}

export interface HistogramGetParams {
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
  export import HistogramGetResponse = HistogramAPI.HistogramGetResponse;
  export import HistogramGetParams = HistogramAPI.HistogramGetParams;
}
