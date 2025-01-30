// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import * as Core from '../../../../../core';

export class Summary extends APIResource {
  /**
   * Percentage distribution of unique accounts by model over time.
   */
  model(query?: SummaryModelParams, options?: Core.RequestOptions): Core.APIPromise<SummaryModelResponse>;
  model(options?: Core.RequestOptions): Core.APIPromise<SummaryModelResponse>;
  model(
    query: SummaryModelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryModelResponse> {
    if (isRequestOptions(query)) {
      return this.model({}, query);
    }
    return (
      this._client.get('/radar/ai/inference/timeseries_groups/model', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SummaryModelResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of unique accounts by task over time.
   */
  task(query?: SummaryTaskParams, options?: Core.RequestOptions): Core.APIPromise<SummaryTaskResponse>;
  task(options?: Core.RequestOptions): Core.APIPromise<SummaryTaskResponse>;
  task(
    query: SummaryTaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryTaskResponse> {
    if (isRequestOptions(query)) {
      return this.task({}, query);
    }
    return (
      this._client.get('/radar/ai/inference/timeseries_groups/task', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SummaryTaskResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryModelResponse {
  meta: unknown;

  serie_0: SummaryModelResponse.Serie0;
}

export namespace SummaryModelResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface SummaryTaskResponse {
  meta: unknown;

  serie_0: SummaryTaskResponse.Serie0;
}

export namespace SummaryTaskResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface SummaryModelParams {
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

export interface SummaryTaskParams {
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

export declare namespace Summary {
  export {
    type SummaryModelResponse as SummaryModelResponse,
    type SummaryTaskResponse as SummaryTaskResponse,
    type SummaryModelParams as SummaryModelParams,
    type SummaryTaskParams as SummaryTaskParams,
  };
}
