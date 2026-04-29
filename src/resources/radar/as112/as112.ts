// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as TopAPI from './top';
import { BaseTop, Top } from './top';

export class BaseAS112 extends APIResource {
  static override readonly _key: readonly ['radar', 'as112'] = Object.freeze(['radar', 'as112'] as const);
}
export class AS112 extends BaseAS112 {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

AS112.Summary = Summary;
AS112.BaseSummary = BaseSummary;
AS112.TimeseriesGroups = TimeseriesGroups;
AS112.BaseTimeseriesGroups = BaseTimeseriesGroups;
AS112.Top = Top;
AS112.BaseTop = BaseTop;

export declare namespace AS112 {
  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };

  export { Top as Top, BaseTop as BaseTop };
}
