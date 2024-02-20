// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HistoryAPI from 'cloudflare/resources/users/billings/history';
import * as ProfilesAPI from 'cloudflare/resources/users/billings/profiles';

export class Billings extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Billings {
  export import History = HistoryAPI.History;
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryListResponsesV4PagePaginationArray = HistoryAPI.HistoryListResponsesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
}
