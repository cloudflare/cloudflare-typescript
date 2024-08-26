// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { IPs } from './ips';
import { Networks } from './networks';
import * as RoutesAPI from './routes';
import * as IPsAPI from './ips';
import * as NetworksAPI from './networks';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Routes extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);

  /**
   * Routes a private network through a Cloudflare Tunnel.
   */
  create(params: RouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<Route> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/teamnet/routes`, { body, ...options }) as Core.APIPromise<{ result: Route }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters private network routes in an account.
   */
  list(params: RouteListParams, options?: Core.RequestOptions): Core.PagePromise<TeamnetsV4PagePaginationArray, Teamnet> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/teamnet/routes`, TeamnetsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes a private network route from an account.
   */
  delete(routeId: string, params: RouteDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Route> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/teamnet/routes/${routeId}`, options) as Core.APIPromise<{ result: Route }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing private network route in an account. The fields that are
   * meant to be updated should be provided in the body of the request.
   */
  edit(routeId: string, params: RouteEditParams, options?: Core.RequestOptions): Core.APIPromise<Route> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/teamnet/routes/${routeId}`, { body, ...options }) as Core.APIPromise<{ result: Route }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a private network route in an account.
   */
  get(routeId: string, params: RouteGetParams, options?: Core.RequestOptions): Core.APIPromise<Route> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/teamnet/routes/${routeId}`, options) as Core.APIPromise<{ result: Route }>)._thenUnwrap((obj) => obj.result);
  }
}

export class TeamnetsV4PagePaginationArray extends V4PagePaginationArray<Teamnet> {
}

export interface NetworkRoute {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
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
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the tunnel.
   */
  tunnel_id?: string;

  /**
   * UUID of the virtual network.
   */
  virtual_network_id?: string;
}

export interface Route {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
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
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * UUID of the tunnel.
   */
  tunnel_id?: string;

  /**
   * UUID of the virtual network.
   */
  virtual_network_id?: string;
}

export interface Teamnet {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
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
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';

  /**
   * UUID of the tunnel.
   */
  tunnel_id?: string;

  /**
   * A user-friendly name for a tunnel.
   */
  tunnel_name?: string;

  /**
   * UUID of the virtual network.
   */
  virtual_network_id?: string;

  /**
   * A user-friendly name for the virtual network.
   */
  virtual_network_name?: string;
}

export interface RouteCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: The private IPv4 or IPv6 range connected by the route, in CIDR
   * notation.
   */
  network: string;

  /**
   * Body param: UUID of the tunnel.
   */
  tunnel_id: string;

  /**
   * Body param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Body param: UUID of the virtual network.
   */
  virtual_network_id?: string;
}

export interface RouteListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Query param: If provided, include only tunnels that were created (and not
   * deleted) before this time.
   */
  existed_at?: string;

  /**
   * Query param: If `true`, only include deleted routes. If `false`, exclude deleted
   * routes. If empty, all routes will be included.
   */
  is_deleted?: boolean;

  /**
   * Query param: If set, only list routes that are contained within this IP range.
   */
  network_subset?: string;

  /**
   * Query param: If set, only list routes that contain this IP range.
   */
  network_superset?: string;

  /**
   * Query param: UUID of the route.
   */
  route_id?: string;

  /**
   * Query param: The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

  /**
   * Query param: UUID of the tunnel.
   */
  tunnel_id?: string;

  /**
   * Query param: UUID of the virtual network.
   */
  virtual_network_id?: string;
}

export interface RouteDeleteParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface RouteEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Body param: The private IPv4 or IPv6 range connected by the route, in CIDR
   * notation.
   */
  network?: string;

  /**
   * Body param: UUID of the tunnel.
   */
  tunnel_id?: string;

  /**
   * Body param: UUID of the virtual network.
   */
  virtual_network_id?: string;
}

export interface RouteGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export namespace Routes {
  export import NetworkRoute = RoutesAPI.NetworkRoute;
  export import Route = RoutesAPI.Route;
  export import Teamnet = RoutesAPI.Teamnet;
  export import TeamnetsV4PagePaginationArray = RoutesAPI.TeamnetsV4PagePaginationArray;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteEditParams = RoutesAPI.RouteEditParams;
  export import RouteGetParams = RoutesAPI.RouteGetParams;
  export import IPs = IPsAPI.IPs;
  export import IPGetParams = IPsAPI.IPGetParams;
  export import Networks = NetworksAPI.Networks;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export import NetworkEditParams = NetworksAPI.NetworkEditParams;
}
