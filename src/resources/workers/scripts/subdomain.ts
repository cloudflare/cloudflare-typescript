// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

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

  /**
   * Whether the Worker's Preview URLs should be available on the workers.dev
   * subdomain.
   */
  previews_enabled?: boolean;
}

export interface SubdomainGetResponse {
  /**
   * Whether the Worker is available on the workers.dev subdomain.
   */
  enabled?: boolean;

  /**
   * Whether the Worker's Preview URLs should be available on the workers.dev
   * subdomain.
   */
  previews_enabled?: boolean;
}

export interface SubdomainCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Whether the Worker should be available on the workers.dev subdomain.
   */
  enabled: boolean;

  /**
   * Body param: Whether the Worker's Preview URLs should be available on the
   * workers.dev subdomain.
   */
  previews_enabled?: boolean;
}

export interface SubdomainGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Subdomain {
  export {
    type SubdomainCreateResponse as SubdomainCreateResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    type SubdomainCreateParams as SubdomainCreateParams,
    type SubdomainGetParams as SubdomainGetParams,
  };
}
