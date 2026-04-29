// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as IPsAPI from './ips';
import { IPs } from './ips';
import * as NetworksAPI from './networks';
import { Networks } from './networks';

export class Routes extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
}

Routes.IPs = IPs;
Routes.Networks = Networks;

export declare namespace Routes {
  export { IPs as IPs };

  export { Networks as Networks };
}
