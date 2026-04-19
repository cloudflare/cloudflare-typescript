// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Subdomains extends APIResource {
  /**
   * Creates a Workers subdomain for an account.
   *
   * @example
   * ```ts
   * const subdomain = await client.workers.subdomains.update({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   subdomain: 'my-subdomain',
   * });
   * ```
   */
  update(
    params: SubdomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainUpdateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/subdomain`, { body, ...options }) as Core.APIPromise<{
        result: SubdomainUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a Workers subdomain for an account.
   *
   * @example
   * ```ts
   * await client.workers.subdomains.delete({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(params?: SubdomainDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    params: SubdomainDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.delete(`/accounts/${account_id}/workers/subdomain`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a Workers subdomain for an account.
   *
   * @example
   * ```ts
   * const subdomain = await client.workers.subdomains.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params?: SubdomainGetParams, options?: Core.RequestOptions): Core.APIPromise<SubdomainGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<SubdomainGetResponse>;
  get(
    params: SubdomainGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/subdomain`, options) as Core.APIPromise<{
        result: SubdomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubdomainUpdateResponse {
  subdomain: string;
}

export interface SubdomainGetResponse {
  subdomain: string;
}

export interface SubdomainUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Body param
   */
  subdomain: string;
}

export interface SubdomainDeleteParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface SubdomainGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace Subdomains {
  export {
    type SubdomainUpdateResponse as SubdomainUpdateResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    type SubdomainUpdateParams as SubdomainUpdateParams,
    type SubdomainDeleteParams as SubdomainDeleteParams,
    type SubdomainGetParams as SubdomainGetParams,
  };
}
