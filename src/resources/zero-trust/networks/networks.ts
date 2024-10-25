// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as VirtualNetworksAPI from './virtual-networks';
import * as RoutesAPI from './routes/routes';

export class Networks extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
}

export namespace Networks {
  export import Routes = RoutesAPI.Routes;
  export type NetworkRoute = RoutesAPI.NetworkRoute;
  export type Route = RoutesAPI.Route;
  export type Teamnet = RoutesAPI.Teamnet;
  export import TeamnetsV4PagePaginationArray = RoutesAPI.TeamnetsV4PagePaginationArray;
  export type RouteCreateParams = RoutesAPI.RouteCreateParams;
  export type RouteListParams = RoutesAPI.RouteListParams;
  export type RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export type RouteEditParams = RoutesAPI.RouteEditParams;
  export type RouteGetParams = RoutesAPI.RouteGetParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export type VirtualNetwork = VirtualNetworksAPI.VirtualNetwork;
  export import VirtualNetworksSinglePage = VirtualNetworksAPI.VirtualNetworksSinglePage;
  export type VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export type VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
  export type VirtualNetworkDeleteParams = VirtualNetworksAPI.VirtualNetworkDeleteParams;
  export type VirtualNetworkEditParams = VirtualNetworksAPI.VirtualNetworkEditParams;
  export type VirtualNetworkGetParams = VirtualNetworksAPI.VirtualNetworkGetParams;
}
