// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HostnameRoutesAPI from './hostname-routes';
import {
  BaseHostnameRoutes,
  HostnameRoute,
  HostnameRouteCreateParams,
  HostnameRouteDeleteParams,
  HostnameRouteEditParams,
  HostnameRouteGetParams,
  HostnameRouteListParams,
  HostnameRoutes,
  HostnameRoutesV4PagePaginationArray,
} from './hostname-routes';
import * as VirtualNetworksAPI from './virtual-networks';
import {
  BaseVirtualNetworks,
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
  BaseRoutes,
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
import * as SubnetsAPI from './subnets/subnets';
import { BaseSubnets, SubnetListParams, Subnets } from './subnets/subnets';

export class BaseNetworks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks'] = Object.freeze([
    'zeroTrust',
    'networks',
  ] as const);
}
export class Networks extends BaseNetworks {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);
  hostnameRoutes: HostnameRoutesAPI.HostnameRoutes = new HostnameRoutesAPI.HostnameRoutes(this._client);
}

Networks.Routes = Routes;
Networks.BaseRoutes = BaseRoutes;
Networks.VirtualNetworks = VirtualNetworks;
Networks.BaseVirtualNetworks = BaseVirtualNetworks;
Networks.Subnets = Subnets;
Networks.BaseSubnets = BaseSubnets;
Networks.HostnameRoutes = HostnameRoutes;
Networks.BaseHostnameRoutes = BaseHostnameRoutes;

export declare namespace Networks {
  export {
    Routes as Routes,
    BaseRoutes as BaseRoutes,
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

  export {
    VirtualNetworks as VirtualNetworks,
    BaseVirtualNetworks as BaseVirtualNetworks,
    type VirtualNetwork as VirtualNetwork,
    type VirtualNetworksSinglePage as VirtualNetworksSinglePage,
    type VirtualNetworkCreateParams as VirtualNetworkCreateParams,
    type VirtualNetworkListParams as VirtualNetworkListParams,
    type VirtualNetworkDeleteParams as VirtualNetworkDeleteParams,
    type VirtualNetworkEditParams as VirtualNetworkEditParams,
    type VirtualNetworkGetParams as VirtualNetworkGetParams,
  };

  export { Subnets as Subnets, BaseSubnets as BaseSubnets, type SubnetListParams as SubnetListParams };

  export {
    HostnameRoutes as HostnameRoutes,
    BaseHostnameRoutes as BaseHostnameRoutes,
    type HostnameRoute as HostnameRoute,
    type HostnameRoutesV4PagePaginationArray as HostnameRoutesV4PagePaginationArray,
    type HostnameRouteCreateParams as HostnameRouteCreateParams,
    type HostnameRouteListParams as HostnameRouteListParams,
    type HostnameRouteDeleteParams as HostnameRouteDeleteParams,
    type HostnameRouteEditParams as HostnameRouteEditParams,
    type HostnameRouteGetParams as HostnameRouteGetParams,
  };
}
