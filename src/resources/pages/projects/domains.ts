// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/pages/projects/domains';

export class Domains extends APIResource {
  /**
   * Retry the validation status of a single domain.
   */
  update(
    accountId: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainUpdateResponse | null> {
    return (
      this._client.patch(
        `/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainUpdateResponse | null }>
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

  /**
   * Add a new domain for the Pages project.
   */
  pagesDomainsAddDomain(
    accountId: string,
    projectName: string,
    body: DomainPagesDomainsAddDomainParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainPagesDomainsAddDomainResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/pages/projects/${projectName}/domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DomainPagesDomainsAddDomainResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
   */
  pagesDomainsGetDomains(
    accountId: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainPagesDomainsGetDomainsResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/domains`,
        options,
      ) as Core.APIPromise<{ result: DomainPagesDomainsGetDomainsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DomainUpdateResponse = unknown | Array<unknown> | string;

export type DomainDeleteResponse = unknown;

export type DomainGetResponse = unknown | Array<unknown> | string;

export type DomainPagesDomainsAddDomainResponse = unknown | Array<unknown> | string;

export type DomainPagesDomainsGetDomainsResponse = Array<unknown>;

export type DomainPagesDomainsAddDomainParams = unknown;

export namespace Domains {
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainPagesDomainsAddDomainResponse = DomainsAPI.DomainPagesDomainsAddDomainResponse;
  export import DomainPagesDomainsGetDomainsResponse = DomainsAPI.DomainPagesDomainsGetDomainsResponse;
  export import DomainPagesDomainsAddDomainParams = DomainsAPI.DomainPagesDomainsAddDomainParams;
}
