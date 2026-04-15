// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProfilesAPI from './profiles';
import { ProfileGetParams, ProfileGetResponse, Profiles } from './profiles';
import * as UsageAPI from './usage';
import { Usage, UsagePaygoParams, UsagePaygoResponse } from './usage';

export class Billing extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Billing.Profiles = Profiles;
Billing.Usage = Usage;

export declare namespace Billing {
  export {
    Profiles as Profiles,
    type ProfileGetResponse as ProfileGetResponse,
    type ProfileGetParams as ProfileGetParams,
  };

  export {
    Usage as Usage,
    type UsagePaygoResponse as UsagePaygoResponse,
    type UsagePaygoParams as UsagePaygoParams,
  };
}
