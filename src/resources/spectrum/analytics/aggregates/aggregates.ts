// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CurrentsAPI from './currents';
import { Currents } from './currents';

export class Aggregates extends APIResource {
  currents: CurrentsAPI.Currents = new CurrentsAPI.Currents(this._client);
}

Aggregates.Currents = Currents;

export declare namespace Aggregates {
  export { Currents as Currents };
}
