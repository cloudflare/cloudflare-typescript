// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AggregateAPI from './aggregate';
import { Aggregate, AggregateListParams, AggregateListResponse, BaseAggregate } from './aggregate';
import * as TypesAPI from './types';
import { BaseTypes, TypeListParams, TypeListResponse, Types } from './types';
import * as ByDatasetAPI from './by-dataset/by-dataset';
import {
  BaseByDataset,
  ByDataset,
  ByDatasetGetParams,
  ByDatasetGetResponse,
  ByDatasetListParams,
  ByDatasetListResponse,
} from './by-dataset/by-dataset';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseIndicators extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'indicators'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'indicators',
  ] as const);

  /**
   * Retrieves a paginated list of indicators across specified datasets. Use
   * datasetIds=all or datasetIds=\* to query all datasets for the account. If no
   * datasetIds provided, uses the default dataset.
   *
   * @example
   * ```ts
   * const indicators =
   *   await client.cloudforceOne.threatEvents.indicators.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: IndicatorListParams, options?: RequestOptions): APIPromise<IndicatorListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/indicators`, {
      query,
      ...options,
    });
  }
}
export class Indicators extends BaseIndicators {
  aggregate: AggregateAPI.Aggregate = new AggregateAPI.Aggregate(this._client);
  types: TypesAPI.Types = new TypesAPI.Types(this._client);
  byDataset: ByDatasetAPI.ByDataset = new ByDatasetAPI.ByDataset(this._client);
}

export interface IndicatorListResponse {
  properties: IndicatorListResponse.Properties;

  type: string;
}

export namespace IndicatorListResponse {
  export interface Properties {
    indicators: Properties.Indicators;

    pagination: Properties.Pagination;
  }

  export namespace Properties {
    export interface Indicators {
      items: Indicators.Items;

      type: string;
    }

    export namespace Indicators {
      export interface Items {
        createdAt: string;

        indicatorType: string;

        updatedAt: string;

        uuid: string;

        value: string;

        /**
         * The dataset ID this indicator belongs to. Included in list responses.
         */
        datasetId?: string;

        relatedEvents?: Array<Items.RelatedEvent>;

        tags?: Array<Items.Tag>;
      }

      export namespace Items {
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
    }

    export interface Pagination {
      properties: Pagination.Properties;

      type: string;
    }

    export namespace Pagination {
      export interface Properties {
        count: Properties.Count;

        page: Properties.Page;

        per_page: Properties.PerPage;

        total_count: Properties.TotalCount;
      }

      export namespace Properties {
        export interface Count {
          type: string;
        }

        export interface Page {
          type: string;
        }

        export interface PerPage {
          type: string;
        }

        export interface TotalCount {
          type: string;
        }
      }
    }
  }
}

