// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { Accounts, BaseAccounts } from './accounts';
import * as IPsAPI from './ips';
import { BaseIPs, IPs } from './ips';
import * as ZonesAPI from './zones';
import { BaseZones, Zones } from './zones';

export class BaseAddressMaps extends APIResource {
  static override readonly _key: readonly ['addressing', 'addressMaps'] = Object.freeze([
    'addressing',
    'addressMaps',
  ] as const);
}
export class AddressMaps extends BaseAddressMaps {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);
}

AddressMaps.Accounts = Accounts;
AddressMaps.BaseAccounts = BaseAccounts;
AddressMaps.IPs = IPs;
AddressMaps.BaseIPs = BaseIPs;
AddressMaps.Zones = Zones;
AddressMaps.BaseZones = BaseZones;

export declare namespace AddressMaps {
  export { Accounts as Accounts, BaseAccounts as BaseAccounts };

  export { IPs as IPs, BaseIPs as BaseIPs };

  export { Zones as Zones, BaseZones as BaseZones };
}
