// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as HealthAPI from './health';
import { Health } from './health';

export class Datasets extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
}

Datasets.Health = Health;

export declare namespace Datasets {
  export { Health as Health };
}
