// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccessRulesAPI from './access-rules';
import * as LockdownsAPI from './lockdowns';
import * as RulesAPI from './rules';
import * as UARulesAPI from './ua-rules';
import * as WAFAPI from './waf/waf';

export class Firewall extends APIResource {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  uaRules: UARulesAPI.UARules = new UARulesAPI.UARules(this._client);
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

export namespace Firewall {
  export import Lockdowns = LockdownsAPI.Lockdowns;
  export import Configuration = LockdownsAPI.Configuration;
  export import Lockdown = LockdownsAPI.Lockdown;
  export import LockdownCIDRConfiguration = LockdownsAPI.LockdownCIDRConfiguration;
  export import LockdownIPConfiguration = LockdownsAPI.LockdownIPConfiguration;
  export import LockdownURL = LockdownsAPI.LockdownURL;
  export import Rules = RulesAPI.Rules;
  export import FirewallRule = RulesAPI.FirewallRule;
  export import Product = RulesAPI.Product;
  export import DeletedFilter = RulesAPI.DeletedFilter;
  export import AccessRules = AccessRulesAPI.AccessRules;
  export import AccessRuleCIDRConfiguration = AccessRulesAPI.AccessRuleCIDRConfiguration;
  export import AccessRuleIPConfiguration = AccessRulesAPI.AccessRuleIPConfiguration;
  export import ASNConfiguration = AccessRulesAPI.ASNConfiguration;
  export import CountryConfiguration = AccessRulesAPI.CountryConfiguration;
  export import IPV6Configuration = AccessRulesAPI.IPV6Configuration;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import UARules = UARulesAPI.UARules;
  export import WAF = WAFAPI.WAF;
}
