// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subdomain extends APIResource {
  /**
   * Enable or disable the Worker on the workers.dev subdomain.
   *
   * @example
   * ```ts
   * const subdomain =
   *   await client.workers.scripts.subdomain.create(
   *     'this-is_my_script-01',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       enabled: true,
   *     },
   *   );
   * ```
   */
  create(
    scriptName: string,
    params: SubdomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubdomainCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workers/scripts/${scriptName}/subdomain`, {
        body,
        ...options,
      }) as APIPromise<{ result: SubdomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable all workers.dev subdomains for a Worker.
   *
   * @example
   * ```ts
   * const subdomain =
   *   await client.workers.scripts.subdomain.delete(
   *     'this-is_my_script-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    scriptName: string,
    params: SubdomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SubdomainDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/workers/scripts/${scriptName}/subdomain`,
        options,
      ) as APIPromise<{ result: SubdomainDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get if the Worker is available on the workers.dev subdomain.
   *
   * @example
   * ```ts
   * const subdomain =
   *   await client.workers.scripts.subdomain.get(
   *     'this-is_my_script-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    scriptName: string,
    params: SubdomainGetParams,
    options?: RequestOptions,
  ): APIPromise<SubdomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/scripts/${scriptName}/subdomain`,
        options,
      ) as APIPromise<{ result: SubdomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubdomainCreateResponse {
  /**
   * Whether the Worker is available on the workers.dev subdomain.
   */
  enabled: boolean;

  /**
   * Whether the Worker's Preview URLs are available on the workers.dev subdomain.
   */
  previews_enabled: boolean;
}

export interface SubdomainDeleteResponse {
  /**
   * Whether the Worker is available on the workers.dev subdomain.
   */
  enabled: boolean;

  /**
   * Whether the Worker's Preview URLs are available on the workers.dev subdomain.
   */
  previews_enabled: boolean;
}

export interface SubdomainGetResponse {
  /**
   * Whether the Worker is available on the workers.dev subdomain.
   */
  enabled: boolean;

  /**
   * Whether the Worker's Preview URLs are available on the workers.dev subdomain.
   */
  previews_enabled: boolean;
}

export interface SubdomainCreateParams {
  /**
   * Path param: Identifier.
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

export interface SubdomainDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SubdomainGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Subdomain {
  export {
    type SubdomainCreateResponse as SubdomainCreateResponse,
    type SubdomainDeleteResponse as SubdomainDeleteResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    type SubdomainCreateParams as SubdomainCreateParams,
    type SubdomainDeleteParams as SubdomainDeleteParams,
    type SubdomainGetParams as SubdomainGetParams,
  };
}
