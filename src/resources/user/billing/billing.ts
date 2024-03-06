// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HistoryAPI from 'cloudflare/resources/user/billing/history';
import * as ProfilesAPI from 'cloudflare/resources/user/billing/profiles';

export class Billing extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Billing {
  export import History = HistoryAPI.History;
  export import HistoryGetResponse = HistoryAPI.HistoryGetResponse;
  export import HistoryGetParams = HistoryAPI.HistoryGetParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
}
