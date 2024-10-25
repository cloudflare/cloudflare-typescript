// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SubdomainAPI from './subdomain';

export class Subdomain extends APIResource {
  /**
   * Enable or disable the Worker on the workers.dev subdomain.
   */
  create(
    scriptName: string,
    params: SubdomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/workers/scripts/${scriptName}/subdomain`, {
      body,
      ...options,
    });
  }

  /**
   * Get if the Worker is available on the workers.dev subdomain.
   */
  get(
    scriptName: string,
    params: SubdomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/workers/scripts/${scriptName}/subdomain`, options);
  }
}

export interface SubdomainCreateResponse {
  /**
   * Whether the Worker is available on the workers.dev subdomain.
   */
  enabled?: boolean;
}

export interface SubdomainGetResponse {
  /**
   * Whether the Worker is available on the workers.dev subdomain.
   */
  enabled?: boolean;
}

export interface SubdomainCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Whether the Worker should be available on the workers.dev subdomain.
   */
  enabled?: boolean;
}

export interface SubdomainGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Subdomain {
  export import SubdomainCreateResponse = SubdomainAPI.SubdomainCreateResponse;
  export import SubdomainGetResponse = SubdomainAPI.SubdomainGetResponse;
  export import SubdomainCreateParams = SubdomainAPI.SubdomainCreateParams;
  export import SubdomainGetParams = SubdomainAPI.SubdomainGetParams;
}
