// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Add a new domain for the Pages project.
   */
  create(
    projectName: string,
    params: DomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<DomainCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pages/projects/${projectName}/domains`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
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
   * Delete a Pages project's domain.
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
   * Retry the validation status of a single domain.
   */
  edit(
    domainName: string,
    params: DomainEditParams,
    options?: RequestOptions,
  ): APIPromise<DomainEditResponse | null> {
    const { account_id, project_name, body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/pages/projects/${project_name}/domains/${domainName}`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: DomainEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single domain.
   */
  get(
    domainName: string,
    params: DomainGetParams,
    options?: RequestOptions,
  ): APIPromise<DomainGetResponse | null> {
    const { account_id, project_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/pages/projects/${project_name}/domains/${domainName}`,
        options,
      ) as APIPromise<{ result: DomainGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DomainListResponsesSinglePage = SinglePage<DomainListResponse>;

export interface DomainCreateResponse {
  id?: string;

  certificate_authority?: 'google' | 'lets_encrypt';

  created_on?: string;

  domain_id?: string;

  name?: string;

  status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data?: DomainCreateResponse.ValidationData;

  verification_data?: DomainCreateResponse.VerificationData;

  zone_tag?: string;
}

export namespace DomainCreateResponse {
  export interface ValidationData {
    error_message?: string;

    method?: 'http' | 'txt';

    status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    error_message?: string;

    status?: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';
  }
}

export interface DomainListResponse {
  id?: string;

  certificate_authority?: 'google' | 'lets_encrypt';

  created_on?: string;

  domain_id?: string;

  name?: string;

  status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data?: DomainListResponse.ValidationData;

  verification_data?: DomainListResponse.VerificationData;

  zone_tag?: string;
}

export namespace DomainListResponse {
  export interface ValidationData {
    error_message?: string;

    method?: 'http' | 'txt';

    status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    error_message?: string;

    status?: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';
  }
}

export type DomainDeleteResponse = unknown;

export interface DomainEditResponse {
  id?: string;

  certificate_authority?: 'google' | 'lets_encrypt';

  created_on?: string;

  domain_id?: string;

  name?: string;

  status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data?: DomainEditResponse.ValidationData;

  verification_data?: DomainEditResponse.VerificationData;

  zone_tag?: string;
}

export namespace DomainEditResponse {
  export interface ValidationData {
    error_message?: string;

    method?: 'http' | 'txt';

    status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    error_message?: string;

    status?: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';
  }
}

export interface DomainGetResponse {
  id?: string;

  certificate_authority?: 'google' | 'lets_encrypt';

  created_on?: string;

  domain_id?: string;

  name?: string;

  status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';

  validation_data?: DomainGetResponse.ValidationData;

  verification_data?: DomainGetResponse.VerificationData;

  zone_tag?: string;
}

export namespace DomainGetResponse {
  export interface ValidationData {
    error_message?: string;

    method?: 'http' | 'txt';

    status?: 'initializing' | 'pending' | 'active' | 'deactivated' | 'error';

    txt_name?: string;

    txt_value?: string;
  }

  export interface VerificationData {
    error_message?: string;

    status?: 'pending' | 'active' | 'deactivated' | 'blocked' | 'error';
  }
}

export interface DomainCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  name?: string;
}

export interface DomainListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DomainDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Name of the project.
   */
  project_name: string;
}

export interface DomainEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Name of the project.
   */
  project_name: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface DomainGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Name of the project.
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
