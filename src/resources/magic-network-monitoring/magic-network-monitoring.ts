// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs/configs';
import {
  ConfigCreateParams,
  ConfigDeleteParams,
  ConfigEditParams,
  ConfigGetParams,
  ConfigUpdateParams,
  Configs,
  Configuration,
} from './configs/configs';
import * as RulesAPI from './rules/rules';
import {
  MagicNetworkMonitoringRule,
  MagicNetworkMonitoringRulesSinglePage,
  RuleCreateParams,
  RuleDeleteParams,
  RuleEditParams,
  RuleGetParams,
  RuleListParams,
  RuleUpdateParams,
  Rules,
} from './rules/rules';

export class MagicNetworkMonitoring extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

MagicNetworkMonitoring.Configs = Configs;
MagicNetworkMonitoring.Rules = Rules;
MagicNetworkMonitoring.MagicNetworkMonitoringRulesSinglePage = MagicNetworkMonitoringRulesSinglePage;

export declare namespace MagicNetworkMonitoring {
  export {
    Configs as Configs,
    type Configuration as Configuration,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };

  export {
    Rules as Rules,
    type MagicNetworkMonitoringRule as MagicNetworkMonitoringRule,
    MagicNetworkMonitoringRulesSinglePage as MagicNetworkMonitoringRulesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
