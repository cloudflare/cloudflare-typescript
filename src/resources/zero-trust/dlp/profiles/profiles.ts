// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom';
import { BaseCustom, Custom } from './custom';
import * as PredefinedAPI from './predefined';
import { BasePredefined, Predefined } from './predefined';

export class BaseProfiles extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'profiles'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'profiles',
  ] as const);
}
export class Profiles extends BaseProfiles {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  predefined: PredefinedAPI.Predefined = new PredefinedAPI.Predefined(this._client);
}

Profiles.Custom = Custom;
Profiles.BaseCustom = BaseCustom;
Profiles.Predefined = Predefined;
Profiles.BasePredefined = BasePredefined;

export declare namespace Profiles {
  export { Custom as Custom, BaseCustom as BaseCustom };

  export { Predefined as Predefined, BasePredefined as BasePredefined };
}
