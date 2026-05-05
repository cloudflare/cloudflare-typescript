// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ZoneAPI from './zone';
import { BaseZone, Zone, ZoneEditParams, ZoneEditResponse, ZoneGetParams, ZoneGetResponse } from './zone';
import * as AccountAPI from './account/account';
import {
  Account,
  AccountEditParams,
  AccountEditResponse,
  AccountGetParams,
  AccountGetResponse,
  BaseAccount,
} from './account/account';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['dns', 'settings'] = Object.freeze(['dns', 'settings'] as const);
}
export class Settings extends BaseSettings {
  zone: ZoneAPI.Zone = new ZoneAPI.Zone(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
}

Settings.Zone = Zone;
Settings.BaseZone = BaseZone;
Settings.Account = Account;
Settings.BaseAccount = BaseAccount;

export declare namespace Settings {
  export {
    Zone as Zone,
    BaseZone as BaseZone,
    type ZoneEditResponse as ZoneEditResponse,
    type ZoneGetResponse as ZoneGetResponse,
    type ZoneEditParams as ZoneEditParams,
    type ZoneGetParams as ZoneGetParams,
  };

  export {
    Account as Account,
    BaseAccount as BaseAccount,
    type AccountEditResponse as AccountEditResponse,
    type AccountGetResponse as AccountGetResponse,
    type AccountEditParams as AccountEditParams,
    type AccountGetParams as AccountGetParams,
  };
}
