// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttackersAPI from './attackers';
import { AttackerListParams, AttackerListResponse, Attackers, BaseAttackers } from './attackers';
import * as CategoriesAPI from './categories';
import {
  BaseCategories,
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryDeleteParams,
  CategoryDeleteResponse,
  CategoryEditParams,
  CategoryEditResponse,
  CategoryGetParams,
  CategoryGetResponse,
  CategoryListParams,
  CategoryListResponse,
} from './categories';
import * as CountriesAPI from './countries';
import { BaseCountries, Countries, CountryListParams, CountryListResponse } from './countries';
import * as CronsAPI from './crons';
import { BaseCrons, Crons } from './crons';
import * as EventTagsAPI from './event-tags';
import {
  BaseEventTags,
  EventTagCreateParams,
  EventTagCreateResponse,
  EventTagDeleteParams,
  EventTagDeleteResponse,
  EventTags,
} from './event-tags';
import * as IndicatorTypesAPI from './indicator-types';
import {
  BaseIndicatorTypes,
  IndicatorTypeListParams,
  IndicatorTypeListResponse,
  IndicatorTypes,
} from './indicator-types';
import * as InsightsAPI from './insights';
import { BaseInsights, Insights } from './insights';
import * as RawAPI from './raw';
import {
  BaseRaw,
  Raw as RawAPIRaw,
  RawEditParams,
  RawEditResponse,
  RawGetParams,
  RawGetResponse,
} from './raw';
import * as RelateAPI from './relate';
import { BaseRelate, Relate, RelateDeleteParams, RelateDeleteResponse } from './relate';
import * as TagsAPI from './tags';
import { BaseTags, TagCreateParams, TagCreateResponse, Tags } from './tags';
import * as TargetIndustriesAPI from './target-industries';
import {
  BaseTargetIndustries,
  TargetIndustries,
  TargetIndustryListParams,
  TargetIndustryListResponse,
} from './target-industries';
import * as DatasetsAPI from './datasets/datasets';
import {
  BaseDatasets,
  DatasetCreateParams,
  DatasetCreateResponse,
  DatasetEditParams,
  DatasetEditResponse,
  DatasetGetParams,
  DatasetGetResponse,
  DatasetListParams,
  DatasetListResponse,
  DatasetRawParams,
  DatasetRawResponse,
  Datasets,
} from './datasets/datasets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseThreatEvents extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
  ] as const);

  /**
   * To create a dataset, see the
   * [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/)
   * endpoint. When `datasetId` parameter is unspecified, it will be created in a
   * default dataset named `Cloudforce One Threat Events`.
   *
   * @example
   * ```ts
   * const threatEvent =
   *   await client.cloudforceOne.threatEvents.create({
   *     account_id: 'account_id',
   *     category: 'Domain Resolution',
   *     date: '2022-04-01T00:00:00Z',
   *     event: 'An attacker registered the domain domain.com',
   *     raw: { data: { foo: 'bar' } },
   *     tlp: 'amber',
   *   });
   * ```
   */
  create(params: ThreatEventCreateParams, options?: RequestOptions): APIPromise<ThreatEventCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/create`, {
      body,
      ...options,
    });
  }

  /**
   * Use `datasetId=all` or `datasetId=*` to query all event datasets for the account
   * (limited to 10). When `datasetId` is unspecified, events are listed from the
   * default Cloudforce One Threat Events dataset. To list existing datasets, use the
   * [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/)
   * endpoint.
   *
   * @example
   * ```ts
   * const threatEvents =
   *   await client.cloudforceOne.threatEvents.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: ThreatEventListParams, options?: RequestOptions): APIPromise<ThreatEventListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events`, { query, ...options });
  }

  /**
   * The `datasetId` parameter must be defined. To list existing datasets (and their
   * IDs) in your account, use the
   * [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/)
   * endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.bulkCreate({
   *     account_id: 'account_id',
   *     data: [
   *       {
   *         category: 'Domain Resolution',
   *         date: '2022-04-01T00:00:00Z',
   *         event:
   *           'An attacker registered the domain domain.com',
   *         raw: { data: { foo: 'bar' } },
   *         tlp: 'amber',
   *       },
   *     ],
   *     datasetId: 'durableObjectName',
   *   });
   * ```
   */
  bulkCreate(
    params: ThreatEventBulkCreateParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventBulkCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/create/bulk`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an event
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.edit('event_id', {
   *     account_id: 'account_id',
   *     datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
   *   });
   * ```
   */
  edit(
    eventID: string,
    params: ThreatEventEditParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/${eventID}`, {
      body,
      ...options,
    });
  }

  /**
   * This Method is deprecated. Please use
   * /events/dataset/:dataset_id/events/:event_id instead.
   *
   * @deprecated
   */
  get(
    eventID: string,
    params: ThreatEventGetParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventGetResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/${eventID}`, options);
  }
}
export class ThreatEvents extends BaseThreatEvents {
  attackers: AttackersAPI.Attackers = new AttackersAPI.Attackers(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);
  crons: CronsAPI.Crons = new CronsAPI.Crons(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  indicatorTypes: IndicatorTypesAPI.IndicatorTypes = new IndicatorTypesAPI.IndicatorTypes(this._client);
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
  relate: RelateAPI.Relate = new RelateAPI.Relate(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  eventTags: EventTagsAPI.EventTags = new EventTagsAPI.EventTags(this._client);
  targetIndustries: TargetIndustriesAPI.TargetIndustries = new TargetIndustriesAPI.TargetIndustries(
    this._client,
  );
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
}

export interface ThreatEventCreateResponse {
  attacker: string;

  attackerCountry: string;

  attackerCountryAlpha3: string;

  category: string;

  datasetId: string;

  date: string;

  event: string;

  hasChildren: boolean;

  indicator: string;

  indicatorType: string;

  indicatorTypeId: number;

  killChain: number;

  mitreAttack: Array<string>;

  mitreCapec: Array<string>;

  numReferenced: number;

  numReferences: number;

  rawId: string;

  referenced: Array<string>;

  referencedIds: Array<number>;

  references: Array<string>;

  referencesIds: Array<number>;

  tags: Array<string>;

  targetCountry: string;

  targetCountryAlpha3: string;

  targetIndustry: string;

  tlp: string;

  uuid: string;

  insight?: string;

  releasabilityId?: string;
}

export type ThreatEventListResponse = Array<ThreatEventListResponse.ThreatEventListResponseItem>;

export namespace ThreatEventListResponse {
  export interface ThreatEventListResponseItem {
    attacker: string;

    attackerCountry: string;

    attackerCountryAlpha3: string;

    category: string;

    datasetId: string;

    date: string;

    event: string;

    hasChildren: boolean;

    indicator: string;

    indicatorType: string;

    indicatorTypeId: number;

    killChain: number;

    mitreAttack: Array<string>;

    mitreCapec: Array<string>;

    numReferenced: number;

    numReferences: number;

    rawId: string;

    referenced: Array<string>;

    referencedIds: Array<number>;

    references: Array<string>;

    referencesIds: Array<number>;

    tags: Array<string>;

    targetCountry: string;

    targetCountryAlpha3: string;

    targetIndustry: string;

    tlp: string;

    uuid: string;

    insight?: string;

    releasabilityId?: string;
  }
}

/**
 * Detailed result of bulk event creation with auto-tag management
 */
export interface ThreatEventBulkCreateResponse {
  /**
   * Number of events created
   */
  createdEventsCount: number;

  /**
   * Number of new tags created in SoT
   */
  createdTagsCount: number;

  /**
   * Number of errors encountered
   */
  errorCount: number;

  /**
   * Number of indicators queued for async processing
   */
  queuedIndicatorsCount: number;

  /**
   * Correlation ID for async indicator processing
   */
  createBulkEventsRequestId?: string;

  /**
   * Array of created events with UUIDs and shard locations. Only present when
   * includeCreatedEvents=true
   */
  createdEvents?: Array<ThreatEventBulkCreateResponse.CreatedEvent>;

  /**
   * Array of error details
   */
  errors?: Array<ThreatEventBulkCreateResponse.Error>;
}

export namespace ThreatEventBulkCreateResponse {
  export interface CreatedEvent {
    /**
     * Original index in the input data array
     */
    eventIndex: number;

    /**
     * Dataset ID of the shard where the event was created
     */
    shardId: string;

    /**
     * UUID of the created event
     */
    uuid: string;
  }

  export interface Error {
    /**
     * Error message
     */
    error: string;

    /**
     * Index of the event that caused the error
     */
    eventIndex: number;
  }
}

export interface ThreatEventEditResponse {
  attacker: string;

  attackerCountry: string;

  attackerCountryAlpha3: string;

  category: string;

  datasetId: string;

  date: string;

  event: string;

  hasChildren: boolean;

  indicator: string;

  indicatorType: string;

  indicatorTypeId: number;

  killChain: number;

  mitreAttack: Array<string>;

  mitreCapec: Array<string>;

  numReferenced: number;

  numReferences: number;

  rawId: string;

  referenced: Array<string>;

  referencedIds: Array<number>;

  references: Array<string>;

  referencesIds: Array<number>;

  tags: Array<string>;

  targetCountry: string;

  targetCountryAlpha3: string;

  targetIndustry: string;

  tlp: string;

  uuid: string;

  insight?: string;

  releasabilityId?: string;
}

export interface ThreatEventGetResponse {
  attacker: string;

  attackerCountry: string;

  attackerCountryAlpha3: string;

  category: string;

  datasetId: string;

  date: string;

  event: string;

  hasChildren: boolean;

  indicator: string;

  indicatorType: string;

  indicatorTypeId: number;

  killChain: number;

  mitreAttack: Array<string>;

  mitreCapec: Array<string>;

  numReferenced: number;

  numReferences: number;

  rawId: string;

  referenced: Array<string>;

  referencedIds: Array<number>;

  references: Array<string>;

  referencesIds: Array<number>;

  tags: Array<string>;

  targetCountry: string;

  targetCountryAlpha3: string;

  targetIndustry: string;

  tlp: string;

  uuid: string;

  insight?: string;

  releasabilityId?: string;
}

export interface ThreatEventCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  category: string;

  /**
   * Body param
   */
  date: string;

  /**
   * Body param
   */
  event: string;

  /**
   * Body param
   */
  raw: ThreatEventCreateParams.Raw;

  /**
   * Body param
   */
  tlp: string;

  /**
   * Body param
   */
  accountId?: number;

  /**
   * Body param
   */
  attacker?: string | null;

  /**
   * Body param
   */
  attackerCountry?: string;

  /**
   * Body param
   */
  datasetId?: string;

  /**
   * Body param
   */
  indicator?: string;

  /**
   * Body param: Array of indicators for this event. Supports multiple indicators per
   * event for complex scenarios.
   */
  indicators?: Array<ThreatEventCreateParams.Indicator>;

  /**
   * Body param
   */
  indicatorType?: string;

  /**
   * Body param
   */
  insight?: string;

  /**
   * Body param
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  targetCountry?: string;

  /**
   * Body param
   */
  targetIndustry?: string;
}

export namespace ThreatEventCreateParams {
  export interface Raw {
    data: { [key: string]: unknown } | null;

