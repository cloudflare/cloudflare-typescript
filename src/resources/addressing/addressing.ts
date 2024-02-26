// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ServicesAPI from 'cloudflare/resources/addressing/services';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/prefixes';

export class Addressing extends APIResource {
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

export namespace Addressing {
  export import Prefixes = PrefixesAPI.Prefixes;
  export import Services = ServicesAPI.Services;
  export import ServiceListResponse = ServicesAPI.ServiceListResponse;
  export import ServiceListParams = ServicesAPI.ServiceListParams;
}
