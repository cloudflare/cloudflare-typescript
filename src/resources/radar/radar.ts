// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/attacks';
import * as EmailsAPI from 'cloudflare/resources/radar/emails/emails';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as HTTPAPI from 'cloudflare/resources/radar/http/http';
import * as QualityAPI from 'cloudflare/resources/radar/quality/quality';
import * as RankingAPI from 'cloudflare/resources/radar/ranking/ranking';
import * as TrafficAnomaliesAPI from 'cloudflare/resources/radar/traffic-anomalies/traffic-anomalies';

export class Radar extends APIResource {
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
