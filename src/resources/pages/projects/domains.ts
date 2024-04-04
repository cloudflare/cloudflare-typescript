// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/pages/projects/domains';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class Domains extends APIResource {
  /**
   * Add a new domain for the Pages project.
   */
  create(
    projectName: string,
    params: DomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pages/projects/${projectName}/domains`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null }>
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
    const { account_id, body } = params;
    return this._client.delete(
      `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
      { body: body, ...options },
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
  ): Core.APIPromise<Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null> {
    const { account_id, body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null }>
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
  ): Core.APIPromise<Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DomainListResponsesSinglePage extends SinglePage<DomainListResponse> {}

export type DomainListResponse = unknown;

export type DomainDeleteResponse = unknown;

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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainListResponsesSinglePage = DomainsAPI.DomainListResponsesSinglePage;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainEditParams = DomainsAPI.DomainEditParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
