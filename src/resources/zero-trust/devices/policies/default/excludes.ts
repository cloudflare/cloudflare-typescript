// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PoliciesAPI from '../policies';
import { SplitTunnelExcludesSinglePage } from '../policies';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseExcludes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'default', 'excludes'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'default', 'excludes'] as const);

  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const splitTunnelExclude of client.zeroTrust.devices.policies.default.excludes.update(
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
    params: ExcludeUpdateParams,
    options?: RequestOptions,
  ): PagePromise<SplitTunnelExcludesSinglePage, PoliciesAPI.SplitTunnelExclude> {
    const { account_id = this._client.accountID, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/exclude`,
      SinglePage<PoliciesAPI.SplitTunnelExclude>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const splitTunnelExclude of client.zeroTrust.devices.policies.default.excludes.get(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    params: ExcludeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SplitTunnelExcludesSinglePage, PoliciesAPI.SplitTunnelExclude> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/exclude`,
      SinglePage<PoliciesAPI.SplitTunnelExclude>,
      options,
    );
  }
}
export class Excludes extends BaseExcludes {}

export interface ExcludeUpdateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  body: Array<PoliciesAPI.SplitTunnelExcludeParam>;
}

export interface ExcludeGetParams {
  account_id?: string;
}

export declare namespace Excludes {
  export { type ExcludeUpdateParams as ExcludeUpdateParams, type ExcludeGetParams as ExcludeGetParams };
}

export { type SplitTunnelExcludesSinglePage };
