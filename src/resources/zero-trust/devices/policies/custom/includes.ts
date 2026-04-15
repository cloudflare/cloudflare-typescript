// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PoliciesAPI from '../policies';
import { SplitTunnelIncludesSinglePage } from '../policies';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseIncludes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'custom', 'includes'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'custom', 'includes'] as const);

  /**
   * Sets the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const splitTunnelInclude of client.zeroTrust.devices.policies.custom.includes.update(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   {
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     body: [{ address: '192.0.2.0/24' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  update(
    policyID: string,
    params: IncludeUpdateParams,
    options?: RequestOptions,
  ): PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude> {
    const { account_id = this._client.accountID, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/${policyID}/include`,
      SinglePage<PoliciesAPI.SplitTunnelInclude>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const splitTunnelInclude of client.zeroTrust.devices.policies.custom.includes.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    policyID: string,
    params: IncludeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/${policyID}/include`,
      SinglePage<PoliciesAPI.SplitTunnelInclude>,
      options,
    );
  }
}
export class Includes extends BaseIncludes {}

export interface IncludeUpdateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  body: Array<PoliciesAPI.SplitTunnelIncludeParam>;
}

export interface IncludeGetParams {
  account_id?: string;
}

export declare namespace Includes {
  export { type IncludeUpdateParams as IncludeUpdateParams, type IncludeGetParams as IncludeGetParams };
}

export { type SplitTunnelIncludesSinglePage };
