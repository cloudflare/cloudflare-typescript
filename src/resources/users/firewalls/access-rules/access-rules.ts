// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/users/firewalls/access-rules/rules';

export class AccessRules extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace AccessRules {
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleIPAccessRulesForAUserCreateAnIPAccessRuleResponse = RulesAPI.RuleIPAccessRulesForAUserCreateAnIPAccessRuleResponse;
  export import RuleIPAccessRulesForAUserListIPAccessRulesResponse = RulesAPI.RuleIPAccessRulesForAUserListIPAccessRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleIPAccessRulesForAUserCreateAnIPAccessRuleParams = RulesAPI.RuleIPAccessRulesForAUserCreateAnIPAccessRuleParams;
  export import RuleIPAccessRulesForAUserListIPAccessRulesParams = RulesAPI.RuleIPAccessRulesForAUserListIPAccessRulesParams;
}
