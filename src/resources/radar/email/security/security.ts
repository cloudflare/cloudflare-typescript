// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as TopAPI from './top/top';
import { BaseTop, Top } from './top/top';

export class BaseSecurity extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security'] = Object.freeze([
    'radar',
    'email',
    'security',
  ] as const);
}
export class Security extends BaseSecurity {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

Security.Top = Top;
Security.BaseTop = BaseTop;
Security.Summary = Summary;
Security.BaseSummary = BaseSummary;
Security.TimeseriesGroups = TimeseriesGroups;
Security.BaseTimeseriesGroups = BaseTimeseriesGroups;

export declare namespace Security {
  export { Top as Top, BaseTop as BaseTop };

  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };
}
