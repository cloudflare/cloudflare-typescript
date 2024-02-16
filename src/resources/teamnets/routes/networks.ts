// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as NetworksAPI from 'cloudflare/resources/teamnets/routes/networks';

export class Networks extends APIResource {
  /**
   * Routes a private network through a Cloudflare Tunnel. The CIDR in
   * `ip_network_encoded` must be written in URL-encoded format.
   */
  update(
    accountId: string,
    ipNetworkEncoded: string,
    body: NetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkUpdateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/teamnet/routes/network/${ipNetworkEncoded}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NetworkUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a private network route from an account. The CIDR in
   * `ip_network_encoded` must be written in URL-encoded format. If no
   * virtual_network_id is provided it will delete the route from the default vnet.
   * If no tun_type is provided it will fetch the type from the tunnel_id or if that
   * is missing it will assume Cloudflare Tunnel as default. If tunnel_id is provided
   * it will delete the route from that tunnel, otherwise it will delete the route
   * based on the vnet and tun_type.
   */
  delete(
    accountId: string,
    ipNetworkEncoded: string,
    params?: NetworkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeleteResponse>;
  delete(
    accountId: string,
    ipNetworkEncoded: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeleteResponse>;
  delete(
    accountId: string,
    ipNetworkEncoded: string,
    params: NetworkDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(accountId, ipNetworkEncoded, {}, params);
    }
    const { tun_type } = params;
    return (
      this._client.delete(`/accounts/${accountId}/teamnet/routes/network/${ipNetworkEncoded}`, {
        query: { tun_type },
        ...options,
      }) as Core.APIPromise<{ result: NetworkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NetworkUpdateResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface NetworkDeleteResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface NetworkUpdateParams {
  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface NetworkDeleteParams {
  /**
   * The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
}

export namespace Networks {
  export import NetworkUpdateResponse = NetworksAPI.NetworkUpdateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
}
