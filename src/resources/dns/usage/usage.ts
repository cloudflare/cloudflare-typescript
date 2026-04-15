// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountAPI from './account';
import { Account, BaseAccount } from './account';
import * as ZoneAPI from './zone';
import { BaseZone, Zone } from './zone';

export class BaseUsage extends APIResource {
  static override readonly _key: readonly ['dns', 'usage'] = Object.freeze(['dns', 'usage'] as const);
}
export class Usage extends BaseUsage {
  zone: ZoneAPI.Zone = new ZoneAPI.Zone(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
}

Usage.Zone = Zone;
Usage.BaseZone = BaseZone;
Usage.Account = Account;
Usage.BaseAccount = BaseAccount;

export declare namespace Usage {
  export { Zone as Zone, BaseZone as BaseZone };

  export { Account as Account, BaseAccount as BaseAccount };
}
