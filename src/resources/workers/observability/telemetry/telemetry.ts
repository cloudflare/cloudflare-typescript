// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as KeysAPI from './keys';
import { KeyCreateParams, KeyCreateResponse, KeyCreateResponsesSinglePage, Keys } from './keys';
import * as QueryAPI from './query';
import { Query, QueryCreateParams, QueryCreateResponse } from './query';
import * as ValuesAPI from './values';
import { ValueCreateParams, ValueCreateResponse, ValueCreateResponsesSinglePage, Values } from './values';

export class Telemetry extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
}

Telemetry.Keys = Keys;
Telemetry.KeyCreateResponsesSinglePage = KeyCreateResponsesSinglePage;
Telemetry.Query = Query;
Telemetry.Values = Values;
Telemetry.ValueCreateResponsesSinglePage = ValueCreateResponsesSinglePage;

export declare namespace Telemetry {
  export {
    Keys as Keys,
    type KeyCreateResponse as KeyCreateResponse,
    KeyCreateResponsesSinglePage as KeyCreateResponsesSinglePage,
    type KeyCreateParams as KeyCreateParams,
  };

  export {
    Query as Query,
    type QueryCreateResponse as QueryCreateResponse,
    type QueryCreateParams as QueryCreateParams,
  };

  export {
    Values as Values,
    type ValueCreateResponse as ValueCreateResponse,
    ValueCreateResponsesSinglePage as ValueCreateResponsesSinglePage,
    type ValueCreateParams as ValueCreateParams,
  };
}
