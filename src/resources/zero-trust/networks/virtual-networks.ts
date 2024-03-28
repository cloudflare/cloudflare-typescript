// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VirtualNetworksAPI from 'cloudflare/resources/zero-trust/networks/virtual-networks';
import { SinglePage } from 'cloudflare/pagination';

export class VirtualNetworks extends APIResource {
  /**
   * Adds a new virtual network to an account.
   */
  create(
    params: VirtualNetworkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/teamnet/virtual_networks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters virtual networks in an account.
   */
  list(
    params: VirtualNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelVirtualNetworksSinglePage, TunnelVirtualNetwork> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/teamnet/virtual_networks`,
      TunnelVirtualNetworksSinglePage,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing virtual network.
   */
  delete(
    virtualNetworkId: string,
    params: VirtualNetworkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkId}`,
        options,
      ) as Core.APIPromise<{ result: VirtualNetworkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing virtual network.
   */
  edit(
    virtualNetworkId: string,
    params: VirtualNetworkEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TunnelVirtualNetworksSinglePage extends SinglePage<TunnelVirtualNetwork> {}

export interface TunnelVirtualNetwork {
  /**
   * UUID of the virtual network.
   */
  id: string;

  /**
   * Optional remark describing the virtual network.
   */
  comment: string;

  /**
   * Timestamp of when the virtual network was created.
   */
  created_at: unknown;

  /**
   * If `true`, this virtual network is the default for the account.
   */
  is_default_network: boolean;

  /**
   * A user-friendly name for the virtual network.
   */
  name: string;

  /**
   * Timestamp of when the virtual network was deleted. If `null`, the virtual
   * network has not been deleted.
   */
  deleted_at?: unknown;
}

export type VirtualNetworkCreateResponse = unknown | Array<unknown> | string;

export type VirtualNetworkDeleteResponse = unknown | Array<unknown> | string;

export type VirtualNetworkEditResponse = unknown | Array<unknown> | string;

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
   * Query param: If `true`, only include the default virtual network. If `false`,
   * exclude the default virtual network. If empty, all virtual networks will be
   * included.
   */
  is_default?: unknown;

  /**
   * Query param: If `true`, only include deleted virtual networks. If `false`,
   * exclude deleted virtual networks. If empty, all virtual networks will be
   * included.
   */
  is_deleted?: unknown;

  /**
   * Query param: A user-friendly name for the virtual network.
   */
  name?: string;

  /**
   * Query param: A user-friendly name for the virtual network.
   */
  vnet_name?: string;
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

export namespace VirtualNetworks {
  export import TunnelVirtualNetwork = VirtualNetworksAPI.TunnelVirtualNetwork;
  export import VirtualNetworkCreateResponse = VirtualNetworksAPI.VirtualNetworkCreateResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkEditResponse = VirtualNetworksAPI.VirtualNetworkEditResponse;
  export import TunnelVirtualNetworksSinglePage = VirtualNetworksAPI.TunnelVirtualNetworksSinglePage;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
  export import VirtualNetworkDeleteParams = VirtualNetworksAPI.VirtualNetworkDeleteParams;
  export import VirtualNetworkEditParams = VirtualNetworksAPI.VirtualNetworkEditParams;
}
