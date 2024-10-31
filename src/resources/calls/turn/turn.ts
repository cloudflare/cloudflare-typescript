// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as KeysAPI from './keys';
import {
  KeyCreateParams,
  KeyCreateResponse,
  KeyDeleteParams,
  KeyDeleteResponse,
  KeyGetParams,
  KeyGetResponse,
  KeyListParams,
  KeyListResponse,
  KeyListResponsesSinglePage,
  KeyUpdateParams,
  KeyUpdateResponse,
  Keys,
} from './keys';

export class TURN extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

TURN.Keys = Keys;
TURN.KeyListResponsesSinglePage = KeyListResponsesSinglePage;

export declare namespace TURN {
  export {
    Keys as Keys,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyGetResponse as KeyGetResponse,
    KeyListResponsesSinglePage as KeyListResponsesSinglePage,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyGetParams as KeyGetParams,
  };
}
