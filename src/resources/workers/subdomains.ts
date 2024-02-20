// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubdomainsAPI from 'cloudflare/resources/workers/subdomains';

export class Subdomains extends APIResource {
  /**
   * Creates a Workers subdomain for an account.
   */
  update(
    accountId: string,
    body: SubdomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/subdomain`, { body, ...options }) as Core.APIPromise<{
        result: SubdomainUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a Workers subdomain for an account.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<SubdomainGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/workers/subdomain`, options) as Core.APIPromise<{
        result: SubdomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubdomainUpdateResponse {
  name?: unknown;
}

export interface SubdomainGetResponse {
  name?: unknown;
}

export type SubdomainUpdateParams = unknown;

export namespace Subdomains {
  export import SubdomainUpdateResponse = SubdomainsAPI.SubdomainUpdateResponse;
  export import SubdomainGetResponse = SubdomainsAPI.SubdomainGetResponse;
  export import SubdomainUpdateParams = SubdomainsAPI.SubdomainUpdateParams;
}
