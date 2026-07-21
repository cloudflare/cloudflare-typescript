// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ByDatasetAPI from './by-dataset';
import { BaseByDataset, ByDataset, ByDatasetListParams, ByDatasetListResponse } from './by-dataset';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseIndicators extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'tags', 'indicators'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'tags', 'indicators'] as const);

  /**
   * Returns indicators associated with the provided tag UUID, with pagination. By
   * default fans out across every indicator dataset the account can read; pass
   * datasetIds to scope to specific datasets.
   *
   * @example
   * ```ts
   * const indicators =
   *   await client.cloudforceOne.threatEvents.tags.indicators.list(
   *     'tag_uuid',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(
    tagUUID: string,
    params: IndicatorListParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}/indicators`, {
      query,
      ...options,
    });
  }
}
export class Indicators extends BaseIndicators {
  byDataset: ByDatasetAPI.ByDataset = new ByDatasetAPI.ByDataset(this._client);
}

export interface IndicatorListResponse {
  indicators: Array<IndicatorListResponse.Indicator>;

  pagination: IndicatorListResponse.Pagination;
}

export namespace IndicatorListResponse {
  export interface Indicator {
    createdAt: string;

    indicatorType: string;

    updatedAt: string;

    uuid: string;

    value: string;

    /**
     * The dataset ID this indicator belongs to. Included in list responses.
     */
    datasetId?: string;

    relatedEvents?: Array<Indicator.RelatedEvent>;

    tags?: Array<Indicator.Tag>;
  }

  export namespace Indicator {
    export interface RelatedEvent {
      datasetId: string;

      eventId: string;
    }

    export interface Tag {
      categoryName?: string;

      uuid?: string;

      value?: string;
    }
  }

  export interface Pagination {
    page: number;

    pageSize: number;

    totalCount: number;

    totalPages: number;
  }
}

export interface IndicatorListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Dataset UUIDs to scope to (repeat the param for multiple), or 'all'
   * / '\*' for every readable indicator dataset. Omit to search all readable
   * datasets.
   */
  datasetIds?: Array<string>;

  /**
   * Query param
   */
  indicatorType?: string;

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  pageSize?: number;

  /**
   * Query param: Filter indicators by related event UUID(s). Multiple UUIDs can be
   * provided by repeating the parameter.
   */
  relatedEvent?: Array<string>;

  /**
   * Query param: Structured search as a JSON array of {field, op, value} objects.
   * Searchable fields: value, indicatorType. Multiple conditions are AND'd together.
   * Max 10 conditions per request.
   */
  search?: Array<IndicatorListParams.Search>;
}

export namespace IndicatorListParams {
  export interface Search {
    /**
     * The indicator field to search on. Allowed: value, indicatorType, uuid.
     */
    field: 'value' | 'indicatorType' | 'uuid';

    /**
     * Search operator. Use 'in' for bulk lookup of up to 100 values at once, e.g.
     * {field:'value', op:'in', value:['evil.com','bad.org']}.
     */
    op:
      | 'equals'
      | 'not'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | 'like'
      | 'contains'
      | 'startsWith'
      | 'endsWith'
      | 'in'
      | 'find';

    /**
     * Search value. String for most operators. Array of strings for 'in' operator (max
     * 100 items).
     */
    value: string | Array<string>;
  }
}

Indicators.ByDataset = ByDataset;
Indicators.BaseByDataset = BaseByDataset;

export declare namespace Indicators {
  export {
    type IndicatorListResponse as IndicatorListResponse,
    type IndicatorListParams as IndicatorListParams,
  };

  export {
    ByDataset as ByDataset,
    BaseByDataset as BaseByDataset,
    type ByDatasetListResponse as ByDatasetListResponse,
    type ByDatasetListParams as ByDatasetListParams,
  };
}
