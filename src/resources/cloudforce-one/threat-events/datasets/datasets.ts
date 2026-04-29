// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HealthAPI from './health';
import { BaseHealth, Health } from './health';

export class BaseDatasets extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'datasets'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'datasets',
  ] as const);
}
export class Datasets extends BaseDatasets {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
}

Datasets.Health = Health;
Datasets.BaseHealth = BaseHealth;

export declare namespace Datasets {
  export { Health as Health, BaseHealth as BaseHealth };
}
