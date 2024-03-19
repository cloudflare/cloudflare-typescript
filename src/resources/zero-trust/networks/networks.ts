// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as VirtualNetworksAPI from 'cloudflare/resources/zero-trust/networks/virtual-networks';
import * as RoutesAPI from 'cloudflare/resources/zero-trust/networks/routes/routes';

export class Networks extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
}

export namespace Networks {
  export import Routes = RoutesAPI.Routes;
  export import TunnelRoute = RoutesAPI.TunnelRoute;
  export import TunnelTeamnet = RoutesAPI.TunnelTeamnet;
  export import TunnelTeamnetsV4PagePaginationArray = RoutesAPI.TunnelTeamnetsV4PagePaginationArray;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteEditParams = RoutesAPI.RouteEditParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export import TunnelVirtualNetwork = VirtualNetworksAPI.TunnelVirtualNetwork;
  export import VirtualNetworkCreateResponse = VirtualNetworksAPI.VirtualNetworkCreateResponse;
  export import VirtualNetworkListResponse = VirtualNetworksAPI.VirtualNetworkListResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkEditResponse = VirtualNetworksAPI.VirtualNetworkEditResponse;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
  export import VirtualNetworkDeleteParams = VirtualNetworksAPI.VirtualNetworkDeleteParams;
  export import VirtualNetworkEditParams = VirtualNetworksAPI.VirtualNetworkEditParams;
}
