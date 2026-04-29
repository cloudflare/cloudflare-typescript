// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HealthAPI from './health';
import { BaseHealth, Health } from './health';
import * as ReferencesAPI from './references';
import { BaseReferences, References } from './references';

export class BasePools extends APIResource {
  static override readonly _key: readonly ['loadBalancers', 'pools'] = Object.freeze([
    'loadBalancers',
    'pools',
  ] as const);
}
export class Pools extends BasePools {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

Pools.Health = Health;
Pools.BaseHealth = BaseHealth;
Pools.References = References;
Pools.BaseReferences = BaseReferences;

export declare namespace Pools {
  export { Health as Health, BaseHealth as BaseHealth };

  export { References as References, BaseReferences as BaseReferences };
}
