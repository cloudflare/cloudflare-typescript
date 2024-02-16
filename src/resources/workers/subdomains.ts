// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubdomainsAPI from 'cloudflare/resources/workers/subdomains';

export class Subdomains extends APIResource {
  /**
   * Creates a Workers subdomain for an account.
   */
  workerSubdomainCreateSubdomain(
    accountId: string,
    body: SubdomainWorkerSubdomainCreateSubdomainParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainWorkerSubdomainCreateSubdomainResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/subdomain`, { body, ...options }) as Core.APIPromise<{
        result: SubdomainWorkerSubdomainCreateSubdomainResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a Workers subdomain for an account.
   */
  workerSubdomainGetSubdomain(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainWorkerSubdomainGetSubdomainResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/subdomain`, options) as Core.APIPromise<{
        result: SubdomainWorkerSubdomainGetSubdomainResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubdomainWorkerSubdomainCreateSubdomainResponse {
  name?: unknown;
}

export interface SubdomainWorkerSubdomainGetSubdomainResponse {
  name?: unknown;
}

export type SubdomainWorkerSubdomainCreateSubdomainParams = unknown;

export namespace Subdomains {
  export import SubdomainWorkerSubdomainCreateSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainResponse;
  export import SubdomainWorkerSubdomainGetSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainGetSubdomainResponse;
  export import SubdomainWorkerSubdomainCreateSubdomainParams = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainParams;
}
