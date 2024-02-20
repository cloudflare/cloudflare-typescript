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
  export import LockdownCreateResponse = LockdownsAPI.LockdownCreateResponse;
  export import LockdownListResponse = LockdownsAPI.LockdownListResponse;
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import LockdownGetResponse = LockdownsAPI.LockdownGetResponse;
  export import LockdownReplaceResponse = LockdownsAPI.LockdownReplaceResponse;
  export import LockdownListResponsesV4PagePaginationArray = LockdownsAPI.LockdownListResponsesV4PagePaginationArray;
  export import LockdownCreateParams = LockdownsAPI.LockdownCreateParams;
  export import LockdownListParams = LockdownsAPI.LockdownListParams;
  export import LockdownReplaceParams = LockdownsAPI.LockdownReplaceParams;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleReplaceResponse = RulesAPI.RuleReplaceResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleReplaceParams = RulesAPI.RuleReplaceParams;
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
  export import UaRuleCreateResponse = UaRulesAPI.UaRuleCreateResponse;
  export import UaRuleListResponse = UaRulesAPI.UaRuleListResponse;
  export import UaRuleDeleteResponse = UaRulesAPI.UaRuleDeleteResponse;
  export import UaRuleGetResponse = UaRulesAPI.UaRuleGetResponse;
  export import UaRuleReplaceResponse = UaRulesAPI.UaRuleReplaceResponse;
  export import UaRuleListResponsesV4PagePaginationArray = UaRulesAPI.UaRuleListResponsesV4PagePaginationArray;
  export import UaRuleCreateParams = UaRulesAPI.UaRuleCreateParams;
  export import UaRuleListParams = UaRulesAPI.UaRuleListParams;
  export import UaRuleReplaceParams = UaRulesAPI.UaRuleReplaceParams;
  export import WAF = WAFAPI.WAF;
}
