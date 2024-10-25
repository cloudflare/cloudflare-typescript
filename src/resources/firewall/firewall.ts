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
  export type Configuration = LockdownsAPI.Configuration;
  export type Lockdown = LockdownsAPI.Lockdown;
  export type LockdownCIDRConfiguration = LockdownsAPI.LockdownCIDRConfiguration;
  export type LockdownIPConfiguration = LockdownsAPI.LockdownIPConfiguration;
  export type LockdownURL = LockdownsAPI.LockdownURL;
  export import Rules = RulesAPI.Rules;
  export type FirewallRule = RulesAPI.FirewallRule;
  export type Product = RulesAPI.Product;
  export type DeletedFilter = RulesAPI.DeletedFilter;
  export import AccessRules = AccessRulesAPI.AccessRules;
  export type AccessRuleCIDRConfiguration = AccessRulesAPI.AccessRuleCIDRConfiguration;
  export type AccessRuleIPConfiguration = AccessRulesAPI.AccessRuleIPConfiguration;
  export type ASNConfiguration = AccessRulesAPI.ASNConfiguration;
  export type CountryConfiguration = AccessRulesAPI.CountryConfiguration;
  export type IPV6Configuration = AccessRulesAPI.IPV6Configuration;
  export type AccessRuleCreateResponse = AccessRulesAPI.AccessRuleCreateResponse;
  export type AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export type AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export type AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import UARules = UARulesAPI.UARules;
  export import WAF = WAFAPI.WAF;
}
