// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class InternetServices extends APIResource {
  /**
   * Gets Internet Services rank update changes over time. Raw values are returned.
   */
  timeseriesGroups(
    query?: InternetServiceTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternetServiceTimeseriesGroupsResponse>;
  timeseriesGroups(options?: Core.RequestOptions): Core.APIPromise<InternetServiceTimeseriesGroupsResponse>;
  timeseriesGroups(
    query: InternetServiceTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternetServiceTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroups({}, query);
    }
    return (
      this._client.get('/radar/ranking/internet_services/timeseries_groups', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: InternetServiceTimeseriesGroupsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get top Internet services based on their rank.
   */
  top(
    query?: InternetServiceTopParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternetServiceTopResponse>;
  top(options?: Core.RequestOptions): Core.APIPromise<InternetServiceTopResponse>;
  top(
    query: InternetServiceTopParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternetServiceTopResponse> {
    if (isRequestOptions(query)) {
      return this.top({}, query);
    }
    return (
      this._client.get('/radar/ranking/internet_services/top', { query, ...options }) as Core.APIPromise<{
        result: InternetServiceTopResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface InternetServiceTimeseriesGroupsResponse {
  meta: InternetServiceTimeseriesGroupsResponse.Meta;

  serie_0: InternetServiceTimeseriesGroupsResponse.Serie0;
}

export namespace InternetServiceTimeseriesGroupsResponse {
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
    [k: string]: Array<string | number> | Array<string> | undefined;
  }
}

export interface InternetServiceTopResponse {
  meta: InternetServiceTopResponse.Meta;

  top_0: Array<InternetServiceTopResponse.Top0>;
}

export namespace InternetServiceTopResponse {
  export interface Meta {
    top_0: Meta.Top0;
  }

  export namespace Meta {
    export interface Top0 {
      date: string;

      serviceCategory: string;
    }
  }

  export interface Top0 {
    rank: number;

    service: string;
  }
}

export interface InternetServiceTimeseriesGroupsParams {
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
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for services category.
   */
  serviceCategory?: Array<string>;
}

export interface InternetServiceTopParams {
  /**
   * Array of dates to filter the ranking.
   */
  date?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for services category.
   */
  serviceCategory?: Array<string>;
}

export declare namespace InternetServices {
  export {
    type InternetServiceTimeseriesGroupsResponse as InternetServiceTimeseriesGroupsResponse,
    type InternetServiceTopResponse as InternetServiceTopResponse,
    type InternetServiceTimeseriesGroupsParams as InternetServiceTimeseriesGroupsParams,
    type InternetServiceTopParams as InternetServiceTopParams,
  };
}
