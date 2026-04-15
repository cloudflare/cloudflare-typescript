// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentReadinessAPI from './agent-readiness';
import {
  AgentReadiness,
  AgentReadinessSummaryParams,
  AgentReadinessSummaryResponse,
  BaseAgentReadiness,
} from './agent-readiness';
import * as DatasetsAPI from './datasets';
import {
  BaseDatasets,
  DatasetDownloadParams,
  DatasetDownloadResponse,
  DatasetGetResponse,
  DatasetListParams,
  DatasetListResponse,
  Datasets,
} from './datasets';
import * as GeolocationsAPI from './geolocations';
import {
  BaseGeolocations,
  GeolocationGetParams,
  GeolocationGetResponse,
  GeolocationListParams,
  GeolocationListResponse,
  Geolocations,
} from './geolocations';
import * as SearchAPI from './search';
import { BaseSearch, Search, SearchGlobalParams, SearchGlobalResponse } from './search';
import * as TCPResetsTimeoutsAPI from './tcp-resets-timeouts';
import {
  BaseTCPResetsTimeouts,
  TCPResetsTimeoutSummaryParams,
  TCPResetsTimeoutSummaryResponse,
  TCPResetsTimeoutTimeseriesGroupsParams,
  TCPResetsTimeoutTimeseriesGroupsResponse,
  TCPResetsTimeouts,
} from './tcp-resets-timeouts';
import * as AIAPI from './ai/ai';
import { AI, BaseAI } from './ai/ai';
import * as AnnotationsAPI from './annotations/annotations';
import {
  AnnotationListParams,
  AnnotationListResponse,
  Annotations,
  BaseAnnotations,
} from './annotations/annotations';
import * as AS112API from './as112/as112';
import {
  AS112,
  AS112SummaryV2Params,
  AS112SummaryV2Response,
  AS112TimeseriesGroupsV2Params,
  AS112TimeseriesGroupsV2Response,
  AS112TimeseriesParams,
  AS112TimeseriesResponse,
  BaseAS112,
} from './as112/as112';
import * as AttacksAPI from './attacks/attacks';
import { Attacks, BaseAttacks } from './attacks/attacks';
import * as BGPAPI from './bgp/bgp';
import { BGP, BGPTimeseriesParams, BGPTimeseriesResponse, BaseBGP } from './bgp/bgp';
import * as BotsAPI from './bots/bots';
import {
  BaseBots,
  BotGetParams,
  BotGetResponse,
  BotListParams,
  BotListResponse,
  BotSummaryParams,
  BotSummaryResponse,
  BotTimeseriesGroupsParams,
  BotTimeseriesGroupsResponse,
  BotTimeseriesParams,
  BotTimeseriesResponse,
  Bots,
} from './bots/bots';
import * as CTAPI from './ct/ct';
import {
  BaseCT,
  CT,
  CTSummaryParams,
  CTSummaryResponse,
  CTTimeseriesGroupsParams,
  CTTimeseriesGroupsResponse,
  CTTimeseriesParams,
  CTTimeseriesResponse,
} from './ct/ct';
import * as DNSAPI from './dns/dns';
import {
  BaseDNS,
  DNS,
  DNSSummaryV2Params,
  DNSSummaryV2Response,
  DNSTimeseriesGroupsV2Params,
  DNSTimeseriesGroupsV2Response,
  DNSTimeseriesParams,
  DNSTimeseriesResponse,
} from './dns/dns';
import * as EmailAPI from './email/email';
import { BaseEmail, Email, RadarEmailSeries, RadarEmailSummary } from './email/email';
import * as EntitiesAPI from './entities/entities';
import { BaseEntities, Entities, EntityGetParams, EntityGetResponse } from './entities/entities';
import * as HTTPAPI from './http/http';
import {
  BaseHTTP,
  HTTP,
  HTTPSummaryV2Params,
  HTTPSummaryV2Response,
  HTTPTimeseriesGroupsV2Params,
  HTTPTimeseriesGroupsV2Response,
  HTTPTimeseriesParams,
  HTTPTimeseriesResponse,
} from './http/http';
import * as LeakedCredentialsAPI from './leaked-credentials/leaked-credentials';
import {
  BaseLeakedCredentials,
  LeakedCredentialSummaryV2Params,
  LeakedCredentialSummaryV2Response,
  LeakedCredentialTimeseriesGroupsV2Params,
  LeakedCredentialTimeseriesGroupsV2Response,
  LeakedCredentials,
} from './leaked-credentials/leaked-credentials';
import * as NetFlowsAPI from './netflows/netflows';
import {
  BaseNetFlows,
  NetFlows,
  NetFlowsSummaryParams,
  NetFlowsSummaryResponse,
  NetFlowsSummaryV2Params,
  NetFlowsSummaryV2Response,
  NetFlowsTimeseriesGroupsParams,
  NetFlowsTimeseriesGroupsResponse,
  NetFlowsTimeseriesParams,
  NetFlowsTimeseriesResponse,
} from './netflows/netflows';
import * as PostQuantumAPI from './post-quantum/post-quantum';
import { BasePostQuantum, PostQuantum } from './post-quantum/post-quantum';
import * as QualityAPI from './quality/quality';
import { BaseQuality, Quality } from './quality/quality';
import * as RankingAPI from './ranking/ranking';
import {
  BaseRanking,
  Ranking,
  RankingTimeseriesGroupsParams,
  RankingTimeseriesGroupsResponse,
  RankingTopParams,
  RankingTopResponse,
} from './ranking/ranking';
import * as RobotsTXTAPI from './robots-txt/robots-txt';
import { BaseRobotsTXT, RobotsTXT } from './robots-txt/robots-txt';
import * as TrafficAnomaliesAPI from './traffic-anomalies/traffic-anomalies';
import {
  BaseTrafficAnomalies,
  TrafficAnomalies,
  TrafficAnomalyGetParams,
  TrafficAnomalyGetResponse,
} from './traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from './verified-bots/verified-bots';
import { BaseVerifiedBots, VerifiedBots } from './verified-bots/verified-bots';

