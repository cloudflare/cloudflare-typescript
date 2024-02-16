// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/as112/timeseries-groups/timeseries-groups';

export class As112 extends APIResource {
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace As112 {
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
}
