// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RequestsAPI from './requests/requests';
import {
  Item,
  ListItem,
  ListItemsSinglePage,
  Quota,
  RequestConstants,
  RequestCreateParams,
  RequestDeleteParams,
  RequestDeleteResponse,
  RequestGetParams,
  RequestListParams,
  RequestTypes,
  RequestTypesResponse,
  RequestTypesResponsesSinglePage,
  RequestUpdateParams,
  Requests,
} from './requests/requests';
import * as ScansAPI from './scans/scans';
import { Scans } from './scans/scans';
import * as ThreatEventsAPI from './threat-events/threat-events';
import {
  ThreatEventBulkCreateParams,
  ThreatEventBulkCreateResponse,
  ThreatEventCreateParams,
  ThreatEventCreateResponse,
  ThreatEventDeleteParams,
  ThreatEventDeleteResponse,
  ThreatEventGetParams,
  ThreatEventGetResponse,
  ThreatEventUpdateParams,
  ThreatEventUpdateResponse,
  ThreatEvents,
} from './threat-events/threat-events';

export class CloudforceOne extends APIResource {
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
  threatEvents: ThreatEventsAPI.ThreatEvents = new ThreatEventsAPI.ThreatEvents(this._client);
}

CloudforceOne.Scans = Scans;
CloudforceOne.Requests = Requests;
CloudforceOne.ThreatEvents = ThreatEvents;

export declare namespace CloudforceOne {
  export { Scans as Scans };

  export {
    Requests as Requests,
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
    type RequestGetParams as RequestGetParams,
  };

  export {
    ThreatEvents as ThreatEvents,
    type ThreatEventCreateResponse as ThreatEventCreateResponse,
    type ThreatEventUpdateResponse as ThreatEventUpdateResponse,
    type ThreatEventDeleteResponse as ThreatEventDeleteResponse,
    type ThreatEventBulkCreateResponse as ThreatEventBulkCreateResponse,
    type ThreatEventGetResponse as ThreatEventGetResponse,
    type ThreatEventCreateParams as ThreatEventCreateParams,
    type ThreatEventUpdateParams as ThreatEventUpdateParams,
    type ThreatEventDeleteParams as ThreatEventDeleteParams,
    type ThreatEventBulkCreateParams as ThreatEventBulkCreateParams,
    type ThreatEventGetParams as ThreatEventGetParams,
  };
}
