// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RelaysAPI from './relays/relays';
import {
  BaseRelays,
  RelayCreateParams,
  RelayCreateResponse,
  RelayDeleteParams,
  RelayDeleteResponse,
  RelayGetParams,
  RelayGetResponse,
  RelayListParams,
  RelayListResponse,
  RelayListResponsesSinglePage,
  RelayUpdateParams,
  RelayUpdateResponse,
  Relays,
} from './relays/relays';

export class BaseMoq extends APIResource {
  static override readonly _key: readonly ['moq'] = Object.freeze(['moq'] as const);
}
export class Moq extends BaseMoq {
  relays: RelaysAPI.Relays = new RelaysAPI.Relays(this._client);
}

Moq.Relays = Relays;
Moq.BaseRelays = BaseRelays;

export declare namespace Moq {
  export {
    Relays as Relays,
    BaseRelays as BaseRelays,
    type RelayCreateResponse as RelayCreateResponse,
    type RelayUpdateResponse as RelayUpdateResponse,
    type RelayListResponse as RelayListResponse,
    type RelayDeleteResponse as RelayDeleteResponse,
    type RelayGetResponse as RelayGetResponse,
    type RelayListResponsesSinglePage as RelayListResponsesSinglePage,
    type RelayCreateParams as RelayCreateParams,
    type RelayUpdateParams as RelayUpdateParams,
    type RelayListParams as RelayListParams,
    type RelayDeleteParams as RelayDeleteParams,
    type RelayGetParams as RelayGetParams,
  };
}
