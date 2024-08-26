// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Top } from './top/top';
import { Summary } from './summary';
import { TimeseriesGroups } from './timeseries-groups';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top/top';

export class Security extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(this._client);
}

export namespace Security {
  export import Top = TopAPI.Top;
  export import Summary = SummaryAPI.Summary;
  export import SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export import SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export import SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export import SummaryMaliciousResponse = SummaryAPI.SummaryMaliciousResponse;
  export import SummarySpamResponse = SummaryAPI.SummarySpamResponse;
  export import SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export import SummarySpoofResponse = SummaryAPI.SummarySpoofResponse;
  export import SummaryThreatCategoryResponse = SummaryAPI.SummaryThreatCategoryResponse;
  export import SummaryTLSVersionResponse = SummaryAPI.SummaryTLSVersionResponse;
  export import SummaryARCParams = SummaryAPI.SummaryARCParams;
  export import SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export import SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export import SummaryMaliciousParams = SummaryAPI.SummaryMaliciousParams;
  export import SummarySpamParams = SummaryAPI.SummarySpamParams;
  export import SummarySPFParams = SummaryAPI.SummarySPFParams;
  export import SummarySpoofParams = SummaryAPI.SummarySpoofParams;
  export import SummaryThreatCategoryParams = SummaryAPI.SummaryThreatCategoryParams;
  export import SummaryTLSVersionParams = SummaryAPI.SummaryTLSVersionParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export import TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export import TimeseriesGroupDMARCResponse = TimeseriesGroupsAPI.TimeseriesGroupDMARCResponse;
  export import TimeseriesGroupMaliciousResponse = TimeseriesGroupsAPI.TimeseriesGroupMaliciousResponse;
  export import TimeseriesGroupSpamResponse = TimeseriesGroupsAPI.TimeseriesGroupSpamResponse;
  export import TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export import TimeseriesGroupSpoofResponse = TimeseriesGroupsAPI.TimeseriesGroupSpoofResponse;
  export import TimeseriesGroupThreatCategoryResponse = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryResponse;
  export import TimeseriesGroupTLSVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionResponse;
  export import TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export import TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
  export import TimeseriesGroupDMARCParams = TimeseriesGroupsAPI.TimeseriesGroupDMARCParams;
  export import TimeseriesGroupMaliciousParams = TimeseriesGroupsAPI.TimeseriesGroupMaliciousParams;
  export import TimeseriesGroupSpamParams = TimeseriesGroupsAPI.TimeseriesGroupSpamParams;
  export import TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
  export import TimeseriesGroupSpoofParams = TimeseriesGroupsAPI.TimeseriesGroupSpoofParams;
  export import TimeseriesGroupThreatCategoryParams = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryParams;
  export import TimeseriesGroupTLSVersionParams = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionParams;
}
