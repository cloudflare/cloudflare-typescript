// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseByDataset extends APIResource {
  static override readonly _key: readonly [
    'cloudforceOne',
    'threatEvents',
    'tags',
    'indicators',
    'byDataset',
  ] = Object.freeze(['cloudforceOne', 'threatEvents', 'tags', 'indicators', 'byDataset'] as const);

  /**
   * This endpoint is deprecated. Use GET
   * /:account_id/events/tags/:tag_uuid/indicators with the optional datasetIds query
   * parameter instead. Returns indicators associated with the provided tag UUID
   * within a single dataset's indicator shards, with pagination.
   *
   * @deprecated Use list instead (GET /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators).
   */
  list(
    tagUUID: string,
    params: ByDatasetListParams,
    options?: RequestOptions,
  ): APIPromise<ByDatasetListResponse> {
    const { account_id, dataset_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/tags/${tagUUID}/indicators`,
      { query, ...options },
    );
  }
}
export class ByDataset extends BaseByDataset {}

export interface ByDatasetListResponse {
  indicators: Array<ByDatasetListResponse.Indicator>;

  pagination: ByDatasetListResponse.Pagination;
}

export namespace ByDatasetListResponse {
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

export interface ByDatasetListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Path param: Dataset UUID.
   */
  dataset_id: string;

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
  search?: Array<ByDatasetListParams.Search>;
}

export namespace ByDatasetListParams {
  export interface Search {
    /**
     * The indicator field to search on. Allowed: value, indicatorType.
     */
    field: 'value' | 'indicatorType';

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

export declare namespace ByDataset {
  export {
    type ByDatasetListResponse as ByDatasetListResponse,
    type ByDatasetListParams as ByDatasetListParams,
  };
}
