// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Domains extends APIResource {
  /**
   * Add a new domain for the Pages project.
   *
   * @example
   * ```ts
   * const domain = await client.pages.projects.domains.create(
   *   'this-is-my-project-01',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'this-is-my-domain-01.com',
   *   },
   * );
   * ```
   */
  create(
    projectName: string,
    params: DomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pages/projects/${projectName}/domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<DomainListResponsesSinglePage, DomainListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects/${projectName}/domains`,
      DomainListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a Pages project's domain.
   *
   * @example
   * ```ts
   * const domain = await client.pages.projects.domains.delete(
   *   'this-is-my-project-01',
   *   'this-is-my-domain-01.com',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    projectName: string,
    domainName: string,
    params: DomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retry the validation status of a single domain.
   *
   * @example
   * ```ts
   * const response = await client.pages.projects.domains.edit(
   *   'this-is-my-project-01',
   *   'this-is-my-domain-01.com',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(
    projectName: string,
    domainName: string,
    params: DomainEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainEditResponse> {
    const { account_id } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single domain.
   *
   * @example
   * ```ts
   * const domain = await client.pages.projects.domains.get(
   *   'this-is-my-project-01',
   *   'this-is-my-domain-01.com',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    projectName: string,
    domainName: string,
    params: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DomainListResponsesSinglePage extends SinglePage<DomainListResponse> {}

export interface DomainCreateResponse {
  id: string;

  certificate_authority: 'google' | 'lets_encrypt';

  created_on: string;

  domain_id: string;

  /**
   * The domain name.
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
   * The domain name.
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
   * The domain name.
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
   * The domain name.
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
   * Body param: The domain name.
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
}

export interface DomainEditParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DomainGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Domains.DomainListResponsesSinglePage = DomainListResponsesSinglePage;

export declare namespace Domains {
  export {
    type DomainCreateResponse as DomainCreateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainListResponsesSinglePage as DomainListResponsesSinglePage,
    type DomainCreateParams as DomainCreateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
