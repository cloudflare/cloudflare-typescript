// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccessRulesAPI from 'cloudflare/resources/user/firewall/access-rules';

export class Firewall extends APIResource {
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
}

export namespace Firewall {
  export import AccessRules = AccessRulesAPI.AccessRules;
  export import LegacyJhsRule = AccessRulesAPI.LegacyJhsRule;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import LegacyJhsRulesV4PagePaginationArray = AccessRulesAPI.LegacyJhsRulesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
}
