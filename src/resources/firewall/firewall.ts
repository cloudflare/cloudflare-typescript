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
  export type LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import LockdownsV4PagePaginationArray = LockdownsAPI.LockdownsV4PagePaginationArray;
  export type LockdownCreateParams = LockdownsAPI.LockdownCreateParams;
  export type LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export type LockdownListParams = LockdownsAPI.LockdownListParams;
  export type LockdownDeleteParams = LockdownsAPI.LockdownDeleteParams;
  export type LockdownGetParams = LockdownsAPI.LockdownGetParams;
  export import Rules = RulesAPI.Rules;
  export type FirewallRule = RulesAPI.FirewallRule;
  export type Product = RulesAPI.Product;
  export type DeletedFilter = RulesAPI.DeletedFilter;
  export type RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export type RuleEditResponse = RulesAPI.RuleEditResponse;
  export import FirewallRulesV4PagePaginationArray = RulesAPI.FirewallRulesV4PagePaginationArray;
  export type RuleCreateParams = RulesAPI.RuleCreateParams;
  export type RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export type RuleEditParams = RulesAPI.RuleEditParams;
  export type RuleGetParams = RulesAPI.RuleGetParams;
  export import AccessRules = AccessRulesAPI.AccessRules;
  export type AccessRuleCIDRConfiguration = AccessRulesAPI.AccessRuleCIDRConfiguration;
  export type AccessRuleIPConfiguration = AccessRulesAPI.AccessRuleIPConfiguration;
  export type ASNConfiguration = AccessRulesAPI.ASNConfiguration;
  export type CountryConfiguration = AccessRulesAPI.CountryConfiguration;
  export type IPV6Configuration = AccessRulesAPI.IPV6Configuration;
  export type AccessRuleCreateResponse = AccessRulesAPI.AccessRuleCreateResponse;
  export type AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export type AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export type AccessRuleEditResponse = AccessRulesAPI.AccessRuleEditResponse;
  export type AccessRuleGetResponse = AccessRulesAPI.AccessRuleGetResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export type AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export type AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export type AccessRuleDeleteParams = AccessRulesAPI.AccessRuleDeleteParams;
  export type AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
  export type AccessRuleGetParams = AccessRulesAPI.AccessRuleGetParams;
  export import UARules = UARulesAPI.UARules;
  export type UARuleCreateResponse = UARulesAPI.UARuleCreateResponse;
  export type UARuleUpdateResponse = UARulesAPI.UARuleUpdateResponse;
  export type UARuleListResponse = UARulesAPI.UARuleListResponse;
  export type UARuleDeleteResponse = UARulesAPI.UARuleDeleteResponse;
  export type UARuleGetResponse = UARulesAPI.UARuleGetResponse;
  export import UARuleListResponsesV4PagePaginationArray = UARulesAPI.UARuleListResponsesV4PagePaginationArray;
  export type UARuleCreateParams = UARulesAPI.UARuleCreateParams;
  export type UARuleUpdateParams = UARulesAPI.UARuleUpdateParams;
  export type UARuleListParams = UARulesAPI.UARuleListParams;
  export type UARuleDeleteParams = UARulesAPI.UARuleDeleteParams;
  export type UARuleGetParams = UARulesAPI.UARuleGetParams;
  export import WAF = WAFAPI.WAF;
}
