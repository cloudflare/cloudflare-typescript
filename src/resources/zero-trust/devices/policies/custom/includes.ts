// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';
import { SplitTunnelIncludesSinglePage } from '../policies';

export class Includes extends APIResource {
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
    policyId: string,
    params: IncludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude> {
    const { account_id = this._client.accountId, body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/${policyId}/include`,
      SplitTunnelIncludesSinglePage,
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
    policyId: string,
    params?: IncludeGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude>;
  get(
    policyId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude>;
  get(
    policyId: string,
    params: IncludeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude> {
    if (isRequestOptions(params)) {
      return this.get(policyId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/${policyId}/include`,
      SplitTunnelIncludesSinglePage,
      options,
    );
  }
}

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

export { SplitTunnelIncludesSinglePage };
