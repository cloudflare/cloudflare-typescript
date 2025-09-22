// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SmartRoutingAPI from './smart-routing';
import {
  SmartRouting,
  SmartRoutingEditParams,
  SmartRoutingEditResponse,
  SmartRoutingGetParams,
  SmartRoutingGetResponse,
} from './smart-routing';
import * as TieredCachingAPI from './tiered-caching';
import { TieredCaching } from './tiered-caching';

export class Argo extends APIResource {
  smartRouting: SmartRoutingAPI.SmartRouting = new SmartRoutingAPI.SmartRouting(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

Argo.SmartRouting = SmartRouting;
Argo.TieredCaching = TieredCaching;

export declare namespace Argo {
  export {
    SmartRouting as SmartRouting,
    type SmartRoutingEditResponse as SmartRoutingEditResponse,
    type SmartRoutingGetResponse as SmartRoutingGetResponse,
    type SmartRoutingEditParams as SmartRoutingEditParams,
    type SmartRoutingGetParams as SmartRoutingGetParams,
  };

  export { TieredCaching as TieredCaching };
}
