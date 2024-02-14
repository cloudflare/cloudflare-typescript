// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WorkerDomainsAPI from 'cloudflare/resources/worker-domains';

export class WorkerDomains extends APIResource {
  /**
   * Gets a Worker domain.
   */
  retrieve(
    accountId: unknown,
    domainId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkerDomainRetrieveResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/domains/${domainId}`, options) as Core.APIPromise<{
        result: WorkerDomainRetrieveResponse;
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
}

export interface WorkerDomainRetrieveResponse {
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

export namespace WorkerDomains {
  export import WorkerDomainRetrieveResponse = WorkerDomainsAPI.WorkerDomainRetrieveResponse;
}
