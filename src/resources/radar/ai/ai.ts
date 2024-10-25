// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as BotsAPI from './bots/bots';

export class AI extends APIResource {
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace AI {
  export import Bots = BotsAPI.Bots;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupUserAgentResponse = TimeseriesGroupsAPI.TimeseriesGroupUserAgentResponse;
  export import TimeseriesGroupUserAgentParams = TimeseriesGroupsAPI.TimeseriesGroupUserAgentParams;
}
