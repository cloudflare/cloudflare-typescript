// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummarySummaryParams,
  SummarySummaryResponse,
  SummaryTimeseriesGroupsParams,
  SummaryTimeseriesGroupsResponse,
  SummaryTimeseriesParams,
  SummaryTimeseriesResponse,
} from './summary';

export class Bots extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Bots.Summary = Summary;

export declare namespace Bots {
  export {
    Summary as Summary,
    type SummarySummaryResponse as SummarySummaryResponse,
    type SummaryTimeseriesResponse as SummaryTimeseriesResponse,
    type SummaryTimeseriesGroupsResponse as SummaryTimeseriesGroupsResponse,
    type SummarySummaryParams as SummarySummaryParams,
    type SummaryTimeseriesParams as SummaryTimeseriesParams,
    type SummaryTimeseriesGroupsParams as SummaryTimeseriesGroupsParams,
  };
}
