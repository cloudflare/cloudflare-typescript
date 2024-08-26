// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as DomainsAPI from './domains';
import { SinglePage } from '../../pagination';

export class Domains extends APIResource {
  /**
   * Attaches a Worker to a zone and hostname.
   */
  update(params: DomainUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Domain> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/workers/domains`, { body, ...options }) as Core.APIPromise<{ result: Domain }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Worker Domains for an account.
   */
  list(params: DomainListParams, options?: Core.RequestOptions): Core.PagePromise<DomainsSinglePage, Domain> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/workers/domains`, DomainsSinglePage, { query, ...options });
  }

  /**
   * Detaches a Worker from a zone and hostname.
   */
  delete(domainId: string, params: DomainDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/workers/domains/${domainId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Gets a Worker domain.
   */
  get(domainId: string, params: DomainGetParams, options?: Core.RequestOptions): Core.APIPromise<Domain> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/workers/domains/${domainId}`, options) as Core.APIPromise<{ result: Domain }>)._thenUnwrap((obj) => obj.result);
  }
}

export class DomainsSinglePage extends SinglePage<Domain> {
}

export interface Domain {
  /**
   * Identifer of the Worker Domain.
   */
  id?: string;

  /**
   * Worker environment associated with the zone and hostname.
   */
  environment?: string;

  /**
   * Hostname of the Worker Domain.
   */
  hostname?: string;

  /**
   * Worker service associated with the zone and hostname.
   */
  service?: string;

  /**
   * Identifier of the zone.
   */
  zone_id?: string;

  /**
   * Name of the zone.
   */
  zone_name?: string;
}

export interface DomainUpdateParams {
  /**
   * Path param: Identifer of the account.
   */
  account_id: string;

  /**
   * Body param: Worker environment associated with the zone and hostname.
   */
  environment: string;

  /**
   * Body param: Hostname of the Worker Domain.
   */
  hostname: string;

  /**
   * Body param: Worker service associated with the zone and hostname.
   */
  service: string;

  /**
   * Body param: Identifier of the zone.
   */
  zone_id: string;
}

export interface DomainListParams {
  /**
   * Path param: Identifer of the account.
   */
  account_id: string;

  /**
   * Query param: Worker environment associated with the zone and hostname.
   */
  environment?: string;

  /**
   * Query param: Hostname of the Worker Domain.
   */
  hostname?: string;

  /**
   * Query param: Worker service associated with the zone and hostname.
   */
  service?: string;

  /**
   * Query param: Identifier of the zone.
   */
  zone_id?: string;

  /**
   * Query param: Name of the zone.
   */
  zone_name?: string;
}

export interface DomainDeleteParams {
  /**
   * Identifer of the account.
   */
  account_id: string;
}

export interface DomainGetParams {
  /**
   * Identifer of the account.
   */
  account_id: string;
}

export namespace Domains {
  export import Domain = DomainsAPI.Domain;
  export import DomainsSinglePage = DomainsAPI.DomainsSinglePage;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
