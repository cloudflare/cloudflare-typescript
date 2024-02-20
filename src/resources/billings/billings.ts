// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/billings/profiles';

export class Billings extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Billings {
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
}
