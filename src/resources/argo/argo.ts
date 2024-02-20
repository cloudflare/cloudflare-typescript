// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SmartRoutingAPI from 'cloudflare/resources/argo/smart-routing';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';

export class Argo extends APIResource {
  smartRouting: SmartRoutingAPI.SmartRouting = new SmartRoutingAPI.SmartRouting(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

export namespace Argo {
  export import SmartRouting = SmartRoutingAPI.SmartRouting;
  export import SmartRoutingEditResponse = SmartRoutingAPI.SmartRoutingEditResponse;
  export import SmartRoutingGetResponse = SmartRoutingAPI.SmartRoutingGetResponse;
  export import SmartRoutingEditParams = SmartRoutingAPI.SmartRoutingEditParams;
  export import TieredCaching = TieredCachingAPI.TieredCaching;
  export import TieredCachingEditResponse = TieredCachingAPI.TieredCachingEditResponse;
  export import TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
}
