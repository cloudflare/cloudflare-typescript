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
  export import Configuration = ConfigsAPI.Configuration;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
  export import Rules = RulesAPI.Rules;
  export import MagicNetworkMonitoringRule = RulesAPI.MagicNetworkMonitoringRule;
  export import MagicNetworkMonitoringRulesSinglePage = RulesAPI.MagicNetworkMonitoringRulesSinglePage;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
