// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttackersAPI from './attackers';
import { Attackers, BaseAttackers } from './attackers';
import * as CategoriesAPI from './categories';
import { BaseCategories, Categories } from './categories';
import * as CountriesAPI from './countries';
import { BaseCountries, Countries } from './countries';
import * as CronsAPI from './crons';
import { BaseCrons, Crons } from './crons';
import * as EventTagsAPI from './event-tags';
import { BaseEventTags, EventTags } from './event-tags';
import * as IndicatorTypesAPI from './indicator-types';
import { BaseIndicatorTypes, IndicatorTypes } from './indicator-types';
import * as InsightsAPI from './insights';
import { BaseInsights, Insights } from './insights';
import * as RawAPI from './raw';
import { BaseRaw, Raw } from './raw';
import * as RelateAPI from './relate';
import { BaseRelate, Relate } from './relate';
import * as TagsAPI from './tags';
import { BaseTags, Tags } from './tags';
import * as TargetIndustriesAPI from './target-industries';
import { BaseTargetIndustries, TargetIndustries } from './target-industries';
import * as DatasetsAPI from './datasets/datasets';
import { BaseDatasets, Datasets } from './datasets/datasets';

export class BaseThreatEvents extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
  ] as const);
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
ThreatEvents.Raw = Raw;
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
  export { Attackers as Attackers, BaseAttackers as BaseAttackers };

  export { Categories as Categories, BaseCategories as BaseCategories };

  export { Countries as Countries, BaseCountries as BaseCountries };

  export { Crons as Crons, BaseCrons as BaseCrons };

  export { Datasets as Datasets, BaseDatasets as BaseDatasets };

  export { IndicatorTypes as IndicatorTypes, BaseIndicatorTypes as BaseIndicatorTypes };

  export { Raw as Raw, BaseRaw as BaseRaw };

  export { Relate as Relate, BaseRelate as BaseRelate };

  export { Tags as Tags, BaseTags as BaseTags };

  export { EventTags as EventTags, BaseEventTags as BaseEventTags };

  export { TargetIndustries as TargetIndustries, BaseTargetIndustries as BaseTargetIndustries };

  export { Insights as Insights, BaseInsights as BaseInsights };
}
