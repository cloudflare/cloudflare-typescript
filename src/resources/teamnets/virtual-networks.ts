// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VirtualNetworksAPI from 'cloudflare/resources/teamnets/virtual-networks';

export class VirtualNetworks extends APIResource {
  /**
   * Updates an existing virtual network.
   */
  update(
    accountId: string,
    virtualNetworkId: string,
    body: VirtualNetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/teamnet/virtual_networks/${virtualNetworkId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing virtual network.
   */
  delete(
    accountId: string,
    virtualNetworkId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/teamnet/virtual_networks/${virtualNetworkId}`,
        options,
      ) as Core.APIPromise<{ result: VirtualNetworkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds a new virtual network to an account.
   */
  tunnelVirtualNetworkCreateAVirtualNetwork(
    accountId: string,
    body: VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse> {
    return (
      this._client.post(`/accounts/${accountId}/teamnet/virtual_networks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters virtual networks in an account.
   */
  tunnelVirtualNetworkListVirtualNetworks(
    accountId: string,
    query?: VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse | null>;
  tunnelVirtualNetworkListVirtualNetworks(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse | null>;
  tunnelVirtualNetworkListVirtualNetworks(
    accountId: string,
    query: VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse | null> {
    if (isRequestOptions(query)) {
      return this.tunnelVirtualNetworkListVirtualNetworks(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/teamnet/virtual_networks`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type VirtualNetworkUpdateResponse = unknown | Array<unknown> | string;

export type VirtualNetworkDeleteResponse = unknown | Array<unknown> | string;

export type VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse =
  | unknown
  | Array<unknown>
  | string;

export type VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse =
  Array<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponseItem>;

export namespace VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse {
  export interface VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponseItem {
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
}

export interface VirtualNetworkUpdateParams {
  /**
   * Optional remark describing the virtual network.
   */
  comment?: string;

  /**
   * If `true`, this virtual network is the default for the account.
   */
  is_default_network?: boolean;

  /**
   * A user-friendly name for the virtual network.
   */
  name?: string;
}

export interface VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams {
  /**
   * A user-friendly name for the virtual network.
   */
  name: string;

  /**
   * Optional remark describing the virtual network.
   */
  comment?: string;

  /**
   * If `true`, this virtual network is the default for the account.
   */
  is_default?: boolean;
}

export interface VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams {
  /**
   * If `true`, only include the default virtual network. If `false`, exclude the
   * default virtual network. If empty, all virtual networks will be included.
   */
  is_default?: unknown;

  /**
   * If `true`, only include deleted virtual networks. If `false`, exclude deleted
   * virtual networks. If empty, all virtual networks will be included.
   */
  is_deleted?: unknown;

  /**
   * A user-friendly name for the virtual network.
   */
  name?: string;

  /**
   * A user-friendly name for the virtual network.
   */
  vnet_name?: string;
}

export namespace VirtualNetworks {
  export import VirtualNetworkUpdateResponse = VirtualNetworksAPI.VirtualNetworkUpdateResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse;
  export import VirtualNetworkUpdateParams = VirtualNetworksAPI.VirtualNetworkUpdateParams;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams;
}
