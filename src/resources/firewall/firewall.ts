// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Lockdowns } from './lockdowns';
import { Rules } from './rules';
import { AccessRules } from './access-rules';
import { UARules } from './ua-rules';
import { WAF } from './waf/waf';
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
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import LockdownsV4PagePaginationArray = LockdownsAPI.LockdownsV4PagePaginationArray;
  export import LockdownCreateParams = LockdownsAPI.LockdownCreateParams;
  export import LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export import LockdownListParams = LockdownsAPI.LockdownListParams;
  export import Rules = RulesAPI.Rules;
  export import FirewallRule = RulesAPI.FirewallRule;
  export import Product = RulesAPI.Product;
  export import DeletedFilter = RulesAPI.DeletedFilter;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import FirewallRulesV4PagePaginationArray = RulesAPI.FirewallRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
  export import AccessRules = AccessRulesAPI.AccessRules;
  export import AccessRuleCIDRConfiguration = AccessRulesAPI.AccessRuleCIDRConfiguration;
  export import AccessRuleIPConfiguration = AccessRulesAPI.AccessRuleIPConfiguration;
  export import ASNConfiguration = AccessRulesAPI.ASNConfiguration;
  export import CountryConfiguration = AccessRulesAPI.CountryConfiguration;
  export import IPV6Configuration = AccessRulesAPI.IPV6Configuration;
  export import AccessRuleCreateResponse = AccessRulesAPI.AccessRuleCreateResponse;
  export import AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import AccessRuleEditResponse = AccessRulesAPI.AccessRuleEditResponse;
  export import AccessRuleGetResponse = AccessRulesAPI.AccessRuleGetResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import AccessRuleDeleteParams = AccessRulesAPI.AccessRuleDeleteParams;
  export import AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
  export import AccessRuleGetParams = AccessRulesAPI.AccessRuleGetParams;
  export import UARules = UARulesAPI.UARules;
  export import UARuleCreateResponse = UARulesAPI.UARuleCreateResponse;
  export import UARuleUpdateResponse = UARulesAPI.UARuleUpdateResponse;
  export import UARuleListResponse = UARulesAPI.UARuleListResponse;
  export import UARuleDeleteResponse = UARulesAPI.UARuleDeleteResponse;
  export import UARuleGetResponse = UARulesAPI.UARuleGetResponse;
  export import UARuleListResponsesV4PagePaginationArray = UARulesAPI.UARuleListResponsesV4PagePaginationArray;
  export import UARuleCreateParams = UARulesAPI.UARuleCreateParams;
  export import UARuleUpdateParams = UARulesAPI.UARuleUpdateParams;
  export import UARuleListParams = UARulesAPI.UARuleListParams;
  export import WAF = WAFAPI.WAF;
}
