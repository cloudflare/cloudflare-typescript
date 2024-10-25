// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top/top';

export class Security extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Security {
  export import Top = TopAPI.Top;
  export import Summary = SummaryAPI.Summary;
  export type SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export type SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export type SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export type SummaryMaliciousResponse = SummaryAPI.SummaryMaliciousResponse;
  export type SummarySpamResponse = SummaryAPI.SummarySpamResponse;
  export type SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export type SummarySpoofResponse = SummaryAPI.SummarySpoofResponse;
  export type SummaryThreatCategoryResponse = SummaryAPI.SummaryThreatCategoryResponse;
  export type SummaryTLSVersionResponse = SummaryAPI.SummaryTLSVersionResponse;
  export type SummaryARCParams = SummaryAPI.SummaryARCParams;
  export type SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export type SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export type SummaryMaliciousParams = SummaryAPI.SummaryMaliciousParams;
  export type SummarySpamParams = SummaryAPI.SummarySpamParams;
  export type SummarySPFParams = SummaryAPI.SummarySPFParams;
  export type SummarySpoofParams = SummaryAPI.SummarySpoofParams;
  export type SummaryThreatCategoryParams = SummaryAPI.SummaryThreatCategoryParams;
  export type SummaryTLSVersionParams = SummaryAPI.SummaryTLSVersionParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export type TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export type TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export type TimeseriesGroupDMARCResponse = TimeseriesGroupsAPI.TimeseriesGroupDMARCResponse;
  export type TimeseriesGroupMaliciousResponse = TimeseriesGroupsAPI.TimeseriesGroupMaliciousResponse;
  export type TimeseriesGroupSpamResponse = TimeseriesGroupsAPI.TimeseriesGroupSpamResponse;
  export type TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export type TimeseriesGroupSpoofResponse = TimeseriesGroupsAPI.TimeseriesGroupSpoofResponse;
  export type TimeseriesGroupThreatCategoryResponse =
    TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryResponse;
  export type TimeseriesGroupTLSVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionResponse;
  export type TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export type TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
  export type TimeseriesGroupDMARCParams = TimeseriesGroupsAPI.TimeseriesGroupDMARCParams;
  export type TimeseriesGroupMaliciousParams = TimeseriesGroupsAPI.TimeseriesGroupMaliciousParams;
  export type TimeseriesGroupSpamParams = TimeseriesGroupsAPI.TimeseriesGroupSpamParams;
  export type TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
  export type TimeseriesGroupSpoofParams = TimeseriesGroupsAPI.TimeseriesGroupSpoofParams;
  export type TimeseriesGroupThreatCategoryParams = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryParams;
  export type TimeseriesGroupTLSVersionParams = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionParams;
}