    source?: string;

    tlp?: string;
  }

  export interface Indicator {
    /**
     * The type of indicator (e.g., DOMAIN, IP, JA3, HASH)
     */
    indicatorType: string;

    /**
     * The indicator value (e.g., domain name, IP address, hash)
     */
    value: string;
  }
}

export interface ThreatEventListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Cursor for pagination. When provided, filters are embedded in the
   * cursor so you only need to pass cursor and pageSize. Returned in the previous
   * response's result_info.cursor field. Use cursor-based pagination for deep
   * pagination (beyond 100,000 records) or for optimal performance.
   */
  cursor?: string;

  /**
   * Query param: Dataset IDs to query events from (array of UUIDs), or special value
   * 'all' or '\*' to query all event datasets for the account. If not provided, uses
   * the default dataset.
   */
  datasetId?: Array<string>;

  /**
   * Query param
   */
  forceRefresh?: boolean;

  /**
   * Query param
   */
  format?: 'json' | 'stix2' | 'taxii';

  /**
   * Query param
   */
  order?: 'asc' | 'desc';

  /**
   * Query param
   */
  orderBy?: string;

  /**
   * Query param: Page number (1-indexed) for offset-based pagination. Limited to
   * offset of 100,000 records. For deep pagination, use cursor-based pagination
   * instead.
   */
  page?: number;

