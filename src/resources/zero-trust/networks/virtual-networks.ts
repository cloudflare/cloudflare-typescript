// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as VirtualNetworksAPI from './virtual-networks';
import { SinglePage } from '../../../pagination';

export class VirtualNetworks extends APIResource {
  /**
   * Adds a new virtual network to an account.
   */
  create(params: VirtualNetworkCreateParams, options?: Core.RequestOptions): Core.APIPromise<VirtualNetwork> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/teamnet/virtual_networks`, { body, ...options }) as Core.APIPromise<{ result: VirtualNetwork }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters virtual networks in an account.
   */
  list(params: VirtualNetworkListParams, options?: Core.RequestOptions): Core.PagePromise<VirtualNetworksSinglePage, VirtualNetwork> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/teamnet/virtual_networks`, VirtualNetworksSinglePage, { query, ...options });
  }

  /**
   * Deletes an existing virtual network.
   */
  delete(virtualNetworkId: string, params: VirtualNetworkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<VirtualNetwork> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkId}`, options) as Core.APIPromise<{ result: VirtualNetwork }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing virtual network.
   */
  edit(virtualNetworkId: string, params: VirtualNetworkEditParams, options?: Core.RequestOptions): Core.APIPromise<VirtualNetwork> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkId}`, { body, ...options }) as Core.APIPromise<{ result: VirtualNetwork }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a virtual network.
   */
  get(virtualNetworkId: string, params: VirtualNetworkGetParams, options?: Core.RequestOptions): Core.APIPromise<VirtualNetwork> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/teamnet/virtual_networks/${virtualNetworkId}`, options) as Core.APIPromise<{ result: VirtualNetwork }>)._thenUnwrap((obj) => obj.result);
  }
}

export class VirtualNetworksSinglePage extends SinglePage<VirtualNetwork> {
}

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

export namespace VirtualNetworks {
  export import VirtualNetwork = VirtualNetworksAPI.VirtualNetwork;
  export import VirtualNetworksSinglePage = VirtualNetworksAPI.VirtualNetworksSinglePage;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
  export import VirtualNetworkDeleteParams = VirtualNetworksAPI.VirtualNetworkDeleteParams;
  export import VirtualNetworkEditParams = VirtualNetworksAPI.VirtualNetworkEditParams;
  export import VirtualNetworkGetParams = VirtualNetworksAPI.VirtualNetworkGetParams;
}
