// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SmartRoutingAPI from './smart-routing';
import {
  BaseSmartRouting,
  SmartRouting,
  SmartRoutingEditParams,
  SmartRoutingEditResponse,
  SmartRoutingGetParams,
  SmartRoutingGetResponse,
} from './smart-routing';
import * as TieredCachingAPI from './tiered-caching';
import {
  BaseTieredCaching,
  TieredCaching,
  TieredCachingEditParams,
  TieredCachingEditResponse,
  TieredCachingGetParams,
  TieredCachingGetResponse,
} from './tiered-caching';

export class BaseArgo extends APIResource {
  static override readonly _key: readonly ['argo'] = Object.freeze(['argo'] as const);
}
export class Argo extends BaseArgo {
  smartRouting: SmartRoutingAPI.SmartRouting = new SmartRoutingAPI.SmartRouting(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

Argo.SmartRouting = SmartRouting;
Argo.BaseSmartRouting = BaseSmartRouting;
Argo.TieredCaching = TieredCaching;
Argo.BaseTieredCaching = BaseTieredCaching;

export declare namespace Argo {
  export {
    SmartRouting as SmartRouting,
    BaseSmartRouting as BaseSmartRouting,
    type SmartRoutingEditResponse as SmartRoutingEditResponse,
    type SmartRoutingGetResponse as SmartRoutingGetResponse,
    type SmartRoutingEditParams as SmartRoutingEditParams,
    type SmartRoutingGetParams as SmartRoutingGetParams,
  };

  export {
    TieredCaching as TieredCaching,
    BaseTieredCaching as BaseTieredCaching,
    type TieredCachingEditResponse as TieredCachingEditResponse,
    type TieredCachingGetResponse as TieredCachingGetResponse,
    type TieredCachingEditParams as TieredCachingEditParams,
    type TieredCachingGetParams as TieredCachingGetParams,
  };
}
