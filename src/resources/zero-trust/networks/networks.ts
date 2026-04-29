// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HostnameRoutesAPI from './hostname-routes';
import { HostnameRoutes } from './hostname-routes';
import * as VirtualNetworksAPI from './virtual-networks';
import { VirtualNetworks } from './virtual-networks';
import * as RoutesAPI from './routes/routes';
import { Routes } from './routes/routes';
import * as SubnetsAPI from './subnets/subnets';
import { Subnets } from './subnets/subnets';

export class Networks extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);
  hostnameRoutes: HostnameRoutesAPI.HostnameRoutes = new HostnameRoutesAPI.HostnameRoutes(this._client);
}

Networks.Routes = Routes;
Networks.VirtualNetworks = VirtualNetworks;
Networks.Subnets = Subnets;
Networks.HostnameRoutes = HostnameRoutes;

export declare namespace Networks {
  export { Routes as Routes };

  export { VirtualNetworks as VirtualNetworks };

  export { Subnets as Subnets };

  export { HostnameRoutes as HostnameRoutes };
}
