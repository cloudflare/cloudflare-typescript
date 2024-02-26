// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/workers/domains';

export class Domains extends APIResource {
  /**
   * Attaches a Worker to a zone and hostname.
   */
  update(params: DomainUpdateParams, options?: Core.RequestOptions): Core.APIPromise<DomainUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/domains`, { body, ...options }) as Core.APIPromise<{
        result: DomainUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Worker Domains for an account.
   */
  list(params: DomainListParams, options?: Core.RequestOptions): Core.APIPromise<DomainListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/domains`, { query, ...options }) as Core.APIPromise<{
        result: DomainListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Detaches a Worker from a zone and hostname.
   */
  delete(
    domainId: unknown,
    params: DomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/workers/domains/${domainId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Gets a Worker domain.
   */
  get(
    domainId: unknown,
    params: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/domains/${domainId}`, options) as Core.APIPromise<{
        result: DomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DomainUpdateResponse {
  /**
   * Identifer of the Worker Domain.
   */
  id?: unknown;

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
  zone_id?: unknown;

  /**
   * Name of the zone.
   */
  zone_name?: string;
}

export type DomainListResponse = Array<DomainListResponse.DomainListResponseItem>;

export namespace DomainListResponse {
  export interface DomainListResponseItem {
    /**
     * Identifer of the Worker Domain.
     */
    id?: unknown;

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
    zone_id?: unknown;

    /**
     * Name of the zone.
     */
    zone_name?: string;
  }
}

export interface DomainGetResponse {
  /**
   * Identifer of the Worker Domain.
   */
  id?: unknown;

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
  zone_id?: unknown;

  /**
   * Name of the zone.
   */
  zone_name?: string;
}

export interface DomainUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

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
  zone_id: unknown;
}

export interface DomainListParams {
  /**
   * Path param:
   */
  account_id: unknown;

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
  zone_id?: unknown;

  /**
   * Query param: Name of the zone.
   */
  zone_name?: string;
}

export interface DomainDeleteParams {
  account_id: unknown;
}

export interface DomainGetParams {
  account_id: unknown;
}

export namespace Domains {
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
