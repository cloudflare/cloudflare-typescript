// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as FallbackDomainsAPI from './fallback-domains';
import { SinglePage } from '../../../../pagination';

export class FallbackDomains extends APIResource {
  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead. This will only apply to the
   * specified device settings profile.
   */
  update(policyId: string, params: FallbackDomainUpdateParams, options?: Core.RequestOptions): Core.APIPromise<FallbackDomainUpdateResponse | null> {
    const { account_id, body } = params;
    return (this._client.put(`/accounts/${account_id}/devices/policy/${policyId}/fallback_domains`, { body: body, ...options }) as Core.APIPromise<{ result: FallbackDomainUpdateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  list(params: FallbackDomainListParams, options?: Core.RequestOptions): Core.PagePromise<FallbackDomainsSinglePage, FallbackDomain> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/devices/policy/fallback_domains`, FallbackDomainsSinglePage, options);
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified
   * device settings profile. These domains will use the specified local DNS resolver
   * instead.
   */
  get(policyId: string, params: FallbackDomainGetParams, options?: Core.RequestOptions): Core.APIPromise<FallbackDomainGetResponse | null> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/devices/policy/${policyId}/fallback_domains`, options) as Core.APIPromise<{ result: FallbackDomainGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export class FallbackDomainsSinglePage extends SinglePage<FallbackDomain> {
}

export interface FallbackDomain {
  /**
   * The domain suffix to match when resolving locally.
   */
  suffix: string;

  /**
   * A description of the fallback domain, displayed in the client UI.
   */
  description?: string;

  /**
   * A list of IP addresses to handle domain resolution.
   */
  dns_server?: Array<string>;
}

export interface FallbackDomainParam {
  /**
   * The domain suffix to match when resolving locally.
   */
  suffix: string;

  /**
   * A description of the fallback domain, displayed in the client UI.
   */
  description?: string;

  /**
   * A list of IP addresses to handle domain resolution.
   */
  dns_server?: Array<string>;
}

export type FallbackDomainPolicy = Array<FallbackDomain>

export type FallbackDomainUpdateResponse = Array<FallbackDomain>

export type FallbackDomainGetResponse = Array<FallbackDomain>

export interface FallbackDomainUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<FallbackDomainParam>;
}

export interface FallbackDomainListParams {
  account_id: string;
}

export interface FallbackDomainGetParams {
  account_id: string;
}

export namespace FallbackDomains {
  export import FallbackDomain = FallbackDomainsAPI.FallbackDomain;
  export import FallbackDomainPolicy = FallbackDomainsAPI.FallbackDomainPolicy;
  export import FallbackDomainUpdateResponse = FallbackDomainsAPI.FallbackDomainUpdateResponse;
  export import FallbackDomainGetResponse = FallbackDomainsAPI.FallbackDomainGetResponse;
  export import FallbackDomainsSinglePage = FallbackDomainsAPI.FallbackDomainsSinglePage;
  export import FallbackDomainUpdateParams = FallbackDomainsAPI.FallbackDomainUpdateParams;
  export import FallbackDomainListParams = FallbackDomainsAPI.FallbackDomainListParams;
  export import FallbackDomainGetParams = FallbackDomainsAPI.FallbackDomainGetParams;
}
