// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as ReportsBytimesAPI from './bytimes';
import * as BytimesAPI from '../../../analytics/reports/bytimes';
import * as AnalyticsAPI from '../analytics';

export class Bytimes extends APIResource {
  /**
   * Retrieves a list of aggregate metrics grouped by time interval.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  get(dnsFirewallId: string, params: BytimeGetParams, options?: Core.RequestOptions): Core.APIPromise<BytimesAPI.ByTime> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}/dns_analytics/report/bytime`, { query, ...options }) as Core.APIPromise<{ result: BytimesAPI.ByTime }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface BytimeGetParams {
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
   * Query param: Unit of time to group data by.
   */
  time_delta?: AnalyticsAPI.DeltaParam;

  /**
   * Query param: End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export namespace Bytimes {
  export import BytimeGetParams = ReportsBytimesAPI.BytimeGetParams;
}
