// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WARPAPI from './warp';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseInitialResolvedIP extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'subnets', 'initialResolvedIP'] =
    Object.freeze(['zeroTrust', 'networks', 'subnets', 'initialResolvedIP'] as const);

  /**
   * Updates the CIDR for the account's default gateway ephemeral subnet of the given
   * address family. The new CIDR must not conflict with existing private routes in
   * the account.
   *
   * @example
   * ```ts
   * const subnet =
   *   await client.zeroTrust.networks.subnets.initialResolvedIP.update(
   *     'v4',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  update(
    addressFamily: 'v4' | 'v6',
    params: InitialResolvedIPUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WARPAPI.Subnet> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/zerotrust/subnets/initial_resolved_ip/${addressFamily}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WARPAPI.Subnet }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the account's default gateway ephemeral subnet for the given address
   * family.
   *
   * @example
   * ```ts
   * const subnet =
   *   await client.zeroTrust.networks.subnets.initialResolvedIP.get(
   *     'v4',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    addressFamily: 'v4' | 'v6',
    params: InitialResolvedIPGetParams,
    options?: RequestOptions,
  ): APIPromise<WARPAPI.Subnet> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/zerotrust/subnets/initial_resolved_ip/${addressFamily}`,
        options,
      ) as APIPromise<{ result: WARPAPI.Subnet }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class InitialResolvedIP extends BaseInitialResolvedIP {}

export interface InitialResolvedIPUpdateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: An optional description of the subnet.
   */
  comment?: string;

  /**
   * Body param: A user-friendly name for the subnet.
   */
  name?: string;

  /**
   * Body param: The private IPv4 or IPv6 range defining the subnet, in CIDR
   * notation.
   */
  network?: string;
}

export interface InitialResolvedIPGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export declare namespace InitialResolvedIP {
  export {
    type InitialResolvedIPUpdateParams as InitialResolvedIPUpdateParams,
    type InitialResolvedIPGetParams as InitialResolvedIPGetParams,
  };
}
