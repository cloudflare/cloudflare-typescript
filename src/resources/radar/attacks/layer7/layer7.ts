// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as TopAPI from './top/top';
import { BaseTop, Top } from './top/top';

export class BaseLayer7 extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
  ] as const);
}
export class Layer7 extends BaseLayer7 {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

Layer7.Summary = Summary;
Layer7.BaseSummary = BaseSummary;
Layer7.TimeseriesGroups = TimeseriesGroups;
Layer7.BaseTimeseriesGroups = BaseTimeseriesGroups;
Layer7.Top = Top;
Layer7.BaseTop = BaseTop;

export declare namespace Layer7 {
  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };

  export { Top as Top, BaseTop as BaseTop };
}
