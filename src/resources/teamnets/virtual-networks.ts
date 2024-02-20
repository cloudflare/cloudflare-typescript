// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VirtualNetworksAPI from 'cloudflare/resources/teamnets/virtual-networks';

export class VirtualNetworks extends APIResource {
  /**
   * Adds a new virtual network to an account.
   */
  create(
    accountId: string,
    body: VirtualNetworkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/teamnet/virtual_networks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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
   * Lists and filters virtual networks in an account.
   */
  list(
    accountId: string,
    query?: VirtualNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkListResponse | null>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<VirtualNetworkListResponse | null>;
  list(
    accountId: string,
    query: VirtualNetworkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/teamnet/virtual_networks`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: VirtualNetworkListResponse | null }>
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
}

export type VirtualNetworkCreateResponse = unknown | Array<unknown> | string;

export type VirtualNetworkUpdateResponse = unknown | Array<unknown> | string;

export type VirtualNetworkListResponse = Array<VirtualNetworkListResponse.VirtualNetworkListResponseItem>;

export namespace VirtualNetworkListResponse {
  export interface VirtualNetworkListResponseItem {
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

export type VirtualNetworkDeleteResponse = unknown | Array<unknown> | string;

export interface VirtualNetworkCreateParams {
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

export interface VirtualNetworkListParams {
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
  export import VirtualNetworkCreateResponse = VirtualNetworksAPI.VirtualNetworkCreateResponse;
  export import VirtualNetworkUpdateResponse = VirtualNetworksAPI.VirtualNetworkUpdateResponse;
  export import VirtualNetworkListResponse = VirtualNetworksAPI.VirtualNetworkListResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkUpdateParams = VirtualNetworksAPI.VirtualNetworkUpdateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
}
