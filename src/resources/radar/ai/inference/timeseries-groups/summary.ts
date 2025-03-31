// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Summary extends APIResource {
  /**
   * Retrieves the distribution of unique accounts by model over time.
   */
  model(
    query: SummaryModelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryModelResponse> {
    return (
      this._client.get('/radar/ai/inference/timeseries_groups/model', { query, ...options }) as APIPromise<{
        result: SummaryModelResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of unique accounts by task over time.
   */
  task(
    query: SummaryTaskParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryTaskResponse> {
    return (
      this._client.get('/radar/ai/inference/timeseries_groups/task', { query, ...options }) as APIPromise<{
        result: SummaryTaskResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryModelResponse {
  meta: unknown;

  serie_0: unknown;
}

export interface SummaryTaskResponse {
  meta: unknown;

  serie_0: unknown;
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
   * Array of names used to label the series in the response.
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
   * Array of names used to label the series in the response.
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
