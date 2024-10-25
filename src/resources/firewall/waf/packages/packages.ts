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
  export type Group = GroupsAPI.Group;
  export type GroupEditResponse = GroupsAPI.GroupEditResponse;
  export type GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupsV4PagePaginationArray = GroupsAPI.GroupsV4PagePaginationArray;
  export type GroupListParams = GroupsAPI.GroupListParams;
  export type GroupEditParams = GroupsAPI.GroupEditParams;
  export type GroupGetParams = GroupsAPI.GroupGetParams;
  export import Rules = RulesAPI.Rules;
  export type AllowedModesAnomaly = RulesAPI.AllowedModesAnomaly;
  export type WAFRuleGroup = RulesAPI.WAFRuleGroup;
  export type RuleListResponse = RulesAPI.RuleListResponse;
  export type RuleEditResponse = RulesAPI.RuleEditResponse;
  export type RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleEditParams = RulesAPI.RuleEditParams;
  export type RuleGetParams = RulesAPI.RuleGetParams;
}
