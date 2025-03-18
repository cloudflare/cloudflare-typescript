// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AttackersAPI from './attackers';
import { AttackerListParams, AttackerListResponse, Attackers } from './attackers';
import * as CategoriesAPI from './categories';
import {
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
import { Countries, CountryListParams, CountryListResponse } from './countries';
import * as CronsAPI from './crons';
import { CronEditParams, CronEditResponse, CronListParams, CronListResponse, Crons } from './crons';
import * as DatasetsAPI from './datasets';
import {
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
} from './datasets';
import * as EventTagsAPI from './event-tags';
import {
  EventTagCreateParams,
  EventTagCreateResponse,
  EventTagDeleteParams,
  EventTagDeleteResponse,
  EventTags,
} from './event-tags';
import * as IndicatorTypesAPI from './indicator-types';
import { IndicatorTypeListParams, IndicatorTypeListResponse, IndicatorTypes } from './indicator-types';
import * as InsightsAPI from './insights';
import {
  InsightCreateParams,
  InsightCreateResponse,
  InsightDeleteParams,
  InsightDeleteResponse,
  InsightEditParams,
  InsightEditResponse,
  InsightGetParams,
  InsightGetResponse,
  Insights,
} from './insights';
import * as RawAPI from './raw';
import { Raw as RawAPIRaw, RawEditParams, RawEditResponse, RawGetParams, RawGetResponse } from './raw';
import * as RelateAPI from './relate';
import { Relate, RelateDeleteParams, RelateDeleteResponse } from './relate';
import * as TagsAPI from './tags';
import { TagCreateParams, TagCreateResponse, Tags } from './tags';
import * as TargetIndustriesAPI from './target-industries';
import { TargetIndustries, TargetIndustryListParams, TargetIndustryListResponse } from './target-industries';

export class ThreatEvents extends APIResource {
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

  /**
   * Creates a new event
   */
  create(
    params: ThreatEventCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/create`, { body, ...options });
  }

  /**
   * Deletes an event
   */
  delete(
    eventId: string,
    params: ThreatEventDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/cloudforce-one/events/${eventId}`, options);
  }

  /**
   * Creates bulk events
   */
  bulkCreate(
    params: ThreatEventBulkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventBulkCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/create/bulk`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an event
   */
  edit(
    eventId: string,
    params: ThreatEventEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/cloudforce-one/events/${eventId}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads an event
   */
  get(
    eventId: string,
    params: ThreatEventGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/${eventId}`, options);
  }
}

export interface ThreatEventCreateResponse {
  id: number;

  accountId: number;

  attacker: string;

  attackerCountry: string;

  category: string;

  categoryId: number;

  date: string;

  event: string;

  indicator: string;

  indicatorType: string;

  indicatorTypeId: number;

  killChain: number;

  mitreAttack: Array<string>;

  numReferenced: number;

  numReferences: number;

  rawId: string;

  referenced: Array<string>;

  referencedIds: Array<number>;

  references: Array<string>;

  referencesIds: Array<number>;

  tags: Array<string>;

  targetCountry: string;

  targetIndustry: string;

  tlp: string;

  uuid: string;

  insight?: string;

  releasabilityId?: string;
}

export interface ThreatEventDeleteResponse {
  uuid: string;
}

export type ThreatEventBulkCreateResponse =
  Array<ThreatEventBulkCreateResponse.ThreatEventBulkCreateResponseItem>;

export namespace ThreatEventBulkCreateResponse {
  export interface ThreatEventBulkCreateResponseItem {
    id: number;

    accountId: number;

    attacker: string;

    attackerCountry: string;

    category: string;

    categoryId: number;

    date: string;

    event: string;

    indicator: string;

    indicatorType: string;

    indicatorTypeId: number;

    killChain: number;

    mitreAttack: Array<string>;

    numReferenced: number;

    numReferences: number;

    rawId: string;

    referenced: Array<string>;

    referencedIds: Array<number>;

    references: Array<string>;

    referencesIds: Array<number>;

    tags: Array<string>;

    targetCountry: string;

    targetIndustry: string;

    tlp: string;

    uuid: string;

    insight?: string;

    releasabilityId?: string;
  }
}

export interface ThreatEventEditResponse {
  id: number;

  accountId: number;

  attacker: string;

  attackerCountry: string;

  category: string;

  categoryId: number;

  date: string;

  event: string;

  indicator: string;

  indicatorType: string;

  indicatorTypeId: number;

  killChain: number;

  mitreAttack: Array<string>;

  numReferenced: number;

  numReferences: number;

  rawId: string;

  referenced: Array<string>;

  referencedIds: Array<number>;

  references: Array<string>;

  referencesIds: Array<number>;

  tags: Array<string>;

  targetCountry: string;

  targetIndustry: string;

  tlp: string;

  uuid: string;

  insight?: string;

  releasabilityId?: string;
}

export interface ThreatEventGetResponse {
  id: number;

  accountId: number;

  attacker: string;

  attackerCountry: string;

  category: string;

  categoryId: number;

  date: string;

  event: string;

  indicator: string;

  indicatorType: string;

  indicatorTypeId: number;

  killChain: number;

  mitreAttack: Array<string>;

  numReferenced: number;

  numReferences: number;

  rawId: string;

  referenced: Array<string>;

  referencedIds: Array<number>;

  references: Array<string>;

  referencesIds: Array<number>;

  tags: Array<string>;

  targetCountry: string;

  targetIndustry: string;

  tlp: string;

  uuid: string;

  insight?: string;

  releasabilityId?: string;
}

