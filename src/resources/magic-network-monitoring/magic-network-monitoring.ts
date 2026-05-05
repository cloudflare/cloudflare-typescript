// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigsAPI from './configs/configs';
import {
  BaseConfigs,
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
  BaseRules,
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
import * as VPCFlowsAPI from './vpc-flows/vpc-flows';
import { BaseVPCFlows, VPCFlows } from './vpc-flows/vpc-flows';

export class BaseMagicNetworkMonitoring extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring'] = Object.freeze([
    'magicNetworkMonitoring',
  ] as const);
}
export class MagicNetworkMonitoring extends BaseMagicNetworkMonitoring {
  vpcFlows: VPCFlowsAPI.VPCFlows = new VPCFlowsAPI.VPCFlows(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

MagicNetworkMonitoring.VPCFlows = VPCFlows;
MagicNetworkMonitoring.BaseVPCFlows = BaseVPCFlows;
MagicNetworkMonitoring.Configs = Configs;
MagicNetworkMonitoring.BaseConfigs = BaseConfigs;
MagicNetworkMonitoring.Rules = Rules;
MagicNetworkMonitoring.BaseRules = BaseRules;

export declare namespace MagicNetworkMonitoring {
  export { VPCFlows as VPCFlows, BaseVPCFlows as BaseVPCFlows };

  export {
    Configs as Configs,
    BaseConfigs as BaseConfigs,
    type Configuration as Configuration,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type MagicNetworkMonitoringRule as MagicNetworkMonitoringRule,
    type MagicNetworkMonitoringRulesSinglePage as MagicNetworkMonitoringRulesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
