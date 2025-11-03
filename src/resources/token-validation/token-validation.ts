// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import {
  RuleCreateParams,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleEditParams,
  RuleGetParams,
  RuleListParams,
  Rules,
  TokenValidationRule,
  TokenValidationRulesV4PagePaginationArray,
} from './rules';
import * as ConfigurationAPI from './configuration/configuration';
import {
  Configuration,
  ConfigurationCreateParams,
  ConfigurationDeleteParams,
  ConfigurationDeleteResponse,
  ConfigurationEditParams,
  ConfigurationEditResponse,
  ConfigurationGetParams,
  ConfigurationListParams,
  TokenConfig,
  TokenConfigsV4PagePaginationArray,
} from './configuration/configuration';

export class TokenValidation extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

TokenValidation.Configuration = Configuration;
TokenValidation.TokenConfigsV4PagePaginationArray = TokenConfigsV4PagePaginationArray;
TokenValidation.Rules = Rules;
TokenValidation.TokenValidationRulesV4PagePaginationArray = TokenValidationRulesV4PagePaginationArray;

export declare namespace TokenValidation {
  export {
    Configuration as Configuration,
    type TokenConfig as TokenConfig,
    type ConfigurationDeleteResponse as ConfigurationDeleteResponse,
    type ConfigurationEditResponse as ConfigurationEditResponse,
    TokenConfigsV4PagePaginationArray as TokenConfigsV4PagePaginationArray,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationListParams as ConfigurationListParams,
    type ConfigurationDeleteParams as ConfigurationDeleteParams,
    type ConfigurationEditParams as ConfigurationEditParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };

  export {
    Rules as Rules,
    type TokenValidationRule as TokenValidationRule,
    type RuleDeleteResponse as RuleDeleteResponse,
    TokenValidationRulesV4PagePaginationArray as TokenValidationRulesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
