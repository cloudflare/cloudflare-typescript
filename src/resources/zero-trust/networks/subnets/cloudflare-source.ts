// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WARPAPI from './warp';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCloudflareSource extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'subnets', 'cloudflareSource'] =
    Object.freeze(['zeroTrust', 'networks', 'subnets', 'cloudflareSource'] as const);

  /**
   * Updates the Cloudflare Source subnet of the given address family
   *
   * @example
   * ```ts
   * const subnet =
   *   await client.zeroTrust.networks.subnets.cloudflareSource.update(
   *     'v4',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  update(
    addressFamily: 'v4' | 'v6',
    params: CloudflareSourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WARPAPI.Subnet> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/zerotrust/subnets/cloudflare_source/${addressFamily}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WARPAPI.Subnet }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class CloudflareSource extends BaseCloudflareSource {}

export interface CloudflareSourceUpdateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id?: string;

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

export declare namespace CloudflareSource {
  export { type CloudflareSourceUpdateParams as CloudflareSourceUpdateParams };
}
