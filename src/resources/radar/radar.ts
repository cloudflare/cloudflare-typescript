// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnnotationsAPI from 'cloudflare/resources/radar/annotations/annotations';
import * as As112API from 'cloudflare/resources/radar/as112/as112';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/attacks';
import * as BGPAPI from 'cloudflare/resources/radar/bgp/bgp';
import * as ConnectionTamperingAPI from 'cloudflare/resources/radar/connection-tampering/connection-tampering';
import * as DatasetsAPI from 'cloudflare/resources/radar/datasets/datasets';
import * as DNSAPI from 'cloudflare/resources/radar/dns/dns';
import * as EmailAPI from 'cloudflare/resources/radar/email/email';
import * as EmailsAPI from 'cloudflare/resources/radar/emails/emails';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as HTTPAPI from 'cloudflare/resources/radar/http/http';
import * as NetflowsAPI from 'cloudflare/resources/radar/netflows/netflows';
import * as QualityAPI from 'cloudflare/resources/radar/quality/quality';
import * as RankingAPI from 'cloudflare/resources/radar/ranking/ranking';
import * as SearchesAPI from 'cloudflare/resources/radar/searches/searches';
import * as TrafficAnomaliesAPI from 'cloudflare/resources/radar/traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from 'cloudflare/resources/radar/verified-bots/verified-bots';

export class Radar extends APIResource {
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  bgp: BGPAPI.BGP = new BGPAPI.BGP(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  netflows: NetflowsAPI.Netflows = new NetflowsAPI.Netflows(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);
  verifiedBots: VerifiedBotsAPI.VerifiedBots = new VerifiedBotsAPI.VerifiedBots(this._client);
  as112: As112API.As112 = new As112API.As112(this._client);
  connectionTampering: ConnectionTamperingAPI.ConnectionTampering =
    new ConnectionTamperingAPI.ConnectionTampering(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  http: HTTPAPI.HTTP = new HTTPAPI.HTTP(this._client);
  quality: QualityAPI.Quality = new QualityAPI.Quality(this._client);
  ranking: RankingAPI.Ranking = new RankingAPI.Ranking(this._client);
  trafficAnomalies: TrafficAnomaliesAPI.TrafficAnomalies = new TrafficAnomaliesAPI.TrafficAnomalies(
    this._client,
  );
}

export namespace Radar {
  export import Annotations = AnnotationsAPI.Annotations;
  export import BGP = BGPAPI.BGP;
  export import Datasets = DatasetsAPI.Datasets;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import DNS = DNSAPI.DNS;
  export import Netflows = NetflowsAPI.Netflows;
  export import Searches = SearchesAPI.Searches;
  export import VerifiedBots = VerifiedBotsAPI.VerifiedBots;
  export import As112 = As112API.As112;
  export import ConnectionTampering = ConnectionTamperingAPI.ConnectionTampering;
  export import ConnectionTamperingSummaryResponse = ConnectionTamperingAPI.ConnectionTamperingSummaryResponse;
  export import ConnectionTamperingSummaryParams = ConnectionTamperingAPI.ConnectionTamperingSummaryParams;
  export import Email = EmailAPI.Email;
  export import Attacks = AttacksAPI.Attacks;
  export import Emails = EmailsAPI.Emails;
  export import Entities = EntitiesAPI.Entities;
  export import EntityIPsResponse = EntitiesAPI.EntityIPsResponse;
  export import EntityIPsParams = EntitiesAPI.EntityIPsParams;
  export import HTTP = HTTPAPI.HTTP;
  export import HTTPBotClassesResponse = HTTPAPI.HTTPBotClassesResponse;
  export import HTTPBrowserFamiliesResponse = HTTPAPI.HTTPBrowserFamiliesResponse;
  export import HTTPBrowsersResponse = HTTPAPI.HTTPBrowsersResponse;
  export import HTTPDeviceTypesResponse = HTTPAPI.HTTPDeviceTypesResponse;
  export import HTTPHTTPProtocolsResponse = HTTPAPI.HTTPHTTPProtocolsResponse;
  export import HTTPHTTPVersionsResponse = HTTPAPI.HTTPHTTPVersionsResponse;
  export import HTTPIPVersionsResponse = HTTPAPI.HTTPIPVersionsResponse;
  export import HTTPOssResponse = HTTPAPI.HTTPOssResponse;
  export import HTTPBotClassesParams = HTTPAPI.HTTPBotClassesParams;
  export import HTTPBrowserFamiliesParams = HTTPAPI.HTTPBrowserFamiliesParams;
  export import HTTPBrowsersParams = HTTPAPI.HTTPBrowsersParams;
  export import HTTPDeviceTypesParams = HTTPAPI.HTTPDeviceTypesParams;
  export import HTTPHTTPProtocolsParams = HTTPAPI.HTTPHTTPProtocolsParams;
  export import HTTPHTTPVersionsParams = HTTPAPI.HTTPHTTPVersionsParams;
  export import HTTPIPVersionsParams = HTTPAPI.HTTPIPVersionsParams;
  export import HTTPOssParams = HTTPAPI.HTTPOssParams;
  export import Quality = QualityAPI.Quality;
  export import Ranking = RankingAPI.Ranking;
  export import TrafficAnomalies = TrafficAnomaliesAPI.TrafficAnomalies;
  export import TrafficAnomalyListResponse = TrafficAnomaliesAPI.TrafficAnomalyListResponse;
  export import TrafficAnomalyListParams = TrafficAnomaliesAPI.TrafficAnomalyListParams;
}
