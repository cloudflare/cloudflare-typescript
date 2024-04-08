// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConnectionTamperingAPI from 'cloudflare/resources/radar/connection-tampering';
import * as DatasetsAPI from 'cloudflare/resources/radar/datasets';
import * as SearchAPI from 'cloudflare/resources/radar/search';
import * as AnnotationsAPI from 'cloudflare/resources/radar/annotations/annotations';
import * as AS112API from 'cloudflare/resources/radar/as112/as112';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/attacks';
import * as BGPAPI from 'cloudflare/resources/radar/bgp/bgp';
import * as DNSAPI from 'cloudflare/resources/radar/dns/dns';
import * as EmailAPI from 'cloudflare/resources/radar/email/email';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as HTTPAPI from 'cloudflare/resources/radar/http/http';
import * as NetflowsAPI from 'cloudflare/resources/radar/netflows/netflows';
import * as QualityAPI from 'cloudflare/resources/radar/quality/quality';
import * as RankingAPI from 'cloudflare/resources/radar/ranking/ranking';
import * as TrafficAnomaliesAPI from 'cloudflare/resources/radar/traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from 'cloudflare/resources/radar/verified-bots/verified-bots';

export class Radar extends APIResource {
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  bgp: BGPAPI.BGP = new BGPAPI.BGP(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  netflows: NetflowsAPI.Netflows = new NetflowsAPI.Netflows(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  verifiedBots: VerifiedBotsAPI.VerifiedBots = new VerifiedBotsAPI.VerifiedBots(this._client);
  as112: AS112API.AS112 = new AS112API.AS112(this._client);
  connectionTampering: ConnectionTamperingAPI.ConnectionTampering =
    new ConnectionTamperingAPI.ConnectionTampering(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  http: HTTPAPI.HTTP = new HTTPAPI.HTTP(this._client);
  quality: QualityAPI.Quality = new QualityAPI.Quality(this._client);
  ranking: RankingAPI.Ranking = new RankingAPI.Ranking(this._client);
  trafficAnomalies: TrafficAnomaliesAPI.TrafficAnomalies = new TrafficAnomaliesAPI.TrafficAnomalies(
    this._client,
  );
}

export interface UnnamedSchemaRef16e559c45a31db5480e21fbe904b2e42 {
  code: string;

  name: string;
}

export interface UnnamedSchemaRef4124a22436f90127c7fa2c4543219752 {
  clientASN: number;

  clientASName: string;

  value: string;
}

export interface UnnamedSchemaRef73de8b634bb48667e28a6c6c56080c51 {
  error: string;
}

export interface UnnamedSchemaRef75bae70cf28e6bcef364b9840db3bdeb {
  timestamps: Array<string>;

  values: Array<string>;
}

export interface UnnamedSchemaRef7826220e105d84352ba1108d9ed88e55 {
  timestamps: Array<string>;
  [k: string]: Array<string>;
}

export interface UnnamedSchemaRef83a14d589e799bc901b9ccc870251d09 {
  clientCountryAlpha2: string;

  clientCountryName: string;

  value: string;
}

export interface UnnamedSchemaRef8b383e904d9fb02521257ef9cc77d297 {
  IPv4: string;

  IPv6: string;
}

export interface UnnamedSchemaRef9002274ed7cb7f3dc567421e31529a3a {
  IPv4: Array<string>;

  IPv6: Array<string>;

  timestamps: Array<string>;
}

export interface UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1 {
  dataSource: string;

  description: string;

  eventType: string;

  isInstantaneous: unknown;

  endTime?: string;

  linkedUrl?: string;

  startTime?: string;
}

export interface UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5 {
  /**
   * Adjusted end of date range.
   */
  endTime: string;

  /**
   * Adjusted start of date range.
   */
  startTime: string;
}

export interface UnnamedSchemaRefC5858f1f916a921846e0b6159af470a7 {
  data_time: string;

  query_time: string;

  total_peers: number;
}

export namespace Radar {
  export import Annotations = AnnotationsAPI.Annotations;
  export import BGP = BGPAPI.BGP;
  export import BGPTimeseriesResponse = BGPAPI.BGPTimeseriesResponse;
  export import BGPTimeseriesParams = BGPAPI.BGPTimeseriesParams;
  export import Datasets = DatasetsAPI.Datasets;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetDownloadResponse = DatasetsAPI.DatasetDownloadResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDownloadParams = DatasetsAPI.DatasetDownloadParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import DNS = DNSAPI.DNS;
  export import Netflows = NetflowsAPI.Netflows;
  export import NetflowTimeseriesResponse = NetflowsAPI.NetflowTimeseriesResponse;
  export import NetflowTimeseriesParams = NetflowsAPI.NetflowTimeseriesParams;
  export import Search = SearchAPI.Search;
  export import SearchGlobalResponse = SearchAPI.SearchGlobalResponse;
  export import SearchGlobalParams = SearchAPI.SearchGlobalParams;
  export import VerifiedBots = VerifiedBotsAPI.VerifiedBots;
  export import AS112 = AS112API.AS112;
  export import AS112TimeseriesResponse = AS112API.AS112TimeseriesResponse;
  export import AS112TimeseriesParams = AS112API.AS112TimeseriesParams;
  export import ConnectionTampering = ConnectionTamperingAPI.ConnectionTampering;
  export import ConnectionTamperingSummaryResponse = ConnectionTamperingAPI.ConnectionTamperingSummaryResponse;
  export import ConnectionTamperingTimeseriesGroupsResponse = ConnectionTamperingAPI.ConnectionTamperingTimeseriesGroupsResponse;
  export import ConnectionTamperingSummaryParams = ConnectionTamperingAPI.ConnectionTamperingSummaryParams;
  export import ConnectionTamperingTimeseriesGroupsParams = ConnectionTamperingAPI.ConnectionTamperingTimeseriesGroupsParams;
  export import Email = EmailAPI.Email;
  export import UnnamedSchemaRef67c73d4742566cab0909f71b1822e88c = EmailAPI.UnnamedSchemaRef67c73d4742566cab0909f71b1822e88c;
  export import UnnamedSchemaRef853c157ad369010995e35be614e0343f = EmailAPI.UnnamedSchemaRef853c157ad369010995e35be614e0343f;
  export import Attacks = AttacksAPI.Attacks;
  export import Entities = EntitiesAPI.Entities;
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
  export import HTTP = HTTPAPI.HTTP;
  export import Quality = QualityAPI.Quality;
  export import Ranking = RankingAPI.Ranking;
  export import RankingTimeseriesGroupsResponse = RankingAPI.RankingTimeseriesGroupsResponse;
  export import RankingTopResponse = RankingAPI.RankingTopResponse;
  export import RankingTimeseriesGroupsParams = RankingAPI.RankingTimeseriesGroupsParams;
  export import RankingTopParams = RankingAPI.RankingTopParams;
  export import TrafficAnomalies = TrafficAnomaliesAPI.TrafficAnomalies;
  export import TrafficAnomalyGetResponse = TrafficAnomaliesAPI.TrafficAnomalyGetResponse;
  export import TrafficAnomalyGetParams = TrafficAnomaliesAPI.TrafficAnomalyGetParams;
}
