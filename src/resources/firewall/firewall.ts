// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessRulesAPI from './access-rules';
import { AccessRules, BaseAccessRules } from './access-rules';
import * as LockdownsAPI from './lockdowns';
import { BaseLockdowns, Lockdowns } from './lockdowns';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as UARulesAPI from './ua-rules';
import { BaseUARules, UARules } from './ua-rules';
import * as WAFAPI from './waf/waf';
import { BaseWAF, WAF } from './waf/waf';

export class BaseFirewall extends APIResource {
  static override readonly _key: readonly ['firewall'] = Object.freeze(['firewall'] as const);
}
export class Firewall extends BaseFirewall {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  uaRules: UARulesAPI.UARules = new UARulesAPI.UARules(this._client);
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

Firewall.Lockdowns = Lockdowns;
Firewall.BaseLockdowns = BaseLockdowns;
Firewall.Rules = Rules;
Firewall.BaseRules = BaseRules;
Firewall.AccessRules = AccessRules;
Firewall.BaseAccessRules = BaseAccessRules;
Firewall.UARules = UARules;
Firewall.BaseUARules = BaseUARules;
Firewall.WAF = WAF;
Firewall.BaseWAF = BaseWAF;

export declare namespace Firewall {
  export { Lockdowns as Lockdowns, BaseLockdowns as BaseLockdowns };

  export { Rules as Rules, BaseRules as BaseRules };

  export { AccessRules as AccessRules, BaseAccessRules as BaseAccessRules };

  export { UARules as UARules, BaseUARules as BaseUARules };

  export { WAF as WAF, BaseWAF as BaseWAF };
}
