// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccessRulesAPI from './access-rules';
import { AccessRules } from './access-rules';
import * as LockdownsAPI from './lockdowns';
import { Lockdowns } from './lockdowns';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as UARulesAPI from './ua-rules';
import { UARules } from './ua-rules';
import * as WAFAPI from './waf/waf';
import { WAF } from './waf/waf';

export class Firewall extends APIResource {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  uaRules: UARulesAPI.UARules = new UARulesAPI.UARules(this._client);
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

Firewall.Lockdowns = Lockdowns;
Firewall.Rules = Rules;
Firewall.AccessRules = AccessRules;
Firewall.UARules = UARules;
Firewall.WAF = WAF;

export declare namespace Firewall {
  export { Lockdowns as Lockdowns };

  export { Rules as Rules };

  export { AccessRules as AccessRules };

  export { UARules as UARules };

  export { WAF as WAF };
}
