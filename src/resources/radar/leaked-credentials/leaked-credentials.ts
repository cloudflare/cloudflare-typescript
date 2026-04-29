// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import { BaseTimeseriesGroups, TimeseriesGroups } from './timeseries-groups';

export class BaseLeakedCredentials extends APIResource {
  static override readonly _key: readonly ['radar', 'leakedCredentials'] = Object.freeze([
    'radar',
    'leakedCredentials',
  ] as const);
}
export class LeakedCredentials extends BaseLeakedCredentials {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

LeakedCredentials.Summary = Summary;
LeakedCredentials.BaseSummary = BaseSummary;
LeakedCredentials.TimeseriesGroups = TimeseriesGroups;
LeakedCredentials.BaseTimeseriesGroups = BaseTimeseriesGroups;

export declare namespace LeakedCredentials {
  export { Summary as Summary, BaseSummary as BaseSummary };

  export { TimeseriesGroups as TimeseriesGroups, BaseTimeseriesGroups as BaseTimeseriesGroups };
}
