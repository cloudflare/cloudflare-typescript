// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProfilesAPI from './profiles';
import { BaseProfiles, Profiles } from './profiles';
import * as UsageAPI from './usage';
import { BaseUsage, Usage } from './usage';

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
  export { Profiles as Profiles, BaseProfiles as BaseProfiles };

  export { Usage as Usage, BaseUsage as BaseUsage };
}
