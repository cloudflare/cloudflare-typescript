// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ReportsBytimesAPI from '../../../dns/analytics/reports/bytimes';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Bytimes extends APIResource {
  /**
   * Retrieves a list of aggregate metrics grouped by time interval.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  get(
    dnsFirewallID: string,
    params: BytimeGetParams,
    options?: RequestOptions,
  ): APIPromise<ReportsBytimesAPI.ByTime> {
    const { account_id, ...query } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dns_firewall/${dnsFirewallID}/dns_analytics/report/bytime`,
        { query, ...options },
      ) as APIPromise<{ result: ReportsBytimesAPI.ByTime }>
    )._thenUnwrap((obj) => obj.result);
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
   * Query param: End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export declare namespace Bytimes {
  export { type BytimeGetParams as BytimeGetParams };
}
