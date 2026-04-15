// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DispatchAPI from './dispatch/dispatch';
import { BaseDispatch, Dispatch } from './dispatch/dispatch';

export class BaseWorkersForPlatforms extends APIResource {
  static override readonly _key: readonly ['workersForPlatforms'] = Object.freeze([
    'workersForPlatforms',
  ] as const);
}
export class WorkersForPlatforms extends BaseWorkersForPlatforms {
  dispatch: DispatchAPI.Dispatch = new DispatchAPI.Dispatch(this._client);
}

WorkersForPlatforms.Dispatch = Dispatch;
WorkersForPlatforms.BaseDispatch = BaseDispatch;

export declare namespace WorkersForPlatforms {
  export { Dispatch as Dispatch, BaseDispatch as BaseDispatch };
}
