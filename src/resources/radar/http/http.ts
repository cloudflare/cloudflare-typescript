// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as TopAPI from './top';
import { BaseTop, Top } from './top';
import * as AsesAPI from './ases/ases';
import { Ases, BaseAses } from './ases/ases';
import * as LocationsAPI from './locations/locations';
import { BaseLocations, Locations } from './locations/locations';

export class BaseHTTP extends APIResource {
  static override readonly _key: readonly ['radar', 'http'] = Object.freeze(['radar', 'http'] as const);
}
export class HTTP extends BaseHTTP {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

HTTP.Locations = Locations;
HTTP.BaseLocations = BaseLocations;
HTTP.Ases = Ases;
HTTP.BaseAses = BaseAses;
HTTP.Summary = Summary;
HTTP.BaseSummary = BaseSummary;
HTTP.TimeseriesGroups = TimeseriesGroups;
HTTP.BaseTimeseriesGroups = BaseTimeseriesGroups;
HTTP.Top = Top;
HTTP.BaseTop = BaseTop;

export declare namespace HTTP {
  export { Locations as Locations, BaseLocations as BaseLocations };

  export { Ases as Ases, BaseAses as BaseAses };

  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };

  export { Top as Top, BaseTop as BaseTop };
}
