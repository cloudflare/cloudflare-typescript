// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs/configs';
import { Configs } from './configs/configs';
import * as RulesAPI from './rules/rules';
import { Rules } from './rules/rules';
import * as VPCFlowsAPI from './vpc-flows/vpc-flows';
import { VPCFlows } from './vpc-flows/vpc-flows';

export class MagicNetworkMonitoring extends APIResource {
  vpcFlows: VPCFlowsAPI.VPCFlows = new VPCFlowsAPI.VPCFlows(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

MagicNetworkMonitoring.VPCFlows = VPCFlows;
MagicNetworkMonitoring.Configs = Configs;
MagicNetworkMonitoring.Rules = Rules;

export declare namespace MagicNetworkMonitoring {
  export { VPCFlows as VPCFlows };

  export { Configs as Configs };

  export { Rules as Rules };
}
