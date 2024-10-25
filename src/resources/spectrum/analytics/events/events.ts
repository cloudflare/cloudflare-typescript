// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as EventsAPI from './events';
import * as BytimesAPI from './bytimes';
import * as SummariesAPI from './summaries';

export class Events extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
}

export type Dimension = 'event' | 'appID' | 'coloName' | 'ipVersion';

export type DimensionParam = 'event' | 'appID' | 'coloName' | 'ipVersion';

export namespace Events {
  export type Dimension = EventsAPI.Dimension;
  export import Bytimes = BytimesAPI.Bytimes;
  export type BytimeGetResponse = BytimesAPI.BytimeGetResponse;
  export type BytimeGetParams = BytimesAPI.BytimeGetParams;
  export import Summaries = SummariesAPI.Summaries;
  export type SummaryGetResponse = SummariesAPI.SummaryGetResponse;
  export type SummaryGetParams = SummariesAPI.SummaryGetParams;
}
