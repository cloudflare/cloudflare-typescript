// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BytimesAPI from './bytimes';
import { BaseBytimes, Bytimes } from './bytimes';
import * as SummariesAPI from './summaries';
import { BaseSummaries, Summaries } from './summaries';

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

Events.Bytimes = Bytimes;
Events.BaseBytimes = BaseBytimes;
Events.Summaries = Summaries;
Events.BaseSummaries = BaseSummaries;

export declare namespace Events {
  export { Bytimes as Bytimes, BaseBytimes as BaseBytimes };

  export { Summaries as Summaries, BaseSummaries as BaseSummaries };
}
