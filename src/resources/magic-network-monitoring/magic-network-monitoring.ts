// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs/configs';
import * as RulesAPI from './rules/rules';

export class MagicNetworkMonitoring extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace MagicNetworkMonitoring {
  export import Configs = ConfigsAPI.Configs;
  export type Configuration = ConfigsAPI.Configuration;
  export type ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export type ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export type ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export type ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export type ConfigGetParams = ConfigsAPI.ConfigGetParams;
  export import Rules = RulesAPI.Rules;
  export type MagicNetworkMonitoringRule = RulesAPI.MagicNetworkMonitoringRule;
  export import MagicNetworkMonitoringRulesSinglePage = RulesAPI.MagicNetworkMonitoringRulesSinglePage;
  export type RuleCreateParams = RulesAPI.RuleCreateParams;
  export type RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export type RuleEditParams = RulesAPI.RuleEditParams;
  export type RuleGetParams = RulesAPI.RuleGetParams;
}
