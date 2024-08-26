// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Keys } from './keys';
import * as KeysAPI from './keys';

export class TURN extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

export namespace TURN {
  export import Keys = KeysAPI.Keys;
  export import KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyListResponsesSinglePage = KeysAPI.KeyListResponsesSinglePage;
  export import KeyCreateParams = KeysAPI.KeyCreateParams;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export import KeyGetParams = KeysAPI.KeyGetParams;
}