export interface ThreatEventCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  attacker: string;

  /**
   * Body param:
   */
  attackerCountry: string;

  /**
   * Body param:
   */
  category: string;

  /**
   * Body param:
   */
  date: string;

  /**
   * Body param:
   */
  event: string;

  /**
   * Body param:
   */
  indicatorType: string;

  /**
   * Body param:
   */
  raw: ThreatEventCreateParams.Raw;

  /**
   * Body param:
   */
  tlp: string;

  /**
   * Body param:
   */
  accountId?: number;

  /**
   * Body param:
   */
  datasetId?: string;

  /**
   * Body param:
   */
  indicator?: string;

  /**
   * Body param:
   */
  tags?: Array<string>;

  /**
   * Body param:
   */
  targetCountry?: string;

  /**
   * Body param:
   */
  targetIndustry?: string;
}

export namespace ThreatEventCreateParams {
  export interface Raw {
    data?: unknown;

    source?: string;

    tlp?: string;
  }
}

export interface ThreatEventDeleteParams {
  /**
   * Account ID
   */
  account_id: number;
}

export interface ThreatEventBulkCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  data: Array<ThreatEventBulkCreateParams.Data>;

  /**
   * Body param:
   */
  datasetId: string;
}

export namespace ThreatEventBulkCreateParams {
  export interface Data {
    attacker: string;

    attackerCountry: string;

    category: string;

    date: string;

    event: string;

    indicatorType: string;

    raw: Data.Raw;

    tlp: string;

    accountId?: number;

    datasetId?: string;

    indicator?: string;

    tags?: Array<string>;

    targetCountry?: string;

    targetIndustry?: string;
  }

  export namespace Data {
    export interface Raw {
      data?: unknown;

      source?: string;

      tlp?: string;
    }
  }
}

export interface ThreatEventEditParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  attacker?: string;

  /**
   * Body param:
   */
  attackerCountry?: string;

  /**
   * Body param:
   */
  category?: string;

  /**
   * Body param:
   */
  date?: string;

  /**
   * Body param:
   */
  event?: string;

  /**
   * Body param:
   */
  indicator?: string;

  /**
   * Body param:
   */
  indicatorType?: string;

  /**
   * Body param:
   */
  targetCountry?: string;

  /**
   * Body param:
   */
  targetIndustry?: string;

  /**
   * Body param:
   */
  tlp?: string;
}

export interface ThreatEventGetParams {
  /**
   * Account ID
   */
  account_id: number;
}

ThreatEvents.Attackers = Attackers;
ThreatEvents.Categories = Categories;
ThreatEvents.Countries = Countries;
ThreatEvents.Crons = Crons;
ThreatEvents.Datasets = Datasets;
ThreatEvents.IndicatorTypes = IndicatorTypes;
ThreatEvents.Raw = RawAPIRaw;
ThreatEvents.Relate = Relate;
ThreatEvents.Tags = Tags;
ThreatEvents.EventTags = EventTags;
ThreatEvents.TargetIndustries = TargetIndustries;
ThreatEvents.Insights = Insights;

export declare namespace ThreatEvents {
  export {
    type ThreatEventCreateResponse as ThreatEventCreateResponse,
    type ThreatEventDeleteResponse as ThreatEventDeleteResponse,
    type ThreatEventBulkCreateResponse as ThreatEventBulkCreateResponse,
    type ThreatEventEditResponse as ThreatEventEditResponse,
    type ThreatEventGetResponse as ThreatEventGetResponse,
    type ThreatEventCreateParams as ThreatEventCreateParams,
    type ThreatEventDeleteParams as ThreatEventDeleteParams,
    type ThreatEventBulkCreateParams as ThreatEventBulkCreateParams,
    type ThreatEventEditParams as ThreatEventEditParams,
    type ThreatEventGetParams as ThreatEventGetParams,
  };

  export {
    Attackers as Attackers,
    type AttackerListResponse as AttackerListResponse,
    type AttackerListParams as AttackerListParams,
  };

  export {
    Categories as Categories,
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
    type CountryListResponse as CountryListResponse,
    type CountryListParams as CountryListParams,
  };

  export {
    Crons as Crons,
    type CronListResponse as CronListResponse,
    type CronEditResponse as CronEditResponse,
    type CronListParams as CronListParams,
    type CronEditParams as CronEditParams,
  };

  export {
    Datasets as Datasets,
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
    type IndicatorTypeListResponse as IndicatorTypeListResponse,
    type IndicatorTypeListParams as IndicatorTypeListParams,
  };

  export {
    RawAPIRaw as Raw,
    type RawEditResponse as RawEditResponse,
    type RawGetResponse as RawGetResponse,
    type RawEditParams as RawEditParams,
    type RawGetParams as RawGetParams,
  };

  export {
    Relate as Relate,
    type RelateDeleteResponse as RelateDeleteResponse,
    type RelateDeleteParams as RelateDeleteParams,
  };

  export {
    Tags as Tags,
    type TagCreateResponse as TagCreateResponse,
    type TagCreateParams as TagCreateParams,
  };

  export {
    EventTags as EventTags,
    type EventTagCreateResponse as EventTagCreateResponse,
    type EventTagDeleteResponse as EventTagDeleteResponse,
    type EventTagCreateParams as EventTagCreateParams,
    type EventTagDeleteParams as EventTagDeleteParams,
  };

  export {
    TargetIndustries as TargetIndustries,
    type TargetIndustryListResponse as TargetIndustryListResponse,
    type TargetIndustryListParams as TargetIndustryListParams,
  };

  export {
    Insights as Insights,
    type InsightCreateResponse as InsightCreateResponse,
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightEditResponse as InsightEditResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightCreateParams as InsightCreateParams,
    type InsightDeleteParams as InsightDeleteParams,
    type InsightEditParams as InsightEditParams,
    type InsightGetParams as InsightGetParams,
  };
}
