// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Currents } from './currents';
import * as CurrentsAPI from './currents';

export class Aggregates extends APIResource {
  currents: CurrentsAPI.Currents = new CurrentsAPI.Currents(this._client);
}

export namespace Aggregates {
  export import Currents = CurrentsAPI.Currents;
  export import CurrentGetResponse = CurrentsAPI.CurrentGetResponse;
  export import CurrentGetParams = CurrentsAPI.CurrentGetParams;
}
