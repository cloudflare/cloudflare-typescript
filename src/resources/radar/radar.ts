// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatasetsAPI from './datasets';
import * as SearchAPI from './search';
import * as TCPResetsTimeoutsAPI from './tcp-resets-timeouts';
import * as AIAPI from './ai/ai';
import * as AnnotationsAPI from './annotations/annotations';
import * as AS112API from './as112/as112';
import * as AttacksAPI from './attacks/attacks';
import * as BGPAPI from './bgp/bgp';
import * as DNSAPI from './dns/dns';
import * as EmailAPI from './email/email';
import * as EntitiesAPI from './entities/entities';
import * as HTTPAPI from './http/http';
import * as NetflowsAPI from './netflows/netflows';
import * as QualityAPI from './quality/quality';
import * as RankingAPI from './ranking/ranking';
import * as TrafficAnomaliesAPI from './traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from './verified-bots/verified-bots';

export class Radar extends APIResource {
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  bgp: BGPAPI.BGP = new BGPAPI.BGP(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  netflows: NetflowsAPI.Netflows = new NetflowsAPI.Netflows(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  verifiedBots: VerifiedBotsAPI.VerifiedBots = new VerifiedBotsAPI.VerifiedBots(this._client);
  as112: AS112API.AS112 = new AS112API.AS112(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  http: HTTPAPI.HTTP = new HTTPAPI.HTTP(this._client);
  quality: QualityAPI.Quality = new QualityAPI.Quality(this._client);
  ranking: RankingAPI.Ranking = new RankingAPI.Ranking(this._client);
  trafficAnomalies: TrafficAnomaliesAPI.TrafficAnomalies = new TrafficAnomaliesAPI.TrafficAnomalies(
    this._client,
  );
  tcpResetsTimeouts: TCPResetsTimeoutsAPI.TCPResetsTimeouts = new TCPResetsTimeoutsAPI.TCPResetsTimeouts(
    this._client,
  );
}

export namespace Radar {
  export import AI = AIAPI.AI;
  export import Annotations = AnnotationsAPI.Annotations;
  export type AnnotationListResponse = AnnotationsAPI.AnnotationListResponse;
  export type AnnotationListParams = AnnotationsAPI.AnnotationListParams;
  export import BGP = BGPAPI.BGP;
  export type BGPTimeseriesResponse = BGPAPI.BGPTimeseriesResponse;
  export type BGPTimeseriesParams = BGPAPI.BGPTimeseriesParams;
  export import Datasets = DatasetsAPI.Datasets;
  export type DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export type DatasetDownloadResponse = DatasetsAPI.DatasetDownloadResponse;
  export type DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export type DatasetListParams = DatasetsAPI.DatasetListParams;
  export type DatasetDownloadParams = DatasetsAPI.DatasetDownloadParams;
  export import DNS = DNSAPI.DNS;
  export import Netflows = NetflowsAPI.Netflows;
  export type NetflowSummaryResponse = NetflowsAPI.NetflowSummaryResponse;
  export type NetflowTimeseriesResponse = NetflowsAPI.NetflowTimeseriesResponse;
  export type NetflowSummaryParams = NetflowsAPI.NetflowSummaryParams;
  export type NetflowTimeseriesParams = NetflowsAPI.NetflowTimeseriesParams;
  export import Search = SearchAPI.Search;
  export type SearchGlobalResponse = SearchAPI.SearchGlobalResponse;
  export type SearchGlobalParams = SearchAPI.SearchGlobalParams;
  export import VerifiedBots = VerifiedBotsAPI.VerifiedBots;
  export import AS112 = AS112API.AS112;
  export type AS112TimeseriesResponse = AS112API.AS112TimeseriesResponse;
  export type AS112TimeseriesParams = AS112API.AS112TimeseriesParams;
  export import Email = EmailAPI.Email;
  export type RadarEmailSeries = EmailAPI.RadarEmailSeries;
  export type RadarEmailSummary = EmailAPI.RadarEmailSummary;
  export import Attacks = AttacksAPI.Attacks;
  export import Entities = EntitiesAPI.Entities;
  export type EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export type EntityGetParams = EntitiesAPI.EntityGetParams;
  export import HTTP = HTTPAPI.HTTP;
  export type HTTPTimeseriesResponse = HTTPAPI.HTTPTimeseriesResponse;
  export type HTTPTimeseriesParams = HTTPAPI.HTTPTimeseriesParams;
  export import Quality = QualityAPI.Quality;
  export import Ranking = RankingAPI.Ranking;
  export type RankingTimeseriesGroupsResponse = RankingAPI.RankingTimeseriesGroupsResponse;
  export type RankingTopResponse = RankingAPI.RankingTopResponse;
  export type RankingTimeseriesGroupsParams = RankingAPI.RankingTimeseriesGroupsParams;
  export type RankingTopParams = RankingAPI.RankingTopParams;
  export import TrafficAnomalies = TrafficAnomaliesAPI.TrafficAnomalies;
  export type TrafficAnomalyGetResponse = TrafficAnomaliesAPI.TrafficAnomalyGetResponse;
  export type TrafficAnomalyGetParams = TrafficAnomaliesAPI.TrafficAnomalyGetParams;
  export import TCPResetsTimeouts = TCPResetsTimeoutsAPI.TCPResetsTimeouts;
  export type TCPResetsTimeoutSummaryResponse = TCPResetsTimeoutsAPI.TCPResetsTimeoutSummaryResponse;
  export type TCPResetsTimeoutTimeseriesGroupsResponse =
    TCPResetsTimeoutsAPI.TCPResetsTimeoutTimeseriesGroupsResponse;
  export type TCPResetsTimeoutSummaryParams = TCPResetsTimeoutsAPI.TCPResetsTimeoutSummaryParams;
  export type TCPResetsTimeoutTimeseriesGroupsParams =
    TCPResetsTimeoutsAPI.TCPResetsTimeoutTimeseriesGroupsParams;
}
