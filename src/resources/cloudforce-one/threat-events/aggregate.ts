// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAggregate extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'aggregate'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'aggregate',
  ] as const);

  /**
   * Counts events grouped by one or more columns, such as `attacker` or
   * `targetIndustry`. Optionally filter by date range and group the counts by day.
   *
   * @example
   * ```ts
   * const aggregates =
   *   await client.cloudforceOne.threatEvents.aggregate.list({
   *     account_id: 'account_id',
   *     aggregateBy: 'aggregateBy',
   *   });
   * ```
   */
  list(params: AggregateListParams, options?: RequestOptions): APIPromise<AggregateListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/aggregate`, {
      query,
      ...options,
    });
  }
}
export class Aggregate extends BaseAggregate {}

export interface AggregateListResponse {
  /**
   * Column(s) that were aggregated by
   */
  aggregateBy: string;

  /**
   * Array of aggregation results with dynamic fields based on aggregateBy columns
   */
  aggregations: Array<AggregateListResponse.Aggregation>;

  /**
   * Total number of events in the aggregation
   */
  total: number;

  /**
   * Date range used for filtering
   */
  dateRange?: AggregateListResponse.DateRange;
}

export namespace AggregateListResponse {
  export interface Aggregation {
    /**
     * Number of events for this aggregation
     */
    count: number;

    /**
     * Date (if groupByDate is true)
     */
    date?: string;

    [k: string]: string | null | number | undefined;
  }

  /**
   * Date range used for filtering
   */
  export interface DateRange {
    endDate?: string;

    startDate?: string;
  }
}

export interface AggregateListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Column(s) to aggregate by - single column or comma-separated list
   * (e.g., 'attacker', 'targetIndustry', 'attacker,targetIndustry'). With `tags`, an
   * event counts once for each of its tags, in the bucket counts and in `total`, and
   * events without tags count as `Unknown`; `tags` is not supported for analytics
   * datasets.
   */
  aggregateBy: string;

  /**
   * Query param: Dataset UUIDs to filter by, or one standalone scope value:
   * 'all'/'\*' or 'operational' for readable intelligence datasets
   * (isAnalytics=false), or 'analytics' for readable analytics datasets
   * (isAnalytics=true). Scope values query at most 50 datasets. If not provided,
   * uses the default dataset.
   */
  datasetId?: Array<string>;

  /**
   * Query param: End date for filtering (ISO 8601 format, e.g., '2024-12-31')
   */
  endDate?: string;

  /**
   * Query param: Whether to group results by date (daily aggregation)
   */
  groupByDate?: boolean;

  /**
   * Query param: Maximum number of results to return
   */
  limit?: number;

  /**
   * Query param: Start date for filtering (ISO 8601 format, e.g., '2024-01-01')
   */
  startDate?: string;
}

export declare namespace Aggregate {
  export {
    type AggregateListResponse as AggregateListResponse,
    type AggregateListParams as AggregateListParams,
  };
}
