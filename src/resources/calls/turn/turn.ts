// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as KeysAPI from './keys';

export class TURN extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

export namespace TURN {
  export import Keys = KeysAPI.Keys;
  export type KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export type KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export type KeyListResponse = KeysAPI.KeyListResponse;
  export type KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export type KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyListResponsesSinglePage = KeysAPI.KeyListResponsesSinglePage;
  export type KeyCreateParams = KeysAPI.KeyCreateParams;
  export type KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export type KeyListParams = KeysAPI.KeyListParams;
  export type KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export type KeyGetParams = KeysAPI.KeyGetParams;
}
