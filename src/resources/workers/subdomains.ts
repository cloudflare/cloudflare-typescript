// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubdomainsAPI from 'cloudflare/resources/workers/subdomains';

export class Subdomains extends APIResource {
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

  /**
   * Creates a Workers subdomain for an account.
   */
  replace(
    accountId: string,
    body: SubdomainReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/subdomain`, { body, ...options }) as Core.APIPromise<{
        result: SubdomainReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubdomainGetResponse {
  name?: unknown;
}

export interface SubdomainReplaceResponse {
  name?: unknown;
}

export type SubdomainReplaceParams = unknown;

export namespace Subdomains {
  export import SubdomainGetResponse = SubdomainsAPI.SubdomainGetResponse;
  export import SubdomainReplaceResponse = SubdomainsAPI.SubdomainReplaceResponse;
  export import SubdomainReplaceParams = SubdomainsAPI.SubdomainReplaceParams;
}
