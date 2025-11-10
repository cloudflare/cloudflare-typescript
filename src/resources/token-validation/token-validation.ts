// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as ConfigurationAPI from './configuration/configuration';
import { Configuration } from './configuration/configuration';

export class TokenValidation extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

TokenValidation.Configuration = Configuration;
TokenValidation.Rules = Rules;

export declare namespace TokenValidation {
  export { Configuration as Configuration };

  export { Rules as Rules };
}
