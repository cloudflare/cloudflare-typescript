// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatasetsAPI from './datasets';
import * as SearchAPI from './search';
import * as TCPResetsTimeoutsAPI from './tcp-resets-timeouts';
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
import * as RobotsTXTAPI from './robots-txt/robots-txt';
import * as TrafficAnomaliesAPI from './traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from './verified-bots/verified-bots';

export class Radar extends APIResource {
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
  robotsTXT: RobotsTXTAPI.RobotsTXT = new RobotsTXTAPI.RobotsTXT(this._client);
}

export namespace Radar {
  export import Annotations = AnnotationsAPI.Annotations;
  export import AnnotationListResponse = AnnotationsAPI.AnnotationListResponse;
  export import AnnotationListParams = AnnotationsAPI.AnnotationListParams;
  export import BGP = BGPAPI.BGP;
  export import BGPTimeseriesResponse = BGPAPI.BGPTimeseriesResponse;
  export import BGPTimeseriesParams = BGPAPI.BGPTimeseriesParams;
  export import Datasets = DatasetsAPI.Datasets;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetDownloadResponse = DatasetsAPI.DatasetDownloadResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDownloadParams = DatasetsAPI.DatasetDownloadParams;
  export import DNS = DNSAPI.DNS;
  export import Netflows = NetflowsAPI.Netflows;
  export import NetflowSummaryResponse = NetflowsAPI.NetflowSummaryResponse;
  export import NetflowTimeseriesResponse = NetflowsAPI.NetflowTimeseriesResponse;
  export import NetflowSummaryParams = NetflowsAPI.NetflowSummaryParams;
  export import NetflowTimeseriesParams = NetflowsAPI.NetflowTimeseriesParams;
  export import Search = SearchAPI.Search;
  export import SearchGlobalResponse = SearchAPI.SearchGlobalResponse;
  export import SearchGlobalParams = SearchAPI.SearchGlobalParams;
  export import VerifiedBots = VerifiedBotsAPI.VerifiedBots;
  export import AS112 = AS112API.AS112;
  export import AS112TimeseriesResponse = AS112API.AS112TimeseriesResponse;
  export import AS112TimeseriesParams = AS112API.AS112TimeseriesParams;
  export import Email = EmailAPI.Email;
  export import RadarEmailSeries = EmailAPI.RadarEmailSeries;
  export import RadarEmailSummary = EmailAPI.RadarEmailSummary;
  export import Attacks = AttacksAPI.Attacks;
  export import Entities = EntitiesAPI.Entities;
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
  export import HTTP = HTTPAPI.HTTP;
  export import HTTPTimeseriesResponse = HTTPAPI.HTTPTimeseriesResponse;
  export import HTTPTimeseriesParams = HTTPAPI.HTTPTimeseriesParams;
  export import Quality = QualityAPI.Quality;
  export import Ranking = RankingAPI.Ranking;
  export import RankingTimeseriesGroupsResponse = RankingAPI.RankingTimeseriesGroupsResponse;
  export import RankingTopResponse = RankingAPI.RankingTopResponse;
  export import RankingTimeseriesGroupsParams = RankingAPI.RankingTimeseriesGroupsParams;
  export import RankingTopParams = RankingAPI.RankingTopParams;
  export import TrafficAnomalies = TrafficAnomaliesAPI.TrafficAnomalies;
  export import TrafficAnomalyGetResponse = TrafficAnomaliesAPI.TrafficAnomalyGetResponse;
  export import TrafficAnomalyGetParams = TrafficAnomaliesAPI.TrafficAnomalyGetParams;
  export import TCPResetsTimeouts = TCPResetsTimeoutsAPI.TCPResetsTimeouts;
  export import TCPResetsTimeoutSummaryResponse = TCPResetsTimeoutsAPI.TCPResetsTimeoutSummaryResponse;
  export import TCPResetsTimeoutTimeseriesGroupsResponse = TCPResetsTimeoutsAPI.TCPResetsTimeoutTimeseriesGroupsResponse;
  export import TCPResetsTimeoutSummaryParams = TCPResetsTimeoutsAPI.TCPResetsTimeoutSummaryParams;
  export import TCPResetsTimeoutTimeseriesGroupsParams = TCPResetsTimeoutsAPI.TCPResetsTimeoutTimeseriesGroupsParams;
  export import RobotsTXT = RobotsTXTAPI.RobotsTXT;
}
