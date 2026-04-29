// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HostnameRoutesAPI from './hostname-routes';
import { BaseHostnameRoutes, HostnameRoutes } from './hostname-routes';
import * as VirtualNetworksAPI from './virtual-networks';
import { BaseVirtualNetworks, VirtualNetworks } from './virtual-networks';
import * as RoutesAPI from './routes/routes';
import { BaseRoutes, Routes } from './routes/routes';
import * as SubnetsAPI from './subnets/subnets';
import { BaseSubnets, Subnets } from './subnets/subnets';

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
  export { Routes as Routes, BaseRoutes as BaseRoutes };

  export { VirtualNetworks as VirtualNetworks, BaseVirtualNetworks as BaseVirtualNetworks };

  export { Subnets as Subnets, BaseSubnets as BaseSubnets };

  export { HostnameRoutes as HostnameRoutes, BaseHostnameRoutes as BaseHostnameRoutes };
}
