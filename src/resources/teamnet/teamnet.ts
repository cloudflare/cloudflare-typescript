// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as VirtualNetworksAPI from 'cloudflare/resources/teamnet/virtual-networks';
import * as RoutesAPI from 'cloudflare/resources/teamnet/routes/routes';

export class Teamnet extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
}

export namespace Teamnet {
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteEditResponse = RoutesAPI.RouteEditResponse;
  export import RouteListResponsesV4PagePaginationArray = RoutesAPI.RouteListResponsesV4PagePaginationArray;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteEditParams = RoutesAPI.RouteEditParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export import VirtualNetworkCreateResponse = VirtualNetworksAPI.VirtualNetworkCreateResponse;
  export import VirtualNetworkListResponse = VirtualNetworksAPI.VirtualNetworkListResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkEditResponse = VirtualNetworksAPI.VirtualNetworkEditResponse;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
  export import VirtualNetworkDeleteParams = VirtualNetworksAPI.VirtualNetworkDeleteParams;
  export import VirtualNetworkEditParams = VirtualNetworksAPI.VirtualNetworkEditParams;
}
