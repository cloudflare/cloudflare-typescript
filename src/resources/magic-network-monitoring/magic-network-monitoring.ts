// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigsAPI from './configs/configs';
import { BaseConfigs, Configs } from './configs/configs';
import * as RulesAPI from './rules/rules';
import { BaseRules, Rules } from './rules/rules';
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

  export { Configs as Configs, BaseConfigs as BaseConfigs };

  export { Rules as Rules, BaseRules as BaseRules };
}
