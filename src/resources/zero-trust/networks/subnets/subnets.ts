// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CloudflareSourceAPI from './cloudflare-source';
import {
  CloudflareSource,
  CloudflareSourceUpdateParams,
  CloudflareSourceUpdateResponse,
} from './cloudflare-source';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Subnets extends APIResource {
  cloudflareSource: CloudflareSourceAPI.CloudflareSource = new CloudflareSourceAPI.CloudflareSource(
    this._client,
  );

  /**
   * Lists and filters subnets in an account.
   */
  list(
    params: SubnetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubnetListResponsesV4PagePaginationArray, SubnetListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/zerotrust/subnets`,
      SubnetListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class SubnetListResponsesV4PagePaginationArray extends V4PagePaginationArray<SubnetListResponse> {}

export interface SubnetListResponse {
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
  subnet_type?: 'cloudflare_source';
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
  subnet_types?: 'cloudflare_source';
}

Subnets.SubnetListResponsesV4PagePaginationArray = SubnetListResponsesV4PagePaginationArray;
Subnets.CloudflareSource = CloudflareSource;

export declare namespace Subnets {
  export {
    type SubnetListResponse as SubnetListResponse,
    SubnetListResponsesV4PagePaginationArray as SubnetListResponsesV4PagePaginationArray,
    type SubnetListParams as SubnetListParams,
  };

  export {
    CloudflareSource as CloudflareSource,
    type CloudflareSourceUpdateResponse as CloudflareSourceUpdateResponse,
    type CloudflareSourceUpdateParams as CloudflareSourceUpdateParams,
  };
}
