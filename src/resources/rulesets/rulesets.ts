// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as VersionsAPI from './versions';
import { BaseVersions, Versions } from './versions';
import * as PhasesAPI from './phases/phases';
import { BasePhases, Phases } from './phases/phases';

export class BaseRulesets extends APIResource {
  static override readonly _key: readonly ['rulesets'] = Object.freeze(['rulesets'] as const);
}
export class Rulesets extends BaseRulesets {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Rulesets.Phases = Phases;
Rulesets.BasePhases = BasePhases;
Rulesets.Rules = Rules;
Rulesets.BaseRules = BaseRules;
Rulesets.Versions = Versions;
Rulesets.BaseVersions = BaseVersions;

export declare namespace Rulesets {
  export { Phases as Phases, BasePhases as BasePhases };

  export { Rules as Rules, BaseRules as BaseRules };

  export { Versions as Versions, BaseVersions as BaseVersions };
}