export class BaseRadar extends APIResource {
  static override readonly _key: readonly ['radar'] = Object.freeze(['radar'] as const);
}
export class Radar extends BaseRadar {
  agentReadiness: AgentReadinessAPI.AgentReadiness = new AgentReadinessAPI.AgentReadiness(this._client);
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  ct: CTAPI.CT = new CTAPI.CT(this._client);
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  bgp: BGPAPI.BGP = new BGPAPI.BGP(this._client);
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  netFlows: NetFlowsAPI.NetFlows = new NetFlowsAPI.NetFlows(this._client);
  postQuantum: PostQuantumAPI.PostQuantum = new PostQuantumAPI.PostQuantum(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  verifiedBots: VerifiedBotsAPI.VerifiedBots = new VerifiedBotsAPI.VerifiedBots(this._client);
  as112: AS112API.AS112 = new AS112API.AS112(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  geolocations: GeolocationsAPI.Geolocations = new GeolocationsAPI.Geolocations(this._client);
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
  leakedCredentials: LeakedCredentialsAPI.LeakedCredentials = new LeakedCredentialsAPI.LeakedCredentials(
    this._client,
  );
}

Radar.AgentReadiness = AgentReadiness;
Radar.BaseAgentReadiness = BaseAgentReadiness;
Radar.AI = AI;
Radar.BaseAI = BaseAI;
Radar.CT = CT;
Radar.BaseCT = BaseCT;
Radar.Annotations = Annotations;
Radar.BaseAnnotations = BaseAnnotations;
Radar.BGP = BGP;
Radar.BaseBGP = BaseBGP;
Radar.Bots = Bots;
Radar.BaseBots = BaseBots;
Radar.Datasets = Datasets;
Radar.BaseDatasets = BaseDatasets;
Radar.DNS = DNS;
Radar.BaseDNS = BaseDNS;
Radar.NetFlows = NetFlows;
Radar.BaseNetFlows = BaseNetFlows;
Radar.PostQuantum = PostQuantum;
Radar.BasePostQuantum = BasePostQuantum;
Radar.Search = Search;
Radar.BaseSearch = BaseSearch;
Radar.VerifiedBots = VerifiedBots;
Radar.BaseVerifiedBots = BaseVerifiedBots;
Radar.AS112 = AS112;
Radar.BaseAS112 = BaseAS112;
Radar.Email = Email;
Radar.BaseEmail = BaseEmail;
Radar.Attacks = Attacks;
Radar.BaseAttacks = BaseAttacks;
Radar.Entities = Entities;
Radar.BaseEntities = BaseEntities;
Radar.Geolocations = Geolocations;
Radar.BaseGeolocations = BaseGeolocations;
Radar.HTTP = HTTP;
Radar.BaseHTTP = BaseHTTP;
Radar.Quality = Quality;
Radar.BaseQuality = BaseQuality;
Radar.Ranking = Ranking;
Radar.BaseRanking = BaseRanking;
Radar.TrafficAnomalies = TrafficAnomalies;
Radar.BaseTrafficAnomalies = BaseTrafficAnomalies;
Radar.TCPResetsTimeouts = TCPResetsTimeouts;
Radar.BaseTCPResetsTimeouts = BaseTCPResetsTimeouts;
Radar.RobotsTXT = RobotsTXT;
Radar.BaseRobotsTXT = BaseRobotsTXT;
Radar.LeakedCredentials = LeakedCredentials;
Radar.BaseLeakedCredentials = BaseLeakedCredentials;

export declare namespace Radar {
  export {
    AgentReadiness as AgentReadiness,
    BaseAgentReadiness as BaseAgentReadiness,
    type AgentReadinessSummaryResponse as AgentReadinessSummaryResponse,
    type AgentReadinessSummaryParams as AgentReadinessSummaryParams,
  };

  export { AI as AI, BaseAI as BaseAI };

  export {
    CT as CT,
    BaseCT as BaseCT,
    type CTSummaryResponse as CTSummaryResponse,
    type CTTimeseriesResponse as CTTimeseriesResponse,
    type CTTimeseriesGroupsResponse as CTTimeseriesGroupsResponse,
    type CTSummaryParams as CTSummaryParams,
    type CTTimeseriesParams as CTTimeseriesParams,
    type CTTimeseriesGroupsParams as CTTimeseriesGroupsParams,
  };

  export {
    Annotations as Annotations,
    BaseAnnotations as BaseAnnotations,
    type AnnotationListResponse as AnnotationListResponse,
    type AnnotationListParams as AnnotationListParams,
  };

  export {
    BGP as BGP,
    BaseBGP as BaseBGP,
    type BGPTimeseriesResponse as BGPTimeseriesResponse,
    type BGPTimeseriesParams as BGPTimeseriesParams,
  };

  export {
    Bots as Bots,
    BaseBots as BaseBots,
    type BotListResponse as BotListResponse,
    type BotGetResponse as BotGetResponse,
    type BotSummaryResponse as BotSummaryResponse,
    type BotTimeseriesResponse as BotTimeseriesResponse,
    type BotTimeseriesGroupsResponse as BotTimeseriesGroupsResponse,
    type BotListParams as BotListParams,
    type BotGetParams as BotGetParams,
    type BotSummaryParams as BotSummaryParams,
    type BotTimeseriesParams as BotTimeseriesParams,
    type BotTimeseriesGroupsParams as BotTimeseriesGroupsParams,
  };

  export {
    Datasets as Datasets,
    BaseDatasets as BaseDatasets,
    type DatasetListResponse as DatasetListResponse,
    type DatasetDownloadResponse as DatasetDownloadResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetListParams as DatasetListParams,
    type DatasetDownloadParams as DatasetDownloadParams,
  };

  export {
    DNS as DNS,
    BaseDNS as BaseDNS,
    type DNSSummaryV2Response as DNSSummaryV2Response,
    type DNSTimeseriesResponse as DNSTimeseriesResponse,
    type DNSTimeseriesGroupsV2Response as DNSTimeseriesGroupsV2Response,
    type DNSSummaryV2Params as DNSSummaryV2Params,
    type DNSTimeseriesParams as DNSTimeseriesParams,
    type DNSTimeseriesGroupsV2Params as DNSTimeseriesGroupsV2Params,
  };

  export {
    NetFlows as NetFlows,
    BaseNetFlows as BaseNetFlows,
    type NetFlowsSummaryResponse as NetFlowsSummaryResponse,
    type NetFlowsSummaryV2Response as NetFlowsSummaryV2Response,
    type NetFlowsTimeseriesResponse as NetFlowsTimeseriesResponse,
    type NetFlowsTimeseriesGroupsResponse as NetFlowsTimeseriesGroupsResponse,
    type NetFlowsSummaryParams as NetFlowsSummaryParams,
    type NetFlowsSummaryV2Params as NetFlowsSummaryV2Params,
    type NetFlowsTimeseriesParams as NetFlowsTimeseriesParams,
    type NetFlowsTimeseriesGroupsParams as NetFlowsTimeseriesGroupsParams,
  };

  export { PostQuantum as PostQuantum, BasePostQuantum as BasePostQuantum };

  export {
    Search as Search,
    BaseSearch as BaseSearch,
    type SearchGlobalResponse as SearchGlobalResponse,
    type SearchGlobalParams as SearchGlobalParams,
  };

  export { VerifiedBots as VerifiedBots, BaseVerifiedBots as BaseVerifiedBots };

  export {
    AS112 as AS112,
    BaseAS112 as BaseAS112,
    type AS112SummaryV2Response as AS112SummaryV2Response,
    type AS112TimeseriesResponse as AS112TimeseriesResponse,
    type AS112TimeseriesGroupsV2Response as AS112TimeseriesGroupsV2Response,
    type AS112SummaryV2Params as AS112SummaryV2Params,
    type AS112TimeseriesParams as AS112TimeseriesParams,
    type AS112TimeseriesGroupsV2Params as AS112TimeseriesGroupsV2Params,
  };

  export {
    Email as Email,
    BaseEmail as BaseEmail,
    type RadarEmailSeries as RadarEmailSeries,
    type RadarEmailSummary as RadarEmailSummary,
  };

  export { Attacks as Attacks, BaseAttacks as BaseAttacks };

  export {
    Entities as Entities,
    BaseEntities as BaseEntities,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetParams as EntityGetParams,
  };

  export {
    Geolocations as Geolocations,
    BaseGeolocations as BaseGeolocations,
    type GeolocationListResponse as GeolocationListResponse,
    type GeolocationGetResponse as GeolocationGetResponse,
    type GeolocationListParams as GeolocationListParams,
    type GeolocationGetParams as GeolocationGetParams,
  };

  export {
    HTTP as HTTP,
    BaseHTTP as BaseHTTP,
    type HTTPSummaryV2Response as HTTPSummaryV2Response,
    type HTTPTimeseriesResponse as HTTPTimeseriesResponse,
    type HTTPTimeseriesGroupsV2Response as HTTPTimeseriesGroupsV2Response,
    type HTTPSummaryV2Params as HTTPSummaryV2Params,
    type HTTPTimeseriesParams as HTTPTimeseriesParams,
    type HTTPTimeseriesGroupsV2Params as HTTPTimeseriesGroupsV2Params,
  };

  export { Quality as Quality, BaseQuality as BaseQuality };

  export {
    Ranking as Ranking,
    BaseRanking as BaseRanking,
    type RankingTimeseriesGroupsResponse as RankingTimeseriesGroupsResponse,
    type RankingTopResponse as RankingTopResponse,
    type RankingTimeseriesGroupsParams as RankingTimeseriesGroupsParams,
    type RankingTopParams as RankingTopParams,
  };

  export {
    TrafficAnomalies as TrafficAnomalies,
    BaseTrafficAnomalies as BaseTrafficAnomalies,
    type TrafficAnomalyGetResponse as TrafficAnomalyGetResponse,
    type TrafficAnomalyGetParams as TrafficAnomalyGetParams,
  };

  export {
    TCPResetsTimeouts as TCPResetsTimeouts,
    BaseTCPResetsTimeouts as BaseTCPResetsTimeouts,
    type TCPResetsTimeoutSummaryResponse as TCPResetsTimeoutSummaryResponse,
    type TCPResetsTimeoutTimeseriesGroupsResponse as TCPResetsTimeoutTimeseriesGroupsResponse,
    type TCPResetsTimeoutSummaryParams as TCPResetsTimeoutSummaryParams,
    type TCPResetsTimeoutTimeseriesGroupsParams as TCPResetsTimeoutTimeseriesGroupsParams,
  };

  export { RobotsTXT as RobotsTXT, BaseRobotsTXT as BaseRobotsTXT };

  export {
    LeakedCredentials as LeakedCredentials,
    BaseLeakedCredentials as BaseLeakedCredentials,
    type LeakedCredentialSummaryV2Response as LeakedCredentialSummaryV2Response,
    type LeakedCredentialTimeseriesGroupsV2Response as LeakedCredentialTimeseriesGroupsV2Response,
    type LeakedCredentialSummaryV2Params as LeakedCredentialSummaryV2Params,
    type LeakedCredentialTimeseriesGroupsV2Params as LeakedCredentialTimeseriesGroupsV2Params,
  };
}
