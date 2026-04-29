// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AttackersAPI from './attackers';
import { Attackers } from './attackers';
import * as CategoriesAPI from './categories';
import { Categories } from './categories';
import * as CountriesAPI from './countries';
import { Countries } from './countries';
import * as CronsAPI from './crons';
import { Crons } from './crons';
import * as EventTagsAPI from './event-tags';
import { EventTags } from './event-tags';
import * as IndicatorTypesAPI from './indicator-types';
import { IndicatorTypes } from './indicator-types';
import * as InsightsAPI from './insights';
import { Insights } from './insights';
import * as RawAPI from './raw';
import { Raw } from './raw';
import * as RelateAPI from './relate';
import { Relate } from './relate';
import * as TagsAPI from './tags';
import { Tags } from './tags';
import * as TargetIndustriesAPI from './target-industries';
import { TargetIndustries } from './target-industries';
import * as DatasetsAPI from './datasets/datasets';
import { Datasets } from './datasets/datasets';

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
}

ThreatEvents.Attackers = Attackers;
ThreatEvents.Categories = Categories;
ThreatEvents.Countries = Countries;
ThreatEvents.Crons = Crons;
ThreatEvents.Datasets = Datasets;
ThreatEvents.IndicatorTypes = IndicatorTypes;
ThreatEvents.Raw = Raw;
ThreatEvents.Relate = Relate;
ThreatEvents.Tags = Tags;
ThreatEvents.EventTags = EventTags;
ThreatEvents.TargetIndustries = TargetIndustries;
ThreatEvents.Insights = Insights;

export declare namespace ThreatEvents {
  export { Attackers as Attackers };

  export { Categories as Categories };

  export { Countries as Countries };

  export { Crons as Crons };

  export { Datasets as Datasets };

  export { IndicatorTypes as IndicatorTypes };

  export { Raw as Raw };

  export { Relate as Relate };

  export { Tags as Tags };

  export { EventTags as EventTags };

  export { TargetIndustries as TargetIndustries };

  export { Insights as Insights };
}
