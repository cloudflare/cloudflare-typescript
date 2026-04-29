// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';

export class BaseTimeseriesGroups extends APIResource {
  static override readonly _key: readonly ['radar', 'ai', 'inference', 'timeseriesGroups'] = Object.freeze([
    'radar',
    'ai',
    'inference',
    'timeseriesGroups',
  ] as const);
}
export class TimeseriesGroups extends BaseTimeseriesGroups {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

TimeseriesGroups.Summary = Summary;
TimeseriesGroups.BaseSummary = BaseSummary;

export declare namespace TimeseriesGroups {
  export { Summary as Summary, BaseSummary as BaseSummary };
}
