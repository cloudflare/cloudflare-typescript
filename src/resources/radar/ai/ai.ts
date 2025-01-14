// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupUserAgentParams,
  TimeseriesGroupUserAgentResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as BotsAPI from './bots/bots';
import { Bots } from './bots/bots';

export class AI extends APIResource {
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

AI.Bots = Bots;
AI.TimeseriesGroups = TimeseriesGroups;

export declare namespace AI {
  export { Bots as Bots };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupUserAgentResponse as TimeseriesGroupUserAgentResponse,
    type TimeseriesGroupUserAgentParams as TimeseriesGroupUserAgentParams,
  };
}
