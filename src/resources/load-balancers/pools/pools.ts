// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HealthAPI from './health';
import { Health } from './health';
import * as ReferencesAPI from './references';
import { References } from './references';

export class Pools extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

Pools.Health = Health;
Pools.References = References;

export declare namespace Pools {
  export { Health as Health };

  export { References as References };
}
