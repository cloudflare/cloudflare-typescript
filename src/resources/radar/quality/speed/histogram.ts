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
  retrieve(
    query?: HistogramRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistogramRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HistogramRetrieveResponse>;
  retrieve(
    query: HistogramRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistogramRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return (
      this._client.get('/radar/quality/speed/histogram', { query, ...options }) as Core.APIPromise<{
        result: HistogramRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HistogramRetrieveResponse {
  histogram_0: HistogramRetrieveResponse.Histogram0;

  meta: unknown;
}

export namespace HistogramRetrieveResponse {
  export interface Histogram0 {
    bandwidthDownload: Array<string>;

    bandwidthUpload: Array<string>;

    bucketMin: Array<string>;
  }
}

export interface HistogramRetrieveParams {
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
  export import HistogramRetrieveResponse = HistogramAPI.HistogramRetrieveResponse;
  export import HistogramRetrieveParams = HistogramAPI.HistogramRetrieveParams;
}
