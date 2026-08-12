// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProfilesAPI from './profiles';
import { BaseProfiles, ProfileGetParams, ProfileGetResponse, Profiles } from './profiles';
import * as UsageAPI from './usage';
import {
  BaseUsage,
  Usage,
  UsageGetAccountUsageInfoV1Params,
  UsageGetAccountUsageInfoV1Response,
  UsageGetAccountUsageV1Params,
  UsageGetAccountUsageV1Response,
  UsageGetAccountUsageV2Params,
  UsageGetAccountUsageV2Response,
  UsageGetParams,
  UsageGetResponse,
  UsagePaygoInfoParams,
  UsagePaygoInfoResponse,
  UsagePaygoParams,
  UsagePaygoResponse,
} from './usage';

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
    type UsageGetResponse as UsageGetResponse,
    type UsageGetAccountUsageInfoV1Response as UsageGetAccountUsageInfoV1Response,
    type UsageGetAccountUsageV1Response as UsageGetAccountUsageV1Response,
    type UsageGetAccountUsageV2Response as UsageGetAccountUsageV2Response,
    type UsagePaygoResponse as UsagePaygoResponse,
    type UsagePaygoInfoResponse as UsagePaygoInfoResponse,
    type UsageGetParams as UsageGetParams,
    type UsageGetAccountUsageInfoV1Params as UsageGetAccountUsageInfoV1Params,
    type UsageGetAccountUsageV1Params as UsageGetAccountUsageV1Params,
    type UsageGetAccountUsageV2Params as UsageGetAccountUsageV2Params,
    type UsagePaygoParams as UsagePaygoParams,
    type UsagePaygoInfoParams as UsagePaygoInfoParams,
  };
}
