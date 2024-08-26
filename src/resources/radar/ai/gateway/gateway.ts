// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Summary } from './summary';
import { TimeseriesGroups } from './timeseries-groups';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class Gateway extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(this._client);
}

export namespace Gateway {
  export import Summary = SummaryAPI.Summary;
  export import SummaryModelResponse = SummaryAPI.SummaryModelResponse;
  export import SummaryProviderResponse = SummaryAPI.SummaryProviderResponse;
  export import SummaryTaskResponse = SummaryAPI.SummaryTaskResponse;
  export import SummaryModelParams = SummaryAPI.SummaryModelParams;
  export import SummaryProviderParams = SummaryAPI.SummaryProviderParams;
  export import SummaryTaskParams = SummaryAPI.SummaryTaskParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupModelResponse = TimeseriesGroupsAPI.TimeseriesGroupModelResponse;
  export import TimeseriesGroupProviderResponse = TimeseriesGroupsAPI.TimeseriesGroupProviderResponse;
  export import TimeseriesGroupTaskResponse = TimeseriesGroupsAPI.TimeseriesGroupTaskResponse;
  export import TimeseriesGroupModelParams = TimeseriesGroupsAPI.TimeseriesGroupModelParams;
  export import TimeseriesGroupProviderParams = TimeseriesGroupsAPI.TimeseriesGroupProviderParams;
  export import TimeseriesGroupTaskParams = TimeseriesGroupsAPI.TimeseriesGroupTaskParams;
}
