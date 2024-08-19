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
  export import SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export import SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export import SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export import SummaryEncryptedResponse = SummaryAPI.SummaryEncryptedResponse;
  export import SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export import SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export import SummaryARCParams = SummaryAPI.SummaryARCParams;
  export import SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export import SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export import SummaryEncryptedParams = SummaryAPI.SummaryEncryptedParams;
  export import SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export import SummarySPFParams = SummaryAPI.SummarySPFParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export import TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export import TimeseriesGroupDMARCResponse = TimeseriesGroupsAPI.TimeseriesGroupDMARCResponse;
  export import TimeseriesGroupEncryptedResponse = TimeseriesGroupsAPI.TimeseriesGroupEncryptedResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export import TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export import TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
  export import TimeseriesGroupDMARCParams = TimeseriesGroupsAPI.TimeseriesGroupDMARCParams;
  export import TimeseriesGroupEncryptedParams = TimeseriesGroupsAPI.TimeseriesGroupEncryptedParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
}
