// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AccountsAPI from './accounts';
import { Accounts } from './accounts';
import * as IPsAPI from './ips';
import { IPs } from './ips';
import * as ZonesAPI from './zones';
import { Zones } from './zones';

export class AddressMaps extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);
}

AddressMaps.Accounts = Accounts;
AddressMaps.IPs = IPs;
AddressMaps.Zones = Zones;

export declare namespace AddressMaps {
  export { Accounts as Accounts };

  export { IPs as IPs };

  export { Zones as Zones };
}
