// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as EventsAPI from 'cloudflare/resources/spectrum/analytics/events/events';
import * as BytimesAPI from 'cloudflare/resources/spectrum/analytics/events/bytimes';
import * as SummariesAPI from 'cloudflare/resources/spectrum/analytics/events/summaries';

export class Events extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
}

export type DimensionItem = 'event' | 'appID' | 'coloName' | 'ipVersion';

export namespace Events {
  export import DimensionItem = EventsAPI.DimensionItem;
  export import Bytimes = BytimesAPI.Bytimes;
  export import BytimeGetResponse = BytimesAPI.BytimeGetResponse;
  export import BytimeGetParams = BytimesAPI.BytimeGetParams;
  export import Summaries = SummariesAPI.Summaries;
  export import SummaryGetResponse = SummariesAPI.SummaryGetResponse;
  export import SummaryGetParams = SummariesAPI.SummaryGetParams;
}
