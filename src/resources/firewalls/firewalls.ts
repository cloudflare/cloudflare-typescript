// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccessRulesAPI from 'cloudflare/resources/firewalls/access-rules';
import * as LockdownsAPI from 'cloudflare/resources/firewalls/lockdowns';
import * as RulesAPI from 'cloudflare/resources/firewalls/rules';
import * as UaRulesAPI from 'cloudflare/resources/firewalls/ua-rules';
import * as WAFAPI from 'cloudflare/resources/firewalls/waf/waf';

export class Firewalls extends APIResource {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  uaRules: UaRulesAPI.UaRules = new UaRulesAPI.UaRules(this._client);
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

export namespace Firewalls {
  export import Lockdowns = LockdownsAPI.Lockdowns;
  export import LockdownUpdateResponse = LockdownsAPI.LockdownUpdateResponse;
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import LockdownGetResponse = LockdownsAPI.LockdownGetResponse;
  export import LockdownZoneLockdownCreateAZoneLockdownRuleResponse = LockdownsAPI.LockdownZoneLockdownCreateAZoneLockdownRuleResponse;
  export import LockdownZoneLockdownListZoneLockdownRulesResponse = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesResponse;
  export import LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export import LockdownZoneLockdownCreateAZoneLockdownRuleParams = LockdownsAPI.LockdownZoneLockdownCreateAZoneLockdownRuleParams;
  export import LockdownZoneLockdownListZoneLockdownRulesParams = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesParams;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleFirewallRulesCreateFirewallRulesResponse = RulesAPI.RuleFirewallRulesCreateFirewallRulesResponse;
  export import RuleFirewallRulesListFirewallRulesResponse = RulesAPI.RuleFirewallRulesListFirewallRulesResponse;
  export import RuleFirewallRulesUpdateFirewallRulesResponse = RulesAPI.RuleFirewallRulesUpdateFirewallRulesResponse;
  export import RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse = RulesAPI.RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleFirewallRulesCreateFirewallRulesParams = RulesAPI.RuleFirewallRulesCreateFirewallRulesParams;
  export import RuleFirewallRulesListFirewallRulesParams = RulesAPI.RuleFirewallRulesListFirewallRulesParams;
  export import RuleFirewallRulesUpdateFirewallRulesParams = RulesAPI.RuleFirewallRulesUpdateFirewallRulesParams;
  export import RuleFirewallRulesUpdatePriorityOfFirewallRulesParams = RulesAPI.RuleFirewallRulesUpdatePriorityOfFirewallRulesParams;
  export import AccessRules = AccessRulesAPI.AccessRules;
  export import AccessRuleCreateResponse = AccessRulesAPI.AccessRuleCreateResponse;
  export import AccessRuleUpdateResponse = AccessRulesAPI.AccessRuleUpdateResponse;
  export import AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import AccessRuleGetResponse = AccessRulesAPI.AccessRuleGetResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleUpdateParams = AccessRulesAPI.AccessRuleUpdateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import UaRules = UaRulesAPI.UaRules;
  export import UaRuleUpdateResponse = UaRulesAPI.UaRuleUpdateResponse;
  export import UaRuleDeleteResponse = UaRulesAPI.UaRuleDeleteResponse;
  export import UaRuleGetResponse = UaRulesAPI.UaRuleGetResponse;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse;
  export import UaRuleUpdateParams = UaRulesAPI.UaRuleUpdateParams;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams;
  export import WAF = WAFAPI.WAF;
}
