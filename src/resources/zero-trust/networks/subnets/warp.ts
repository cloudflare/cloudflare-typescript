// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { V4PagePaginationArray } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseWARP extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'subnets', 'warp'] = Object.freeze([
    'zeroTrust',
    'networks',
    'subnets',
    'warp',
  ] as const);

  /**
   * Create a WARP IP assignment subnet. Currently, only IPv4 subnets can be created.
   *
   * **Network constraints:**
   *
   * - The network must be within one of the following private IP ranges:
   *   - `10.0.0.0/8` (RFC 1918)
   *   - `172.16.0.0/12` (RFC 1918)
   *   - `192.168.0.0/16` (RFC 1918)
   *   - `100.64.0.0/10` (RFC 6598 - CGNAT)
   * - The subnet must have a prefix length of `/24` or larger (e.g., `/16`, `/20`,
   *   `/24` are valid; `/25`, `/28` are not)
   *
   * @example
   * ```ts
   * const subnet =
   *   await client.zeroTrust.networks.subnets.warp.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     name: 'IPv4 Cloudflare Source IPs',
   *     network: '100.64.0.0/12',
   *   });
   * ```
   */
  create(params: WARPCreateParams, options?: RequestOptions): APIPromise<Subnet> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/zerotrust/subnets/warp`, {
        body,
        ...options,
      }) as APIPromise<{ result: Subnet }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a WARP IP assignment subnet. This operation is idempotent - deleting an
   * already-deleted or non-existent subnet will return success with a null result.
   *
   * @example
   * ```ts
   * const warp =
   *   await client.zeroTrust.networks.subnets.warp.delete(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    subnetID: string,
    params: WARPDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WARPDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/zerotrust/subnets/warp/${subnetID}`,
        options,
      ) as APIPromise<{ result: WARPDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a WARP IP assignment subnet.
   *
   * **Update constraints:**
   *
   * - The `network` field cannot be modified for WARP subnets. Only `name`,
   *   `comment`, and `is_default_network` can be updated.
   * - IPv6 subnets cannot be updated
   *
   * @example
   * ```ts
   * const subnet =
   *   await client.zeroTrust.networks.subnets.warp.edit(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  edit(subnetID: string, params: WARPEditParams, options?: RequestOptions): APIPromise<Subnet> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/zerotrust/subnets/warp/${subnetID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Subnet }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a WARP IP assignment subnet.
   *
   * @example
   * ```ts
   * const subnet =
   *   await client.zeroTrust.networks.subnets.warp.get(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(subnetID: string, params: WARPGetParams, options?: RequestOptions): APIPromise<Subnet> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/zerotrust/subnets/warp/${subnetID}`,
        options,
      ) as APIPromise<{ result: Subnet }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class WARP extends BaseWARP {}

export type SubnetsV4PagePaginationArray = V4PagePaginationArray<Subnet>;

export interface Subnet {
  /**
   * The UUID of the subnet.
   */
  id?: string;

  /**
   * An optional description of the subnet.
   */
  comment?: string;

  /**
   * Timestamp of when the resource was created.
   */
  created_at?: string;

  /**
   * Timestamp of when the resource was deleted. If `null`, the resource has not been
   * deleted.
   */
  deleted_at?: string;

  /**
   * If `true`, this is the default subnet for the account. There can only be one
   * default subnet per account.
   */
  is_default_network?: boolean;

  /**
   * A user-friendly name for the subnet.
   */
  name?: string;

  /**
   * The private IPv4 or IPv6 range defining the subnet, in CIDR notation.
   */
  network?: string;

  /**
   * The type of subnet.
   */
  subnet_type?: 'cloudflare_source' | 'warp';
}

export interface WARPDeleteResponse {
  /**
   * The UUID of the subnet.
   */
  id?: string;

  /**
   * An optional description of the subnet.
   */
  comment?: string;

  /**
   * Timestamp of when the resource was created.
   */
  created_at?: string;

  /**
   * Timestamp of when the resource was deleted. If `null`, the resource has not been
   * deleted.
   */
  deleted_at?: string;

  /**
   * If `true`, this is the default subnet for the account. There can only be one
   * default subnet per account.
   */
  is_default_network?: boolean;

  /**
   * A user-friendly name for the subnet.
   */
  name?: string;

  /**
   * The private IPv4 or IPv6 range defining the subnet, in CIDR notation.
   */
  network?: string;

  /**
   * The type of subnet.
   */
  subnet_type?: 'cloudflare_source' | 'warp';
}

export interface WARPCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the subnet.
   */
  name: string;

  /**
   * Body param: The private IPv4 or IPv6 range defining the subnet, in CIDR
   * notation.
   */
  network: string;

  /**
   * Body param: An optional description of the subnet.
   */
  comment?: string;

  /**
   * Body param: If `true`, this is the default subnet for the account. There can
   * only be one default subnet per account.
   */
  is_default_network?: boolean;
}

export interface WARPDeleteParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface WARPEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: An optional description of the subnet.
   */
  comment?: string;

  /**
   * Body param: If `true`, this is the default subnet for the account. There can
   * only be one default subnet per account.
   */
  is_default_network?: boolean;

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

export interface WARPGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export declare namespace WARP {
  export {
    type Subnet as Subnet,
    type WARPDeleteResponse as WARPDeleteResponse,
    type WARPCreateParams as WARPCreateParams,
    type WARPDeleteParams as WARPDeleteParams,
    type WARPEditParams as WARPEditParams,
    type WARPGetParams as WARPGetParams,
  };
}
