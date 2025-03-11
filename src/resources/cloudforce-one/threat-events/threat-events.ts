// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AttackersAPI from './attackers';
import { AttackerListResponse, Attackers } from './attackers';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryDeleteResponse,
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
  DatasetGetResponse,
  DatasetListResponse,
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
  InsightDeleteResponse,
  InsightGetResponse,
  InsightUpdateParams,
  InsightUpdateResponse,
} from './insight';
import * as RawAPI from './raw';
import { Raw as RawAPIRaw, RawGetResponse, RawUpdateParams, RawUpdateResponse } from './raw';
import * as RelateAPI from './relate';
import { Relate, RelateDeleteResponse, RelateUpdateParams, RelateUpdateResponse } from './relate';
import * as TagsAPI from './tags';
import {
  TagCreateParams,
  TagCreateResponse,
  TagDeleteResponse,
  TagUpdateParams,
  TagUpdateResponse,
  Tags,
} from './tags';
import * as TargetIndustriesAPI from './target-industries';
import { TargetIndustries, TargetIndustryListResponse } from './target-industries';

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
    pathAccountId: number,
    body: ThreatEventCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventCreateResponse> {
    return this._client.post(`/accounts/${pathAccountId}/cloudforce-one/events/create`, { body, ...options });
  }

  /**
   * Updates an event
   */
  update(
    accountId: number,
    eventId: string,
    body?: ThreatEventUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventUpdateResponse>;
  update(
    accountId: number,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventUpdateResponse>;
  update(
    accountId: number,
    eventId: string,
    body: ThreatEventUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(accountId, eventId, {}, body);
    }
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/${eventId}`, { body, ...options });
  }

  /**
   * Deletes an event
   */
  delete(
    accountId: number,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventDeleteResponse> {
    return this._client.delete(`/accounts/${accountId}/cloudforce-one/events/${eventId}`, options);
  }

  /**
   * Creates a new event
   */
  bulkCreate(
    accountId: number,
    body: ThreatEventBulkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventBulkCreateResponse> {
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/create/bulk`, {
      body,
      ...options,
    });
  }

  /**
   * Reads an event
   */
  get(
    accountId: number,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreatEventGetResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/${eventId}`, options);
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
  attacker?: string;

  attackerCountry?: string;

  category?: string;

  date?: string;

  event?: string;

  indicator?: string;

  indicatorType?: string;

  targetCountry?: string;

  targetIndustry?: string;

  tlp?: string;
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
    type ThreatEventBulkCreateParams as ThreatEventBulkCreateParams,
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
  };

  export { IndicatorTypes as IndicatorTypes, type IndicatorTypeListResponse as IndicatorTypeListResponse };

  export {
    RawAPIRaw as Raw,
    type RawUpdateResponse as RawUpdateResponse,
    type RawGetResponse as RawGetResponse,
    type RawUpdateParams as RawUpdateParams,
  };

  export {
    Relate as Relate,
    type RelateUpdateResponse as RelateUpdateResponse,
    type RelateDeleteResponse as RelateDeleteResponse,
    type RelateUpdateParams as RelateUpdateParams,
  };

  export {
    Tags as Tags,
    type TagCreateResponse as TagCreateResponse,
    type TagUpdateResponse as TagUpdateResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
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
    type InsightCreatParams as InsightCreatParams,
  };
}
