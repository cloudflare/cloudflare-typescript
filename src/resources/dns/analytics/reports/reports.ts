// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReportsAPI from 'cloudflare/resources/dns/analytics/reports/reports';
import * as DNSAPI from 'cloudflare/resources/dns/dns';
import * as BytimesAPI from 'cloudflare/resources/dns/analytics/reports/bytimes';

export class Reports extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  get(params: ReportGetParams, options?: Core.RequestOptions): Core.APIPromise<DNSAnalyticsReport> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/dns_analytics/report`, { query, ...options }) as Core.APIPromise<{
        result: DNSAnalyticsReport;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSAnalyticsReport {
  /**
   * Array with one row per combination of dimension values.
   */
  data: Array<DNSAPI.UnnamedSchemaRef6595695ff25b0614667b25f66b7bbaba>;

  /**
   * Number of seconds between current time and last processed event, in another
   * words how many seconds of data could be missing.
   */
  data_lag: number;

  /**
   * Maximum results for each metric (object mapping metric names to values).
   * Currently always an empty object.
   */
  max: unknown;

  /**
   * Minimum results for each metric (object mapping metric names to values).
   * Currently always an empty object.
   */
  min: unknown;

  query: DNSAnalyticsReport.Query;

  /**
   * Total number of rows in the result.
   */
  rows: number;

  /**
   * Total results for metrics across all data (object mapping metric names to
   * values).
   */
  totals: unknown;
}

export namespace DNSAnalyticsReport {
  export interface Query {
    /**
     * Array of dimension names.
     */
    dimensions: Array<string>;

    /**
     * Limit number of returned metrics.
     */
    limit: number;

    /**
     * Array of metric names.
     */
    metrics: Array<string>;

    /**
     * Start date and time of requesting data period in ISO 8601 format.
     */
    since: string;

    /**
     * End date and time of requesting data period in ISO 8601 format.
     */
    until: string;

    /**
     * Segmentation filter in 'attribute operator value' format.
     */
    filters?: string;

    /**
     * Array of dimensions to sort by, where each dimension may be prefixed by -
     * (descending) or + (ascending).
     */
    sort?: Array<string>;
  }
}

export interface ReportGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A comma-separated list of dimensions to group results by.
   */
  dimensions?: string;

  /**
   * Query param: Segmentation filter in 'attribute operator value' format.
   */
  filters?: string;

  /**
   * Query param: Limit number of returned metrics.
   */
  limit?: number;

  /**
   * Query param: A comma-separated list of metrics to query.
   */
  metrics?: string;

  /**
   * Query param: Start date and time of requesting data period in ISO 8601 format.
   */
  since?: string;

  /**
   * Query param: A comma-separated list of dimensions to sort by, where each
   * dimension may be prefixed by - (descending) or + (ascending).
   */
  sort?: string;

  /**
   * Query param: End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export namespace Reports {
  export import DNSAnalyticsReport = ReportsAPI.DNSAnalyticsReport;
  export import ReportGetParams = ReportsAPI.ReportGetParams;
  export import Bytimes = BytimesAPI.Bytimes;
  export import DNSAnalyticsReportByTime = BytimesAPI.DNSAnalyticsReportByTime;
  export import BytimeGetParams = BytimesAPI.BytimeGetParams;
}
