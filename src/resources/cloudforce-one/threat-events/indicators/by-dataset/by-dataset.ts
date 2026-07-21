// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as TagsAPI from './tags';
import { BaseTags, TagListParams, TagListResponse, Tags } from './tags';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseByDataset extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'indicators', 'byDataset'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'indicators', 'byDataset'] as const);

  /**
   * This method is deprecated. Please use /events/indicators to retrieve a paginated
   * list of indicators.
   *
   * @deprecated Use indicators.list instead (GET /accounts/{account_id}/cloudforce-one/events/indicators).
   */
  list(
    datasetID: string,
    params: ByDatasetListParams,
    options?: RequestOptions,
  ): APIPromise<ByDatasetListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicators`,
      { query, ...options },
    );
  }

  /**
   * Retrieves a specific indicator by its UUID.
   *
   * @example
   * ```ts
   * const byDataset =
   *   await client.cloudforceOne.threatEvents.indicators.byDataset.get(
   *     'indicator_id',
   *     { account_id: 'account_id', dataset_id: 'dataset_id' },
   *   );
   * ```
   */
  get(
    indicatorID: string,
    params: ByDatasetGetParams,
    options?: RequestOptions,
  ): APIPromise<ByDatasetGetResponse> {
    const { account_id, dataset_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/indicators/${indicatorID}`,
      options,
    );
  }
}
export class ByDataset extends BaseByDataset {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

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

export interface ByDatasetGetResponse {
  createdAt: string;

  indicatorType: string;

  updatedAt: string;

  uuid: string;

  value: string;

  /**
   * The dataset ID this indicator belongs to. Included in list responses.
   */
  datasetId?: string;

  relatedEvents?: Array<ByDatasetGetResponse.RelatedEvent>;

  tags?: Array<ByDatasetGetResponse.Tag>;
}

export namespace ByDatasetGetResponse {
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

export interface ByDatasetListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  indicatorType?: string;

  /**
   * Query param: Filter by indicator value (substring match)
   */
  name?: string;

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
}

export interface ByDatasetGetParams {
  /**
   * Account ID.
   */
  account_id: string;

  /**
   * Dataset ID.
   */
  dataset_id: string;
}

ByDataset.Tags = Tags;
ByDataset.BaseTags = BaseTags;

export declare namespace ByDataset {
  export {
    type ByDatasetListResponse as ByDatasetListResponse,
    type ByDatasetGetResponse as ByDatasetGetResponse,
    type ByDatasetListParams as ByDatasetListParams,
    type ByDatasetGetParams as ByDatasetGetParams,
  };

  export {
    Tags as Tags,
    BaseTags as BaseTags,
    type TagListResponse as TagListResponse,
    type TagListParams as TagListParams,
  };
}
