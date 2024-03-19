// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ReportsReportsAPI from 'cloudflare/resources/dns/firewall/analytics/reports/reports';
import * as ReportsAPI from 'cloudflare/resources/dns/analytics/reports/reports';
import * as BytimesAPI from 'cloudflare/resources/dns/firewall/analytics/reports/bytimes';

export class Reports extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  get(
    accountIdentifier: string,
    identifier: string,
    query?: ReportGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportsAPI.DNSDNSAnalyticsAPIReport>;
  get(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportsAPI.DNSDNSAnalyticsAPIReport>;
  get(
    accountIdentifier: string,
    identifier: string,
    query: ReportGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportsAPI.DNSDNSAnalyticsAPIReport> {
    if (isRequestOptions(query)) {
      return this.get(accountIdentifier, identifier, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountIdentifier}/dns_firewall/${identifier}/dns_analytics/report`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ReportsAPI.DNSDNSAnalyticsAPIReport }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ReportGetParams {
  /**
   * A comma-separated list of dimensions to group results by.
   */
  dimensions?: string;

  /**
   * Segmentation filter in 'attribute operator value' format.
   */
  filters?: string;

  /**
   * Limit number of returned metrics.
   */
  limit?: number;

  /**
   * A comma-separated list of metrics to query.
   */
  metrics?: string;

  /**
   * Start date and time of requesting data period in ISO 8601 format.
   */
  since?: string;

  /**
   * A comma-separated list of dimensions to sort by, where each dimension may be
   * prefixed by - (descending) or + (ascending).
   */
  sort?: string;

  /**
   * End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export namespace Reports {
  export import ReportGetParams = ReportsReportsAPI.ReportGetParams;
  export import Bytimes = BytimesAPI.Bytimes;
  export import BytimeGetParams = BytimesAPI.BytimeGetParams;
}
