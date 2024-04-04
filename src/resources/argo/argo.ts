// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as SmartRoutingAPI from 'cloudflare/resources/argo/smart-routing';
import * as TieredCachingAPI from 'cloudflare/resources/argo/tiered-caching';

export class Argo extends APIResource {
  smartRouting: SmartRoutingAPI.SmartRouting = new SmartRoutingAPI.SmartRouting(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

export namespace Argo {
  export import SmartRouting = SmartRoutingAPI.SmartRouting;
  export import SmartRoutingEditParams = SmartRoutingAPI.SmartRoutingEditParams;
  export import SmartRoutingGetParams = SmartRoutingAPI.SmartRoutingGetParams;
  export import TieredCaching = TieredCachingAPI.TieredCaching;
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
  export import TieredCachingGetParams = TieredCachingAPI.TieredCachingGetParams;
}
