// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DomainsAPI from './domains';
import {
  Domain,
  DomainGetParams,
  DomainGetResponse,
  DomainListParams,
  DomainListResponse,
  DomainListResponsesSinglePage,
  DomainUpdateParams,
  DomainUpdateResponse,
  Domains,
} from './domains';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

Registrar.Domains = Domains;
Registrar.DomainListResponsesSinglePage = DomainListResponsesSinglePage;

export declare namespace Registrar {
  export {
    Domains as Domains,
    type Domain as Domain,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainListResponsesSinglePage as DomainListResponsesSinglePage,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainGetParams as DomainGetParams,
  };
}
