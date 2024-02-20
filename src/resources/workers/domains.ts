// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainsAPI from 'cloudflare/resources/workers/domains';

export class Domains extends APIResource {
  /**
   * Attaches a Worker to a zone and hostname.
   */
  update(
    accountId: unknown,
    body: DomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/domains`, { body, ...options }) as Core.APIPromise<{
        result: DomainUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Worker Domains for an account.
   */
  list(
    accountId: unknown,
    query?: DomainListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainListResponse>;
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<DomainListResponse>;
  list(
    accountId: unknown,
    query: DomainListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/workers/domains`, { query, ...options }) as Core.APIPromise<{
        result: DomainListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Detaches a Worker from a zone and hostname.
   */
  delete(accountId: unknown, domainId: unknown, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountId}/workers/domains/${domainId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Gets a Worker domain.
   */
  get(
    accountId: unknown,
    domainId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/domains/${domainId}`, options) as Core.APIPromise<{
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
   * Worker environment associated with the zone and hostname.
   */
  environment: string;

  /**
   * Hostname of the Worker Domain.
   */
  hostname: string;

  /**
   * Worker service associated with the zone and hostname.
   */
  service: string;

  /**
   * Identifier of the zone.
   */
  zone_id: unknown;
}

export interface DomainListParams {
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

export namespace Domains {
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
}
