// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { History } from './history';
import { Profile } from './profile';
import * as HistoryAPI from './history';
import * as ProfileAPI from './profile';

export class Billing extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
}

export namespace Billing {
  export import History = HistoryAPI.History;
  export import BillingHistory = HistoryAPI.BillingHistory;
  export import BillingHistoriesV4PagePaginationArray = HistoryAPI.BillingHistoriesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Profile = ProfileAPI.Profile;
  export import ProfileGetResponse = ProfileAPI.ProfileGetResponse;
}
