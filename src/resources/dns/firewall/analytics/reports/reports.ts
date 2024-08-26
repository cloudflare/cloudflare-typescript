// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import { Bytimes } from './bytimes';
import * as ReportsReportsAPI from './reports';
import * as ReportsAPI from '../../../analytics/reports/reports';
import * as BytimesAPI from './bytimes';

export class Reports extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  get(dnsFirewallId: string, params: ReportGetParams, options?: Core.RequestOptions): Core.APIPromise<ReportsAPI.Report> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}/dns_analytics/report`, { query, ...options }) as Core.APIPromise<{ result: ReportsAPI.Report }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface ReportGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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
  export import ReportGetParams = ReportsReportsAPI.ReportGetParams;
  export import Bytimes = BytimesAPI.Bytimes;
  export import BytimeGetParams = BytimesAPI.BytimeGetParams;
}
