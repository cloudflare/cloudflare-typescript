// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/emails/security/timeseries-groups';

export class Security extends APIResource {
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Security {
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupDmarcResponse = TimeseriesGroupsAPI.TimeseriesGroupDmarcResponse;
  export import TimeseriesGroupMaliciousResponse = TimeseriesGroupsAPI.TimeseriesGroupMaliciousResponse;
  export import TimeseriesGroupSpamResponse = TimeseriesGroupsAPI.TimeseriesGroupSpamResponse;
  export import TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export import TimeseriesGroupThreatCategoryResponse = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryResponse;
  export import TimeseriesGroupDmarcParams = TimeseriesGroupsAPI.TimeseriesGroupDmarcParams;
  export import TimeseriesGroupMaliciousParams = TimeseriesGroupsAPI.TimeseriesGroupMaliciousParams;
  export import TimeseriesGroupSpamParams = TimeseriesGroupsAPI.TimeseriesGroupSpamParams;
  export import TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
  export import TimeseriesGroupThreatCategoryParams = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryParams;
}
