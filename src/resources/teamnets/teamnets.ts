// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as VirtualNetworksAPI from 'cloudflare/resources/teamnets/virtual-networks';
import * as RoutesAPI from 'cloudflare/resources/teamnets/routes/routes';

export class Teamnets extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
}

export namespace Teamnets {
  export import Routes = RoutesAPI.Routes;
  export import RouteTunnelRouteListTunnelRoutesResponse = RoutesAPI.RouteTunnelRouteListTunnelRoutesResponse;
  export import RouteTunnelRouteListTunnelRoutesParams = RoutesAPI.RouteTunnelRouteListTunnelRoutesParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export import VirtualNetworkUpdateResponse = VirtualNetworksAPI.VirtualNetworkUpdateResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse;
  export import VirtualNetworkUpdateParams = VirtualNetworksAPI.VirtualNetworkUpdateParams;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams;
}
