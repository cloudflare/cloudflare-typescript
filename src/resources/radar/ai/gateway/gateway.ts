// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class Gateway extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Gateway {
  export import Summary = SummaryAPI.Summary;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
}
