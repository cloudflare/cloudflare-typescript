// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { SmartRouting } from './smart-routing';
import { TieredCaching } from './tiered-caching';
import * as SmartRoutingAPI from './smart-routing';
import * as TieredCachingAPI from './tiered-caching';

export class Argo extends APIResource {
  smartRouting: SmartRoutingAPI.SmartRouting = new SmartRoutingAPI.SmartRouting(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

export namespace Argo {
  export import SmartRouting = SmartRoutingAPI.SmartRouting;
  export import SmartRoutingEditResponse = SmartRoutingAPI.SmartRoutingEditResponse;
  export import SmartRoutingGetResponse = SmartRoutingAPI.SmartRoutingGetResponse;
  export import SmartRoutingEditParams = SmartRoutingAPI.SmartRoutingEditParams;
  export import SmartRoutingGetParams = SmartRoutingAPI.SmartRoutingGetParams;
  export import TieredCaching = TieredCachingAPI.TieredCaching;
  export import TieredCachingEditResponse = TieredCachingAPI.TieredCachingEditResponse;
  export import TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export import TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
  export import TieredCachingGetParams = TieredCachingAPI.TieredCachingGetParams;
}
