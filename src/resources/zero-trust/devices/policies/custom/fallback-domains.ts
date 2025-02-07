// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as PoliciesAPI from '../policies';
import { FallbackDomainsSinglePage } from '../policies';
import { PagePromise, SinglePage } from '../../../../../pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class FallbackDomains extends APIResource {
  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead. This will only apply to the
   * specified device settings profile.
   */
  update(
    policyID: string,
    params: FallbackDomainUpdateParams,
    options?: RequestOptions,
  ): PagePromise<FallbackDomainsSinglePage, PoliciesAPI.FallbackDomain> {
    const { account_id, domains } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/${policyID}/fallback_domains`,
      SinglePage<PoliciesAPI.FallbackDomain>,
      { body: domains, method: 'put', ...options },
    );
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified
   * device settings profile. These domains will use the specified local DNS resolver
   * instead.
   */
  get(
    policyID: string,
    params: FallbackDomainGetParams,
    options?: RequestOptions,
  ): PagePromise<FallbackDomainsSinglePage, PoliciesAPI.FallbackDomain> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/${policyID}/fallback_domains`,
      SinglePage<PoliciesAPI.FallbackDomain>,
      options,
    );
  }
}

export interface FallbackDomainUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  domains: Array<PoliciesAPI.FallbackDomainParam>;
}

export interface FallbackDomainGetParams {
  account_id: string;
}

export declare namespace FallbackDomains {
  export {
    type FallbackDomainUpdateParams as FallbackDomainUpdateParams,
    type FallbackDomainGetParams as FallbackDomainGetParams,
  };
}

export { type FallbackDomainsSinglePage };
