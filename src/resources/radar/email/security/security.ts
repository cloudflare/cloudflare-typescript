// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SummariesAPI from 'cloudflare/resources/radar/email/security/summaries/summaries';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/email/security/timeseries-groups/timeseries-groups';

export class Security extends APIResource {
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Security {
  export import Summaries = SummariesAPI.Summaries;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
}
