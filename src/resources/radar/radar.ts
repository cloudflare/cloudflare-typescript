// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentReadinessAPI from './agent-readiness';
import { AgentReadiness, BaseAgentReadiness } from './agent-readiness';
import * as DatasetsAPI from './datasets';
import { BaseDatasets, Datasets } from './datasets';
import * as GeolocationsAPI from './geolocations';
import { BaseGeolocations, Geolocations } from './geolocations';
import * as SearchAPI from './search';
import { BaseSearch, Search } from './search';
import * as TCPResetsTimeoutsAPI from './tcp-resets-timeouts';
import { BaseTCPResetsTimeouts, TCPResetsTimeouts } from './tcp-resets-timeouts';
import * as AIAPI from './ai/ai';
import { AI, BaseAI } from './ai/ai';
import * as AnnotationsAPI from './annotations/annotations';
import { Annotations, BaseAnnotations } from './annotations/annotations';
import * as AS112API from './as112/as112';
import { AS112, BaseAS112 } from './as112/as112';
import * as AttacksAPI from './attacks/attacks';
import { Attacks, BaseAttacks } from './attacks/attacks';
import * as BGPAPI from './bgp/bgp';
import { BGP, BaseBGP } from './bgp/bgp';
import * as BotsAPI from './bots/bots';
import { BaseBots, Bots } from './bots/bots';
import * as CTAPI from './ct/ct';
import { BaseCT, CT } from './ct/ct';
import * as DNSAPI from './dns/dns';
import { BaseDNS, DNS } from './dns/dns';
import * as EmailAPI from './email/email';
import { BaseEmail, Email } from './email/email';
import * as EntitiesAPI from './entities/entities';
import { BaseEntities, Entities } from './entities/entities';
import * as HTTPAPI from './http/http';
import { BaseHTTP, HTTP } from './http/http';
import * as LeakedCredentialsAPI from './leaked-credentials/leaked-credentials';
import { BaseLeakedCredentials, LeakedCredentials } from './leaked-credentials/leaked-credentials';
import * as NetFlowsAPI from './netflows/netflows';
import { BaseNetFlows, NetFlows } from './netflows/netflows';
import * as PostQuantumAPI from './post-quantum/post-quantum';
import { BasePostQuantum, PostQuantum } from './post-quantum/post-quantum';
import * as QualityAPI from './quality/quality';
import { BaseQuality, Quality } from './quality/quality';
import * as RankingAPI from './ranking/ranking';
import { BaseRanking, Ranking } from './ranking/ranking';
import * as RobotsTXTAPI from './robots-txt/robots-txt';
import { BaseRobotsTXT, RobotsTXT } from './robots-txt/robots-txt';
import * as TrafficAnomaliesAPI from './traffic-anomalies/traffic-anomalies';
import { BaseTrafficAnomalies, TrafficAnomalies } from './traffic-anomalies/traffic-anomalies';
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
  export { AgentReadiness as AgentReadiness, BaseAgentReadiness as BaseAgentReadiness };

  export { AI as AI, BaseAI as BaseAI };

  export { CT as CT, BaseCT as BaseCT };

  export { Annotations as Annotations, BaseAnnotations as BaseAnnotations };

  export { BGP as BGP, BaseBGP as BaseBGP };

  export { Bots as Bots, BaseBots as BaseBots };

  export { Datasets as Datasets, BaseDatasets as BaseDatasets };

  export { DNS as DNS, BaseDNS as BaseDNS };

  export { NetFlows as NetFlows, BaseNetFlows as BaseNetFlows };

  export { PostQuantum as PostQuantum, BasePostQuantum as BasePostQuantum };

  export { Search as Search, BaseSearch as BaseSearch };

  export { VerifiedBots as VerifiedBots, BaseVerifiedBots as BaseVerifiedBots };

  export { AS112 as AS112, BaseAS112 as BaseAS112 };

  export { Email as Email, BaseEmail as BaseEmail };

  export { Attacks as Attacks, BaseAttacks as BaseAttacks };

  export { Entities as Entities, BaseEntities as BaseEntities };

  export { Geolocations as Geolocations, BaseGeolocations as BaseGeolocations };

  export { HTTP as HTTP, BaseHTTP as BaseHTTP };

  export { Quality as Quality, BaseQuality as BaseQuality };

  export { Ranking as Ranking, BaseRanking as BaseRanking };

  export { TrafficAnomalies as TrafficAnomalies, BaseTrafficAnomalies as BaseTrafficAnomalies };

  export { TCPResetsTimeouts as TCPResetsTimeouts, BaseTCPResetsTimeouts as BaseTCPResetsTimeouts };

  export { RobotsTXT as RobotsTXT, BaseRobotsTXT as BaseRobotsTXT };

  export { LeakedCredentials as LeakedCredentials, BaseLeakedCredentials as BaseLeakedCredentials };
}
