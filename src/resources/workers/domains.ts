// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainsAPI from 'cloudflare/resources/workers/domains';

export class Domains extends APIResource {
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

  /**
   * Attaches a Worker to a zone and hostname.
   */
  workerDomainAttachToDomain(
    accountId: unknown,
    body: DomainWorkerDomainAttachToDomainParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainAttachToDomainResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/domains`, { body, ...options }) as Core.APIPromise<{
        result: DomainWorkerDomainAttachToDomainResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Worker Domains for an account.
   */
  workerDomainListDomains(
    accountId: unknown,
    query?: DomainWorkerDomainListDomainsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainListDomainsResponse>;
  workerDomainListDomains(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainListDomainsResponse>;
  workerDomainListDomains(
    accountId: unknown,
    query: DomainWorkerDomainListDomainsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainListDomainsResponse> {
    if (isRequestOptions(query)) {
      return this.workerDomainListDomains(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/workers/domains`, { query, ...options }) as Core.APIPromise<{
        result: DomainWorkerDomainListDomainsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export interface DomainWorkerDomainAttachToDomainResponse {
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

export type DomainWorkerDomainListDomainsResponse =
  Array<DomainWorkerDomainListDomainsResponse.DomainWorkerDomainListDomainsResponseItem>;

export namespace DomainWorkerDomainListDomainsResponse {
  export interface DomainWorkerDomainListDomainsResponseItem {
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

export interface DomainWorkerDomainAttachToDomainParams {
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

export interface DomainWorkerDomainListDomainsParams {
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
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainWorkerDomainAttachToDomainResponse = DomainsAPI.DomainWorkerDomainAttachToDomainResponse;
  export import DomainWorkerDomainListDomainsResponse = DomainsAPI.DomainWorkerDomainListDomainsResponse;
  export import DomainWorkerDomainAttachToDomainParams = DomainsAPI.DomainWorkerDomainAttachToDomainParams;
  export import DomainWorkerDomainListDomainsParams = DomainsAPI.DomainWorkerDomainListDomainsParams;
}
