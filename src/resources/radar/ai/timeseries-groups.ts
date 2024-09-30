// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of traffic per AI user agent over time.
   */
  userAgent(
    query?: TimeseriesGroupUserAgentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupUserAgentResponse>;
  userAgent(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupUserAgentResponse>;
  userAgent(
    query: TimeseriesGroupUserAgentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupUserAgentResponse> {
    if (isRequestOptions(query)) {
      return this.userAgent({}, query);
    }
    return (
      this._client.get('/radar/ai/bots/timeseries_groups/user_agent', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupUserAgentResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupUserAgentResponse {
  meta: unknown;

  serie_0: TimeseriesGroupUserAgentResponse.Serie0;
}

export namespace TimeseriesGroupUserAgentResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupUserAgentParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects (eg browsers, verticals, etc) to the top items over
   * the time range.
   */
  limitPerGroup?: number;

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
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupUserAgentResponse = TimeseriesGroupsAPI.TimeseriesGroupUserAgentResponse;
  export import TimeseriesGroupUserAgentParams = TimeseriesGroupsAPI.TimeseriesGroupUserAgentParams;
}
