// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ZoneAPI from './zone';
import { Zone } from './zone';
import * as AccountAPI from './account/account';
import { Account } from './account/account';

export class Settings extends APIResource {
  zone: ZoneAPI.Zone = new ZoneAPI.Zone(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
}

Settings.Zone = Zone;
Settings.Account = Account;

export declare namespace Settings {
  export { Zone as Zone };

  export { Account as Account };
}
