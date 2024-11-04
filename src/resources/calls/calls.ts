// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SfuAPI from './sfu';
import {
  Sfu,
  SfuCreateParams,
  SfuCreateResponse,
  SfuDeleteParams,
  SfuDeleteResponse,
  SfuGetParams,
  SfuGetResponse,
  SfuListParams,
  SfuListResponse,
  SfuListResponsesSinglePage,
  SfuUpdateParams,
  SfuUpdateResponse,
} from './sfu';
import * as TURNAPI from './turn';
import {
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

export class Calls extends APIResource {
  sfu: SfuAPI.Sfu = new SfuAPI.Sfu(this._client);
  turn: TURNAPI.TURN = new TURNAPI.TURN(this._client);
}

Calls.Sfu = Sfu;
Calls.SfuListResponsesSinglePage = SfuListResponsesSinglePage;
Calls.TURN = TURN;
Calls.TURNListResponsesSinglePage = TURNListResponsesSinglePage;

export declare namespace Calls {
  export {
    Sfu as Sfu,
    type SfuCreateResponse as SfuCreateResponse,
    type SfuUpdateResponse as SfuUpdateResponse,
    type SfuListResponse as SfuListResponse,
    type SfuDeleteResponse as SfuDeleteResponse,
    type SfuGetResponse as SfuGetResponse,
    SfuListResponsesSinglePage as SfuListResponsesSinglePage,
    type SfuCreateParams as SfuCreateParams,
    type SfuUpdateParams as SfuUpdateParams,
    type SfuListParams as SfuListParams,
    type SfuDeleteParams as SfuDeleteParams,
    type SfuGetParams as SfuGetParams,
  };

  export {
    TURN as TURN,
    type TURNCreateResponse as TURNCreateResponse,
    type TURNUpdateResponse as TURNUpdateResponse,
    type TURNListResponse as TURNListResponse,
    type TURNDeleteResponse as TURNDeleteResponse,
    type TURNGetResponse as TURNGetResponse,
    TURNListResponsesSinglePage as TURNListResponsesSinglePage,
    type TURNCreateParams as TURNCreateParams,
    type TURNUpdateParams as TURNUpdateParams,
    type TURNListParams as TURNListParams,
    type TURNDeleteParams as TURNDeleteParams,
    type TURNGetParams as TURNGetParams,
  };
}
