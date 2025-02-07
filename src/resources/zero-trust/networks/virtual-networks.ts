// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VirtualNetworks extends APIResource {
  /**
   * Adds a new virtual network to an account.
   */
  create(params: VirtualNetworkCreateParams, options?: RequestOptions): APIPromise<VirtualNetwork> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/teamnet/virtual_networks`, {
        body,
        ...options,
      }) as APIPromise<{ result: VirtualNetwork }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters virtual networks in an account.
   */
  list(
    params: VirtualNetworkListParams,
    options?: RequestOptions,
  ): PagePromise<VirtualNetworksSinglePage, VirtualNetwork> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/teamnet/virtual_networks`,
      SinglePage<VirtualNetwork>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing virtual network.
   */
  delete(
    virtualNetworkID: string,
    params: VirtualNetworkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<VirtualNetwork> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkID}`,
        options,
      ) as APIPromise<{ result: VirtualNetwork }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing virtual network.
   */
  edit(
    virtualNetworkID: string,
    params: VirtualNetworkEditParams,
    options?: RequestOptions,
  ): APIPromise<VirtualNetwork> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: VirtualNetwork }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a virtual network.
   */
  get(
    virtualNetworkID: string,
    params: VirtualNetworkGetParams,
    options?: RequestOptions,
  ): APIPromise<VirtualNetwork> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkID}`,
        options,
      ) as APIPromise<{ result: VirtualNetwork }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type VirtualNetworksSinglePage = SinglePage<VirtualNetwork>;

export interface VirtualNetwork {
  /**
   * UUID of the virtual network.
   */
  id: string;

  /**
   * Optional remark describing the virtual network.
   */
  comment: string;

  /**
   * Timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * If `true`, this virtual network is the default for the account.
   */
  is_default_network: boolean;

  /**
   * A user-friendly name for the virtual network.
   */
  name: string;

  /**
   * Timestamp of when the resource was deleted. If `null`, the resource has not been
   * deleted.
   */
  deleted_at?: string;
}

export interface VirtualNetworkCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the virtual network.
   */
  name: string;

  /**
   * Body param: Optional remark describing the virtual network.
   */
  comment?: string;

  /**
   * Body param: If `true`, this virtual network is the default for the account.
   */
  is_default?: boolean;
}

export interface VirtualNetworkListParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: UUID of the virtual network.
   */
  id?: string;

  /**
   * Query param: If `true`, only include the default virtual network. If `false`,
   * exclude the default virtual network. If empty, all virtual networks will be
   * included.
   */
  is_default?: boolean;

  /**
   * Query param: If `true`, only include deleted virtual networks. If `false`,
   * exclude deleted virtual networks. If empty, all virtual networks will be
   * included.
   */
  is_deleted?: boolean;

  /**
   * Query param: A user-friendly name for the virtual network.
   */
  name?: string;
}

export interface VirtualNetworkDeleteParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface VirtualNetworkEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: Optional remark describing the virtual network.
   */
  comment?: string;

  /**
   * Body param: If `true`, this virtual network is the default for the account.
   */
  is_default_network?: boolean;

  /**
   * Body param: A user-friendly name for the virtual network.
   */
  name?: string;
}

export interface VirtualNetworkGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export declare namespace VirtualNetworks {
  export {
    type VirtualNetwork as VirtualNetwork,
    type VirtualNetworksSinglePage as VirtualNetworksSinglePage,
    type VirtualNetworkCreateParams as VirtualNetworkCreateParams,
    type VirtualNetworkListParams as VirtualNetworkListParams,
    type VirtualNetworkDeleteParams as VirtualNetworkDeleteParams,
    type VirtualNetworkEditParams as VirtualNetworkEditParams,
    type VirtualNetworkGetParams as VirtualNetworkGetParams,
  };
}
