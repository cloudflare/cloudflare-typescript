// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CloudflareSourceAPI from './cloudflare-source';
import { CloudflareSource, CloudflareSourceUpdateParams } from './cloudflare-source';
import * as WARPAPI from './warp';
import {
  Subnet,
  SubnetsV4PagePaginationArray,
  WARP,
  WARPCreateParams,
  WARPDeleteParams,
  WARPDeleteResponse,
  WARPEditParams,
  WARPGetParams,
} from './warp';
import { type V4PagePaginationArrayParams } from '../../../../pagination';

export class Subnets extends APIResource {
  warp: WARPAPI.WARP = new WARPAPI.WARP(this._client);
  cloudflareSource: CloudflareSourceAPI.CloudflareSource = new CloudflareSourceAPI.CloudflareSource(
    this._client,
  );

  /**
   * Lists and filters subnets in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subnet of client.zeroTrust.networks.subnets.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SubnetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubnetsV4PagePaginationArray, WARPAPI.Subnet> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/zerotrust/subnets`,
      SubnetsV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export interface SubnetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: If set, only include subnets in the given address family - `v4` or
   * `v6`
   */
  address_family?: 'v4' | 'v6';

  /**
   * Query param: If set, only list subnets with the given comment.
   */
  comment?: string;

  /**
   * Query param: If provided, include only resources that were created (and not
   * deleted) before this time. URL encoded.
   */
  existed_at?: string;

  /**
   * Query param: If `true`, only include default subnets. If `false`, exclude
   * default subnets subnets. If not set, all subnets will be included.
   */
  is_default_network?: boolean;

  /**
   * Query param: If `true`, only include deleted subnets. If `false`, exclude
   * deleted subnets. If not set, all subnets will be included.
   */
  is_deleted?: boolean;

  /**
   * Query param: If set, only list subnets with the given name
   */
  name?: string;

  /**
   * Query param: If set, only list the subnet whose network exactly matches the
   * given CIDR.
   */
  network?: string;

  /**
   * Query param: Sort order of the results. `asc` means oldest to newest, `desc`
   * means newest to oldest. If not set, they will not be in any particular order.
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Query param: If set, the types of subnets to include, separated by comma.
   */
  subnet_types?: 'cloudflare_source' | 'warp';
}

Subnets.WARP = WARP;
Subnets.CloudflareSource = CloudflareSource;

export declare namespace Subnets {
  export { type SubnetListParams as SubnetListParams };

  export {
    WARP as WARP,
    type Subnet as Subnet,
    type WARPDeleteResponse as WARPDeleteResponse,
    type WARPCreateParams as WARPCreateParams,
    type WARPDeleteParams as WARPDeleteParams,
    type WARPEditParams as WARPEditParams,
    type WARPGetParams as WARPGetParams,
  };

  export {
    CloudflareSource as CloudflareSource,
    type CloudflareSourceUpdateParams as CloudflareSourceUpdateParams,
  };
}

export { SubnetsV4PagePaginationArray };
