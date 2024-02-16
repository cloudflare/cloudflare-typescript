// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HistoriesAPI from 'cloudflare/resources/users/billings/histories';
import * as ProfilesAPI from 'cloudflare/resources/users/billings/profiles';

export class Billings extends APIResource {
  histories: HistoriesAPI.Histories = new HistoriesAPI.Histories(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Billings {
  export import Histories = HistoriesAPI.Histories;
  export import HistoryUserBillingHistoryBillingHistoryDetailsResponse = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsResponse;
  export import HistoryUserBillingHistoryBillingHistoryDetailsParams = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileUserBillingProfileBillingProfileDetailsResponse = ProfilesAPI.ProfileUserBillingProfileBillingProfileDetailsResponse;
}
