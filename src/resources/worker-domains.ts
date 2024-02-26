// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WorkerDomainsAPI from 'cloudflare/resources/worker-domains';

export class WorkerDomains extends APIResource {
  /**
   * Detaches a Worker from a zone and hostname.
   */
  delete(
    domainId: unknown,
    params: WorkerDomainDeleteParams,
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
    params: WorkerDomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkerDomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/domains/${domainId}`, options) as Core.APIPromise<{
        result: WorkerDomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WorkerDomainGetResponse {
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

export interface WorkerDomainDeleteParams {
  account_id: unknown;
}

export interface WorkerDomainGetParams {
  account_id: unknown;
}

export namespace WorkerDomains {
  export import WorkerDomainGetResponse = WorkerDomainsAPI.WorkerDomainGetResponse;
  export import WorkerDomainDeleteParams = WorkerDomainsAPI.WorkerDomainDeleteParams;
  export import WorkerDomainGetParams = WorkerDomainsAPI.WorkerDomainGetParams;
}
