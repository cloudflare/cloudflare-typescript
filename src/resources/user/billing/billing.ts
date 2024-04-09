// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as HistoryAPI from 'cloudflare/resources/user/billing/history';
import * as ProfileAPI from 'cloudflare/resources/user/billing/profile';

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
}
