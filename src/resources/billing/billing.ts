// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProfilesAPI from './profiles';
import { BaseProfiles, ProfileGetParams, ProfileGetResponse, Profiles } from './profiles';
import * as UsageAPI from './usage';
import { BaseUsage, Usage, UsagePaygoParams, UsagePaygoResponse } from './usage';

export class BaseBilling extends APIResource {
  static override readonly _key: readonly ['billing'] = Object.freeze(['billing'] as const);
}
export class Billing extends BaseBilling {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Billing.Profiles = Profiles;
Billing.BaseProfiles = BaseProfiles;
Billing.Usage = Usage;
Billing.BaseUsage = BaseUsage;

export declare namespace Billing {
  export {
    Profiles as Profiles,
    BaseProfiles as BaseProfiles,
    type ProfileGetResponse as ProfileGetResponse,
    type ProfileGetParams as ProfileGetParams,
  };

  export {
    Usage as Usage,
    BaseUsage as BaseUsage,
    type UsagePaygoResponse as UsagePaygoResponse,
    type UsagePaygoParams as UsagePaygoParams,
  };
}
