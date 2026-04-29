// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as TopAPI from './top';
import { BaseTop, Top } from './top';

export class BaseDNS extends APIResource {
  static override readonly _key: readonly ['radar', 'dns'] = Object.freeze(['radar', 'dns'] as const);
}
export class DNS extends BaseDNS {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

DNS.Top = Top;
DNS.BaseTop = BaseTop;
DNS.Summary = Summary;
DNS.BaseSummary = BaseSummary;
DNS.TimeseriesGroups = TimeseriesGroups;
DNS.BaseTimeseriesGroups = BaseTimeseriesGroups;

export declare namespace DNS {
  export { Top as Top, BaseTop as BaseTop };

  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };
}
