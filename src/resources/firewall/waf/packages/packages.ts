// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GroupsAPI from './groups';
import * as RulesAPI from './rules';

export class Packages extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace Packages {
  export import Groups = GroupsAPI.Groups;
  export import Group = GroupsAPI.Group;
  export import GroupEditResponse = GroupsAPI.GroupEditResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupsV4PagePaginationArray = GroupsAPI.GroupsV4PagePaginationArray;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupEditParams = GroupsAPI.GroupEditParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
  export import Rules = RulesAPI.Rules;
  export import AllowedModesAnomaly = RulesAPI.AllowedModesAnomaly;
  export import WAFRuleGroup = RulesAPI.WAFRuleGroup;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
