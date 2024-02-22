// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/billing/profiles';

export class Billing extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Billing {
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
}
