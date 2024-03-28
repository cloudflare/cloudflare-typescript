// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AccessRulesAPI from 'cloudflare/resources/user/firewall/access-rules';

export class Firewall extends APIResource {
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
}

export namespace Firewall {
  export import AccessRules = AccessRulesAPI.AccessRules;
  export import FirewallRule = AccessRulesAPI.FirewallRule;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import FirewallRulesV4PagePaginationArray = AccessRulesAPI.FirewallRulesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
}
