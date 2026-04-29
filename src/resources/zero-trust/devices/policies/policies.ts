// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom/custom';
import { BaseCustom, Custom } from './custom/custom';
import * as DefaultAPI from './default/default';
import { BaseDefault, Default } from './default/default';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies'] = Object.freeze([
    'zeroTrust',
    'devices',
    'policies',
  ] as const);
}
export class Policies extends BasePolicies {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
}

Policies.Default = Default;
Policies.BaseDefault = BaseDefault;
Policies.Custom = Custom;
Policies.BaseCustom = BaseCustom;

export declare namespace Policies {
  export { Default as Default, BaseDefault as BaseDefault };

  export { Custom as Custom, BaseCustom as BaseCustom };
}
