// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseAggregate extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'indicators', 'aggregate'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'indicators', 'aggregate'] as const);

  /**
   * Aggregate threat indicators by one or more columns (e.g., indicatorType, value)
   * across datasets. Returns top-N groups ordered by count.
   *
   * @example
   * ```ts
   * const aggregates =
   *   await client.cloudforceOne.threatEvents.indicators.aggregate.list(
   *     {
   *       account_id: 'account_id',
   *       aggregateBy: 'aggregateBy',
   *     },
   *   );
   * ```
   */
  list(params: AggregateListParams, options?: RequestOptions): APIPromise<AggregateListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/indicators/aggregate`, {
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
   * Number of datasets whose aggregation failed and were excluded from the result
   */
  failedDatasets: number;

  /**
   * Total count in the aggregation: indicator rows when measure=indicators, or
   * linked-event rows when measure=relationships
   */
  total: number;
}

export namespace AggregateListResponse {
  export interface Aggregation {
    /**
     * Number of indicators for this aggregation
     */
    count: number;

    [k: string]: string | null | number | undefined;
  }
}

export interface AggregateListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Column(s) to aggregate by - single column or comma-separated list
   * (e.g., 'indicatorType', 'value', 'indicatorType,value')
   */
  aggregateBy: string;

  /**
   * Query param: Filter indicators created after this date (ISO 8601 format, e.g.,
   * '2024-01-01')
   */
  createdAfter?: string;

  /**
   * Query param: Filter indicators created before this date (ISO 8601 format, e.g.,
   * '2024-12-31')
   */
  createdBefore?: string;

  /**
   * Query param: Dataset ID(s) to filter by. Can be a single dataset ID or
   * comma-separated list. If not provided, aggregates across all accessible datasets
   */
  datasetIds?: Array<string>;

  /**
   * Query param: For measure=relationships: only count event links whose eventDate
   * is on/after this date (ISO 8601). Use to bound 'top indicator' to recent
   * activity.
   */
  eventDateAfter?: string;

  /**
   * Query param: For measure=relationships: only count event links whose eventDate
   * is on/before this date (ISO 8601).
   */
  eventDateBefore?: string;

  /**
   * Query param: Maximum number of aggregation results to return (1-100)
   */
  limit?: number;

  /**
   * Query param: What to count per group: 'indicators' (catalog rows, default) or
   * 'relationships' (linked events per indicator). Use 'relationships' for 'top
   * indicator by event activity'.
   */
  measure?: 'indicators' | 'relationships';

  /**
   * Query param: Scope to indicators associated with this tag/actor UUID. Combine
   * with measure=relationships for 'top indicator for an actor'.
   */
  tagUuid?: string;
}

export declare namespace Aggregate {
  export {
    type AggregateListResponse as AggregateListResponse,
    type AggregateListParams as AggregateListParams,
  };
}
