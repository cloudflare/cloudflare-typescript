// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VersionsAPI from './versions';
import { BaseVersions, Versions } from './versions';

export class BasePhases extends APIResource {
  static override readonly _key: readonly ['rulesets', 'phases'] = Object.freeze([
    'rulesets',
    'phases',
  ] as const);
}
export class Phases extends BasePhases {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Phases.Versions = Versions;
Phases.BaseVersions = BaseVersions;

export declare namespace Phases {
  export { Versions as Versions, BaseVersions as BaseVersions };
}
