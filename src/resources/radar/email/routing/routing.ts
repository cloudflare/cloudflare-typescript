// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';

export class BaseRouting extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'routing'] = Object.freeze([
    'radar',
    'email',
    'routing',
  ] as const);
}
export class Routing extends BaseRouting {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

Routing.Summary = Summary;
Routing.BaseSummary = BaseSummary;
Routing.TimeseriesGroups = TimeseriesGroups;
Routing.BaseTimeseriesGroups = BaseTimeseriesGroups;

export declare namespace Routing {
  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };
}
