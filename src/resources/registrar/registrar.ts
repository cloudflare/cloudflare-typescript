// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DomainsAPI from './domains';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

export namespace Registrar {
  export import Domains = DomainsAPI.Domains;
  export type Domain = DomainsAPI.Domain;
  export type DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export type DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainsSinglePage = DomainsAPI.DomainsSinglePage;
  export type DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export type DomainListParams = DomainsAPI.DomainListParams;
  export type DomainGetParams = DomainsAPI.DomainGetParams;
}
