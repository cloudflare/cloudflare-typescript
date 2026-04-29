// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as BytimesAPI from './bytimes';
import { Bytimes } from './bytimes';
import * as SummariesAPI from './summaries';
import { Summaries } from './summaries';

export class Events extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
}

Events.Bytimes = Bytimes;
Events.Summaries = Summaries;

export declare namespace Events {
  export { Bytimes as Bytimes };

  export { Summaries as Summaries };
}
