// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DispatchAPI from './dispatch/dispatch';

export class WorkersForPlatforms extends APIResource {
  dispatch: DispatchAPI.Dispatch = new DispatchAPI.Dispatch(this._client);
}

export namespace WorkersForPlatforms {
  export import Dispatch = DispatchAPI.Dispatch;
}
