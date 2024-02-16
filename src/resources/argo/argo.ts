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
  export import SmartRoutingUpdateResponse = SmartRoutingAPI.SmartRoutingUpdateResponse;
  export import SmartRoutingGetResponse = SmartRoutingAPI.SmartRoutingGetResponse;
  export import SmartRoutingUpdateParams = SmartRoutingAPI.SmartRoutingUpdateParams;
  export import TieredCaching = TieredCachingAPI.TieredCaching;
  export import TieredCachingTieredCachingGetTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingGetTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingParams = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingParams;
}