  /**
   * Query param: Number of results per page. Maximum 25,000.
   */
  pageSize?: number;

  /**
   * Query param
   */
  search?: Array<ThreatEventListParams.Search>;
}

export namespace ThreatEventListParams {
  export interface Search {
    /**
     * Event field to search on. Allowed: attacker, attackerCountry, category,
     * createdAt, date, event, indicator, indicatorType, killChain, mitreAttack, tags,
     * targetCountry, targetIndustry, tlp, uuid.
     */
    field?: string;

    /**
     * Search operator. Use 'in' for bulk lookup of up to 100 values at once, e.g.
     * {field:'tags', op:'in', value:['malware','apt']}.
     */
    op?:
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
     * Search value. String or number for most operators. Array for 'in' operator (max
     * 100 items).
     */
    value?: string | number | Array<string | number>;
  }
}

export interface ThreatEventBulkCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  data: Array<ThreatEventBulkCreateParams.Data>;

  /**
   * Body param
   */
  datasetId: string;

  /**
   * Body param: When true, response includes array of created event UUIDs and shard
   * IDs. Useful for tracking which events were created and where.
   */
  includeCreatedEvents?: boolean;
}

export namespace ThreatEventBulkCreateParams {
  export interface Data {
    category: string;

    date: string;

    event: string;

