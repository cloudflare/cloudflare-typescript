// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as GroupsAPI from './groups';
import { Groups } from './groups';
import * as RulesAPI from './rules';
import { Rules } from './rules';

export class Packages extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Packages.Groups = Groups;
Packages.Rules = Rules;

export declare namespace Packages {
  export { Groups as Groups };

  export { Rules as Rules };
}