export interface IndicatorListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Cache strategy. 'from-graph' serves results from the graph-node KV
   * cache when all requested UUIDs are cached; falls back to normal path on
   * partial/zero hit.
   */
  cache?: 'from-graph';

  /**
   * Query param: Filter indicators created on or after this date. Must use ISO 8601
   * format (e.g., '2024-01-15T00:00:00Z').
   */
  createdAfter?: string;

  /**
   * Query param: Filter indicators created on or before this date. Must use ISO 8601
   * format (e.g., '2024-12-31T23:59:59Z').
   */
  createdBefore?: string;

  /**
   * Query param: Dataset IDs to query indicators from (array of UUIDs), or special
   * value 'all' or '\*' to query all datasets. If not provided, uses the default
   * dataset.
   */
  datasetIds?: Array<string>;

  /**
   * Query param: Output format for indicator data. 'json' returns the default
   * format, 'stix2' returns STIX 2.1 Indicator SDOs, 'taxii' returns a TAXII 2.1
   * Envelope with Content-Type application/taxii+json;version=2.1.
   */
  format?: 'json' | 'stix2' | 'taxii';

  /**
   * Query param: Whether to include full tag details for each indicator. Defaults to
   * true.
   */
  includeTags?: boolean;

  /**
   * Query param: Whether to compute accurate total count via COUNT(\*). Defaults to
   * false for performance. When false, total_count is an approximation.
   */
  includeTotalCount?: boolean;

  /**
   * Query param
   */
  indicatorType?: string;

  /**
   * Query param: Filter indicators by value using substring match (LIKE). Legacy
   * alternative to structured search.
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
   * Query param: Filter by related event IDs
   */
  relatedEvents?: Array<string>;

  /**
   * Query param: Limit the number of related events returned per indicator.
   * Default: 2. Set to 0 for none, -1 for all events.
   */
  relatedEventsLimit?: number;

  /**
   * Query param: Structured search as a JSON array of {field, op, value} objects.
   * Searchable fields: value, indicatorType, uuid. Supports operators: equals, not,
   * contains, startsWith, endsWith, gt, lt, gte, lte, like, in, find. Use the 'in'
   * operator with an array value to bulk-check up to 100 indicators in a single
   * request, e.g.
   * search=[{"field":"value","op":"in","value":["evil.com","bad.org"]}]. Multiple
   * conditions are AND'd together. Max 10 conditions per request.
   */
  search?: Array<IndicatorListParams.Search>;

  /**
   * Query param: Read backend. 'do' (default) reads Durable Object storage.
   * 'r2catalog' reads R2 Data Catalog (admin-only, experimental; supports a subset
   * of search fields).
   */
  source?: 'do' | 'r2catalog';

  /**
   * Query param: Filter by tag values or UUIDs. Indicators must have at least one of
   * the specified tags (OR logic). Supports both tag UUID and tag value.
   */
  tags?: Array<string>;

  /**
   * Query param: Structured tag-metadata filter as a JSON array of {field, op,
   * value} objects. Operates against the per-dataset IndicatorTag mirror so you can
   * find indicators by tag attributes (origin country, motive, sophistication,
   * priority, etc.) without a separate Tags lookup. Common dashboard usage: drill
   * from a country into indicators, e.g.
   * tagSearch=[{"field":"originCountryISO","op":"in","value":["IR","CN"]}]. Country
   * values may be passed as alpha-2, alpha-3, name, or alias (e.g. "iran").
   * Operators: equals, not, gt/gte/lt/lte (numeric only),
   * contains/like/find/startsWith/endsWith (string only), in. AND-joined across
   * entries; combined with `tags`, a matching tag must satisfy both. Max 10 entries
   * per request, max 100 values per 'in'. Performance notes: `originCountryISO` uses
   * its B-tree index for equals/not/in. `priority` uses its B-tree index for numeric
   * comparisons. Other string columns (`actorCategory`, `motive`, etc.) are
   * case-insensitive and unindexed; current catalog size makes this a non-issue.
   * `endsWith` and `aliasGroupNames` contains/like are leading-wildcard scans and
   * slow on large result sets. `aliasGroupNames` matches on the JSON-encoded text,
   * so substrings can cross alias boundaries ("apt28" also matches "apt280" when
   * both appear in the same tag's alias list).
   */
  tagSearch?: Array<IndicatorListParams.TagSearch>;
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

  export interface TagSearch {
    /**
     * Tag mirror field to filter on. Allowed: value, categoryId, actorCategory,
     * aliasGroupNames, attributionConfidence, attributionOrganization, motive,
     * opsecLevel, originCountryISO, sophisticationLevel, priority, analyticPriority.
     * Filters operate against the per-dataset IndicatorTag mirror (which is kept in
     * sync with the Tags SoT by the tag-propagation workflow).
     */
    field:
      | 'value'
      | 'categoryId'
      | 'actorCategory'
      | 'aliasGroupNames'
      | 'attributionConfidence'
      | 'attributionOrganization'
      | 'motive'
      | 'opsecLevel'
      | 'originCountryISO'
      | 'sophisticationLevel'
      | 'priority'
      | 'analyticPriority';

    /**
     * Search operator. Use 'in' for bulk OR within a single field, e.g.
     * {field:"originCountryISO", op:"in", value:["IR","CN"]}.
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
     * Search value. String or number for most operators. Array for 'in' (max 100
     * items). Country values may be passed as alpha-2, alpha-3, name, or common alias
     * (e.g. "iran", "IR", "IRN") and are normalized to alpha-2 server-side.
     */
    value?: string | number | Array<string | number>;
  }
}

Indicators.Aggregate = Aggregate;
Indicators.BaseAggregate = BaseAggregate;
Indicators.Types = Types;
Indicators.BaseTypes = BaseTypes;
Indicators.ByDataset = ByDataset;
Indicators.BaseByDataset = BaseByDataset;

export declare namespace Indicators {
  export {
    type IndicatorListResponse as IndicatorListResponse,
    type IndicatorListParams as IndicatorListParams,
  };

  export {
    Aggregate as Aggregate,
    BaseAggregate as BaseAggregate,
    type AggregateListResponse as AggregateListResponse,
    type AggregateListParams as AggregateListParams,
  };

  export {
    Types as Types,
    BaseTypes as BaseTypes,
    type TypeListResponse as TypeListResponse,
    type TypeListParams as TypeListParams,
  };

  export {
    ByDataset as ByDataset,
    BaseByDataset as BaseByDataset,
    type ByDatasetListResponse as ByDatasetListResponse,
    type ByDatasetGetResponse as ByDatasetGetResponse,
    type ByDatasetListParams as ByDatasetListParams,
    type ByDatasetGetParams as ByDatasetGetParams,
  };
}
