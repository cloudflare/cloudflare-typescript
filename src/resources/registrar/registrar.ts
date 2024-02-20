// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/registrar/domains';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

export namespace Registrar {
  export import Domains = DomainsAPI.Domains;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainReplaceResponse = DomainsAPI.DomainReplaceResponse;
  export import DomainReplaceParams = DomainsAPI.DomainReplaceParams;
}
