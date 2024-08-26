// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Dispatch } from './dispatch/dispatch';
import * as DispatchAPI from './dispatch/dispatch';

export class WorkersForPlatforms extends APIResource {
  dispatch: DispatchAPI.Dispatch = new DispatchAPI.Dispatch(this._client);
}

export namespace WorkersForPlatforms {
  export import Dispatch = DispatchAPI.Dispatch;
}