    raw: Data.Raw;

    tlp: string;

    accountId?: number;

    attacker?: string | null;

    attackerCountry?: string;

    datasetId?: string;

    indicator?: string;

    /**
     * Array of indicators for this event. Supports multiple indicators per event for
     * complex scenarios.
     */
    indicators?: Array<Data.Indicator>;

    indicatorType?: string;

    insight?: string;

    tags?: Array<string>;

    targetCountry?: string;

    targetIndustry?: string;
  }

  export namespace Data {
    export interface Raw {
      data: { [key: string]: unknown } | null;

      source?: string;

      tlp?: string;
    }

    export interface Indicator {
      /**
       * The type of indicator (e.g., DOMAIN, IP, JA3, HASH)
       */
      indicatorType: string;

      /**
       * The indicator value (e.g., domain name, IP address, hash)
       */
      value: string;
    }
  }
}

export interface ThreatEventEditParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: Dataset ID containing the event to update.
   */
  datasetId: string;

  /**
   * Body param
   */
  attacker?: string | null;

  /**
   * Body param
   */
  attackerCountry?: string;

  /**
   * Body param
   */
  category?: string;

  /**
   * Body param
   */
  createdAt?: string;

  /**
   * Body param
   */
  date?: string;

  /**
   * Body param
   */
  event?: string;

  /**
   * Body param
   */
  indicator?: string;

  /**
   * Body param
   */
  indicatorType?: string;

  /**
   * Body param
   */
  insight?: string;

  /**
   * Body param
   */
  raw?: ThreatEventEditParams.Raw;

  /**
   * Body param
   */
  targetCountry?: string;

  /**
   * Body param
   */
  targetIndustry?: string;

  /**
   * Body param
   */
  tlp?: string;
}

export namespace ThreatEventEditParams {
  export interface Raw {
    data?: { [key: string]: unknown } | null;

    source?: string;

    tlp?: string;
  }
}

export interface ThreatEventGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

