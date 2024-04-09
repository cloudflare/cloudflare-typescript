// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as SummaryAPI from 'cloudflare/resources/radar/http/summary';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/http/timeseries-groups';
import * as TopAPI from 'cloudflare/resources/radar/http/top';
import * as AsesAPI from 'cloudflare/resources/radar/http/ases/ases';
import * as LocationsAPI from 'cloudflare/resources/radar/http/locations/locations';

export class HTTP extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace HTTP {
  export import Top = TopAPI.Top;
  export import Browser = TopAPI.Browser;
  export import TopBrowserFamiliesResponse = TopAPI.TopBrowserFamiliesResponse;
  export import TopBrowsersResponse = TopAPI.TopBrowsersResponse;
  export import TopBrowserFamiliesParams = TopAPI.TopBrowserFamiliesParams;
  export import TopBrowsersParams = TopAPI.TopBrowsersParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
  export import Ases = AsesAPI.Ases;
  export import AseGetResponse = AsesAPI.AseGetResponse;
  export import AseGetParams = AsesAPI.AseGetParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryBotClassResponse = SummaryAPI.SummaryBotClassResponse;
  export import SummaryDeviceTypeResponse = SummaryAPI.SummaryDeviceTypeResponse;
  export import SummaryHTTPProtocolResponse = SummaryAPI.SummaryHTTPProtocolResponse;
  export import SummaryHTTPVersionResponse = SummaryAPI.SummaryHTTPVersionResponse;
  export import SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export import SummaryOSResponse = SummaryAPI.SummaryOSResponse;
  export import SummaryTLSVersionResponse = SummaryAPI.SummaryTLSVersionResponse;
  export import SummaryBotClassParams = SummaryAPI.SummaryBotClassParams;
  export import SummaryDeviceTypeParams = SummaryAPI.SummaryDeviceTypeParams;
  export import SummaryHTTPProtocolParams = SummaryAPI.SummaryHTTPProtocolParams;
  export import SummaryHTTPVersionParams = SummaryAPI.SummaryHTTPVersionParams;
  export import SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export import SummaryOSParams = SummaryAPI.SummaryOSParams;
  export import SummaryTLSVersionParams = SummaryAPI.SummaryTLSVersionParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupBotClassResponse = TimeseriesGroupsAPI.TimeseriesGroupBotClassResponse;
  export import TimeseriesGroupBrowserResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserResponse;
  export import TimeseriesGroupBrowserFamilyResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyResponse;
  export import TimeseriesGroupDeviceTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeResponse;
  export import TimeseriesGroupHTTPProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolResponse;
  export import TimeseriesGroupHTTPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupOSResponse = TimeseriesGroupsAPI.TimeseriesGroupOSResponse;
  export import TimeseriesGroupTLSVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionResponse;
  export import TimeseriesGroupBotClassParams = TimeseriesGroupsAPI.TimeseriesGroupBotClassParams;
  export import TimeseriesGroupBrowserParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserParams;
  export import TimeseriesGroupBrowserFamilyParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyParams;
  export import TimeseriesGroupDeviceTypeParams = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeParams;
  export import TimeseriesGroupHTTPProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolParams;
  export import TimeseriesGroupHTTPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupOSParams = TimeseriesGroupsAPI.TimeseriesGroupOSParams;
  export import TimeseriesGroupTLSVersionParams = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionParams;
}
