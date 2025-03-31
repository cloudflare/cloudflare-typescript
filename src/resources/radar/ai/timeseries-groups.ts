// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class TimeseriesGroups extends APIResource {
  /**
   * Retrieves the distribution of traffic by AI user agent over time.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. If there are more items than the limit, the response will include
   * the count of items, with any remaining items grouped together under an "other"
   * category.
   */
  limitPerGroup?: number;

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace TimeseriesGroups {
  export {
    type TimeseriesGroupUserAgentResponse as TimeseriesGroupUserAgentResponse,
    type TimeseriesGroupUserAgentParams as TimeseriesGroupUserAgentParams,
  };
}
