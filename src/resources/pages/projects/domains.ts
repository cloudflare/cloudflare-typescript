// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/pages/projects/domains';

export class Domains extends APIResource {
  /**
   * Add a new domain for the Pages project.
   */
  create(
    accountId: string,
    projectName: string,
    body: DomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/pages/projects/${projectName}/domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DomainCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
   */
  list(
    accountId: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/domains`,
        options,
      ) as Core.APIPromise<{ result: DomainListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Pages project's domain.
   */
  delete(
    accountId: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`,
      options,
    );
  }

  /**
   * Retry the validation status of a single domain.
   */
  edit(
    accountId: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainEditResponse | null> {
    return (
      this._client.patch(
        `/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single domain.
   */
  get(
    accountId: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DomainCreateResponse = unknown | Array<unknown> | string;

export type DomainListResponse = Array<unknown>;

export type DomainDeleteResponse = unknown;

export type DomainEditResponse = unknown | Array<unknown> | string;

export type DomainGetResponse = unknown | Array<unknown> | string;

export type DomainCreateParams = unknown;

export namespace Domains {
  export import DomainCreateResponse = DomainsAPI.DomainCreateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
}
