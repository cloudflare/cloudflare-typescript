// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GroupsAPI from './groups';
import { BaseGroups, Groups } from './groups';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';

export class BasePackages extends APIResource {
  static override readonly _key: readonly ['firewall', 'waf', 'packages'] = Object.freeze([
    'firewall',
    'waf',
    'packages',
  ] as const);
}
export class Packages extends BasePackages {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Packages.Groups = Groups;
Packages.BaseGroups = BaseGroups;
Packages.Rules = Rules;
Packages.BaseRules = BaseRules;

export declare namespace Packages {
  export { Groups as Groups, BaseGroups as BaseGroups };

  export { Rules as Rules, BaseRules as BaseRules };
}
