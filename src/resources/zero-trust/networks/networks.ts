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
  export import NetworkRoute = RoutesAPI.NetworkRoute;
  export import Route = RoutesAPI.Route;
  export import Teamnet = RoutesAPI.Teamnet;
  export import TeamnetsV4PagePaginationArray = RoutesAPI.TeamnetsV4PagePaginationArray;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteEditParams = RoutesAPI.RouteEditParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export import VirtualNetwork = VirtualNetworksAPI.VirtualNetwork;
  export import VirtualNetworksSinglePage = VirtualNetworksAPI.VirtualNetworksSinglePage;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
  export import VirtualNetworkDeleteParams = VirtualNetworksAPI.VirtualNetworkDeleteParams;
  export import VirtualNetworkEditParams = VirtualNetworksAPI.VirtualNetworkEditParams;
}
