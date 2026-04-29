// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom';
import { BaseCustom, Custom } from './custom';
import * as IntegrationAPI from './integration';
import { BaseIntegration, Integration } from './integration';
import * as PredefinedAPI from './predefined';
import { BasePredefined, Predefined } from './predefined';

export class BaseEntries extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'entries'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'entries',
  ] as const);
}
export class Entries extends BaseEntries {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  predefined: PredefinedAPI.Predefined = new PredefinedAPI.Predefined(this._client);
  integration: IntegrationAPI.Integration = new IntegrationAPI.Integration(this._client);
}

Entries.Custom = Custom;
Entries.BaseCustom = BaseCustom;
Entries.Predefined = Predefined;
Entries.BasePredefined = BasePredefined;
Entries.Integration = Integration;
Entries.BaseIntegration = BaseIntegration;

export declare namespace Entries {
  export { Custom as Custom, BaseCustom as BaseCustom };

  export { Predefined as Predefined, BasePredefined as BasePredefined };

  export { Integration as Integration, BaseIntegration as BaseIntegration };
}
