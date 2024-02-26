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
  export import GroupListResponse = GroupsAPI.GroupListResponse;
  export import GroupEditResponse = GroupsAPI.GroupEditResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupListResponsesV4PagePaginationArray = GroupsAPI.GroupListResponsesV4PagePaginationArray;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupEditParams = GroupsAPI.GroupEditParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
  export import Rules = RulesAPI.Rules;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
