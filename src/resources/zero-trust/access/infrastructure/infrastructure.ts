// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as TargetsAPI from './targets';
import { Targets } from './targets';

export class Infrastructure extends APIResource {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

Infrastructure.Targets = Targets;

export declare namespace Infrastructure {
  export { Targets as Targets };
}
