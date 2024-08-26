// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Profiles } from './profiles';
import * as ProfilesAPI from './profiles';

export class Billing extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Billing {
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
}
