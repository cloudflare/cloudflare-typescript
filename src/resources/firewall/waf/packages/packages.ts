// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as GroupsAPI from 'cloudflare/resources/firewall/waf/packages/groups';
import * as RulesAPI from 'cloudflare/resources/firewall/waf/packages/rules';

export class Packages extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace Packages {
  export import Groups = GroupsAPI.Groups;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupListResponse = GroupsAPI.GroupListResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
}
