// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';
import * as TopAPI from './top/top';
import { BaseTop, Top } from './top/top';

export class BaseLayer3 extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer3'] = Object.freeze([
    'radar',
    'attacks',
    'layer3',
  ] as const);
}
export class Layer3 extends BaseLayer3 {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

Layer3.Summary = Summary;
Layer3.BaseSummary = BaseSummary;
Layer3.TimeseriesGroups = TimeseriesGroups;
Layer3.BaseTimeseriesGroups = BaseTimeseriesGroups;
Layer3.Top = Top;
Layer3.BaseTop = BaseTop;

export declare namespace Layer3 {
  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };

  export { Top as Top, BaseTop as BaseTop };
}
