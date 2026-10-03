// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDomains extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'domains'] = Object.freeze([
    'pages',
    'projects',
    'domains',
  ] as const);

  /**
   * Attach a custom domain to a Cloudflare Pages project.
   *
   * @example
   * ```ts
   * const domain = await client.pages.projects.domains.create(
   *   'this-is-my-project-01',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'example.com',
   *   },
   * );
   * ```
   */
  create(
    projectName: string,
    params: DomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<DomainCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pages/projects/${projectName}/domains`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the custom domains associated with a Cloudflare Pages project.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const domainListResponse of client.pages.projects.domains.list(
   *   'this-is-my-project-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    projectName: string,
    params: DomainListParams,
    options?: RequestOptions,
  ): PagePromise<DomainListResponsesSinglePage, DomainListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/pages/projects/${projectName}/domains`,
      SinglePage<DomainListResponse>,
      options,
    );
  }

  /**
   * Remove a custom domain from a Cloudflare Pages project.
   *
   * @example
   * ```ts
   * const domain = await client.pages.projects.domains.delete(
   *   'example.com',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     project_name: 'this-is-my-project-01',
   *   },
   * );
   * ```
   */
  delete(
    domainName: string,
    params: DomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DomainDeleteResponse | null> {
    const { account_id, project_name } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/pages/projects/${project_name}/domains/${domainName}`,
        options,
      ) as APIPromise<{ result: DomainDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retry validation for a custom domain attached to a Cloudflare Pages project.
   *
   * @example
   * ```ts
   * const response = await client.pages.projects.domains.edit(
   *   'example.com',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     project_name: 'this-is-my-project-01',
   *   },
   * );
   * ```
   */
  edit(
    domainName: string,
    params: DomainEditParams,
    options?: RequestOptions,
  ): APIPromise<DomainEditResponse> {
    const { account_id, project_name } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/pages/projects/${project_name}/domains/${domainName}`,
        options,
      ) as APIPromise<{ result: DomainEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the configuration and validation status of a custom domain attached to
   * a Cloudflare Pages project.
   *
   * @example
   * ```ts
   * const domain = await client.pages.projects.domains.get(
   *   'example.com',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     project_name: 'this-is-my-project-01',
   *   },
   * );
   * ```
   */
  get(domainName: string, params: DomainGetParams, options?: RequestOptions): APIPromise<DomainGetResponse> {
    const { account_id, project_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/pages/projects/${project_name}/domains/${domainName}`,
        options,
      ) as APIPromise<{ result: DomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Domains extends BaseDomains {}

export type DomainListResponsesSinglePage = SinglePage<DomainListResponse>;

export interface DomainCreateResponse {
  id: string;

  certificate_authority: 'google' | 'lets_encrypt';

  created_on: string;

  domain_id: string;

  /**
   * Fully qualified domain name for the Pages project, such as `example.com`.
   */
  name: string;

  status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data: DomainCreateResponse.ValidationData;

  verification_data: DomainCreateResponse.VerificationData;

  zone_tag: string;
}

export namespace DomainCreateResponse {
  export interface ValidationData {
    method: 'http' | 'txt';

    status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    error_message?: string;

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    status: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

    error_message?: string;
  }
}

export interface DomainListResponse {
  id: string;

  certificate_authority: 'google' | 'lets_encrypt';

  created_on: string;

  domain_id: string;

  /**
   * Fully qualified domain name for the Pages project, such as `example.com`.
   */
  name: string;

  status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data: DomainListResponse.ValidationData;

  verification_data: DomainListResponse.VerificationData;

  zone_tag: string;
}

export namespace DomainListResponse {
  export interface ValidationData {
    method: 'http' | 'txt';

    status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    error_message?: string;

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    status: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

    error_message?: string;
  }
}

export type DomainDeleteResponse = unknown;

export interface DomainEditResponse {
  id: string;

  certificate_authority: 'google' | 'lets_encrypt';

  created_on: string;

  domain_id: string;

  /**
   * Fully qualified domain name for the Pages project, such as `example.com`.
   */
  name: string;

  status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data: DomainEditResponse.ValidationData;

  verification_data: DomainEditResponse.VerificationData;

  zone_tag: string;
}

export namespace DomainEditResponse {
  export interface ValidationData {
    method: 'http' | 'txt';

    status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    error_message?: string;

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    status: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

    error_message?: string;
  }
}

export interface DomainGetResponse {
  id: string;

  certificate_authority: 'google' | 'lets_encrypt';

  created_on: string;

  domain_id: string;

  /**
   * Fully qualified domain name for the Pages project, such as `example.com`.
   */
  name: string;

  status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data: DomainGetResponse.ValidationData;

  verification_data: DomainGetResponse.VerificationData;

  zone_tag: string;
}

export namespace DomainGetResponse {
  export interface ValidationData {
    method: 'http' | 'txt';

    status: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    error_message?: string;

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    status: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

    error_message?: string;
  }
}

export interface DomainCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Fully qualified domain name for the Pages project, such as
   * `example.com`.
   */
  name: string;
}

export interface DomainListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DomainDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

export interface DomainEditParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

export interface DomainGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

export declare namespace Domains {
  export {
    type DomainCreateResponse as DomainCreateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    type DomainListResponsesSinglePage as DomainListResponsesSinglePage,
    type DomainCreateParams as DomainCreateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
