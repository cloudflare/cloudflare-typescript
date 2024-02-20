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
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteListResponsesV4PagePaginationArray = RoutesAPI.RouteListResponsesV4PagePaginationArray;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export import VirtualNetworkCreateResponse = VirtualNetworksAPI.VirtualNetworkCreateResponse;
  export import VirtualNetworkUpdateResponse = VirtualNetworksAPI.VirtualNetworkUpdateResponse;
  export import VirtualNetworkListResponse = VirtualNetworksAPI.VirtualNetworkListResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkCreateParams = VirtualNetworksAPI.VirtualNetworkCreateParams;
  export import VirtualNetworkUpdateParams = VirtualNetworksAPI.VirtualNetworkUpdateParams;
  export import VirtualNetworkListParams = VirtualNetworksAPI.VirtualNetworkListParams;
}
