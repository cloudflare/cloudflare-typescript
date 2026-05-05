// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BytimesAPI from './bytimes';
import { BaseBytimes, BytimeGetParams, BytimeGetResponse, Bytimes } from './bytimes';
import * as SummariesAPI from './summaries';
import { BaseSummaries, Summaries, SummaryGetParams, SummaryGetResponse } from './summaries';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['spectrum', 'analytics', 'events'] = Object.freeze([
    'spectrum',
    'analytics',
    'events',
  ] as const);
}
export class Events extends BaseEvents {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
}

export type Dimension = 'event' | 'appID' | 'coloName' | 'ipVersion';

export type DimensionParam = 'event' | 'appID' | 'coloName' | 'ipVersion';

Events.Bytimes = Bytimes;
Events.BaseBytimes = BaseBytimes;
Events.Summaries = Summaries;
Events.BaseSummaries = BaseSummaries;

export declare namespace Events {
  export { type Dimension as Dimension };

  export {
    Bytimes as Bytimes,
    BaseBytimes as BaseBytimes,
    type BytimeGetResponse as BytimeGetResponse,
    type BytimeGetParams as BytimeGetParams,
  };

  export {
    Summaries as Summaries,
    BaseSummaries as BaseSummaries,
    type SummaryGetResponse as SummaryGetResponse,
    type SummaryGetParams as SummaryGetParams,
  };
}
