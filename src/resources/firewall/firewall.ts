// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AccessRulesAPI from 'cloudflare/resources/firewall/access-rules';
import * as LockdownsAPI from 'cloudflare/resources/firewall/lockdowns';
import * as RulesAPI from 'cloudflare/resources/firewall/rules';
import * as UARulesAPI from 'cloudflare/resources/firewall/ua-rules';
import * as WAFAPI from 'cloudflare/resources/firewall/waf/waf';

export class Firewall extends APIResource {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  uaRules: UARulesAPI.UARules = new UARulesAPI.UARules(this._client);
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

export namespace Firewall {
  export import Lockdowns = LockdownsAPI.Lockdowns;
  export import FirewallZoneLockdown = LockdownsAPI.FirewallZoneLockdown;
  export import UnnamedSchemaRefA4044d3c73ad1e6c8fff4dc05f922ab5 = LockdownsAPI.UnnamedSchemaRefA4044d3c73ad1e6c8fff4dc05f922ab5;
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import FirewallZoneLockdownsV4PagePaginationArray = LockdownsAPI.FirewallZoneLockdownsV4PagePaginationArray;
  export import LockdownCreateParams = LockdownsAPI.LockdownCreateParams;
  export import LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export import LockdownListParams = LockdownsAPI.LockdownListParams;
  export import LockdownDeleteParams = LockdownsAPI.LockdownDeleteParams;
  export import Rules = RulesAPI.Rules;
  export import FirewallFilterRule = RulesAPI.FirewallFilterRule;
  export import UnnamedSchemaRef6fe6c1eba94d9c3f475fb22f0118bf57 = RulesAPI.UnnamedSchemaRef6fe6c1eba94d9c3f475fb22f0118bf57;
  export import UnnamedSchemaRefAb48d2d33259c9107401d174735701c7 = RulesAPI.UnnamedSchemaRefAb48d2d33259c9107401d174735701c7;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import FirewallFilterRulesV4PagePaginationArray = RulesAPI.FirewallFilterRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
  export import AccessRules = AccessRulesAPI.AccessRules;
  export import AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import AccessRuleDeleteParams = AccessRulesAPI.AccessRuleDeleteParams;
  export import AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
  export import AccessRuleGetParams = AccessRulesAPI.AccessRuleGetParams;
  export import UARules = UARulesAPI.UARules;
  export import FirewallUserAgentRule = UARulesAPI.FirewallUserAgentRule;
  export import UARuleListResponse = UARulesAPI.UARuleListResponse;
  export import UARuleDeleteResponse = UARulesAPI.UARuleDeleteResponse;
  export import UARuleListResponsesV4PagePaginationArray = UARulesAPI.UARuleListResponsesV4PagePaginationArray;
  export import UARuleCreateParams = UARulesAPI.UARuleCreateParams;
  export import UARuleUpdateParams = UARulesAPI.UARuleUpdateParams;
  export import UARuleListParams = UARulesAPI.UARuleListParams;
  export import UARuleDeleteParams = UARulesAPI.UARuleDeleteParams;
  export import WAF = WAFAPI.WAF;
}
