// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ZoneAPI from './zone';
import { Zone, ZoneEditParams, ZoneEditResponse, ZoneGetParams, ZoneGetResponse } from './zone';
import * as AccountAPI from './account/account';
import {
  Account,
  AccountEditParams,
  AccountEditResponse,
  AccountGetParams,
  AccountGetResponse,
} from './account/account';

export class Settings extends APIResource {
  zone: ZoneAPI.Zone = new ZoneAPI.Zone(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
}

Settings.Zone = Zone;
Settings.Account = Account;

export declare namespace Settings {
  export {
    Zone as Zone,
    type ZoneEditResponse as ZoneEditResponse,
    type ZoneGetResponse as ZoneGetResponse,
    type ZoneEditParams as ZoneEditParams,
    type ZoneGetParams as ZoneGetParams,
  };

  export {
    Account as Account,
    type AccountEditResponse as AccountEditResponse,
    type AccountGetResponse as AccountGetResponse,
    type AccountEditParams as AccountEditParams,
    type AccountGetParams as AccountGetParams,
  };
}
