// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AccountAPI from './account';
import { Account, AccountGetParams, AccountGetResponse } from './account';
import * as ZoneAPI from './zone';
import { Zone, ZoneGetParams, ZoneGetResponse } from './zone';

export class Usage extends APIResource {
  zone: ZoneAPI.Zone = new ZoneAPI.Zone(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
}

Usage.Zone = Zone;
Usage.Account = Account;

export declare namespace Usage {
  export { Zone as Zone, type ZoneGetResponse as ZoneGetResponse, type ZoneGetParams as ZoneGetParams };

  export {
    Account as Account,
    type AccountGetResponse as AccountGetResponse,
    type AccountGetParams as AccountGetParams,
  };
}
