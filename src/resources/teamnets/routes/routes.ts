// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RoutesAPI from 'cloudflare/resources/teamnets/routes/routes';
import * as IPsAPI from 'cloudflare/resources/teamnets/routes/ips';
import * as NetworksAPI from 'cloudflare/resources/teamnets/routes/networks';

export class Routes extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);

  /**
   * Lists and filters private network routes in an account.
   */
  tunnelRouteListTunnelRoutes(
    accountId: string,
    query?: RouteTunnelRouteListTunnelRoutesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteTunnelRouteListTunnelRoutesResponse | null>;
  tunnelRouteListTunnelRoutes(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteTunnelRouteListTunnelRoutesResponse | null>;
  tunnelRouteListTunnelRoutes(
    accountId: string,
    query: RouteTunnelRouteListTunnelRoutesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteTunnelRouteListTunnelRoutesResponse | null> {
    if (isRequestOptions(query)) {
      return this.tunnelRouteListTunnelRoutes(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/teamnet/routes`, { query, ...options }) as Core.APIPromise<{
        result: RouteTunnelRouteListTunnelRoutesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RouteTunnelRouteListTunnelRoutesResponse =
  Array<RouteTunnelRouteListTunnelRoutesResponse.RouteTunnelRouteListTunnelRoutesResponseItem>;

export namespace RouteTunnelRouteListTunnelRoutesResponse {
  export interface RouteTunnelRouteListTunnelRoutesResponseItem {
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
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';

    /**
     * UUID of the Cloudflare Tunnel serving the route.
     */
    tunnel_id?: unknown;

    /**
     * The user-friendly name of the Cloudflare Tunnel serving the route.
     */
    tunnel_name?: unknown;

    /**
     * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
     * are configured, the route is assigned to the default virtual network of the
     * account.
     */
    virtual_network_id?: unknown;

    /**
     * A user-friendly name for the virtual network.
     */
    virtual_network_name?: string;
  }
}

export interface RouteTunnelRouteListTunnelRoutesParams {
  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * If provided, include only routes that were created (and not deleted) before this
   * time.
   */
  existed_at?: unknown;

  /**
   * If `true`, only include deleted routes. If `false`, exclude deleted routes. If
   * empty, all routes will be included.
   */
  is_deleted?: unknown;

  /**
   * If set, only list routes that are contained within this IP range.
   */
  network_subset?: unknown;

  /**
   * If set, only list routes that contain this IP range.
   */
  network_superset?: unknown;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of results to display.
   */
  per_page?: number;

  /**
   * The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

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

export namespace Routes {
  export import RouteTunnelRouteListTunnelRoutesResponse = RoutesAPI.RouteTunnelRouteListTunnelRoutesResponse;
  export import RouteTunnelRouteListTunnelRoutesParams = RoutesAPI.RouteTunnelRouteListTunnelRoutesParams;
  export import IPs = IPsAPI.IPs;
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
  export import Networks = NetworksAPI.Networks;
  export import NetworkCreateResponse = NetworksAPI.NetworkCreateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
}
