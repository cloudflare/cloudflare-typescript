// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ServicesAPI from './services';
import {
  ServiceCreateParams,
  ServiceCreateResponse,
  ServiceDeleteParams,
  ServiceGetParams,
  ServiceGetResponse,
  ServiceListParams,
  ServiceListResponse,
  ServiceListResponsesV4PagePaginationArray,
  ServiceUpdateParams,
  ServiceUpdateResponse,
  Services,
} from './services';

export class Directory extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

Directory.Services = Services;
Directory.ServiceListResponsesV4PagePaginationArray = ServiceListResponsesV4PagePaginationArray;

export declare namespace Directory {
  export {
    Services as Services,
    type ServiceCreateResponse as ServiceCreateResponse,
    type ServiceUpdateResponse as ServiceUpdateResponse,
    type ServiceListResponse as ServiceListResponse,
    type ServiceGetResponse as ServiceGetResponse,
    ServiceListResponsesV4PagePaginationArray as ServiceListResponsesV4PagePaginationArray,
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceDeleteParams as ServiceDeleteParams,
    type ServiceGetParams as ServiceGetParams,
  };
}