ThreatEvents.Attackers = Attackers;
ThreatEvents.BaseAttackers = BaseAttackers;
ThreatEvents.Categories = Categories;
ThreatEvents.BaseCategories = BaseCategories;
ThreatEvents.Countries = Countries;
ThreatEvents.BaseCountries = BaseCountries;
ThreatEvents.Crons = Crons;
ThreatEvents.BaseCrons = BaseCrons;
ThreatEvents.Datasets = Datasets;
ThreatEvents.BaseDatasets = BaseDatasets;
ThreatEvents.IndicatorTypes = IndicatorTypes;
ThreatEvents.BaseIndicatorTypes = BaseIndicatorTypes;
ThreatEvents.Raw = RawAPIRaw;
ThreatEvents.BaseRaw = BaseRaw;
ThreatEvents.Relate = Relate;
ThreatEvents.BaseRelate = BaseRelate;
ThreatEvents.Tags = Tags;
ThreatEvents.BaseTags = BaseTags;
ThreatEvents.EventTags = EventTags;
ThreatEvents.BaseEventTags = BaseEventTags;
ThreatEvents.TargetIndustries = TargetIndustries;
ThreatEvents.BaseTargetIndustries = BaseTargetIndustries;
ThreatEvents.Insights = Insights;
ThreatEvents.BaseInsights = BaseInsights;

export declare namespace ThreatEvents {
  export {
    type ThreatEventCreateResponse as ThreatEventCreateResponse,
    type ThreatEventListResponse as ThreatEventListResponse,
    type ThreatEventBulkCreateResponse as ThreatEventBulkCreateResponse,
    type ThreatEventEditResponse as ThreatEventEditResponse,
    type ThreatEventGetResponse as ThreatEventGetResponse,
    type ThreatEventCreateParams as ThreatEventCreateParams,
    type ThreatEventListParams as ThreatEventListParams,
    type ThreatEventBulkCreateParams as ThreatEventBulkCreateParams,
    type ThreatEventEditParams as ThreatEventEditParams,
    type ThreatEventGetParams as ThreatEventGetParams,
  };

  export {
    Attackers as Attackers,
    BaseAttackers as BaseAttackers,
    type AttackerListResponse as AttackerListResponse,
    type AttackerListParams as AttackerListParams,
  };

  export {
    Categories as Categories,
    BaseCategories as BaseCategories,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryEditResponse as CategoryEditResponse,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryEditParams as CategoryEditParams,
    type CategoryGetParams as CategoryGetParams,
  };

  export {
    Countries as Countries,
    BaseCountries as BaseCountries,
    type CountryListResponse as CountryListResponse,
    type CountryListParams as CountryListParams,
  };

  export { Crons as Crons, BaseCrons as BaseCrons };

  export {
    Datasets as Datasets,
    BaseDatasets as BaseDatasets,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetEditResponse as DatasetEditResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetRawResponse as DatasetRawResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetEditParams as DatasetEditParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetRawParams as DatasetRawParams,
  };

  export {
    IndicatorTypes as IndicatorTypes,
    BaseIndicatorTypes as BaseIndicatorTypes,
    type IndicatorTypeListResponse as IndicatorTypeListResponse,
    type IndicatorTypeListParams as IndicatorTypeListParams,
  };

  export {
    RawAPIRaw as Raw,
    BaseRaw as BaseRaw,
    type RawEditResponse as RawEditResponse,
    type RawGetResponse as RawGetResponse,
    type RawEditParams as RawEditParams,
    type RawGetParams as RawGetParams,
  };

  export {
    Relate as Relate,
    BaseRelate as BaseRelate,
    type RelateDeleteResponse as RelateDeleteResponse,
    type RelateDeleteParams as RelateDeleteParams,
  };

  export {
    Tags as Tags,
    BaseTags as BaseTags,
    type TagCreateResponse as TagCreateResponse,
    type TagCreateParams as TagCreateParams,
  };

  export {
    EventTags as EventTags,
    BaseEventTags as BaseEventTags,
    type EventTagCreateResponse as EventTagCreateResponse,
    type EventTagDeleteResponse as EventTagDeleteResponse,
    type EventTagCreateParams as EventTagCreateParams,
    type EventTagDeleteParams as EventTagDeleteParams,
  };

  export {
    TargetIndustries as TargetIndustries,
    BaseTargetIndustries as BaseTargetIndustries,
    type TargetIndustryListResponse as TargetIndustryListResponse,
    type TargetIndustryListParams as TargetIndustryListParams,
  };

  export { Insights as Insights, BaseInsights as BaseInsights };
}
