// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BinaryStorageAPI from './binary-storage';
import {
  BaseBinaryStorage,
  BinaryStorage,
  BinaryStorageCreateParams,
  BinaryStorageCreateResponse,
  BinaryStorageGetParams,
} from './binary-storage';
import * as RequestsAPI from './requests/requests';
import {
  BaseRequests,
  Item,
  ListItem,
  ListItemsSinglePage,
  Quota,
  RequestConstants,
  RequestConstantsParams,
  RequestCreateParams,
  RequestDeleteParams,
  RequestDeleteResponse,
  RequestGetParams,
  RequestListParams,
  RequestQuotaParams,
  RequestTypes,
  RequestTypesParams,
  RequestTypesResponse,
  RequestTypesResponsesSinglePage,
  RequestUpdateParams,
  Requests,
} from './requests/requests';
import * as ScansAPI from './scans/scans';
import { BaseScans, Scans } from './scans/scans';
import * as ThreatEventsAPI from './threat-events/threat-events';
import {
  BaseThreatEvents,
  ThreatEventBulkCreateParams,
  ThreatEventBulkCreateResponse,
  ThreatEventCreateParams,
  ThreatEventCreateResponse,
  ThreatEventEditParams,
  ThreatEventEditResponse,
  ThreatEventGetParams,
  ThreatEventGetResponse,
  ThreatEventListParams,
  ThreatEventListResponse,
  ThreatEvents,
} from './threat-events/threat-events';

export class BaseCloudforceOne extends APIResource {
  static override readonly _key: readonly ['cloudforceOne'] = Object.freeze(['cloudforceOne'] as const);
}
export class CloudforceOne extends BaseCloudforceOne {
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
  binaryStorage: BinaryStorageAPI.BinaryStorage = new BinaryStorageAPI.BinaryStorage(this._client);
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
  threatEvents: ThreatEventsAPI.ThreatEvents = new ThreatEventsAPI.ThreatEvents(this._client);
}

CloudforceOne.Scans = Scans;
CloudforceOne.BaseScans = BaseScans;
CloudforceOne.BinaryStorage = BinaryStorage;
CloudforceOne.BaseBinaryStorage = BaseBinaryStorage;
CloudforceOne.Requests = Requests;
CloudforceOne.BaseRequests = BaseRequests;
CloudforceOne.ThreatEvents = ThreatEvents;
CloudforceOne.BaseThreatEvents = BaseThreatEvents;

export declare namespace CloudforceOne {
  export { Scans as Scans, BaseScans as BaseScans };

  export {
    BinaryStorage as BinaryStorage,
    BaseBinaryStorage as BaseBinaryStorage,
    type BinaryStorageCreateResponse as BinaryStorageCreateResponse,
    type BinaryStorageCreateParams as BinaryStorageCreateParams,
    type BinaryStorageGetParams as BinaryStorageGetParams,
  };

  export {
    Requests as Requests,
    BaseRequests as BaseRequests,
    type Item as Item,
    type ListItem as ListItem,
    type Quota as Quota,
    type RequestConstants as RequestConstants,
    type RequestTypes as RequestTypes,
    type RequestDeleteResponse as RequestDeleteResponse,
    type RequestTypesResponse as RequestTypesResponse,
    type ListItemsSinglePage as ListItemsSinglePage,
    type RequestTypesResponsesSinglePage as RequestTypesResponsesSinglePage,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
    type RequestDeleteParams as RequestDeleteParams,
    type RequestConstantsParams as RequestConstantsParams,
    type RequestGetParams as RequestGetParams,
    type RequestQuotaParams as RequestQuotaParams,
    type RequestTypesParams as RequestTypesParams,
  };

  export {
    ThreatEvents as ThreatEvents,
    BaseThreatEvents as BaseThreatEvents,
    type ThreatEventCreateResponse as ThreatEventCreateResponse,
    type ThreatEventListResponse as ThreatEventListResponse,
    type ThreatEventBulkCreateResponse as ThreatEventBulkCreateResponse,
    type ThreatEventEditResponse as ThreatEventEditResponse,
    type ThreatEventGetResponse as ThreatEventGetResponse,
    type ThreatEventCreateParams as ThreatEventCreateParams,
    type ThreatEventListParams as ThreatEventListParams,
    type ThreatEventBulkCreateParams as ThreatEventBulkCreateParams,
    type ThreatEventEditParams as ThreatEventEditParams,
    type ThreatEventGetParams as ThreatEventGetParams,
  };
}
