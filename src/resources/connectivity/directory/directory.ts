// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ServicesAPI from './services';
import {
  BaseServices,
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

export class BaseDirectory extends APIResource {
  static override readonly _key: readonly ['connectivity', 'directory'] = Object.freeze([
    'connectivity',
    'directory',
  ] as const);
}
export class Directory extends BaseDirectory {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

Directory.Services = Services;
Directory.BaseServices = BaseServices;

export declare namespace Directory {
  export {
    Services as Services,
    BaseServices as BaseServices,
    type ServiceCreateResponse as ServiceCreateResponse,
    type ServiceUpdateResponse as ServiceUpdateResponse,
    type ServiceListResponse as ServiceListResponse,
    type ServiceGetResponse as ServiceGetResponse,
    type ServiceListResponsesV4PagePaginationArray as ServiceListResponsesV4PagePaginationArray,
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceDeleteParams as ServiceDeleteParams,
    type ServiceGetParams as ServiceGetParams,
  };
}
