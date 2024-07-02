// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DomainsAPI from './domains';
import { SinglePage } from '../../../pagination';

export class Domains extends APIResource {
  /**
   * Add a new domain for the Pages project.
   */
  create(
    projectName: string,
    params: DomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pages/projects/${projectName}/domains`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: DomainCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
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
   */
  delete(
    projectName: string,
    domainName: string,
    params: DomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
      options,
    );
  }

  /**
   * Retry the validation status of a single domain.
   */
  edit(
    projectName: string,
    domainName: string,
    params: DomainEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainEditResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: DomainEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single domain.
   */
  get(
    projectName: string,
    domainName: string,
    params: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DomainListResponsesSinglePage extends SinglePage<DomainListResponse> {}

export type DomainCreateResponse = unknown | Array<unknown> | string;

export type DomainListResponse = unknown;

export type DomainDeleteResponse = unknown;

export type DomainEditResponse = unknown | Array<unknown> | string;

export type DomainGetResponse = unknown | Array<unknown> | string;

export interface DomainCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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
}

export interface DomainEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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
}

export namespace Domains {
  export import DomainCreateResponse = DomainsAPI.DomainCreateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainListResponsesSinglePage = DomainsAPI.DomainListResponsesSinglePage;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainEditParams = DomainsAPI.DomainEditParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
