// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class InternetServices extends APIResource {
  /**
   * Retrieves the list of Internet services categories.
   */
  categories(
    query?: InternetServiceCategoriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternetServiceCategoriesResponse>;
  categories(options?: Core.RequestOptions): Core.APIPromise<InternetServiceCategoriesResponse>;
  categories(
    query: InternetServiceCategoriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternetServiceCategoriesResponse> {
    if (isRequestOptions(query)) {
      return this.categories({}, query);
    }
    return (
      this._client.get('/radar/ranking/internet_services/categories', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: InternetServiceCategoriesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves Internet Services rank update changes over time.
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
   * Retrieves top Internet services based on their rank.
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

export interface InternetServiceCategoriesResponse {
  categories_0: Array<InternetServiceCategoriesResponse.Categories0>;
}

export namespace InternetServiceCategoriesResponse {
  export interface Categories0 {
    name: string;
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

export interface InternetServiceCategoriesParams {
  /**
   * Array of dates to filter the results.
   */
  date?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface InternetServiceTimeseriesGroupsParams {
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
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by Internet service category.
   */
  serviceCategory?: Array<string>;
}

export interface InternetServiceTopParams {
  /**
   * Array of dates to filter the results.
   */
  date?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by Internet service category.
   */
  serviceCategory?: Array<string>;
}

export declare namespace InternetServices {
  export {
    type InternetServiceCategoriesResponse as InternetServiceCategoriesResponse,
    type InternetServiceTimeseriesGroupsResponse as InternetServiceTimeseriesGroupsResponse,
    type InternetServiceTopResponse as InternetServiceTopResponse,
    type InternetServiceCategoriesParams as InternetServiceCategoriesParams,
    type InternetServiceTimeseriesGroupsParams as InternetServiceTimeseriesGroupsParams,
    type InternetServiceTopParams as InternetServiceTopParams,
  };
}
