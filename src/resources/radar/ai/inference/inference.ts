// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups/timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups/timeseries-groups';

export class BaseInference extends APIResource {
  static override readonly _key: readonly ['radar', 'ai', 'inference'] = Object.freeze([
    'radar',
    'ai',
    'inference',
  ] as const);
}
export class Inference extends BaseInference {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

Inference.Summary = Summary;
Inference.BaseSummary = BaseSummary;
Inference.TimeseriesGroups = TimeseriesGroups;
Inference.BaseTimeseriesGroups = BaseTimeseriesGroups;

export declare namespace Inference {
  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };
}
