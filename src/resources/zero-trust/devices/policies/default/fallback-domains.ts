// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PoliciesAPI from '../policies';
import { FallbackDomainsSinglePage } from '../policies';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseFallbackDomains extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'default', 'fallbackDomains'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'default', 'fallbackDomains'] as const);

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fallbackDomain of client.zeroTrust.devices.policies.default.fallbackDomains.update(
   *   {
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     domains: [{ suffix: 'example.com' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  update(
    params: FallbackDomainUpdateParams,
    options?: RequestOptions,
  ): PagePromise<FallbackDomainsSinglePage, PoliciesAPI.FallbackDomain> {
    const { account_id = this._client.accountID, domains } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/fallback_domains`,
      SinglePage<PoliciesAPI.FallbackDomain>,
      { body: domains, method: 'put', ...options },
    );
  }

  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fallbackDomain of client.zeroTrust.devices.policies.default.fallbackDomains.get(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    params: FallbackDomainGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FallbackDomainsSinglePage, PoliciesAPI.FallbackDomain> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/fallback_domains`,
      SinglePage<PoliciesAPI.FallbackDomain>,
      options,
    );
  }
}
export class FallbackDomains extends BaseFallbackDomains {}

export interface FallbackDomainUpdateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  domains: Array<PoliciesAPI.FallbackDomainParam>;
}

export interface FallbackDomainGetParams {
  account_id?: string;
}

export declare namespace FallbackDomains {
  export {
    type FallbackDomainUpdateParams as FallbackDomainUpdateParams,
    type FallbackDomainGetParams as FallbackDomainGetParams,
  };
}

export { type FallbackDomainsSinglePage };
