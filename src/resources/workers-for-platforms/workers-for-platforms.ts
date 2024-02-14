// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DispatchAPI from 'cloudflare/resources/workers-for-platforms/dispatch/dispatch';

export class WorkersForPlatforms extends APIResource {
  dispatch: DispatchAPI.Dispatch = new DispatchAPI.Dispatch(this._client);
}

export namespace WorkersForPlatforms {
  export import Dispatch = DispatchAPI.Dispatch;
}
