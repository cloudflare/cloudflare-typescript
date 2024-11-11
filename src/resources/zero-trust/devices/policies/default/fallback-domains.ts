// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';

export class FallbackDomains extends APIResource {
  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  update(
    params: FallbackDomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainUpdateResponse | null> {
    const { account_id, domains } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/policy/fallback_domains`, {
        body: domains,
        ...options,
      }) as Core.APIPromise<{ result: FallbackDomainUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  get(
    params: FallbackDomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/policy/fallback_domains`,
        options,
      ) as Core.APIPromise<{ result: FallbackDomainGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FallbackDomainUpdateResponse = Array<PoliciesAPI.FallbackDomain>;

export type FallbackDomainGetResponse = Array<PoliciesAPI.FallbackDomain>;

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
    type FallbackDomainUpdateResponse as FallbackDomainUpdateResponse,
    type FallbackDomainGetResponse as FallbackDomainGetResponse,
    type FallbackDomainUpdateParams as FallbackDomainUpdateParams,
    type FallbackDomainGetParams as FallbackDomainGetParams,
  };
}
