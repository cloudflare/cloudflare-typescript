// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DomainsAPI from './domains';
import {
  Domain,
  DomainGetParams,
  DomainGetResponse,
  DomainListParams,
  DomainUpdateParams,
  DomainUpdateResponse,
  Domains,
  DomainsSinglePage,
} from './domains';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

Registrar.Domains = Domains;

export declare namespace Registrar {
  export {
    Domains as Domains,
    type Domain as Domain,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainGetResponse as DomainGetResponse,
    type DomainsSinglePage as DomainsSinglePage,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainGetParams as DomainGetParams,
  };
}
