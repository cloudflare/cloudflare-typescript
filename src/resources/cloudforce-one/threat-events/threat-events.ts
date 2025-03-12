// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AttackersAPI from './attackers';
import { Attackers } from './attackers';
import * as CategoriesAPI from './categories';
import { Categories } from './categories';
import * as CountriesAPI from './countries';
import { Countries } from './countries';
import * as CronAPI from './cron';
import { Cron } from './cron';
import * as DatasetAPI from './dataset';
import { Dataset } from './dataset';
import * as IndicatorTypesAPI from './indicator-types';
import { IndicatorTypes } from './indicator-types';
import * as InsightAPI from './insight';
import { Insight } from './insight';
import * as RawAPI from './raw';
import { Raw } from './raw';
import * as RelateAPI from './relate';
import { Relate } from './relate';
import * as TagsAPI from './tags';
import { Tags } from './tags';
import * as TargetIndustriesAPI from './target-industries';
import { TargetIndustries } from './target-industries';

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
}

ThreatEvents.Attackers = Attackers;
ThreatEvents.Categories = Categories;
ThreatEvents.Countries = Countries;
ThreatEvents.Cron = Cron;
ThreatEvents.Dataset = Dataset;
ThreatEvents.IndicatorTypes = IndicatorTypes;
ThreatEvents.Raw = Raw;
ThreatEvents.Relate = Relate;
ThreatEvents.Tags = Tags;
ThreatEvents.TargetIndustries = TargetIndustries;
ThreatEvents.Insight = Insight;

export declare namespace ThreatEvents {
  export { Attackers as Attackers };

  export { Categories as Categories };

  export { Countries as Countries };

  export { Cron as Cron };

  export { Dataset as Dataset };

  export { IndicatorTypes as IndicatorTypes };

  export { Raw as Raw };

  export { Relate as Relate };

  export { Tags as Tags };

  export { TargetIndustries as TargetIndustries };

  export { Insight as Insight };
}
