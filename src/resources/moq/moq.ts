// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RelaysAPI from './relays/relays';
import {
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

export class Moq extends APIResource {
  relays: RelaysAPI.Relays = new RelaysAPI.Relays(this._client);
}

Moq.Relays = Relays;
Moq.RelayListResponsesSinglePage = RelayListResponsesSinglePage;

export declare namespace Moq {
  export {
    Relays as Relays,
    type RelayCreateResponse as RelayCreateResponse,
    type RelayUpdateResponse as RelayUpdateResponse,
    type RelayListResponse as RelayListResponse,
    type RelayDeleteResponse as RelayDeleteResponse,
    type RelayGetResponse as RelayGetResponse,
    RelayListResponsesSinglePage as RelayListResponsesSinglePage,
    type RelayCreateParams as RelayCreateParams,
    type RelayUpdateParams as RelayUpdateParams,
    type RelayListParams as RelayListParams,
    type RelayDeleteParams as RelayDeleteParams,
    type RelayGetParams as RelayGetParams,
  };
}
