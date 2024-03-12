// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ReportsBytimesAPI from 'cloudflare/resources/dns/firewall/analytics/reports/bytimes';
import * as BytimesAPI from 'cloudflare/resources/dns/analytics/reports/bytimes';

export class Bytimes extends APIResource {
  /**
   * Retrieves a list of aggregate metrics grouped by time interval.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  get(
    accountIdentifier: string,
    identifier: string,
    query?: BytimeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BytimesAPI.DNSDNSAnalyticsAPIReportBytime>;
  get(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BytimesAPI.DNSDNSAnalyticsAPIReportBytime>;
  get(
    accountIdentifier: string,
    identifier: string,
    query: BytimeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BytimesAPI.DNSDNSAnalyticsAPIReportBytime> {
    if (isRequestOptions(query)) {
      return this.get(accountIdentifier, identifier, {}, query);
    }
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/dns_firewall/${identifier}/dns_analytics/report/bytime`,
        { query, ...options },
      ) as Core.APIPromise<{ result: BytimesAPI.DNSDNSAnalyticsAPIReportBytime }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BytimeGetParams {
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
   * Unit of time to group data by.
   */
  time_delta?:
    | 'all'
    | 'auto'
    | 'year'
    | 'quarter'
    | 'month'
    | 'week'
    | 'day'
    | 'hour'
    | 'dekaminute'
    | 'minute';

  /**
   * End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export namespace Bytimes {
  export import BytimeGetParams = ReportsBytimesAPI.BytimeGetParams;
}
