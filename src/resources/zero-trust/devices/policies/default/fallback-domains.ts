// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';
import { FallbackDomainsSinglePage } from '../policies';

export class FallbackDomains extends APIResource {
  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  update(
    params: FallbackDomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FallbackDomainsSinglePage, PoliciesAPI.FallbackDomain> {
    const { account_id, domains } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/fallback_domains`,
      FallbackDomainsSinglePage,
      { body: domains, method: 'put', ...options },
    );
  }

  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  get(
    params: FallbackDomainGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FallbackDomainsSinglePage, PoliciesAPI.FallbackDomain> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/fallback_domains`,
      FallbackDomainsSinglePage,
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

export { FallbackDomainsSinglePage };
