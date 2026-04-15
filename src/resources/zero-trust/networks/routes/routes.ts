// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IPsAPI from './ips';
import { BaseIPs, IPGetParams, IPs } from './ips';
import * as NetworksAPI from './networks';
import {
  BaseNetworks,
  NetworkCreateParams,
  NetworkDeleteParams,
  NetworkEditParams,
  Networks,
} from './networks';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRoutes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'routes'] = Object.freeze([
    'zeroTrust',
    'networks',
    'routes',
  ] as const);

  /**
   * Routes a private network through a Cloudflare Tunnel.
   *
   * @example
   * ```ts
   * const route = await client.zeroTrust.networks.routes.create(
   *   {
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     network: '172.16.0.0/16',
   *     tunnel_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *   },
   * );
   * ```
   */
  create(params: RouteCreateParams, options?: RequestOptions): APIPromise<Route> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/teamnet/routes`, { body, ...options }) as APIPromise<{
        result: Route;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters private network routes in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const teamnet of client.zeroTrust.networks.routes.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RouteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TeamnetsV4PagePaginationArray, Teamnet> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/teamnet/routes`,
      V4PagePaginationArray<Teamnet>,
      { query, ...options },
    );
  }

  /**
   * Deletes a private network route from an account.
   *
   * @example
   * ```ts
   * const route = await client.zeroTrust.networks.routes.delete(
   *   'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * );
   * ```
   */
  delete(
    routeID: string,
    params: RouteDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Route> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.delete(path`/accounts/${account_id}/teamnet/routes/${routeID}`, options) as APIPromise<{
        result: Route;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing private network route in an account. The fields that are
   * meant to be updated should be provided in the body of the request.
   *
   * @example
   * ```ts
   * const route = await client.zeroTrust.networks.routes.edit(
   *   'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * );
   * ```
   */
  edit(routeID: string, params: RouteEditParams, options?: RequestOptions): APIPromise<Route> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/teamnet/routes/${routeID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Route }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a private network route in an account.
   *
   * @example
   * ```ts
   * const route = await client.zeroTrust.networks.routes.get(
   *   'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * );
   * ```
   */
  get(
    routeID: string,
    params: RouteGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Route> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/teamnet/routes/${routeID}`, options) as APIPromise<{
        result: Route;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Routes extends BaseRoutes {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
}

export type TeamnetsV4PagePaginationArray = V4PagePaginationArray<Teamnet>;

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
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'warp' | 'magic' | 'ip_sec' | 'gre' | 'cni';

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
  account_id?: string;

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
  account_id?: string;

  /**
   * Query param: Optional remark describing the route.
   */
  comment?: string;

  /**
   * Query param: If provided, include only resources that were created (and not
   * deleted) before this time. URL encoded.
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
   * Query param: The types of tunnels to filter by, separated by commas.
   */
  tun_types?: Array<'cfd_tunnel' | 'warp_connector' | 'warp' | 'magic' | 'ip_sec' | 'gre' | 'cni'>;

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
  account_id?: string;
}

export interface RouteEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id?: string;

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
  account_id?: string;
}

Routes.IPs = IPs;
Routes.BaseIPs = BaseIPs;
Routes.Networks = Networks;
Routes.BaseNetworks = BaseNetworks;

export declare namespace Routes {
  export {
    type NetworkRoute as NetworkRoute,
    type Route as Route,
    type Teamnet as Teamnet,
    type TeamnetsV4PagePaginationArray as TeamnetsV4PagePaginationArray,
    type RouteCreateParams as RouteCreateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteEditParams as RouteEditParams,
    type RouteGetParams as RouteGetParams,
  };

  export { IPs as IPs, BaseIPs as BaseIPs, type IPGetParams as IPGetParams };

  export {
    Networks as Networks,
    BaseNetworks as BaseNetworks,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkDeleteParams as NetworkDeleteParams,
    type NetworkEditParams as NetworkEditParams,
  };
}
