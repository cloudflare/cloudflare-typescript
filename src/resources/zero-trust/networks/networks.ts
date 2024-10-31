// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as VirtualNetworksAPI from './virtual-networks';
import {
  VirtualNetwork,
  VirtualNetworkCreateParams,
  VirtualNetworkDeleteParams,
  VirtualNetworkEditParams,
  VirtualNetworkGetParams,
  VirtualNetworkListParams,
  VirtualNetworks,
  VirtualNetworksSinglePage,
} from './virtual-networks';
import * as RoutesAPI from './routes/routes';
import {
  NetworkRoute,
  Route,
  RouteCreateParams,
  RouteDeleteParams,
  RouteEditParams,
  RouteGetParams,
  RouteListParams,
  Routes,
  Teamnet,
  TeamnetsV4PagePaginationArray,
} from './routes/routes';

export class Networks extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
}

Networks.Routes = Routes;
Networks.TeamnetsV4PagePaginationArray = TeamnetsV4PagePaginationArray;
Networks.VirtualNetworks = VirtualNetworks;
Networks.VirtualNetworksSinglePage = VirtualNetworksSinglePage;

export declare namespace Networks {
  export {
    Routes as Routes,
    type NetworkRoute as NetworkRoute,
    type Route as Route,
    type Teamnet as Teamnet,
    TeamnetsV4PagePaginationArray as TeamnetsV4PagePaginationArray,
    type RouteCreateParams as RouteCreateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteEditParams as RouteEditParams,
    type RouteGetParams as RouteGetParams,
  };

  export {
    VirtualNetworks as VirtualNetworks,
    type VirtualNetwork as VirtualNetwork,
    VirtualNetworksSinglePage as VirtualNetworksSinglePage,
    type VirtualNetworkCreateParams as VirtualNetworkCreateParams,
    type VirtualNetworkListParams as VirtualNetworkListParams,
    type VirtualNetworkDeleteParams as VirtualNetworkDeleteParams,
    type VirtualNetworkEditParams as VirtualNetworkEditParams,
    type VirtualNetworkGetParams as VirtualNetworkGetParams,
  };
}
