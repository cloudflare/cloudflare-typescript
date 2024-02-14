// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/ranking/timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Gets Domains Rank updates change over time. Raw values are returned.
   */
  list(
    query?: TimeseriesGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupListResponse>;
  list(
    query: TimeseriesGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/ranking/timeseries_groups', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupListResponse {
  meta: TimeseriesGroupListResponse.Meta;

  serie_0: TimeseriesGroupListResponse.Serie0;
}

export namespace TimeseriesGroupListResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }
  }

  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string | number>;
  }
}

export interface TimeseriesGroupListParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Array of comma separated list of domains names.
   */
  domains?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of locations (alpha-2 country codes).
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * The ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
