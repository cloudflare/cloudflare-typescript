// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/timeseries-groups';
import * as TopAPI from 'cloudflare/resources/radar/attacks/layer3/top/top';

export class Layer3 extends APIResource {
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace Layer3 {
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import Top = TopAPI.Top;
}
