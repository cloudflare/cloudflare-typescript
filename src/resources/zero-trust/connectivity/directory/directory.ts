// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ServicesAPI from './services';
import {
  ServiceCreateParams,
  ServiceDeleteParams,
  ServiceGetParams,
  ServiceListParams,
  ServiceUpdateParams,
  Services,
} from './services';

export class Directory extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

Directory.Services = Services;

export declare namespace Directory {
  export {
    Services as Services,
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceDeleteParams as ServiceDeleteParams,
    type ServiceGetParams as ServiceGetParams,
  };
}
