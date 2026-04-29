// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TargetsAPI from './targets';
import { BaseTargets, Targets } from './targets';

export class BaseInfrastructure extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'infrastructure'] = Object.freeze([
    'zeroTrust',
    'access',
    'infrastructure',
  ] as const);
}
export class Infrastructure extends BaseInfrastructure {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

Infrastructure.Targets = Targets;
Infrastructure.BaseTargets = BaseTargets;

export declare namespace Infrastructure {
  export { Targets as Targets, BaseTargets as BaseTargets };
}
