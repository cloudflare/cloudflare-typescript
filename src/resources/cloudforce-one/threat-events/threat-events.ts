// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AttackersAPI from './attackers';
import { AttackerListResponse, Attackers } from './attackers';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryDeleteParams,
  CategoryDeleteResponse,
  CategoryGetParams,
  CategoryGetResponse,
  CategoryListResponse,
  CategoryUpdateParams,
  CategoryUpdateResponse,
} from './categories';
import * as CountriesAPI from './countries';
import { Countries, CountryListResponse } from './countries';
import * as CronAPI from './cron';
import { Cron, CronCreateResponse, CronListResponse } from './cron';
import * as DatasetAPI from './dataset';
import {
  Dataset,
  DatasetCreateParams,
  DatasetCreateResponse,
  DatasetGetParams,
  DatasetGetResponse,
  DatasetListResponse,
  DatasetRawParams,
  DatasetRawResponse,
  DatasetUpdateParams,
  DatasetUpdateResponse,
} from './dataset';
import * as IndicatorTypesAPI from './indicator-types';
import { IndicatorTypeListResponse, IndicatorTypes } from './indicator-types';
import * as InsightAPI from './insight';
import {
  Insight,
  InsightCreatParams,
  InsightCreatResponse,
  InsightDeleteParams,
  InsightDeleteResponse,
  InsightGetParams,
  InsightGetResponse,
  InsightUpdateParams,
  InsightUpdateResponse,
} from './insight';
import * as RawAPI from './raw';
import { Raw as RawAPIRaw, RawGetParams, RawGetResponse, RawUpdateParams, RawUpdateResponse } from './raw';
import * as RelateAPI from './relate';
import {
  Relate,
  RelateDeleteParams,
  RelateDeleteResponse,
  RelateUpdateParams,
  RelateUpdateResponse,
} from './relate';
import * as TagsAPI from './tags';
import {
  TagCreateParams,
  TagCreateResponse,
  TagDeleteParams,
  TagDeleteResponse,
  TagUpdateParams,
  TagUpdateResponse,
  Tags,
} from './tags';
import * as TargetIndustriesAPI from './target-industries';
import { TargetIndustries, TargetIndustryListResponse } from './target-industries';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ThreatEvents extends APIResource {
  attackers: AttackersAPI.Attackers = new AttackersAPI.Attackers(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);
  cron: CronAPI.Cron = new CronAPI.Cron(this._client);
  dataset: DatasetAPI.Dataset = new DatasetAPI.Dataset(this._client);
  indicatorTypes: IndicatorTypesAPI.IndicatorTypes = new IndicatorTypesAPI.IndicatorTypes(this._client);
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
  relate: RelateAPI.Relate = new RelateAPI.Relate(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  targetIndustries: TargetIndustriesAPI.TargetIndustries = new TargetIndustriesAPI.TargetIndustries(
    this._client,
  );
  insight: InsightAPI.Insight = new InsightAPI.Insight(this._client);

  /**
   * Creates a new event
   */
  create(
    accountID: number,
    body: ThreatEventCreateParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/cloudforce-one/events/create`, { body, ...options });
  }

  /**
   * Updates an event
   */
  update(
    eventID: string,
    params: ThreatEventUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventUpdateResponse> {
    const { accountId, ...body } = params;
    return this._client.post(path`/accounts/${accountId}/cloudforce-one/events/${eventID}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an event
   */
  delete(
    eventID: string,
    params: ThreatEventDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventDeleteResponse> {
    const { accountId } = params;
    return this._client.delete(path`/accounts/${accountId}/cloudforce-one/events/${eventID}`, options);
  }

  /**
   * Creates a new event
   */
  bulkCreate(
    accountID: number,
    body: ThreatEventBulkCreateParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventBulkCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/cloudforce-one/events/create/bulk`, {
      body,
      ...options,
    });
  }

  /**
   * Reads an event
   */
  get(
    eventID: string,
    params: ThreatEventGetParams,
    options?: RequestOptions,
  ): APIPromise<ThreatEventGetResponse> {
    const { accountId } = params;
    return this._client.get(path`/accounts/${accountId}/cloudforce-one/events/${eventID}`, options);
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

export interface ThreatEventUpdateResponse {
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
  attacker: string;

  attackerCountry: string;

  category: string;

  date: string;

  event: string;

  indicatorType: string;

  raw: ThreatEventCreateParams.Raw;

  tlp: string;

  body_accountId?: number;

  datasetId?: string;

  indicator?: string;

  tags?: Array<string>;

  targetCountry?: string;

  targetIndustry?: string;
}

export namespace ThreatEventCreateParams {
  export interface Raw {
    data?: unknown;

    source?: string;

    tlp?: string;
  }
}

export interface ThreatEventUpdateParams {
  /**
   * Path param: Account ID
   */
  accountId: number;

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

export interface ThreatEventDeleteParams {
  /**
   * Account ID
   */
  accountId: number;
}

export interface ThreatEventBulkCreateParams {
  data: Array<ThreatEventBulkCreateParams.Data>;

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

export interface ThreatEventGetParams {
  /**
   * Account ID
   */
  accountId: number;
}

ThreatEvents.Attackers = Attackers;
ThreatEvents.Categories = Categories;
ThreatEvents.Countries = Countries;
ThreatEvents.Cron = Cron;
ThreatEvents.Dataset = Dataset;
ThreatEvents.IndicatorTypes = IndicatorTypes;
ThreatEvents.Raw = RawAPIRaw;
ThreatEvents.Relate = Relate;
ThreatEvents.Tags = Tags;
ThreatEvents.TargetIndustries = TargetIndustries;
ThreatEvents.Insight = Insight;

export declare namespace ThreatEvents {
  export {
    type ThreatEventCreateResponse as ThreatEventCreateResponse,
    type ThreatEventUpdateResponse as ThreatEventUpdateResponse,
    type ThreatEventDeleteResponse as ThreatEventDeleteResponse,
    type ThreatEventBulkCreateResponse as ThreatEventBulkCreateResponse,
    type ThreatEventGetResponse as ThreatEventGetResponse,
    type ThreatEventCreateParams as ThreatEventCreateParams,
    type ThreatEventUpdateParams as ThreatEventUpdateParams,
    type ThreatEventDeleteParams as ThreatEventDeleteParams,
    type ThreatEventBulkCreateParams as ThreatEventBulkCreateParams,
    type ThreatEventGetParams as ThreatEventGetParams,
  };

  export { Attackers as Attackers, type AttackerListResponse as AttackerListResponse };

  export {
    Categories as Categories,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryGetParams as CategoryGetParams,
  };

  export { Countries as Countries, type CountryListResponse as CountryListResponse };

  export {
    Cron as Cron,
    type CronCreateResponse as CronCreateResponse,
    type CronListResponse as CronListResponse,
  };

  export {
    Dataset as Dataset,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetUpdateResponse as DatasetUpdateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetRawResponse as DatasetRawResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetRawParams as DatasetRawParams,
  };

  export { IndicatorTypes as IndicatorTypes, type IndicatorTypeListResponse as IndicatorTypeListResponse };

  export {
    RawAPIRaw as Raw,
    type RawUpdateResponse as RawUpdateResponse,
    type RawGetResponse as RawGetResponse,
    type RawUpdateParams as RawUpdateParams,
    type RawGetParams as RawGetParams,
  };

  export {
    Relate as Relate,
    type RelateUpdateResponse as RelateUpdateResponse,
    type RelateDeleteResponse as RelateDeleteResponse,
    type RelateUpdateParams as RelateUpdateParams,
    type RelateDeleteParams as RelateDeleteParams,
  };

  export {
    Tags as Tags,
    type TagCreateResponse as TagCreateResponse,
    type TagUpdateResponse as TagUpdateResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    TargetIndustries as TargetIndustries,
    type TargetIndustryListResponse as TargetIndustryListResponse,
  };

  export {
    Insight as Insight,
    type InsightUpdateResponse as InsightUpdateResponse,
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightCreatResponse as InsightCreatResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightDeleteParams as InsightDeleteParams,
    type InsightCreatParams as InsightCreatParams,
    type InsightGetParams as InsightGetParams,
  };
}
