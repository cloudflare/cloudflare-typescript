// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubdomainsAPI from 'cloudflare/resources/workers/subdomains';

export class Subdomains extends APIResource {
  /**
   * Creates a Workers subdomain for an account.
   */
  update(
    params: SubdomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/subdomain`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SubdomainUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a Workers subdomain for an account.
   */
  get(params: SubdomainGetParams, options?: Core.RequestOptions): Core.APIPromise<SubdomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/subdomain`, options) as Core.APIPromise<{
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

export interface SubdomainUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface SubdomainGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Subdomains {
  export import SubdomainUpdateResponse = SubdomainsAPI.SubdomainUpdateResponse;
  export import SubdomainGetResponse = SubdomainsAPI.SubdomainGetResponse;
  export import SubdomainUpdateParams = SubdomainsAPI.SubdomainUpdateParams;
  export import SubdomainGetParams = SubdomainsAPI.SubdomainGetParams;
}
