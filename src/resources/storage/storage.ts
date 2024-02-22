// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnalyticsAPI from 'cloudflare/resources/storage/analytics';
import * as KVAPI from 'cloudflare/resources/storage/kv/kv';

export class Storage extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  kv: KVAPI.KV = new KVAPI.KV(this._client);
}

export namespace Storage {
  export import Analytics = AnalyticsAPI.Analytics;
  export import AnalyticsListResponse = AnalyticsAPI.AnalyticsListResponse;
  export import AnalyticsStoredResponse = AnalyticsAPI.AnalyticsStoredResponse;
  export import AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export import AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
  export import KV = KVAPI.KV;
}
