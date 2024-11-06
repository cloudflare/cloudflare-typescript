// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GroupsAPI from './groups';
import {
  Group,
  GroupEditParams,
  GroupEditResponse,
  GroupGetParams,
  GroupGetResponse,
  GroupListParams,
  Groups,
  GroupsV4PagePaginationArray,
} from './groups';
import * as RulesAPI from './rules';
import {
  AllowedModesAnomaly,
  RuleEditParams,
  RuleEditResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesV4PagePaginationArray,
  Rules,
  WAFRuleGroup,
} from './rules';

export class Packages extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Packages.Groups = Groups;
Packages.GroupsV4PagePaginationArray = GroupsV4PagePaginationArray;
Packages.Rules = Rules;
Packages.RuleListResponsesV4PagePaginationArray = RuleListResponsesV4PagePaginationArray;

export declare namespace Packages {
  export {
    Groups as Groups,
    type Group as Group,
    type GroupEditResponse as GroupEditResponse,
    type GroupGetResponse as GroupGetResponse,
    GroupsV4PagePaginationArray as GroupsV4PagePaginationArray,
    type GroupListParams as GroupListParams,
    type GroupEditParams as GroupEditParams,
    type GroupGetParams as GroupGetParams,
  };

  export {
    Rules as Rules,
    type AllowedModesAnomaly as AllowedModesAnomaly,
    type WAFRuleGroup as WAFRuleGroup,
    type RuleListResponse as RuleListResponse,
    type RuleEditResponse as RuleEditResponse,
    type RuleGetResponse as RuleGetResponse,
    RuleListResponsesV4PagePaginationArray as RuleListResponsesV4PagePaginationArray,
    type RuleListParams as RuleListParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
