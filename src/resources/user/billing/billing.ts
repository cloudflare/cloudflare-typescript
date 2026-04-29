// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History } from './history';
import * as ProfileAPI from './profile';
import { Profile } from './profile';

export class Billing extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
}

Billing.History = History;
Billing.Profile = Profile;

export declare namespace Billing {
  export { History as History };

  export { Profile as Profile };
}
