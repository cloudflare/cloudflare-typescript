// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as VersionsAPI from './versions';
import { Versions } from './versions';
import * as PhasesAPI from './phases/phases';
import { Phases } from './phases/phases';

export class Rulesets extends APIResource {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Rulesets.Phases = Phases;
Rulesets.Rules = Rules;
Rulesets.Versions = Versions;

export declare namespace Rulesets {
  export { Phases as Phases };

  export { Rules as Rules };

  export { Versions as Versions };
}
