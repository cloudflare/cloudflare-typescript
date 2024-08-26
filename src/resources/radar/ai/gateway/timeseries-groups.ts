// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of unique accounts per model over time.
   */
  model(
    query?: TimeseriesGroupModelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupModelResponse>;
  model(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupModelResponse>;
  model(
    query: TimeseriesGroupModelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupModelResponse> {
    if (isRequestOptions(query)) {
      return this.model({}, query);
    }
    return (
      this._client.get('/radar/ai/inference/timeseries_groups/model', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupModelResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of unique accounts per provider over time.
   */
  provider(
    query?: TimeseriesGroupProviderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupProviderResponse>;
  provider(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupProviderResponse>;
  provider(
    query: TimeseriesGroupProviderParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupProviderResponse> {
    if (isRequestOptions(query)) {
      return this.provider({}, query);
    }
    return (
      this._client.get('/radar/ai/gateway/timeseries_groups/provider', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupProviderResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of unique accounts per task over time.
   */
  task(
    query?: TimeseriesGroupTaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupTaskResponse>;
  task(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupTaskResponse>;
  task(
    query: TimeseriesGroupTaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupTaskResponse> {
    if (isRequestOptions(query)) {
      return this.task({}, query);
    }
    return (
      this._client.get('/radar/ai/inference/timeseries_groups/task', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupTaskResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupModelResponse {
  meta: unknown;

  serie_0: TimeseriesGroupModelResponse.Serie0;
}

export namespace TimeseriesGroupModelResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupProviderResponse {
  meta: unknown;

  serie_0: TimeseriesGroupProviderResponse.Serie0;
}

export namespace TimeseriesGroupProviderResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupTaskResponse {
  meta: unknown;

  serie_0: TimeseriesGroupTaskResponse.Serie0;
}

export namespace TimeseriesGroupTaskResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupModelParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface TimeseriesGroupProviderParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface TimeseriesGroupTaskParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupModelResponse = TimeseriesGroupsAPI.TimeseriesGroupModelResponse;
  export import TimeseriesGroupProviderResponse = TimeseriesGroupsAPI.TimeseriesGroupProviderResponse;
  export import TimeseriesGroupTaskResponse = TimeseriesGroupsAPI.TimeseriesGroupTaskResponse;
  export import TimeseriesGroupModelParams = TimeseriesGroupsAPI.TimeseriesGroupModelParams;
  export import TimeseriesGroupProviderParams = TimeseriesGroupsAPI.TimeseriesGroupProviderParams;
  export import TimeseriesGroupTaskParams = TimeseriesGroupsAPI.TimeseriesGroupTaskParams;
}
