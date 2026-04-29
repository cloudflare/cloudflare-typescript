// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IPsAPI from './ips';
import { BaseIPs, IPs } from './ips';
import * as NetworksAPI from './networks';
import { BaseNetworks, Networks } from './networks';

export class BaseRoutes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'routes'] = Object.freeze([
    'zeroTrust',
    'networks',
    'routes',
  ] as const);
}
export class Routes extends BaseRoutes {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
}

Routes.IPs = IPs;
Routes.BaseIPs = BaseIPs;
Routes.Networks = Networks;
Routes.BaseNetworks = BaseNetworks;

export declare namespace Routes {
  export { IPs as IPs, BaseIPs as BaseIPs };

  export { Networks as Networks, BaseNetworks as BaseNetworks };
}
