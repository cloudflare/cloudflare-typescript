// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SummaryAPI from 'cloudflare/resources/radar/email/security/summary';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/email/security/timeseries-groups';
import * as TopAPI from 'cloudflare/resources/radar/email/security/top/top';

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
  export import SummaryARCResponse = SummaryAPI.SummaryARCResponse;
  export import SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export import SummaryDMARCResponse = SummaryAPI.SummaryDMARCResponse;
  export import SummaryMaliciousResponse = SummaryAPI.SummaryMaliciousResponse;
  export import SummarySpamResponse = SummaryAPI.SummarySpamResponse;
  export import SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export import SummaryThreatCategoryResponse = SummaryAPI.SummaryThreatCategoryResponse;
  export import SummaryARCParams = SummaryAPI.SummaryARCParams;
  export import SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export import SummaryDMARCParams = SummaryAPI.SummaryDMARCParams;
  export import SummaryMaliciousParams = SummaryAPI.SummaryMaliciousParams;
  export import SummarySpamParams = SummaryAPI.SummarySpamParams;
  export import SummarySPFParams = SummaryAPI.SummarySPFParams;
  export import SummaryThreatCategoryParams = SummaryAPI.SummaryThreatCategoryParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export import TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export import TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export import TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
}
