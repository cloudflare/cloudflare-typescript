// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subdomains extends APIResource {
  /**
   * Creates a Workers subdomain for an account.
   */
  update(params: SubdomainUpdateParams, options?: RequestOptions): APIPromise<SubdomainUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/workers/subdomain`, { body, ...options }) as APIPromise<{
        result: SubdomainUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a Workers subdomain for an account.
   */
  get(params: SubdomainGetParams, options?: RequestOptions): APIPromise<SubdomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/workers/subdomain`, options) as APIPromise<{
        result: SubdomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubdomainUpdateResponse {
  subdomain?: string;
}

export interface SubdomainGetResponse {
  subdomain?: string;
}

export interface SubdomainUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  subdomain?: string;
}

export interface SubdomainGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Subdomains {
  export {
    type SubdomainUpdateResponse as SubdomainUpdateResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    type SubdomainUpdateParams as SubdomainUpdateParams,
    type SubdomainGetParams as SubdomainGetParams,
  };
}
