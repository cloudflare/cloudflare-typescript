// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class Routing extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Routing {
  export import Summary = SummaryAPI.Summary;
  export type SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export type SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export type SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export type SummaryEncryptedResponse = SummaryAPI.SummaryEncryptedResponse;
  export type SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export type SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export type SummaryARCParams = SummaryAPI.SummaryARCParams;
  export type SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export type SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export type SummaryEncryptedParams = SummaryAPI.SummaryEncryptedParams;
  export type SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export type SummarySPFParams = SummaryAPI.SummarySPFParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export type TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export type TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export type TimeseriesGroupDMARCResponse = TimeseriesGroupsAPI.TimeseriesGroupDMARCResponse;
  export type TimeseriesGroupEncryptedResponse = TimeseriesGroupsAPI.TimeseriesGroupEncryptedResponse;
  export type TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export type TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export type TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export type TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
  export type TimeseriesGroupDMARCParams = TimeseriesGroupsAPI.TimeseriesGroupDMARCParams;
  export type TimeseriesGroupEncryptedParams = TimeseriesGroupsAPI.TimeseriesGroupEncryptedParams;
  export type TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export type TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
}
