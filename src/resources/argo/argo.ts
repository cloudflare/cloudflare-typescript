// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SmartRoutingAPI from './smart-routing';
import * as TieredCachingAPI from './tiered-caching';

export class Argo extends APIResource {
  smartRouting: SmartRoutingAPI.SmartRouting = new SmartRoutingAPI.SmartRouting(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

export namespace Argo {
  export import SmartRouting = SmartRoutingAPI.SmartRouting;
  export type SmartRoutingEditResponse = SmartRoutingAPI.SmartRoutingEditResponse;
  export type SmartRoutingGetResponse = SmartRoutingAPI.SmartRoutingGetResponse;
  export type SmartRoutingEditParams = SmartRoutingAPI.SmartRoutingEditParams;
  export type SmartRoutingGetParams = SmartRoutingAPI.SmartRoutingGetParams;
  export import TieredCaching = TieredCachingAPI.TieredCaching;
  export type TieredCachingEditResponse = TieredCachingAPI.TieredCachingEditResponse;
  export type TieredCachingGetResponse = TieredCachingAPI.TieredCachingGetResponse;
  export type TieredCachingEditParams = TieredCachingAPI.TieredCachingEditParams;
  export type TieredCachingGetParams = TieredCachingAPI.TieredCachingGetParams;
}
