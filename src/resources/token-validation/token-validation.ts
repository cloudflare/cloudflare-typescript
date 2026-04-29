// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as ConfigurationAPI from './configuration/configuration';
import { BaseConfiguration, Configuration } from './configuration/configuration';

export class BaseTokenValidation extends APIResource {
  static override readonly _key: readonly ['tokenValidation'] = Object.freeze(['tokenValidation'] as const);
}
export class TokenValidation extends BaseTokenValidation {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

TokenValidation.Configuration = Configuration;
TokenValidation.BaseConfiguration = BaseConfiguration;
TokenValidation.Rules = Rules;
TokenValidation.BaseRules = BaseRules;

export declare namespace TokenValidation {
  export { Configuration as Configuration, BaseConfiguration as BaseConfiguration };

  export { Rules as Rules, BaseRules as BaseRules };
}
