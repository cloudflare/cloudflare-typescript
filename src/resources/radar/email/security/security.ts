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
  export import SummaryArcResponse = SummaryAPI.SummaryArcResponse;
  export import SummaryDKIMResponse = SummaryAPI.SummaryDKIMResponse;
  export import SummaryDmarcResponse = SummaryAPI.SummaryDmarcResponse;
  export import SummaryMaliciousResponse = SummaryAPI.SummaryMaliciousResponse;
  export import SummarySpamResponse = SummaryAPI.SummarySpamResponse;
  export import SummarySPFResponse = SummaryAPI.SummarySPFResponse;
  export import SummaryThreatCategoryResponse = SummaryAPI.SummaryThreatCategoryResponse;
  export import SummaryArcParams = SummaryAPI.SummaryArcParams;
  export import SummaryDKIMParams = SummaryAPI.SummaryDKIMParams;
  export import SummaryDmarcParams = SummaryAPI.SummaryDmarcParams;
  export import SummaryMaliciousParams = SummaryAPI.SummaryMaliciousParams;
  export import SummarySpamParams = SummaryAPI.SummarySpamParams;
  export import SummarySPFParams = SummaryAPI.SummarySPFParams;
  export import SummaryThreatCategoryParams = SummaryAPI.SummaryThreatCategoryParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupArcResponse = TimeseriesGroupsAPI.TimeseriesGroupArcResponse;
  export import TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export import TimeseriesGroupArcParams = TimeseriesGroupsAPI.TimeseriesGroupArcParams;
  export import TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
}
