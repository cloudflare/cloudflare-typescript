// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SFUAPI from './sfu';
import {
  BaseSFU,
  SFU,
  SFUCreateParams,
  SFUCreateResponse,
  SFUDeleteParams,
  SFUDeleteResponse,
  SFUGetParams,
  SFUGetResponse,
  SFUListParams,
  SFUListResponse,
  SFUListResponsesSinglePage,
  SFUUpdateParams,
  SFUUpdateResponse,
} from './sfu';
import * as TURNAPI from './turn';
import {
  BaseTURN,
  TURN,
  TURNCreateParams,
  TURNCreateResponse,
  TURNDeleteParams,
  TURNDeleteResponse,
  TURNGetParams,
  TURNGetResponse,
  TURNListParams,
  TURNListResponse,
  TURNListResponsesSinglePage,
  TURNUpdateParams,
  TURNUpdateResponse,
} from './turn';

export class BaseCalls extends APIResource {
  static override readonly _key: readonly ['calls'] = Object.freeze(['calls'] as const);
}
export class Calls extends BaseCalls {
  sfu: SFUAPI.SFU = new SFUAPI.SFU(this._client);
  turn: TURNAPI.TURN = new TURNAPI.TURN(this._client);
}

Calls.SFU = SFU;
Calls.BaseSFU = BaseSFU;
Calls.TURN = TURN;
Calls.BaseTURN = BaseTURN;

export declare namespace Calls {
  export {
    SFU as SFU,
    BaseSFU as BaseSFU,
    type SFUCreateResponse as SFUCreateResponse,
    type SFUUpdateResponse as SFUUpdateResponse,
    type SFUListResponse as SFUListResponse,
    type SFUDeleteResponse as SFUDeleteResponse,
    type SFUGetResponse as SFUGetResponse,
    type SFUListResponsesSinglePage as SFUListResponsesSinglePage,
    type SFUCreateParams as SFUCreateParams,
    type SFUUpdateParams as SFUUpdateParams,
    type SFUListParams as SFUListParams,
    type SFUDeleteParams as SFUDeleteParams,
    type SFUGetParams as SFUGetParams,
  };

  export {
    TURN as TURN,
    BaseTURN as BaseTURN,
    type TURNCreateResponse as TURNCreateResponse,
    type TURNUpdateResponse as TURNUpdateResponse,
    type TURNListResponse as TURNListResponse,
    type TURNDeleteResponse as TURNDeleteResponse,
    type TURNGetResponse as TURNGetResponse,
    type TURNListResponsesSinglePage as TURNListResponsesSinglePage,
    type TURNCreateParams as TURNCreateParams,
    type TURNUpdateParams as TURNUpdateParams,
    type TURNListParams as TURNListParams,
    type TURNDeleteParams as TURNDeleteParams,
    type TURNGetParams as TURNGetParams,
  };
}
